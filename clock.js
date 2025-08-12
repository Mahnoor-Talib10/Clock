function myclock(){

    const myDate = new Date();
    const d= myDate.getDate().toString().padStart(2,'0');
    const day= myDate.getDay().toString().padStart(2,'0');
    const year= myDate.getFullYear();
    let hours = myDate.getHours();
    let meridiem;
    if(hours<=12)
    {
        meridiem="AM";
    }
    else
    {
        meridiem="PM";
    }
    hours=hours % 12||12;
    hours=hours.toString().padStart(2,'0');
    let mins = myDate.getMinutes().toString().padStart(2,'0');
    let sec = myDate.getSeconds().toString().padStart(2,'0');
    let time = `Time\t${hours}:${mins}:${sec}  ${meridiem} `;
    let datw = `Date\t${d}-${day}-${year}`;
     document.getElementById("time").textContent=time;
     document.getElementById("date").textContent=datw;
}
myclock();
setInterval(myclock,1000);