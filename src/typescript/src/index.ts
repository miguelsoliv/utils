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
  const rabbitmq = new RabbitMQExample();
  const rabbitmqWithExchange = new RabbitMQExample('my-exchange');

  rabbitmq
    .toQueue({
      queueName: 'queue_test',
      messageToSend: 'This is a test.',
    })
    .then(() => console.log('RabbitMQ message sent to queue'));

  rabbitmqWithExchange
    .toExchange({
      queues: [
        {
          queueName: 'Exchange Queue 1',
          routingKey: '123',
          messages: ['this is', 'a test'],
        },
        {
          queueName: 'Exchange Queue 2',
          routingKey: '321',
          messages: ['this is', 'another test'],
        },
      ],
    })
    .then(() => console.log('RabbitMQ messages sent to exchange'));
};

export { colorsExample, mockedFileExample, rabbitMQExample };
