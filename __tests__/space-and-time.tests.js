import {PlanetObject} from './../src/space-and-time.js';

describe('PlanetObject Creator', () => {

  test('should make a Mercury variable object with stats on a planet', () => {
    let mercury = new PlanetObject("Mercury", 87.969, 4223.04)
    expect(mercury.planet).toEqual("Mercury");
    expect(mercury.earthDaysPerYear).toEqual(87.969);
  });
});

// describe('', () => {

//   test('should make a venus variable object with stats on a planet', () => {
//     let venus = new Planet("Venus", 224.7, 2808)
//     expect(venus.planet).toEqual("Venus");
//     expect(venus.earthDaysPerYear).toEqual(224.7);
//     expect(venus.hoursPerDay).toEqual(2808);
//   });
// });

