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


    setInterval(function() {
      $("#smallvillepop").text(smallville.population.toString());
      $("#littletownpop").text(littletown.population.toString());
      $("#cowcitypop").text(cowcity.population.toString());
      $("#mtlakepop").text(mtlake.population.toString());
      $("#smallvilleinfect").text(smallville.diseased.toString());
      $("#littletowninfect").text(littletown.diseased.toString());
      $("#cowcityinfect").text(cowcity.diseased.toString());
      $("#mtlakeinfect").text(mtlake.diseased.toString());

    }, 1000)

    $("button#smalltreat").click(function() {
      smallville.treatment();
    });
    $("button#smallvacc").click(function() {
      smallville.vaccinate();
    });
    $("button#smallcdc").click(function() {
      smallville.callTheCDC();
    });
    $("button#smallcurfew").click(function() {
      smallville.curfew2();
    });
    $("button#littletreat").click(function() {
      littletown.treatment();
    });
    $("button#littlevacc").click(function() {
      littletown.vaccinate();
    });
    $("button#littlecdc").click(function() {
      littletown.callTheCDC();
    });
    $("button#littlecurfew").click(function() {
      littletown.curfew2();
    });
    $("button#cowtreat").click(function() {
      cowcity.treatment();
    });
    $("button#cowvacc").click(function() {
      cowcity.vaccinate();
    });
    $("button#cowcdc").click(function() {
      cowcity.callTheCDC();
    });
    $("button#cowcurfew").click(function() {
      cowcity.curfew2();
    });
    $("button#mttreat").click(function() {
      mtlake.treatment();
    });
    $("button#mtvacc").click(function() {
      mtlake.vaccinate();
    });
    $("button#mtcdc").click(function() {
      mtlake.callTheCDC();
    });
    $("button#mtcurfew").click(function() {
      mtlake.curfew2();
    });

  });
