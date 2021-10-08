const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggleEl = document.querySelector(".toggle");

const days = ["Sunday","Monday","Tuesday","Wendsday","Thursday","Friday","Saturday"];

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Now","Dec"];





toggleEl.addEventListener('click',(e)=>{
  const html = document.querySelector('html');

  if(e.target.innerText === 'Dark mode'){
    e.target.innerText='Light mode'
    html.classList.add('dark')
  }else{
    e.target.innerText='Dark mode'
    html.classList.remove('dark')
  }

})

setTime()

setInterval(()=> setTime(),1000)


function setTime(){

  const time = new Date();

  const hour = time.getHours();
  const hoursForClock=hour % 12
  const minute = time.getMinutes();
  const second = time.getSeconds();
  const date = time.getDate();
  const day = time.getDay();
  const month= time.getMonth();


  hourEl.style.transform=`translate(0,-100%) rotate(${scale(hoursForClock,0,11,0,360)}deg)`;
  minuteEl.style.transform=`translate(0,-100%) rotate(${scale(minute,0,59,0,360)}deg)`;
  secondEl.style.transform=`translate(0,-100%) rotate(${scale(second,0,59,0,360)}deg)`;


  

}







function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}






