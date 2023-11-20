// user is prompt to start an order
//user input consist of flavor names
//function takes input string and returns a OBJECT
let string = window.prompt("Please place your order here:");
//console.log split string
//create a array from the costumers order
let array = string.split(',');
console.log(array)
//create function that loops over array
function number(array){
let flavors = {};
for (let i = 0; i<array.length; i++){
    if (flavors[array[i]]===undefined){
        flavors[array[i]] = 1;
    } else {
        flavors[array[i]]++
    }
}
//declare flavors and their quanity
return flavors;
}
console.log(number(array));
//place order in visable table 
console.table(array)