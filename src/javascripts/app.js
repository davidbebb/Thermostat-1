var thermostat = new Thermostat;

document.getElementById("thermostat_counter").innerHTML = thermostat.temperature ;
var elem = document.getElementById("thermostat_counter");
elem.style.color = thermostat.colour();

Thermostat.prototype.up = function() {
  var temp = document.getElementById("thermostat_counter");
  thermostat.upButton()
  temp.innerHTML = thermostat.temperature;  
}

Thermostat.prototype.down = function() {
  var temp = document.getElementById("thermostat_counter");
  thermostat.downButton()
  temp.innerHTML = thermostat.temperature;  
}

Thermostat.prototype.reset = function() {
  var temp = document.getElementById("thermostat_counter");
  thermostat.resetTemperature()
  temp.innerHTML = thermostat.temperature;  
}

Thermostat.prototype.changeColor = function() {
  var elem = document.getElementById("thermostat_counter");
  elem.style.color = thermostat.colour();
}
