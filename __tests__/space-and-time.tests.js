import {Planet} from './../src/space-and-time.js';

describe('Planet', () => {

  test('should make a object with stats on a planet', () => {
    let mercury = new Planet("mercury", 87.969)
    expect(mercury.name).toEqual("mercury");
    expect(mercury.oneYearIs).toEqual(0.24084177580461286);
  });
});

