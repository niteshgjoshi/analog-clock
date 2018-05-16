const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();

let hr = date.getHours()%12;
let min = date.getMinutes();
let sec = date.getSeconds();

let secPos = sec*6;
let minPos = (min+(sec/60))*6;
let hrPos = (hr+((min+(sec/60))/60))*30;

function runTheClock()
{
	hrPos = (hrPos+(3/360))%360;
    minPos = (minPos+(6/60))%360;
    secPos = (secPos+6)%360;

	HOURHAND.style.transform = "rotate("+hrPos+"deg)";
	MINUTEHAND.style.transform = "rotate("+minPos+"deg)";
	SECONDHAND.style.transform = "rotate("+secPos+"deg)";
}

var interval = setInterval(runTheClock,1000);