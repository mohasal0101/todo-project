confirm("Do you want to proceed with welcoming message?  Click OK to proceed otherwise click Cancel.");


var userName =prompt("What's your name?");


var userGender = prompt("What is your gender?");
/* console.log(userGender); */
if(userGender == "male" )
 {
    alert("Hello  Mr "+ userName +"!");    
}
else if (userGender == "female")
{
    alert("Hello  Ms "+ userName +"!");    
}

var userAge = prompt("How old are you?");

if (userAge <= 0)
{
  userAge =  alert("Invalid Age, Please enter again");
    
}
else
{
    alert("Old enough, welcome !");
   
}

var userAnswer  =prompt("Are you single?");
if(userAnswer === null || userAnswer === '')
{
   userAnswer= alert("Invalid");
}


var userAnswer2 = prompt("Are you a gamer");
if(userAnswer2 === null || userAnswer2 === '')
{
   userAnswer2= alert("Invalid");
}

var userAnswer3 =prompt("Do you smoke?");
if(userAnswer3 === null || userAnswer3 === '')
{
   userAnswer3= alert("Invalid");
}

/* console.log(userAnswer);
console.log(userAnswer2);
console.log(userAnswer3); */

var userData = [];
for (var counter = 0; counter < 5; counter++) {
    userData.push("Name: "+ userName, "Gender: "+userGender, "Age: "+userAge, "Single? : "+userAnswer, "Do you game? : "+userAnswer2, "Do you smoke? : "+userAnswer3);
}
console.log(userData);





