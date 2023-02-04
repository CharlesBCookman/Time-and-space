export class Planet{
  constructor(name, earthDaysPerYear) {
    this.name = name;
    this.oneYearIs = (earthDaysPerYear / 365.2564).toFixed(2)
  };
};

export const makePlanets = () => {
  let planetsArray = [];
  let mercuryArray = ["Mercury", 87.969];
  planetsArray.push(mercuryArray);
  return mercuryArray;
}