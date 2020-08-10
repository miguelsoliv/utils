import colorLuminance from './color-luminance';
import mockFile from './mocking-file';
import RabbitMQExample from './rabbitmq-example';

const colorsExample = (): void => {
  const newColor = colorLuminance({
    colorInHex: '#200CCC',
    luminosityPercent: 40,
  });

  console.log(newColor);
};

const mockedFileExample = (): void => {
  const newMockFile = mockFile({});

  console.log(newMockFile);
};

const rabbitMQExample = (): void => {
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
};

export { colorsExample, mockedFileExample, rabbitMQExample };
