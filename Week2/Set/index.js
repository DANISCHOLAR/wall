let setOfUsers = new Set()

let mary = {name : "Mary", age: 20}
let John = {name : "John", age: 23}
let kayode = {name : "Kayode", age: 19}
setOfUsers.add(mary) 
setOfUsers.add(John)
setOfUsers.add(kayode) //Won't get added again

// console.log(setOfUsers)
// let arrayOfUsers = [];
// arrayOfUsers.push(mary)
// arrayOfUsers.push(John)
// arrayOfUsers.push(kayode)
// console.log(arrayOfUsers)



// let namesMan = new Set();
// namesMan.add('Tobi');
// namesMan.add('Tobi');
// namesMan.add('Tobi');
// namesMan.add('Tobi');
// namesMan.add('Omolara');
// namesMan.add('Omolara');
// namesMan.add('lara');

// console.log(namesMan)
// console.log(namesMan.size)
// console.log(namesMan.has('lara'))
// namesMan.delete('Tobi')
// console.log(namesMan.has('Tobi'))


// // Get the size of the set
console.log(setOfUsers.size) // 2

// // Check if a value is in the set
console.log(setOfUsers.has(mary)) // true

// // Remove a value from the set
// setOfUsers.delete(mary)
// console.log(setOfUsers.has(mary)) // false

// // Iterate over the set
for (let user of setOfUsers) {
    console.log(user) 
}

// // Convert the set to an array
let usersArray = Array.from(setOfUsers)
console.log(usersArray) // [{name: "John", age: 23}, {name: "Mary", age: 20}]
