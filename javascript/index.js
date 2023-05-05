const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
}

function printMinutes() {
  let minutes = chronometer.getMinutes();

  minutes = minutes.toString().split('');
  console.log(minutes);
  minUniElement.innerText = minutes[1].toString();
  minDecElement.innerText = minutes[0].toString();
}

function printSeconds() {
  let seconds = chronometer.getSeconds();

  seconds =seconds.toString().split('');

  secUniElement.innerText = seconds[1].toString();
  secDecElement.innerText = seconds[0].toString();
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}
/*hi*/

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {

  if(btnLeftElement.className == "btn start") {

    btnLeftElement.className = "btn stop";
    btnLeftElement.innerText = "STOP"
    btnRightElement.className = "btn split";
    btnRightElement.innerText = "SPLIT";

    chronometer.start(
      function(){
        chronometer.currentTime++;
        printTime();
      }
    );
  } else {

    btnLeftElement.className = "btn start";
    btnLeftElement.innerText = "START";
    btnRightElement.className = "btn reset";
    btnRightElement.innerText = "RESET";

    chronometer.stop();
   
  }
  
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {

  if(btnRightElement.className == "btn reset") {
  
    chronometer.reset();

    while (splitsElement.firstChild){
      splitsElement.removeChild(splitsElement.firstChild);
    }

  
  } else {
    
    let li = document.createElement("li");
    li.innerText =     chronometer.split();
    
    splitsElement.appendChild(li);

  }
});
