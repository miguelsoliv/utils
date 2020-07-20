interface IRequest {
  encoding?: 'base64' | 'ascii' | 'utf-8' | 'binary' | 'hex';
}

/**
 * @function createMockFile
 * @description Create a mock file (good for testing purposes)
 * @summary A Mock Object is an object that replaces a real object. It is a simulated object that mimics the behavior of real objects in controlled ways, most often as part of a software testing initiative
 * @returns `Buffer`
 * @error Cannot find name 'Buffer'
 * @tutorial Install: `yarn add -D @types/node`
 */
function createMockFile({ encoding = 'base64' }: IRequest): Buffer {
  return Buffer.from('Convert text to mock file here', encoding);
}

export default createMockFile;
