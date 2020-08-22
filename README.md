###### * See the docs from the methods if any question pops up

## 📌 Table of Contents

* [Starting Projects](#start)
* [Clean Code List](#clean-code)
* [Color Luminance](#color-luminance): [👉 [TypeScript]](src/typescript/src/color-luminance/index.ts)
* [Mocking File](#mocking-file): [👉 [TypeScript]](src/typescript/src/mocking-file/index.ts)
* [Using RabbitMQ](#rabbitmq): [👉 [TypeScript]](src/typescript/src/rabbitmq-example/index.ts)
* [License](#memo-license)

### 🔨 <a id="start"></a>Starting Projects

[TypeScript]: Go to `...\utils\src\typescript` and just `yarn dev`

### 📖 <a id="clean-code"></a>Clean Code List

* Reducing number of `if`s: using Object to replace them. Code from [this repo](https://github.com/ErickWendel/coding-dojo-js-purple99)
* Using `map` and `filter` in Array in one loop: prevent going through Array 2 times (mapping and filtering after it)
* Using `while` inside async function: prevent `Unexpected 'await' inside a loop. eslint(no-await-in-loop)`

### 🎨 <a id="color-luminance"></a> Color Luminance [[TypeScript]](src/typescript/src/color-luminance/index.ts)

Change the color brightness, making it lighter or darker

* Code from [Stack Overflow](https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors)
* Calling the function:
  - TypeScript:
    ```javascript
    // lighten
    shadeColor({
      colorInHex: '#63C6FF',
      luminosityPercent: 40,
    });

    // darken
    shadeColor({
      colorInHex: '#63C6FF',
      luminosityPercent: -40,
    });
    ```
* Bonus: there's also a [video from Rocketseat](https://www.youtube.com/watch?v=evBGq29wr08) [Portuguese only]

### 📄 <a id="mocking-file"></a> Mocking File [[TypeScript]](src/typescript/src/mocking-file/index.ts)

Create a Mock Object of a File

* Calling the function:
  - TypeScript:
    ```javascript
    mockFile({
      encoding: 'hex',
    });
    ```

### 📨 <a id="rabbitmq"></a> Using RabbitMQ [[TypeScript]](src/typescript/src/rabbitmq-example/index.ts)

Common uses for RabbitMQ. Remember that you can create a test account at: https://www.cloudamqp.com/plans.html

* Calling the function:
  - TypeScript:
    ```javascript
    // connecting to server
    const rabbitmq = new RabbitMQExample();
    const rabbitmqWithExchange = new RabbitMQExample('my-exchange');

    // sending messages to queue
    rabbitmq
      .toQueue({
        queueName: 'queue_test',
        messageToSend: 'This is a test.',
      })
      .then(() => console.log('RabbitMQ message sent to queue'));

    // sending messages to exchange
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
    ```

#### TODO:
  1. Create ConfirmChannel example?

## 📝 License

This project is under [MIT license](/LICENSE).

---

Made with 💖 by [Miguel Oliveira](https://github.com/miguelsoliv) 👋
