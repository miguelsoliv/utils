import { IQueueRequest } from './requestInterfaces';

/**
 * @function sendToQueue
 *
 * @description Just send a message to some existing or not queue
 * @param {amqp.Connection} conn
 * @param {string} queueName
 * @default ''
 * @param {string} messageToSend
 * @param {number} maxConcurrentMessages
 * @default null
 */
async function sendToQueue({
  conn,
  queueName = '',
  messageToSend,
  maxConcurrentMessages = null,
}: IQueueRequest): Promise<void> {
  try {
    if (!conn) throw new Error('Invalid connection');

    const channel = await conn.createChannel();

    /**
     * @function prefetch
     *
     * @description Set the prefetch count for this channel
     * @param {number} count Maximum number of messages sent over the channel that can be awaiting acknowledgement. A falsey value indicates no such limit
     */
    await channel.prefetch(Number(maxConcurrentMessages));

    /**
     * @function assertQueue
     *
     * @description Assert a queue into existence
     * @param {boolean} durable If true, the queue will survive broker restarts
     * @default true
     */
    await channel.assertQueue(queueName, { durable: false });

    channel.sendToQueue(queueName, Buffer.from(messageToSend));
    await channel.close();
  } catch (err) {
    console.log(`error: ${err}`);
  }
}

export default sendToQueue;
