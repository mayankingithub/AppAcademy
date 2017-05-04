var clock = {
  totalSeconds: 0,

  getSeconds: function() {
    newSeconds = this.totalSeconds % 60;
    if (newSeconds < 10) {
      return "0" + newSeconds;
    }
    return "" + newSeconds;
  },
  getMinutes: function() {
    var getMinutes = Math.floor(this.totalSeconds / 60) % 60;
    if(getMinutes < 10) {
      return "0" + getMinutes;
    }
    return "" + getMinutes;
  },
  getHours: function() {
    var getHours = Math.floor(this.totalSeconds/3600);

    if(getHours < 10) {
      return "0" + getHours;
    }
    return "" + getHours;
  },
  printTime: function() {
    console.log(this.getHours() + ":" + this.getMinutes() + ":" + this.getSeconds());
  },
  timeoutTick: function(startSecond) {
    if(startSecond !== undefined) {
      this.totalSeconds = startSecond;
    }
    this.totalSeconds += 1;
    this.printTime();
    setTimeout(this.timeoutTick.bind(this), 1000);
  },
  intervalTick: function(startSecond) {
    if(startSecond != undefined) {
      this.totalSeconds = startSecond;
    }
    setInterval(function() {
      this.totalSeconds += 1;
      this.printTime();
    }.bind(this), 1000);
  }
};

clock.totalSeconds = 0
clock.intervalTick();
//console.log(clock.getSeconds());
//console.log(clock.getMinutes());
//console.log(clock.getHours());
//clock.printTime();
//clock.timeoutTick(0);
//clock.intervalTick(0);
