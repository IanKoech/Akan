var century=parseInt(document.getElementById("century"));
var year=parseInt(document.getElementById("year"));
var dayOfMonth=parseInt(document.getElementById("day"));
var month=parseInt(document.getElementById("month"));
var day;
var gender=document.getElementsByName("gender");
var maleNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames=["Akosua", "Adwoa","Abenaa","Akua", "Yaa","Afua","Ama"];

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
 function getAkanName(){
 switch(gender){
    case gender = "male":
          switch(day){
            case (0 || -0):
              document.getElementById("result").innerHTML = "Born on a Sunday. Your akan name is " + maleNames[0];
            break;
            case (1 || -1):
              document.getElementById("result").innerHTML = "Born on a Monday. Your akan name is " + maleNames[1];
            break;
            case (2 || -2):
              document.getElementById("result").innerHTML = "Born on a Tuesday. Your akan name is  " + maleNames[2];
            break;
            case (3 || -3):
              document.getElementById("result").innerHTML = "Born on a Wednesday. Your akan name is  "+ maleNames[3];
            break;
            case (4 || -4):
              document.getElementById("result").innerHTML = "Born on a Thursday. Your akan name is  " + maleNames[4];
            break;
            case (5 || -5):
              document.getElementById("result").innerHTML = "Born on a Friday. Your akan name is  " + maleNames[5];
            break;
            case (6 || -6):
              document.getElementById("result").innerHTML = "Born on a Saturday. Your akan name is  " + maleNames[6];
            break;
            default:
            
          }
    break;
    case gender = "female":
            switch(day){
              case 0 || -0:
                document.getElementById("result").innerHTML = "Born on a Sunday. Your akan name is "+femaleNames[0];
              break;
              case 1 || -1:B
                document.getElementById("result").innerHTML = "Born on a Monday. Your akan name is  "+femaleNames[1];
              break;
              case 2 || -2:
                document.getElementById("result").innerHTML = "Born on a Tuesday. Your akan name is "+femaleNames[2];
              break;
              case 3 || -3:
                document.getElementById("result").innerHTML = "Born on a Wednesday. Your akan name is "+femaleNames[3];
              break;
              case 4 || -4:
                document.getElementById("result").innerHTML = "Born on a Thursday. Your akan name is "+femaleNames[4];
              break;
              case 5 || -5:
                document.getElementById("result").innerHTML = "Born on a Friday. Your akan name is "+femaleNames[5];
              break;
              case 6 || -6:
                document.getElementById("result").innerHTML = "Born on a Saturday. Your akan name is "+femaleNames[6];
              break;

          }
    break
    default:
    console.log("The switch case works well.");
        }
    }