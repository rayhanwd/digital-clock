const hours = document.getElementById('hour');
const minutes = document.getElementById('minute');
const seconds = document.getElementById('second');
const timeFormat = document.getElementById('time-format'); 

function showtime(){
    let date = new Date();
    let  hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    if(hr === 0){
        hr = 12;
    }
    if(hr > 12){
        hr = hr -12;
        timeFormat.innerText = "PM";
    }
    else if(hr <12){
        timeFormat.innerText = "AM";
    }
    if(hr<10){
        hr = "0" + hr;
    }
    if(min<10){
        min = "0" + min;
    }
    if(sec<10){
        sec = "0" + sec;
    }

    hours.innerText = hr;
    minutes.innerText = min;
    seconds.innerText = sec;
    
    
    
}
showtime();
setInterval(showtime,1000);