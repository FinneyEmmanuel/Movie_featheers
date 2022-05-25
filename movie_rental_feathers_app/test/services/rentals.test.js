const app = require('../../src/app');

describe('\'rentals\' service', () => {
  it('registered the service', () => {
    const service = app.service('rentals');
    expect(service).toBeTruthy();
  });
});
