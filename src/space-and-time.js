export class Planet{
  constructor(name, earthDaysPerYear) {
    this.name = name;
    this.oneYearIs = (earthDaysPerYear / 365.2564).toFixed(2)
  };
};