let size = 20

function displayUser() {
   let fullname = "John Doe"
   console.log("This is a local variable: " + fullname)
   console.log(`This is a local variable: ${ fullname}`)
   console.log("This is the global size: " + size)
}

// alert(size) //Works fine
// alert(fullname) //Throw an error, because name is not declared in scope
displayUser()