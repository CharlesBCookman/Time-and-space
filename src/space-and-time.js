export class PlanetObject{
  constructor(name, earthDaysPerYear, hoursPerDay) {
    this.planet = name;
    this.earthDaysPerYear = earthDaysPerYear;
    this.hoursPerDay = hoursPerDay;
  }
  // convertYearsToYears(years){

  // }
  // convertYearsToDays(years){

  // }
}

export const makePlanets = () => {
  const planetsArray =  [["Mercury", 87.969, 4223.04], ["Venus", 224.7, 2808], ["Earth", 365.2564, 24], ["Mars", 687.0107, 24.660], ["Jupiter", 4332.59, 9.925], ["Saturn", 10759, 10.55], ["Uranus", 306888.5, 17.24], ["Neptune", 60182, 16.11]];
  console.log(planetsArray);
  let planetObjects = {};
  const mercury = new PlanetObject("Mercury", 87.969, 4223.04);
  const venus = new PlanetObject("Venus", 224.7, 2808);
  planetObjects = {mercury, venus};
  console.log(planetObjects);
  return planetObjects;
}