var century;
var year;
var month;
var date;
var akanDay;
var day;

function getInput(){
  century = parseInt(document.getElementById("century").value);
  year = parseInt(document.getElementById("year").value);
  month = parseInt(document.getElementById("month").value);
  date = parseInt(document.getElementById("date").value);


  if(century == ""){
    alert("Input the correct gender");
    return false;
  }else if (year == ""){
    alert("Input the correct year");
    return false;
  }else if (month == ""){
    alert("Input the correct month");
    return false;
  }else if(date == ""){
    alert("input the correct date");
    return false;
  }
}
//Function below calculates day of the week
function calculateDay(){
    getInput();
    akanDay = ((((century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date) % 7) -1;
    
    return (Math.floor(akanDay));
}


 function dayOfWeek(){
     day = calculateDay();
      getAkanName();
      console.log("GreenLight :)");
}


var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];



function getAkanName(){
  var gen = document.getElementsByName("gender");
  if(gen[0].checked == true){
      var gender = "male";
  }else if(gen[1].checked == true){
      var gender = "female";
  }else {
    console.log("Please select your gender!!");
  }
    switch(gender){
        case gender = "male":
              switch(day){
                case (0 || -0):
                  document.getElementById("result").innerHTML = "Sunday : " + maleNames[0];
                break;
                case (1 || -1):
                  document.getElementById("result").innerHTML = "Monday: " + maleNames[1];
                break;
                case (2 || -2):
                  document.getElementById("result").innerHTML = "Tuesday " + maleNames[2];
                break;
                case (3 || -3):
                  document.getElementById("result").innerHTML = "Wednesday "+ maleNames[3];
                break;
                case (4 || -4):
                  document.getElementById("result").innerHTML = "Thursday: " + maleNames[4];
                break;
                case (5 || -5):
                  document.getElementById("result").innerHTML = "Friday: " + maleNames[5];
                break;
                case (6 || -6):
                  document.getElementById("result").innerHTML = "Saturday: " + maleNames[6];
                break;
                default:
               
              }
        break;
        case gender = "female":
                switch(day){
                  case 0 || -0:
                    document.getElementById("result").innerHTML = "Sunday: "+femaleNames[0];
                  break;
                  case 1 || -1:
                    document.getElementById("result").innerHTML = "Monday: "+femaleNames[1];
                  break;
                  case 2 || -2:
                    document.getElementById("result").innerHTML = "Tuesday: "+femaleNames[2];
                  break;
                  case 3 || -3:
                    document.getElementById("result").innerHTML = "Wednesday: "+femaleNames[3];
                  break;
                  case 4 || -4:
                    document.getElementById("result").innerHTML = "Thursday: "+femaleNames[4];
                  break;
                  case 5 || -5:
                    document.getElementById("result").innerHTML = "Friday: "+femaleNames[5];
                  break;
                  case 6 || -6:
                    document.getElementById("result").innerHTML = "Saturday: "+femaleNames[6];
                  break;

              }
        break
        default:
        
    }
}