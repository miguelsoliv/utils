interface IFileNames {
  fileName1: string;
  fileName2: string;
  fileName3: string;
}

const files: IFileNames = {
  fileName1: 'name_1',
  fileName2: 'name_2',
  fileName3: 'name_3',
};

/**
 * @function getObjectValue
 *
 * @description Get object value by passing index number with some string
 * @param {number} index
 */
const getObjectValue = (index: number): string | undefined => {
  if (index > Object.keys(files).length) return undefined;

  return files[`fileName${index}`];
};

export default getObjectValue;
