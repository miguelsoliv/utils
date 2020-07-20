###### * See the docs from the methods if any question pops up

## :pushpin: Table of Contents

* [Color Luminance](#color-luminance)
  - [TypeScript](src/typescript/src/color-luminance/index.ts)
* [Mocking File](#mocking-file)
  - [TypeScript](src/typescript/src/mocking-file/index.ts)
* [License](#memo-license)

### :art: <a id="color-luminance"></a> Color Luminance [[TypeScript]](src/typescript/src/color-luminance/index.ts)

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

## :memo: License

This project is under [MIT license](/LICENSE).

---

Made with :sparkling_heart: by [Miguel Oliveira](https://github.com/miguelsoliv) :wave:
