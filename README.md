## :pushpin: Table of Contents

* [Color Luminance](#color-luminance)
  - [TypeScript](src/typescript/color-luminance/index.ts)
* [License](#memo-license)

### :art: <a id="color-luminance"></a> Color Luminance [[TypeScript]](src/typescript/color-luminance/index.ts)

* Code from [Stack Overflow](https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors)
* Calling the function:
  - TypeScript:
  ```
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
* Bonus: there's also a [video from Rocketseat](https://www.youtube.com/watch?v=evBGq29wr08)

## :memo: License

This project is under [MIT license](/LICENSE).

---

Made with :sparkling_heart: by [Miguel Oliveira](https://github.com/miguelsoliv) :wave:
