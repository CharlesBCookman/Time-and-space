import {PlanetObject} from './../src/space-and-time.js';

describe('mercury variable made from Planet Creator', () => {

  test('should make a mercury variable object with stats on a planet', () => {
    let mercury = new Planet("mercury", 87.969, 4223.04)
    expect(mercury.name).toEqual("mercury");
    expect(mercury.daysPerYear).toEqual("0.24");
  });
});

describe('venus', () => {

  test('should make a venus variable object with stats on a planet', () => {
    let venus = new Planet("venus", 224.7)
    expect(venus.name).toEqual("venus");
    expect(venus.oneYearIs).toEqual("0.62");
  });
});

