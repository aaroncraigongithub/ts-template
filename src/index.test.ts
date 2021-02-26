import { name } from 'faker';
import helloWorld from './';

describe('helloWorld', () => {
  let value: string;
  let testName: string;

  beforeEach(() => {
    testName = name.findName();
    value = helloWorld(testName);
  });

  it('returns the expected string', () => {
    expect(value).toEqual(`Hello, ${testName}`);
  });
});
