var thermostat = new Thermostat;

Thermostat.prototype.up = function() {
  thermostat.upButton();
  thermostat.setTemperatureReadout(thermostat.temperature);
};

Thermostat.prototype.down = function() {
  thermostat.downButton();
  thermostat.setTemperatureReadout(thermostat.temperature);
};

Thermostat.prototype.reset = function() {
  thermostat.resetTemperature();
  thermostat.setTemperatureReadout(thermostat.temperature);
};

Thermostat.prototype.changeColor = function() {
  var elem = document.getElementById('thermostat_counter');
  elem.style.color = thermostat.colour();
};

Thermostat.prototype.htmlPowerSave = function() {
  thermostat.setPowerSaveReadout();
  thermostat.setTemperatureReadout(thermostat.temperature);

};

Thermostat.prototype.setTemperatureReadout = function(temperature) {
  document.getElementById('thermostat_counter').innerHTML = temperature;
  var elem = document.getElementById('thermostat_counter');
  elem.style.color = thermostat.colour();
};

Thermostat.prototype.setPowerSaveReadout = function() {
  var indicator = document.getElementById('power_save');
  if (thermostat.powerSave === true) {
    thermostat.powerSaveSet(false);
    indicator.innerHTML = 'Power save is off';
  } else {
    thermostat.powerSaveSet(true);
    indicator.innerHTML = 'Power save is on';
  };
};

thermostat.powerSaveSet(false); //this is about to be reset
thermostat.setPowerSaveReadout();
thermostat.setTemperatureReadout(thermostat.temperature);
