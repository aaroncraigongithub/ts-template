import helloWorld from './';

describe('helloWorld', () => {
  let value: string;
  let testName: string;

  beforeEach(() => {
    testName = 'Aaron';
    value = helloWorld(testName);
  });

  it('returns the expected string', () => {
    expect(value).toEqual(`Hello, ${testName}`);
  });
});
