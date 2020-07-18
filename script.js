var gender=document.getElementById("gender");
var date=document.getElementById("year");
var year=date.getFullYear();
var MM=date.getMonth()+1;
var DD=date.getDate();
var CC=Math.ceil(year/100);
var YY=year-((Math.round(year/100)*100));
var akan;
var button=document.getElementById("button");


function akanDay(MM,CC,DD,){
    akan=( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
    return akan;
}

var maleNames=["Kwasi","Kwadwo", "Kwabena", "Kwaku", "Yaw", "Koffi", "Kwamw"];
var femaleNames=["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

button.onclick=function getAkanName(){
    if(gender=="male"){
        return maleNames[akan-1];
    }else if(gender=="female"){
        return femaleNames[akan-1];
    }else{
        return "Invalid!Try again."
    }
}