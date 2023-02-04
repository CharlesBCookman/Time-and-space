export class Planet{
  constructor(name, earthDaysPerYear) {
    this.name = name;
    this.oneYearIs = (earthDaysPerYear / 365.2564).toFixed(2)
  };
};

export const makePlanets = () => {
  let mercuryArray = ["Mercury", 87.969];
  let planetsArray = [];
  planetsArray.push(mercuryArray);
  return planetsArray;
}