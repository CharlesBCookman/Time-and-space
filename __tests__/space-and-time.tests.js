import {Planet, makePlanets} from './../src/space-and-time.js';

describe('mercury variable made from Planet Creator', () => {

  test('should make a mercury variable object with stats on a planet', () => {
    let mercury = new Planet("mercury", 87.969)
    expect(mercury.name).toEqual("mercury");
    expect(mercury.oneYearIs).toEqual("0.24");
  });
});

describe('venus', () => {

  test('should make a venus variable object with stats on a planet', () => {
    let venus = new Planet("venus", 224.7)
    expect(venus.name).toEqual("venus");
    expect(venus.oneYearIs).toEqual("0.62");
  });
});

describe('makePlanets', () => {

  test('should make an array with mercurys name and days per year.', () => {
  let array = makePlanets();
  expect(array).toEqual(["Mercury", 87.969])
  });
});