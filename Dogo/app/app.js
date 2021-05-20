const mobileBtn = document.getElementById('mobile-menu');
const nav = document.querySelector('nav');
const mobileBtnExit = document.getElementById('mobile-exit-menu');

mobileBtn.addEventListener('click', () => {
    nav.classList.add('show-menu');
})

mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('show-menu');
})

const countdown = () => {   
  const countDate = new Date('July 31, 2021 23:59:59').getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);
  
  document.querySelector('.day').innerText = textDay;
  document.querySelector('.hour').innerText = textHour;
  document.querySelector('.minute').innerText = textMinute;
  document.querySelector('.second').innerText = textSecond; 
}

setInterval(countdown, 1000);