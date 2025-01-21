// function greet (person: string, date: Date) {
//     console.log(`Hello ${person}, today is ${date.toDateString()}!`)
// }
// greet("Maddison", new Date());
// let msg = "hello there!"
"use strict";
function greet2(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet2("Maddison", new Date());
