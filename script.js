var gender=document.getElementById("gender");
var date=document.getElementById("year");
var year=date.getFullYear();
var MM=date.getMonth()+1;
var DD=date.getDate();
var CC;
var akan;


function century(){
    CC=Math.ceil(year/100);
    return CC;    
}

function akanDay(){
    akan=( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
    return akan;
}

var maleNames=["Kwasi","Kwadwo", "Kwabena", "Kwaku", "Yaw", "Koffi", "Kwamw"];
var femaleNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];