const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


let hrPos = 90;
let minPos = 276;
let secPos = 132;

var date = new Date();

var hr = date.getHours()%12;
let min = date.getMinutes();
let sec = date.getSeconds();

secPos = sec*6;
minPos = (min+(sec/60))*6;
hrPos = (hr+((min+(sec/60))/60))*30;

HOURHAND.style.transform = "rotate("+hrPos+"deg)";
MINUTEHAND.style.transform = "rotate("+minPos+"deg)";
SECONDHAND.style.transform = "rotate("+secPos+"deg)";