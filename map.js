//Вернуть масштаб//
function changeStyleOnClick() {
  //Меняем масштаб
  var element = document.getElementById("jsmap");
  element.style.transform = "translate(-50%, -42%) scale(.9)";
    //Показываем кнопки
    var visiblea = document.getElementById('razlom');
    visiblea.style.visibility = "visible";
  var visibleb = document.getElementById('village');
    visibleb.style.visibility = "visible";
  var visiblec = document.getElementById('stolica');
    visiblec.style.visibility = "visible";
 //Скрываем ссылки
  var hiddena = document.getElementById('hidden-1');
  var hiddenb = document.getElementById('hidden-2');
  var hiddenc = document.getElementById('hidden-3');
  hiddena.style.visibility = "hidden";
  hiddenb.style.visibility = "hidden";
  hiddenc.style.visibility = "hidden";
//Кнопка Назад
  var button = document.getElementById("button-back");
  button.style.visibility = "hidden";

}
//Масштаб Разлом//
function handleButtonClick() {
  var element = document.getElementById("jsmap");
    element.style.transform = "translate(-50%, -42%) scale(.9)";
    // Скрываем кнопки
  var visiblea = document.getElementById('razlom');
  var visibleb = document.getElementById('village');
  var visiblec = document.getElementById('stolica');
   visiblea.style.visibility = "hidden";
   visibleb.style.visibility = "hidden";
   visiblec.style.visibility = "hidden";
    //Показываем Ссылки 2
  var hiddena = document.getElementById('hidden-1'); 
    hiddena.style.visibility = "visible";
    //Скрыть кнопку Назад
  var button = document.getElementById("button-back");
  button.style.visibility = "visible";
}
      //Масштаб Столица//
function handleButtonClick1() {
//Масштаб
  var element = document.getElementById("jsmap");
    element.style.transform = "translate(-60%, -56%) scale(0.9)";
     // Скрываем кнопки
     var visiblea = document.getElementById('razlom');
     var visibleb = document.getElementById('village');
     var visiblec = document.getElementById('stolica');
      visiblea.style.visibility = "hidden";
      visibleb.style.visibility = "hidden";
      visiblec.style.visibility = "hidden";
       //Показываем Ссылки 1
     var hiddena = document.getElementById('hidden-2'); 
       hiddena.style.visibility = "visible";
           //Скрыть кнопку Назад
  var button = document.getElementById("button-back");
  button.style.visibility = "visible";
}
      //Масштаб Деревня//
function handleButtonClick2() {
//Масштаб
  var element = document.getElementById("jsmap");
    element.style.transform = "translate(-37%, -52%) scale(0.9)";
 // Скрываем кнопки
 var visiblea = document.getElementById('razlom');
 var visibleb = document.getElementById('village');
 var visiblec = document.getElementById('stolica');
  visiblea.style.visibility = "hidden";
  visibleb.style.visibility = "hidden";
  visiblec.style.visibility = "hidden";
  //Показываем Ссылки 3
 var hiddena = document.getElementById('hidden-3'); 
   hiddena.style.visibility = "visible";
  //Скрыть кнопку Назад
  var button = document.getElementById("button-back");
    button.style.visibility = "visible";
}



