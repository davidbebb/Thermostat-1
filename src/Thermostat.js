function Thermostat(){
  this.temperature = 20
  this.minTemp = 10
}

Thermostat.prototype.upButton = function() {
  return this.temperature += 1;
}

Thermostat.prototype.downButton = function() {
  return this.temperature -= 1;
}