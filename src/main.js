import { Town } from '../js/pandemic';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

let smallville = new Town ("Smallville");
let littletown = new Town ("Little Town");
let cowcity = new Town ("Cow City");
let mtlake = new Town ("Mt Lake");

$(document).ready(function() {
  smallville.spreadDisease();
  littletown.spreadDisease();
  cowcity.spreadDisease();
  mtlake.spreadDisease();

  $(document).ready(function() {
    var i =1000;
    setInterval(function() {
      $("#smallvillepop").text(smallville.population.toString());
      $("#littletownpop").text(littletown.population.toString());
      $("#cowcitypop").text(cowcity.population.toString());
      $("#mtlakepop").text(mtlake.population.toString());
      $("#smallvilleinfect").text(smallville.diseased.toString());
      $("#littletowninfect").text(littletown.diseased.toString());
      $("#cowcityinfect").text(cowcity.diseased.toString());
      $("#mtlakeinfect").text(mtlake.diseased.toString());
      i--;
    }, 1000)
  });
});
