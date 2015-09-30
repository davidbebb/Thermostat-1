function Thermostat(){
  this.temperature = 20;
  this.minTemp = 10;
  this.maxTemp = 25;
  this.powerSave = true;
};

Thermostat.prototype.upButton = function() {
  if (this.powerSave === true && this.temperature >= 25) {
    throw "Temperature cannot be set above 25 degrees";
};
  if (this.powerSave === false && this.temperature >= 32) {
    throw "Temperature cannot be set above 32 degrees";
};
  return this.temperature += 1;
};

Thermostat.prototype.downButton = function() {
  if (this.temperature <= 10) {
    throw "Temperature cannot be set below 10 degrees";
  };
  return this.temperature -= 1;
};

Thermostat.prototype.powerSaveSet = function(value) {
  if (value === true) {
    this.powerSave = true;
    return this.maxTemp = 25;
  };
  if (value === false) {
    this.powerSave = false;
    return this.maxTemp = 32;
  };
};

Thermostat.prototype.resetTemperature = function() {
  this.temperature = 20;
};

Thermostat.prototype.colour = function() {
  if (this.temperature <= 18) {
    return "green";
  };
  if (this.temperature >= 25) {
    return "red";
  }
  else {
    return "orange";
  }
};


