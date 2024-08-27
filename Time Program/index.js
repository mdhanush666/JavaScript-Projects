
function timer(){
  const now = new Date();

  const getHour = now.getHours();
  const meridiem = getHour >= 12?"PM":"AM";
  const getMinutes = now.getMinutes();
  const getSeconds = now.getSeconds();

  let cTime = `${getHour}:${getMinutes}:${getSeconds} ${meridiem}`;

  document.getElementById("watch").textContent = cTime;

}

timer();
setInterval(timer,1000);

