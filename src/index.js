import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import './space-and-time.js'
import { PlanetObject, makePlanets } from './space-and-time.js';

window.addEventListener("load", function() {
  let planets = makePlanets();
  let convertButton = document.getElementById('convert');
  let output = document.getElementById('output');
  let placeholder = new PlanetObject("converter", 1, 1)
  convertButton.onclick = () => {
    let inputYears = document.getElementById('years-input').value;
    let planetSelected = document.getElementById('planets-dropdown').value;
    console.log(planetSelected);
    console.log(placeholder);
    if (planetSelected === "mercury") {
      output.innerText = planets.mercury.convertYearsToYears(parseInt(inputYears) , planets.mercury.earthDaysPerYear) + " " + planetSelected + " years";
    } if (planetSelected === "venus") {
      output.innerText = planets.venus.convertYearsToYears(parseInt(inputYears), planets.venus.earthDaysPerYear) + " " + planetSelected + " years";
    } if (planetSelected === "mars") {
      output.innerText = planets.mars.convertYearsToYears(parseInt(inputYears), planets.mars.earthDaysPerYear) + " " + planetSelected + " years";
    } if (planetSelected === "jupiter") {
      output.innerText = planets.jupiter.convertYearsToYears(parseInt(inputYears), planets.jupiters.earthDaysPerYear) + " " + planetSelected + " years";
    } if (planetSelected === "saturn") {
      output.innerText = planets.saturn.convertYearsToYears(parseInt(inputYears), planets.saturn.earthDaysPerYear) + " " + planetSelected + " years";
    } if (planetSelected === "uranus") {
      output.innerText = planets.uranus.convertYearsToYears(parseInt(inputYears), planets.uranus.earthDaysPerYear) + " " + planetSelected + " years";
    } if (planetSelected === "neptune") {
      output.innerText = planets.neptune.convertYearsToYears(parseInt(inputYears), planets.neptune.earthDaysPerYear) + " " + planetSelected + " years";
    }
  }
})