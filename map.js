//Вернуть масштаб//
function changeStyleOnClick() {
  if (window.innerWidth > 769) {
    // выполнение функции
    
    //Меняем масштаб
    var element = document.getElementById("jsmap");
    element.style.transform = "translate(-50%, -50%) scale(.5)";
      //Показываем кнопки
      var visiblea = document.getElementById('razlom');
      visiblea.style.display = "block";
    var visibleb = document.getElementById('village');
      visibleb.style.display = "block";
    var visiblec = document.getElementById('stolica');
      visiblec.style.display = "block";
   //Скрываем ссылки
    var hiddena = document.getElementById('hidden-1');
    var hiddenb = document.getElementById('hidden-2');
    var hiddenc = document.getElementById('hidden-3');
    hiddena.style.display = "none";
    hiddenb.style.display = "none";
    hiddenc.style.display = "none";
  //Кнопка Назад
    var button = document.getElementById("button-back");
    button.style.display = "none";
                    }
                    else if (window.innerWidth <= 768 && window.innerWidth > 425) {
                    // выполнение функции
                                                          
                    //Меняем масштаб
                    var element = document.getElementById("jsmap");
                    element.style.transform = "translate(-50%, -49%) scale(0.3)";
                    //Показываем кнопки
                    var visiblea = document.getElementById('razlom');
                    visiblea.style.display = "block";
                    var visibleb = document.getElementById('village');
                    visibleb.style.display = "block";
                    var visiblec = document.getElementById('stolica');
                    visiblec.style.display = "block";
                    //Скрываем ссылки
                    var hiddena = document.getElementById('hidden-1');
                    var hiddenb = document.getElementById('hidden-2');
                    var hiddenc = document.getElementById('hidden-3');
                    hiddena.style.display = "none";
                    hiddenb.style.display = "none";
                    hiddenc.style.display = "none";
                    //Кнопка Назад
                    var button = document.getElementById("button-back");
                    button.style.display = "none";
                  }
                        else if (window.innerWidth <= 425) {
                          // выполнение функции
                                                                
                          //Меняем масштаб
                          var element = document.getElementById("jsmap");
                          element.style.transform = "translate(-50%, -49%) scale(0.2)";
                          //Показываем кнопки
                          var visiblea = document.getElementById('razlom');
                          visiblea.style.display = "block";
                          var visibleb = document.getElementById('village');
                          visibleb.style.display = "block";
                          var visiblec = document.getElementById('stolica');
                          visiblec.style.display = "block";
                          //Скрываем ссылки
                          var hiddena = document.getElementById('hidden-1');
                          var hiddenb = document.getElementById('hidden-2');
                          var hiddenc = document.getElementById('hidden-3');
                          hiddena.style.display = "none";
                          hiddenb.style.display = "none";
                          hiddenc.style.display = "none";
                          //Кнопка Назад
                          var button = document.getElementById("button-back");
                          button.style.display = "none";
                        }
}
//Масштаб Разлом//
function handleButtonClick() {
  if (window.innerWidth > 769) {
  var element = document.getElementById("jsmap");
    element.style.transform = "translate(-50%, -40%) scale(0.9)";
    // Скрываем кнопки
  var visiblea = document.getElementById('razlom');
  var visibleb = document.getElementById('village');
  var visiblec = document.getElementById('stolica');
   visiblea.style.display = "none";
   visibleb.style.display = "none";
   visiblec.style.display = "none";
    //Показываем Ссылки 2
  var hiddena = document.getElementById('hidden-1'); 
    hiddena.style.display = "block";
    //Скрыть кнопку Назад
  var button = document.getElementById("button-back");
  button.style.display = "block";
}
                      else if (window.innerWidth <= 768 && window.innerWidth > 425) {
                      var element = document.getElementById("jsmap");
                        element.style.transform = "translate(-50%, -42%) scale(0.6)";
                        // Скрываем кнопки
                      var visiblea = document.getElementById('razlom');
                      var visibleb = document.getElementById('village');
                      var visiblec = document.getElementById('stolica');
                      visiblea.style.display = "none";
                      visibleb.style.display = "none";
                      visiblec.style.display = "none";
                        //Показываем Ссылки 2
                      var hiddena = document.getElementById('hidden-1'); 
                        hiddena.style.display = "block";
                        //Скрыть кнопку Назад
                      var button = document.getElementById("button-back");
                      button.style.display = "block";
                    }
                              else if (window.innerWidth < 426) {
                                var element = document.getElementById("jsmap");
                                  element.style.transform = "translate(-50%, -43%) scale(0.6)";
                                  // Скрываем кнопки
                                var visiblea = document.getElementById('razlom');
                                var visibleb = document.getElementById('village');
                                var visiblec = document.getElementById('stolica');
                                visiblea.style.display = "none";
                                visibleb.style.display = "none";
                                visiblec.style.display = "none";
                                  //Показываем Ссылки 2
                                var hiddena = document.getElementById('hidden-1'); 
                                  hiddena.style.display = "block";
                                  //Скрыть кнопку Назад
                                var button = document.getElementById("button-back");
                                button.style.display = "block";
                              }
                              
}

      //Масштаб Столица//
