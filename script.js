

  function updateProgress() {
    var progressBarValue = localStorage.getItem('progressBar');

    progressBarValue += 10;
    // сохраняем новое значение в хранилище
    localStorage.setItem('progressBar', progressBarValue);
    // обновляем значение шкалы progressbar на странице
    document.getElementById('myBar').style.width = progressBarValue + '%';
  }
  localStorage.clear()




function slide1() {
  var slider = document.getElementById('slides');
  
  slider.style.transform = "translate(22.2%, 0px)"
  var button1 = document.getElementById('js-but-1');
  var button2 = document.getElementById('js-but-2');
  var button3 = document.getElementById('js-but-3');
  button1.style.zIndex = "6";
  button1.style.transform = "translate(46%, -48%) scale(.5)";
  button2.style.zIndex = "1";
  button2.style.transform = "translate(46%, -39%) scale(.5)";
  button3.style.zIndex = "1";
  button3.style.transform = "translate(46%, -39%) scale(.5)";
  
}
function slide2() {
  var slider = document.getElementById('slides');
    slider.style.transform = "translate(-11.10%, 0px)"
  var button1 = document.getElementById('js-but-1');
  var button2 = document.getElementById('js-but-2');
  var button3 = document.getElementById('js-but-3');
  button1.style.zIndex = "1";
  button1.style.transform = "translate(46%, -39%) scale(.5)";
  button2.style.zIndex = "6";
  button2.style.transform = "translate(46%, -48%) scale(.5)";
  button3.style.zIndex = "1";
  button3.style.transform = "translate(46%, -39%) scale(.5)";
}
function slide3() {
  var slider = document.getElementById('slides');
  var button1 = document.getElementById('js-but-1');
  var button2 = document.getElementById('js-but-2');
  var button3 = document.getElementById('js-but-3');

  slider.style.transform = "translate(-44.45%, 0px)"
  button3.style.zIndex = "6";
  button3.style.transform = "translate(46%, -48%) scale(.5)"
  button1.style.zIndex = "1";
  button1.style.transform = "translate(46%, -39%) scale(.5)";
  button2.style.zIndex = "1";
  button2.style.transform = "translate(46%, -39%) scale(.5)";
}


function slide11() {
  var slider = document.getElementById('slides-1');
  
  slider.style.transform = "translate(22.2%, 0px)"
  var button1 = document.getElementById('js-but-1');
  var button2 = document.getElementById('js-but-2');
  var button3 = document.getElementById('js-but-3');
  button1.style.zIndex = "6";
  button1.style.transform = "translate(46%, -48%) scale(.5)";
  button2.style.zIndex = "1";
  button2.style.transform = "translate(46%, -39%) scale(.5)";
  button3.style.zIndex = "1";
  button3.style.transform = "translate(46%, -39%) scale(.5)";
  
}
function slide22() {
  var slider = document.getElementById('slides-1');
    slider.style.transform = "translate(-11.10%, 0px)"
  var button1 = document.getElementById('js-but-1');
  var button2 = document.getElementById('js-but-2');
  var button3 = document.getElementById('js-but-3');
  button1.style.zIndex = "1";
  button1.style.transform = "translate(46%, -39%) scale(.5)";
  button2.style.zIndex = "6";
  button2.style.transform = "translate(46%, -48%) scale(.5)";
  button3.style.zIndex = "1";
  button3.style.transform = "translate(46%, -39%) scale(.5)";
}
function slide33() {
  var slider = document.getElementById('slides-1');
  var button1 = document.getElementById('js-but-1');
  var button2 = document.getElementById('js-but-2');
  var button3 = document.getElementById('js-but-3');

  slider.style.transform = "translate(-44.45%, 0px)"
  button3.style.zIndex = "6";
  button3.style.transform = "translate(46%, -48%) scale(.5)"
  button1.style.zIndex = "1";
  button1.style.transform = "translate(46%, -39%) scale(.5)";
  button2.style.zIndex = "1";
  button2.style.transform = "translate(46%, -39%) scale(.5)";
}

function showBackground4() {
  setTimeout(function(){
    document.getElementById("bg-img-5").style.display = "block";
  }, 3000);
  
  setTimeout(function(){
    document.getElementById("a-secq-sec5").style.display = "none";
  }, 11000);
 
}

function showBackground3() {
  setTimeout(function(){
    document.getElementById("bg-img-4").style.display = "block";
  }, 3000);
  
  setTimeout(function(){
    document.getElementById("a-secq-sec4").style.display = "none";
  }, 11000);
 
}


