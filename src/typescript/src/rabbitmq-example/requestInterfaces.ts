import { Connection, Channel } from 'amqplib';

interface IBasicRequest {
  conn?: Connection;
  maxConcurrentMessages?: number | null;
}

export interface IQueueRequest extends IBasicRequest {
  queueName?: string;
  messageToSend: string;
}

export interface IExchangeRequest extends IBasicRequest {
  exchangeName?: string;
  exchangeType?: 'direct' | 'fanout' | 'topic' | 'headers';
  queues: IExchangeQueueObject[];
}

export interface ICreateExchangeRequest {
  channel: Channel;
  exchangeName: string;
  queues: IExchangeQueueObject[];
  exchangeType: 'direct' | 'fanout' | 'topic' | 'headers';
}

interface IExchangeQueueObject {
  queueName: string;
  routingKey: string;
  messages: string[];
}
