import http from 'http';
import assert from 'assert';

import server from '../src/server/index.js';

describe('Example Node Server', () => {
  it('should return 200', done => {
    http.get('http://127.0.0.1:3000/pokemons', res => {
      assert.equal(200, res.statusCode);
      server.close();
      done();
    });
  });
});
