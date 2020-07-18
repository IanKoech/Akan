var gender=document.getElementById("gender");
var date=document.getElementById("year");
var month=date.getMonth();
var date=date.getDate();
var year=date.getYear();
var day;
 function getDay(){
     day=( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
     return day;
 }
 document.getElementById("akan").innerHTML=getDay;