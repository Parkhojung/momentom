const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

// alert("index.js");

function getTime(){
    // alert("getTime");
    var date = new Date();
    var minutes = date.getMinutes();
    var hours = date.getHours();
    var seconds = date.getSeconds();
    clockTitle.innerText = 
    `${
        hours < 10 ? `0${hours}`: hours 
    }:${
        minutes < 10 ? `0${minutes}`: minutes
    }:${
        seconds <10 ? `0${seconds}` : seconds 
    }`;
}

function init(){
    getTime();
    setInterval(getTime,1000);

}

init();