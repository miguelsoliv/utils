import { colorLuminance, mockFile, RabbitMQExample } from './src';
import { lowerIfElseCount } from './src/clean-codes';

const newColor = colorLuminance({
  colorInHex: '#200CCC',
  luminosityPercent: 40,
});

const newMockFile = mockFile({});

console.log(newColor);
console.log(newMockFile);

const rabbitmq = new RabbitMQExample('my-exchange');

rabbitmq
  .toQueue({
    queueName: 'queue_test',
    messageToSend: 'This is a test.',
  })
  .then(() => console.log('RabbitMQ message sent'));

rabbitmq
  .toExchange({
    queues: [
      {
        queueName: 'Queue 1',
        routingKey: '123',
        messages: ['this is', 'a test'],
      },
      {
        queueName: 'Queue 2',
        routingKey: '321',
        messages: ['this is', 'another test'],
      },
    ],
  })
  .then(() => console.log('RabbitMQ messages sent'));

console.log('/-------------------------------------/');

const gameResult = lowerIfElseCount({
  firstPlay: 'rock',
  secondPlay: 'scissor',
});

console.log(gameResult);
