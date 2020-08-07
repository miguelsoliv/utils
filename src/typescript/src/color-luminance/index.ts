interface IRequest {
  colorInHex: string;
  luminosityPercent: number;
}

/**
 * @function shadeColor
 *
 * @description Change the brightness of a color
 */
function shadeColor({
  colorInHex,
  luminosityPercent,
}: IRequest): string | undefined {
  let R: number;
  let G: number;
  let B: number;

  try {
    R = parseInt(colorInHex.substring(1, 3), 16);
    G = parseInt(colorInHex.substring(3, 5), 16);
    B = parseInt(colorInHex.substring(5, 7), 16);
  } catch {
    return undefined;
  }

  R = Math.floor((R * (100 + luminosityPercent)) / 100);
  G = Math.floor((G * (100 + luminosityPercent)) / 100);
  B = Math.floor((B * (100 + luminosityPercent)) / 100);

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  const RR =
    R.toString(16).length === 1 ? `0${R.toString(16)}` : R.toString(16);
  const GG =
    G.toString(16).length === 1 ? `0${G.toString(16)}` : G.toString(16);
  const BB =
    B.toString(16).length === 1 ? `0${B.toString(16)}` : B.toString(16);

  return `#${RR}${GG}${BB}`;
}

export default shadeColor;
