import {PlanetaryYears} from './../src/space-and-time.js';

describe('PlanetaryYears', () => {

  test('this test should see if the constructor works', () => {
    let years = new PlanetaryYears("34")
    expect(years.earthYears).toEqual("34");
  });
});