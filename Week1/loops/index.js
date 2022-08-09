// let number = 0;
// // number = number + 1
// // number = number + 1
// // number = number + 1
// // number = number + 1
// // number = number + 1
// console.log(number)

// // do (number < 5){
// //     number = number + 1;
// // }
// while (number < 5) {
// // console.log('adding one to number')
//     number = number + 1;
//     // console.log(number)
// }
// // console.log(number)

//while loop
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
    console.log(i);
    // alert("hello world")
    i++;
}

// jemi.so

//do while
let j = 0;
do {
// console.log("Arrive Late")
console.log(j);
j++;
} while (j < 3)


// //for loop
// for (let i = 0; i <= 10; i++) {
//     console.log('I\'s now: ', i)
// }



//for..of
// const iterable = [10, 20, 30, 400, 500];

// for (const value of iterable) {
//     console.log('The Value is : ',value)
// }


// const name = 'Johnson'
// for (const character of name) {
//     console.log('Character is :', character)
    
// }
let v = 2
for (let i = 1; i<=10; i++) {
    console.log(`${v}*${i} = ${v*i}`)
}
let startValue = 12
for (let value =1; startValue>=value; startValue--){
    console.log(`${startValue*value}`)
}


//for ... in

const object = { 
    name: "John", 
    age: 20, 
    city : 'Lagos'
    
}

for (const key in object) {
   const value = object [key]
    console.log(`${key} : ${value}`)
// console.log(value)
console.log(`The Key is ${key} : $`)
}
