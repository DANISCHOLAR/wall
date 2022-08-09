// // // Create an array
// // let users = new Array(); // Using class method

// // let otherUsers = [];
// // let listOfNames = ['Tobi', 'setemi', 'desmond', 'daniel'];
// // console.log(listOfNames.length)
// // console.log("Index of",listOfNames.indexOf('setemi'))

// // console.log("Index of",listOfNames.indexOf('desmond'))


// alert = console.log
// // let items = ["John", "Mary", "Yemi", 20, 25.6, { theme: "dark",
// // settings: 'user preferences' }];

// // console.log(items[5])
// // console.log(items.length)


// // Create an array of strings called animals.
// let animals = ["Lion", "Tiger", "Pig"]
// // index ==>  [ 0,         1       2  ]


// // // Get values from the array
// alert("what animal is this", animals[0]) //Lions
// alert("what animal is this", animals[1]) //Tiger



// // // Update a value in the array
// // animals[2] = { name: "Goat", type: "herbivores" } // ["Lions", "Tiger", "Goat"]
// // animals[0] = "Elephant"
// // console.log(animals)


// // Get the length of the array
// console.log(animals.lenght) // 3 



// // Array Methods

// // Add a value to the end of the array
// animals.push("Cow", "cat", "gecko", "Monkey")
// console.log(animals[6])
// console.log(animals) // ["Lions", "Tiger", "Goat", "Cow"]

// // Remove a value from the end of the array
// // animals.pop() 
// console.log("what has been popped", animals.pop())
// console.log(animals) // ["Lions", "Tiger"]

// let myName = "bisi"
// console.log(myName.toUpperCase(myName))
// // creating a new list
// let cars = ["toyota", "venza", "camry","mazda", "ferarri"];

// let net =["toyota","venza"].concat(cars.slice(3))
// console.log(net)
// // let net = cars.concat(cars.slice(2),["lexus","bmw"])
// // console.log(net)
// // console.log(cars.concat(cars.slice(2),["pp"])) // To join two arrays together

// // // cars.shift()
// // // cars.pop()
// // alert(cars)
// // console.log("Mine", cars.shift())

// // // Remove a value from the beginning of the array
// // animals.shift()
// console.log(animals) // ["Tiger",  "Pig"]

// // Add a value to the beginning of the array
// animals.unshift("Cheetah")
// console.log(animals) // ["Cheetah", "Lions", "Tiger", "Pig"]


// // Get the index of a value
// console.log(animals.indexOf("gecko")) // 1

// if(animals.indexOf('cockroach' == -1)){
//     console.log("Cockroach no de here ooo")
// }else{
//     console.log("Elephant dey here oo")
// }

// // Get a slice of the array
// let animal = ["Lions", "Tiger", "Pig", "Cheetah", "Jaguar"]
// console.log(animal)
// // let zoo = animals.concat(animals.slice(1), ["penguin", "parrot"])
// let zoo = [].concat(animal.slice(1), ["penguin", "parrot"])
// console.log([].concat(animal[0],animals[1], animals.slice(3))); // to cut from the middle
// console.log(animal.concat(animal.slice(3),["penguin", "parrot"])) 
// console.log(animal.slice(2))


// // // Get a copy of the array
// // let copyOfanimals = animal.slice();
// // console.log(copyOfanimals)

// // // Reverse the array
// animal.reverse()
// console.log(animal) 

// // // Sort the array
// let sortedArray = animal.sort(function (a,b){
//     return a - b;
// })
// console.log(animal) //  ['Lion', 'Pig', 'Tiger']

// let numbers = [1 ,8, 5, 2 , 9.09]
// numbers.sort() // sort ascendingly
// numbers.sort().reverse() // sort descendly
// console.log(numbers)


let animals = ["Lion", "Tiger", "Pig", "goat", "cow", "ram",""]

animals.forEach((animal) => console.log(`This Animal is: ${animal}`) ) // short method
function eachAnimalName(animal) {
    console.log("This animal is:",animal.toUpperCase())
    
} 
//  rubbish example
animals.forEach(eachAnimalName)

// iterate over the array with for...of
for (let animal of animals) {
    console.log(`This animal is: ${animal}`)
}
for(let i = 0; i < animals.length; i++){
    const currentAnimal = animals[i];
    console.log("Animal of Suya :" + animals[i])
}

for (let index = 0; index < animals.length; index++) {
    const element = animals[index];
    if (element == "Pig" || element == "Lion" || element == "Tiger"){
        continue;
    }
    console.log("Animal for Suya:",animals[index]) 
}

// iterate over the array with for...in
for (let index in animals) {
    console.log(`The index is ${index} and the value is ${animals[index]}`)
}


// iterate over the array with forEach
function displayEachAnimal(animal) {
    console.log(`This animal is: ${animal}`)
}

animals.forEach(displayEachAnimal)


animals.forEach((animal) =>  console.log(`This animal is: ${animal}`));

// iterate over the array with map
let userNames = ["john", "azeez", "ade", "akintude"]
let usernameInUppercase = userNames.map((username) => {
    //do the transformation
    const transformedUsername = username.toUpperCase()
    return transformedUsername

})
console.log(userNames)
console.log(usernameInUppercase)


// iterate over the array with filter
let populations = [200, 100, 30, 4, 5, 600]

console.log(`Default population: ${populations}`)

let populationGreaterThan30 = populations.filter((population) => {
    if (population > 30 && population < 200){
        return population
    }
})

console.log(populationGreaterThan30)




// 2D Arrays
let matrix = 
[
 [1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]
];

console.log(matrix[2][1])