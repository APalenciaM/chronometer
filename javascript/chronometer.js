class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {

    this.intervalId = setInterval(callback,1000);
    

  }

  getMinutes() {
    console.log(Math.floor(this.currentTime/10))
    return this.computeTwoDigitNumber(Math.floor(this.currentTime/60));

  }

  getSeconds() {
    let seconds = this.currentTime;
    while(seconds>=60){
      seconds-=60;
    }
    
    return this.computeTwoDigitNumber(seconds);

  }

  computeTwoDigitNumber(value) {

      return value<10 ?"0"+value : value;

  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
    printTime();
  }

  split() {
    return this.getMinutes()+' : '+this.getSeconds();
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
