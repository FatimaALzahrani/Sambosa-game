let cupsCounter = 0;
let interval;

function startDrinking() {
    interval = setInterval(function() {
        cupsCounter++;
        document.getElementById("cups").textContent = cupsCounter;
        updateWaterLevel(cupsCounter);
    }, 900); 
    
    setTimeout(function() {
        playAdhanSound();
    }, 5000); 
}

function stopDrinking() {
    clearInterval(interval);
}

function playAdhanSound() {
    // استخدم Audio() لتشغيل الصوت
    let adhanAudio = new Audio('a.mp3');
    adhanAudio.play();
    if(cupsCounter<6){
        alert("خسرت ")
        cupsCounter=0;
    }else{
        alert("فزت")
        cupsCounter=0;
    }
}

function updateWaterLevel(cups) {
    let waterHeight = cups * 10;
    document.getElementById("water").style.height = waterHeight + "%";

    // // عرض الشخص يشرب عندما يكون الكوب مليء
    // if (cups >= 10) {
    //     document.getElementById("person").style.opacity = 1;
    // } 
}