function showBackground2() {
  setTimeout(function(){
    document.getElementById("bg-img-3").style.display = "block";
  }, 3000);
  
  setTimeout(function(){
    document.getElementById("a-secq-sec3").style.display = "none";
  }, 11000);
 
}

function showBackground1() {
  setTimeout(function(){
    document.getElementById("bg-img-2").style.display = "block";
  }, 3000);
  
  setTimeout(function(){
    document.getElementById("a-secq-sec2").style.display = "none";
  }, 11000);
 
}

function showBackground() {
  setTimeout(function(){
    document.getElementById("bg-img-1").style.display = "block";
  }, 3000); 
  
  setTimeout(function(){
    document.getElementById("a-secq-sec1").style.display = "none";
  }, 11000);
 
}

function bookclick1() {
  document.getElementById("wh-book-2").style.display = "flex";
  document.getElementById("wh-book-1").style.display = "none";
}

function bookclick2() {
  document.getElementById("wh-book-2").style.display = "none";
  document.getElementById("wh-book-1").style.display = "flex";
}

function conclick() {
  document.getElementById("con-slide").style.maxHeight = "1738px";
  document.getElementById("con-box").style.maxHeight = "1681px";
  document.getElementById("con-box-ins").style.transform = "translateY(0%)";
  document.getElementById("con-inp-btn").style.transform = "translateY(-1%)";
}
function IclickNext() {
  document.getElementById("i-first").style.display = "none";
  document.getElementById("i-second").style.display = "flex";
}
function IclickPrev() {
  document.getElementById("i-first").style.display = "flex";
  document.getElementById("i-second").style.display = "none";
}
/*
function ChechStyle() {
  var visit = document.getElementById("f-visit-close");
  localStorage.getItem('display')
  document.visit.style.display = "display"
}

function ICloseBar() {
  document.getElementById("f-visit-close").style.display = "none";
  localStorage.setItem('display', 'none')
}
*/
/*
function checkStyle() {
  const visit = document.getElementById("f-visit-close");
  const displayValue = localStorage.getItem('display', 'none');
  if (displayValue) {
    visit.style.display = displayValue;
  }
}
*/
function handleButtonClickv() {
  const elementv = document.getElementById("f-visit-close");
  
    elementv.style.display = "none";
    localStorage.setItem("elementDisplayStyle", "none");
  
}

const elementv = document.querySelector('#f-visit-close');

if (sessionStorage.getItem('iHidden') === 'true') {
  elementv.style.display = 'none';
}

window.addEventListener('beforeunload', () => {
  sessionStorage.setItem('iHidden', 'true');
});


let width = 0; // начальная ширина элемента

function setElementWidth() {
  const element = document.getElementById('myBar'); // получаем элемент по ID
  element.style.width = `${width}px`; // устанавливаем ширину из переменной
  if (!localStorage.getItem('visited')) { // проверяем, была ли страница посещена ранее
    width *= 1.1; // увеличиваем переменную на 10%
    localStorage.setItem('visited', true); // сохраняем информацию о посещении страницы
  }
}




function AdSec1() {
  document.getElementById("ad-id1").style.transform = "translatey(0%)"
  document.getElementById("ad-id2").style.transform = "translatey(-100%)"
  document.getElementById("ad-id3").style.transform = "translatey(-100%)"
}
function AdSec2() {
  document.getElementById("ad-id1").style.transform = "translatey(-100%)"
  document.getElementById("ad-id2").style.transform = "translatey(0%)"
  document.getElementById("ad-id3").style.transform = "translatey(-100%)"
}
function AdSec3() {
  document.getElementById("ad-id1").style.transform = "translatey(-100%)"
  document.getElementById("ad-id2").style.transform = "translatey(-100%)"
  document.getElementById("ad-id3").style.transform = "translatey(0%)"
}



const audio = document.querySelector('audio');
const playBtn = document.querySelector('.aud-start');
const restartBtn = document.querySelector('.aud-end');
const progressBar = document.querySelector('.fb-slider');

function playAudio() {
  audio.play();
}



playBtn.addEventListener('click', playAudio);
restartBtn.addEventListener('click', restartAudio);

audio.addEventListener('timeupdate', function() {
  const currentTime = audio.currentTime;
  const duration = audio.duration;
  progressBar.style.width = `${(currentTime / duration) * 100}%`;
});