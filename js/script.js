'use strict';

$(function() {
   console.log("Document is ready Sir.");
});


function down() {
   
   var first = $("#list").children("p:first-child");
      
   var rest = $("#list p");

   rest.appendTo("#list");
   first.appendTo("#list");
}

function up() {
   
   var last = $("#list").children("p:last-child");
   
   var rest = $("#list p");
   
   last.appendTo("#list");
   rest.appendTo("#list");
   
}
   
$('input[value=DOWN]').click(down);
$('input[value=UP]').click(up);
   

/*var allP = $('p');
var listLength = allP.children().prevObject.length;

var temp1 = allP.children().prevObject[0];

console.log();*/

//var list = $( "p" ).detach();
//
//var listLength = list.children().length;
//var first = list.children()[0];
//var last = list.children()[listLength-1];
//   
//var newList = list;

//$("#list:nth-child").remove();

