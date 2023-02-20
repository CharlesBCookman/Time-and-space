import {PlanetObject, makePlanets} from './../src/space-and-time.js';

describe('PlanetObject Creator', () => {

  test('should make a Mercury variable object with stats on a planet', () => {
    let mercury = new PlanetObject("Mercury", 87.969, 4223.04)
    expect(mercury.planet).toEqual("Mercury");
    expect(mercury.earthDaysPerYear).toEqual(87.969);
  });
});

describe('makePlanets', () => {

  test('should make a venus variable object with stats on a planet in an array that is the return for the function', () => {
    let planets = makePlanets();
    expect(planets.venus.planet).toEqual("Venus");
    expect(planets.venus.earthDaysPerYear).toEqual(224.7);
    expect(planets.venus.hoursPerDay).toEqual(2808);
  });
});

