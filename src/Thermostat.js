function Thermostat(){
  this.temperature = 20
}

Thermostat.prototype.upButton = function() {
  return this.temperature += 1;
}