function handleButtonClick1() {
  if (window.innerWidth > 769) {
//Масштаб
  var element = document.getElementById("jsmap");
    element.style.transform = "translate(-60%, -56%) scale(0.9)";
     // Скрываем кнопки
     var visiblea = document.getElementById('razlom');
     var visibleb = document.getElementById('village');
     var visiblec = document.getElementById('stolica');
     visiblea.style.display = "none";
     visibleb.style.display = "none";
     visiblec.style.display = "none";
       //Показываем Ссылки 2
     var hiddena = document.getElementById('hidden-2'); 
       hiddena.style.display = "block";
       //Скрыть кнопку Назад
     var button = document.getElementById("button-back");
     button.style.display = "block";}

                    else if (window.innerWidth <= 768 && window.innerWidth > 425) {
                    var element = document.getElementById("jsmap");
                      element.style.transform = "translate(-56%, -53%) scale(0.6)";
                      // Скрываем кнопки
                    var visiblea = document.getElementById('razlom');
                    var visibleb = document.getElementById('village');
                    var visiblec = document.getElementById('stolica');
                    visiblea.style.display = "none";
                    visibleb.style.display = "none";
                    visiblec.style.display = "none";
                      //Показываем Ссылки 2
                    var hiddena = document.getElementById('hidden-2'); 
                      hiddena.style.display = "block";
                      //Скрыть кнопку Назад
                    var button = document.getElementById("button-back");
                    button.style.display = "block";
                  }
                        else if (window.innerWidth < 426) {
                          var element = document.getElementById("jsmap");
                            element.style.transform = "translate(-56.5%, -54%) scale(0.6)";
                            // Скрываем кнопки
                            var visiblea = document.getElementById('razlom');
                    var visibleb = document.getElementById('village');
                    var visiblec = document.getElementById('stolica');
                    visiblea.style.display = "none";
                    visibleb.style.display = "none";
                    visiblec.style.display = "none";
                      //Показываем Ссылки 2
                    var hiddena = document.getElementById('hidden-2'); 
                      hiddena.style.display = "block";
                      //Скрыть кнопку Назад
                    var button = document.getElementById("button-back");
                    button.style.display = "block";
                        }

}
      //Масштаб Деревня//
function handleButtonClick2() {
  if (window.innerWidth > 769) {
//Масштаб
  var element = document.getElementById("jsmap");
    element.style.transform = "translate(-38%, -54%) scale(0.9)";
 // Скрываем кнопки
 var visiblea = document.getElementById('razlom');
 var visibleb = document.getElementById('village');
 var visiblec = document.getElementById('stolica');
  visiblea.style.display = "none";
  visibleb.style.display = "none";
  visiblec.style.display = "none";
  //Показываем Ссылки 3
 var hiddena = document.getElementById('hidden-3'); 
   hiddena.style.display = "block";
  //Скрыть кнопку Назад
  var button = document.getElementById("button-back");
    button.style.display = "block";

            }    
            else if (window.innerWidth <= 768 && window.innerWidth > 425) {
              //Масштаб
                var element = document.getElementById("jsmap");
                  element.style.transform = "translate(-43%, -52%) scale(0.6)";
              // Скрываем кнопки
              var visiblea = document.getElementById('razlom');
              var visibleb = document.getElementById('village');
              var visiblec = document.getElementById('stolica');
                visiblea.style.display = "none";
                visibleb.style.display = "none";
                visiblec.style.display = "none";
                //Показываем Ссылки 3
              var hiddena = document.getElementById('hidden-3'); 
                hiddena.style.display = "block";
                //Скрыть кнопку Назад
                var button = document.getElementById("button-back");
                  button.style.display = "block";
              }
                                      else if (window.innerWidth < 426) {
                                      //Масштаб
                                        var element = document.getElementById("jsmap");
                                          element.style.transform = "translate(-43%, -53%) scale(0.6)";
                                      // Скрываем кнопки
                                      var visiblea = document.getElementById('razlom');
                                      var visibleb = document.getElementById('village');
                                      var visiblec = document.getElementById('stolica');
                                        visiblea.style.display = "none";
                                        visibleb.style.display = "none";
                                        visiblec.style.display = "none";
                                        //Показываем Ссылки 3
                                      var hiddena = document.getElementById('hidden-3'); 
                                        hiddena.style.display = "block";
                                        //Скрыть кнопку Назад
                                        var button = document.getElementById("button-back");
                                          button.style.display = "block";
                                      }

  }



