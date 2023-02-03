import {PlanetaryYears} from './../src/time-and-space.js';

describe('PlanetaryYears', () => {

  test('this test should see if the constructor works', () => {
    let years = new PlanetaryYears("34")
    expect(years.earthYears).toEqual("34");
  });
});