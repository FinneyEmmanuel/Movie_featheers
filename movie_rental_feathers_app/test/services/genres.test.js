const app = require('../../src/app');

describe('\'genres\' service', () => {
  it('registered the service', () => {
    const service = app.service('genres');
    expect(service).toBeTruthy();
  });
});
