import "./styles.css";
const clock = document.querySelector(".js-clock");
const DAY = 1000 * 60 * 60 * 24;
const HOUR = 1000 * 60 * 60;
const MINUTE = 1000 * 60;
const SECOND = 1000;

function getTime() {
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const now = new Date();

  const dDay = xmasDay - now;
  const day = Math.floor(dDay / DAY);
  const hours = Math.floor((dDay % DAY) / HOUR);
  const minutes = Math.floor((dDay % HOUR) / MINUTE);
  const seconds = Math.floor((dDay % MINUTE) / SECOND);
  clock.innerHTML = `${day}d ${hours < 10 ? `0${hours}` : hours}h ${
    minutes < 10 ? `0${minutes}` : minutes
  }m ${seconds < 10 ? `0${seconds}` : seconds}s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
