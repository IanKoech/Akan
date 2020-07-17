var gender=document.getElementById("gender");
var year=document.getElementById("year");
var form=document.getElementById("form");
var error=document.getElementById("error");
var  day;

form.addEventListener("submit",(e)=>{
    let message=[];
    if(year.value>2020 && year.value<999){
        message.push("Enter the appropriate year.");
    }
    if(message.length>0){
        e.preventDefault();
        error.innerText=message.join(" ,");
    }
});

function dayOfWeek(year){

}