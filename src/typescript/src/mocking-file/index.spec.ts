import supertest from 'supertest';
import createMockFile from '.';

const server = 'http://localhost:3333';
const buffer = createMockFile({});

describe('ENDPOINT /upload', () => {
  describe('Check that the files were uploaded with success.', () => {
    test('[200] POST /upload -', async done => {
      await supertest(server)
        .post('/upload')
        .attach('file', buffer, 'testImage.pdf')
        .then(response => {
          expect(response.status).toBe(200);

          done();
        });
    });
  });
});
