// alert = console.log

// function Sum(){
//     let result = 20 + 40;
//     let subtraction = 400 * 300; 
//     console.log(`The Result is ${result}`)
//     console.log(`The Result is ${subtraction}`)
// }
// Sum()


// let count = 0


// //function without parameters
// function addToCount() {
//     let localCount = 1

//     count = count + 1
//     localCount = localCount + 1

//     console.log("Count is: ", count)
//     console.log("Local Count is: ", localCount)

// }

// addToCount()
// addToCount()

// function studentNames(surname,nickname) {
//     alert(surname, nickname)
// }
// studentNames("bisi",'adekunle')
// let studentNames = studentName('mayowa'," Tinuibi") 
// function studentName(name, lastname){
// let studentNames = name + lastname
// return studentNames
// }
// alert(studentNames)



// //function with parameter
// function displayName(firstName ="", lastName, age = 18, height = 150) {
//     console.log(firstName + " " + lastName + " " + age + " " + height)

// }
// displayName("John", "Doe", 20, 34.8+'cm')
// displayName("Ade", "Johnson")

// let i = 0;
// while (i<10){
//     i++;
//     console.log(displayName())
// // displayName()
// }
for (let value = 1; value<=10; value++){
    if(value % 2 === 0) continue;
    console.log(value)
    // if (value==5) break;
}


function saluteTutor(tutorName) {
  alert( `Bigups ${tutorName} You're such `) 
// return
}

// saluteTutor('Setemi')






//function with returns
function getFullName(firstName = "", lastName = "") {
const fullName = firstName   + " " + lastName 
return fullName
}
let fullName = getFullName("John","Doe")


// console.log(fullName)

// let fullname = getFullName("John", "Doe")
// function getFullName(firstName, lastName,   nickName =' altschooler') {
//     const fullName = firstName + " " + lastName +  nickName
//     return fullName
// }

// alert(fullname)



// // w3 ex

// var x = myFunction(23, 50);
// function myFunction(a, c, y= ' 100') {
//     const x = a * c + y
//     return x;
// }
// alert(x)



// //function expression
// const sayHello = function () {
//     console.log("Hello World")
// }

// sayHello()
// // gege
const variable = () => {
    // console.log('helllllllo')
return "Hello Beautiful"
}
let res = variable()
console.log (res)




const sayHello =  () => {
    console.log("Hello World")
}
sayHello()

// function add(value1,value2){
//     return value1 + value2
// }
// const addExpression = function (value1,value2){
//     return value1 + value2;
// }

// const addExpressionn = (value1,value2)=>{
//     return value1 + value2;
// }

// const addExpressio = (value1,value2) => value1 + value2;


alert = console.log

//callback functions
function displayUser(displayType, showFullName, showUserName) {
    if (displayType == "full") {
        showFullName()
    } else {
        showUserName()
    }
}

function showFullName() {
     alert("John Doe") 
    }
function showUserName() {
     alert("JohnDoe234") 
    }

displayUser("full", showFullName, showUserName)



//Arrow functions
let sum = (a , b) => a + b;
let sayHelloWorld = () => alert("Hello World!");
// sum(10,26)
// console.log(sum)

// // scopes and closures
// // closure is the ability of any js function to be aware of it global or outer variable 


// function addTwoNumbers(number1) {
//     function secondFunction (number2) {
//         return number1 + number2
//     }
//     return secondFunction
// }
// addTwoNumbers(10)(20)