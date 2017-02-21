'use strict';

$(function() {
   
//Echo
   console.log("Document is ready Sir.");
   
// Kolorowanie trzeciego paragrafu   
   $("#list").children('p:nth-child(3)').css('color','red');
   
//Event Listener
   $('input[value=DOWN]').click(down);
   $('input[value=UP]').click(up);

});

/*******************************************************************/

function down() {
   
   var first = $("#list").children("p:first-child");
      
   var rest = $("#list p");
   
   rest.appendTo("#list");
   first.appendTo("#list");
   
   // z wykorzystaniem jQuery
      // nie udało mi się zrobić analogicznego w drugą stronę
         // wiec napisałem to w JS

}

function up() {
   
   var paragraphs = document.getElementsByTagName('p');
   var count = paragraphs.length;
   var last = paragraphs[count-1];
   var temp = []; // tymczasowa tablica
   
   for(var i=0; i<count; i++){
      (i===0)? temp[0]=last : temp[i]=paragraphs[i-1];
   } // dla pierwszego elementu przyjmuje wartosc ostatniego paragrafu
   
   for(var j=0; j<count; j++){
      paragraphs[j].outerHTML = temp[j].outerHTML;
   }
   
   console.log("Nie wiem jakim cudem to działa.");
   
   //z wykorzystaniem JScript
}

/*******************************************************************/

// nieudana wersja z jQ

//function up() {
//   
//   var last = $("#list").children("p:last-child");
//   
//   var rest = $("#list p");
//   
//   $("#list p").detach("p");
//   last.appendTo("#list p");
//   rest.appendTo("#list p");
//   
//}
   

