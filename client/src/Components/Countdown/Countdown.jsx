// import React from 'react'
// import "./Countdown.css"

// // w3school reference

// // Set the date we're counting down to
// let countDownDate = new Date("Oct 10, 2022 12:00:00").getTime();

// // Update the count down every 1 second
// let x = setInterval(function() {
  
//   // Get today's date and time
//   let now = new Date().getTime();

//   // Find the distance between now and the count down date
//   let distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   let days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   let seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("days").innerHTML = days;
//   document.getElementById("daysstring").innerHTML = " Days  ";
  
//   document.getElementById("hours").innerHTML = hours;
//   document.getElementById("hoursstring").innerHTML = " Hours  ";
  
//   document.getElementById("mins").innerHTML = minutes;
//   document.getElementById("minsstring").innerHTML = " Mins  ";
  
//   document.getElementById("seconds").innerHTML = seconds;
//   document.getElementById("secondsstring").innerHTML = " Seconds  ";

//   // If the count down is finished, write some text
//   if (distance <= 0) {
//     clearInterval(x);
//     document.getElementById("finished").innerHTML = "TODAY!";
//   }
// }, 1000);

// export default function Countdown() {
//   return (
//     <div className="countdown-wrapper">

//       <p id="days"></p>
//       <p id="daysstring"></p>

//       <p id="hours"></p>
//       <p id="hoursstring"></p>

//       <p id="mins"></p>
//       <p id="minsstring"></p>

//       <p id="seconds"></p>
//       <p id="secondsstring"></p>

//     </div>
//   )
// }

