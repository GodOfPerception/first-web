<!--

/***************************************************************************************/
*    Title: eatlunchbox                                                                *
*    Author: Shashank Shrivastav                                                       *
*    Email: contactshashank10@gmail.com                                                *
*    Date: 2019                                                                        *
*    Code version: 1.0                                                                 *
*    Availability: https://github.com/GodOfPerceptionn                                 *
*                                                                                      *
/***************************************************************************************/
(Version 1.0) [Source code]. https://github.com/GodOfPerception

 -->
var form = document.getElementById("formjs");

 
var btn = document.getElementById("buttonc");
 
var span = document.getElementsByClassName("close")[0];
  
btn.onclick = function() {
  form.style.display = "block";
}
 
span.onclick = function() {
  form.style.display = "none";
}

 
window.onclick = function(event) {
  if (event.target == form) {
    formjs.style.display = "none";
  }
}







var form = document.getElementById("formjs");

 
var btn = document.getElementById("buttonc");
 
var span = document.getElementsByClassName("close")[0];
  
btn.onclick = function() {
  form.style.display = "block";
}
 
span.onclick = function() {
  form.style.display = "none";
}

 
window.onclick = function(event) {
  if (event.target == form) {
    formjs.style.display = "none";
  }
}















function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
 var price= parseInt(document.getElementById('price').value); 
value = isNaN(value) ? 0 : value;
    if(value<10){
        value++; price=value*150;
            document.getElementById('number').value = value;  document.getElementById('price').value = price;
  
    }
 
 
}
function decrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);var price= parseInt(document.getElementById('price').value); 
    value = isNaN(value) ? 0 : value;
    if(value>1){
        value--;price=price-150;
            document.getElementById('number').value = value;document.getElementById('price').value = price;
    }

}