function anaClock() {
  let date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let median = "AM";

  if (hrs == 0) 
  {
    hrs = 12;
  }
   else if (hrs > 12) 
  {
    hrs = hrs - 12;
    median = "PM";
  }

  hrs = hrs < 10 ? `0${hrs}` : hrs;
  mins = mins < 10 ? `0${mins}` : mins;
  secs = secs < 10 ? `0${secs}` : secs;

  let time = `${hrs}:${mins}:${secs} ${median}`;
  setInterval(anaClock, 1000);
  document.getElementById("anaClock").innerText = time;
}

anaClock();