import { IExchangeRequest, ICreateExchangeRequest } from './requestInterfaces';

const createExchangeWithBindedQueues = async ({
  channel,
  exchangeName,
  queues,
  exchangeType,
}: ICreateExchangeRequest): Promise<void> => {
  /**
   * @function assertExchange
   *
   * @description Assert an exchange into existence
   * @param {string} type
   * @enum {direct} Delivers messages to queues based on the message routing key
   * @summary https://www.rabbitmq.com/img/tutorials/intro/exchange-direct.png
   * @enum {fanout} Routes messages to all of the queues that are bound to it and the routing key is ignored
   * @summary https://www.rabbitmq.com/img/tutorials/intro/exchange-fanout.png
   * @enum {topic} Route messages to one or many queues based on matching between a message routing key and the pattern that was used to bind a queue to an exchange
   * @enum {headers} Designed for routing on multiple attributes that are more easily expressed as message headers than a routing key. Headers exchanges ignore the routing key attribute. Instead, the attributes used for routing are taken from the headers attribute
   * @param {boolean} durable If true, the exchange will survive broker restarts
   * @default true
   */
  await channel.assertExchange(exchangeName, exchangeType, {
    durable: false,
  });

  const queuePromises: Promise<any>[] = [];

  queues.forEach(async queue => {
    queuePromises.push(
      channel.assertQueue(queue.queueName, { durable: false }),

      /**
       * @function bindQueue
       *
       * @description Assert a routing path from an exchange to a queue: the exchange will relay messages to the `queue` named, according to the type of the exchange and the pattern given
       * @param {string} queue
       * @param {string} source Exchange name
       * @param {string} pattern
       * @param {any} args Object containing extra arguments that may be required for the particular exchange type (for which, see your server’s documentation). It may be omitted if it’s the last argument, which is equivalent to an empty object
       */
      channel.bindQueue(queue.queueName, exchangeName, queue.routingKey)
    );
  });

  await Promise.all(queuePromises);
};

/**
 * @function sendToExchange
 *
 * @description Create an exchange and bind existing or not queues to it
 * @param {amqp.Connection} conn
 * @param {string} exchangeName
 * @param {string} exchangeType
 * @default direct
 * @param {number} maxConcurrentMessages
 * @default null
 * @param {IExchangeToWhichQueue[]} queues
 */
async function sendToExchange({
  conn,
  exchangeName,
  exchangeType = 'direct',
  maxConcurrentMessages = null,
  queues,
}: IExchangeRequest): Promise<void> {
  try {
    if (!conn) throw new Error('Invalid connection');
    if (!exchangeName) throw new Error('Invalid exchange name');

    const channel = await conn.createChannel();

    /**
     * @function prefetch
     *
     * @description Set the prefetch count for this channel
     * @param {number} count Maximum number of messages sent over the channel that can be awaiting acknowledgement. A falsey value indicates no such limit
     */
    await channel.prefetch(Number(maxConcurrentMessages));

    await createExchangeWithBindedQueues({
      channel,
      exchangeName,
      queues,
      exchangeType,
    });

    queues.forEach(queue => {
      queue.messages.forEach(message => {
        channel.publish(exchangeName, queue.routingKey, Buffer.from(message));
      });
    });

    await channel.close();
  } catch (err) {
    console.log(`error: ${err}`);
  }
}

export default sendToExchange;
