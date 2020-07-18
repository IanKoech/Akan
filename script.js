var century=parseInt(document.getElementById("century"));
var year=parseInt(document.getElementById("year"));
var dayOfMonth=parseInt(document.getElementById("day"));
var month=parseInt(document.getElementById("month"));
var day;
var gender=document.getElementsByName("gender");

function checkCentury(){
    if(century==""){
        return "Please enter the century you were born in!"
    }else{
        return "Green-light :)"
    }
}
 function akanDay(){
     var akanD= (((century/4)-2*century-1)+((5*year/4))+((26*(month+1)/10))+dayOfMonth) % 7;
     console.log(akanD);
     if(akanD>0){
         return Math.floor(akanD);
     }
     else{
         return Math.floor((akanD*-1));
     }
 }

 function checkGender(){
     if(gender[0].checked== true){
         gender="male"
     }else if(gender[1].checked==true){
         gender="female";
     }else{
         return "Try again!";
     }
 }
 switch(gender){
    case gender = "male":
          switch(day){
            case (0 || -0):
              document.getElementById("result").innerHTML = "The day is on a sunday." + "  " + "Your akan name is " + maleNames[0];
            break;
            case (1 || -1):
              document.getElementById("result").innerHTML = "The day is on a monday." + " " + "Your akan name is " + maleNames[1];
            break;
            case (2 || -2):
              document.getElementById("result").innerHTML = "The day is on a tuesday." + " " + "Your akan name is " + maleNames[2];
            break;
            case (3 || -3):
              document.getElementById("result").innerHTML = "The day is on a wednesday." + " " + "Your akan name is "+ maleNames[3];
            break;
            case (4 || -4):
              document.getElementById("result").innerHTML = "The day is on a thursday." + " " + "Your akan name is " + maleNames[4];
            break;
            case (5 || -5):
              document.getElementById("result").innerHTML = "The day is on a friday." + " " + "Your akan name is " + maleNames[5];
            break;
            case (6 || -6):
              document.getElementById("result").innerHTML = "The day is on a saturday." + " " + "Your akan name is " + maleNames[6];
            break;
            default:
            // console.console.log("Pass");//Test male case
          }
    break;
    case gender = "female":
            switch(day){
              case 0 || -0:
                document.getElementById("result").innerHTML = "The day is on a sunday." + "  " + "Your akan name is  akosua";
              break;
              case 1 || -1:
                document.getElementById("result").innerHTML = "The day is on a monday." + " " + "Your akan name is adwoa ";
              break;
              case 2 || -2:
                document.getElementById("result").innerHTML = "The day is on a tuesday." + " " + "Your akan name is abenaa";
              break;
              case 3 || -3:
                document.getElementById("result").innerHTML = "The day is on a wednesday." + " " + "Your akan name is akua";
              break;
              case 4 || -4:
                document.getElementById("result").innerHTML = "The day is on a thursday." + " " + "Your akan name is yaa";
              break;
              case 5 || -5:
                document.getElementById("result").innerHTML = "The day is on a friday." + " " + "Your akan name is afua";
              break;
              case 6 || -6:
                document.getElementById("result").innerHTML = "The day is on a saturday." + " " + "Your akan name is ama";
              break;

          }
    break
    default:
    console.log("pass");//Test gender switch