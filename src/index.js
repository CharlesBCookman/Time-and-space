import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import './space-and-time.js'
import { PlanetObject, makePlanets } from './space-and-time.js';

window.addEventListener("load", function() {
  planets = makePlanets()
})