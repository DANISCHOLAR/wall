function displayUserDetails() {
  // Enter Username
  let userName = prompt("Enter Your Username");
  // let userName.length = 'nameLength'
  while (validateUsername(userName) == false) {
    userName = prompt(" Username not entered. Please Enter a valid Username ");

    console.log("Username is Entered");
  }
  if (userName == null) {
    alert("You have completed our registration, Goodbye!!");
    return;
  }
  console.log("userName", userName);

  alert(`${"Welcome"} ${userName}`);

  // Enter Password
  let password = prompt("Enter your password");

  while (validatePassword(password) == false) {
    password = prompt(" Please Enter a valid Password ");

    console.log("Password is Entered");
  }
  if (password == null) {
    alert("You have completed our registration, Goodbye!!");
    return;
  }
  // Confirm password
  let confirm_password = prompt("Confirm your password");
  if (confirm_password == null){
    return;
  }
  while (confirm_password !== password) {
    confirm_password = prompt("Password Incorrect, Confirm your password again")
  }
  console.log(userName, password, confirm_password);
  alert("You have completed our registration, Goodbye!!");
  console.log("The Username entered is " + userName);
  console.log("The Password entered is " + password);
}

displayUserDetails();

function validateUsername(userName) {
  if (userName == null) {
    return true;
  }

  if (userName == null) {
    prompt("Enter Your Username Agaiin");
  }
  // while (userName.length <= 5){
  //     prompt('Please, the Username is too short, Enter Your Username Again');
  //     console.log("The username is too short")
  //     } else if(userName.length = null){
  // console.log('The Username is Null')
  // } else {
  //     console.log("Good")
  // }
  if (userName.length > 10) {
    return false;
  } else {
    return true;
  }
}

// console.log(userName.length)

function validatePassword(password) {
  if (password == null) {
    return true;
  }
  if (password.length < 6) {
    return false;
  } else {
    return true;
  }
}
const usersDatabase = {
  "rising123" : {
    firstName: "RIsing",
    lastName: "Odegua",
    email: "risingodegua@gmail.com",
    accountActivated: true,
    password: rising123456,
  }
  "Daniel" :{
    firstName: "Daniel",
    lastName: "Olayinka",
    email: "olayinkaoluwaseun90@gmail.com",
    accountActivated: true,
    password: 'Daniel12345'
  }
  "Danischolar" : {
    firstName: "Daniezy",
    lastName: "Deo Duce",
    email: "danischolar@gmail.com",
    accountActivated: false,
    password: 'Danischolar123',
  }
  "Calvary" : {
    firstName: "Calvary",
    lastName: "Ilogbo",
    email: "calvarymodelprivateschool@gmail.com",
    accountActivated: true,
    password:'Calvary12345'; 
  }

}
