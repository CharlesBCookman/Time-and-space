export class PlanetObject{
  constructor(name, earthDaysPerYear, hoursPerDay) {
    this.planet = name;
    this.earthDaysPerYear = earthDaysPerYear;
    this.hoursPerDay = hoursPerDay;
  }
  convertYearsToYears(years, otherPlanetsDaysPerYear){
    let convertedYears = (years * 365.2564 / otherPlanetsDaysPerYear);
    // return convertedYears.toFixed(2);
  }
  // convertYearsToDays(years){

  // }
}

export const makePlanets = () => {
  let planetObjects = {};
  const mercury = new PlanetObject("Mercury", 87.969, 4223.04);
  const venus = new PlanetObject("Venus", 224.7, 2808);
  const earth = new PlanetObject("Earth", 365.2564, 24);
  const mars = new PlanetObject("Mars", 687.0107, 24.660);
  const jupiter = new PlanetObject("Jupiter", 4332.59, 9.925);
  const saturn = new PlanetObject("Saturn", 10759, 10.55);
  const uranus = new PlanetObject("Uranus", 306888.5, 17.24);
  const neptune = new PlanetObject("Neptune", 60182, 16.11);
  planetObjects = {mercury, venus, earth, mars, jupiter, saturn, uranus, neptune};
  return planetObjects;
}