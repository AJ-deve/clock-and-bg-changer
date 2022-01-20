const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".mins");
const hourHand = document.querySelector(".hour");
const wd = document.querySelector("#wd");
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const btn = document.querySelector('.btn-1')
const rgbText = document.querySelector('.rgb-text');




let weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

let months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function setDate() {
  console.log("hi");
  const now = new Date();
  const seconds = now.getSeconds();
  const secondDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  const mins = now.getMinutes();
  const minDegrees = (mins / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minDegrees}deg)`;
  const hours = now.getHours();
  const hourDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  wd.innerHTML = weekdays[now.getDay()];
  day.innerHTML = now.getDate();
  month.innerHTML = months[now.getMonth()];
}
setInterval(setDate, 1000);

function randomizer() {
  r = Math.floor(Math.random() * 255) - 6;
  g = Math.floor(Math.random() * 255) - 15;
  b = Math.floor(Math.random() * 255) - 30;
  return `rgb(${r}, ${g}, ${b})`;
}

btn.addEventListener('click', function(){
  document.body.style.backgroundColor = randomizer();
  rgbText.innerHTML = 'Backgorund color is : ' + randomizer();
});