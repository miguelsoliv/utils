import amqp from 'amqplib';

import { IQueueRequest, IExchangeRequest } from './requestInterfaces';
import sendToQueue from './sendToQueue';
import sendToExchange from './sendToExchange';

/**
 * @summary You can create an account (for testing) at: https://www.cloudamqp.com/plans.html
 */
class RabbitMQExample {
  constructor(private exchangeName: string) {}

  private createConnection = async (): Promise<amqp.Connection> => {
    return amqp.connect({
      hostname: 'jackal.rmq.cloudamqp.com',
      username: 'ojjciohw',
      password: 'Af9hUwzRhUzy2yJe6nQc54w4fhRkcNgC',
      vhost: 'ojjciohw',
    });
  };

  /**
   * @function toQueue
   *
   * @description Just send a message to some existing or not queue
   * @summary Calling method `sendToQueue` from `sendToQueue.ts`
   * @param {amqp.Connection} conn
   * @param {string} queueName
   * @default ''
   * @param {string} messageToSend
   * @param {number} maxConcurrentMessages
   * @default null
   */
  public async toQueue({
    messageToSend,
    queueName,
  }: IQueueRequest): Promise<void> {
    const conn = await this.createConnection();

    await sendToQueue({
      conn,
      messageToSend,
      queueName,
    });
  }

  /**
   * @function toExchange
   *
   * @description Create an exchange and bind existing or not queues to it
   * @summary Calling method `sendToExchange` from `sendToExchange.ts`
   * @param {amqp.Connection} conn
   * @param {string} exchangeName
   * @param {string} exchangeType
   * @default direct
   * @param {number} maxConcurrentMessages
   * @default null
   * @param {IExchangeToWhichQueue[]} queues
   */
  public async toExchange({ queues }: IExchangeRequest): Promise<void> {
    const conn = await this.createConnection();

    await sendToExchange({
      conn,
      exchangeName: this.exchangeName,
      queues,
    });
  }
}

export default RabbitMQExample;
