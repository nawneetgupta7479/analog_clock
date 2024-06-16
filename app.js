let second= 0;
let minute = 0;
 let hour = 0;
 let currentTime = new Date();

setInterval(() => {
    currentTime = new Date();
    second = currentTime.getSeconds();
    minute = currentTime.getMinutes();
    hour = currentTime.getHours();
    document.querySelector('#movinghourhand').style.transform = `rotate(${hour * 30 + minute * 0.5}deg)`;
    document.querySelector('#movingminutehand').style.transform = `rotate(${minute * 6 + second * 0.1}deg)`;
    document.querySelector('#movingsecondhand').style.transform = `rotate(${second * 6}deg)`;
}
, 1000);

let daydate = document.querySelector('.day-date');
daydate.innerHTML = currentTime.toDateString();