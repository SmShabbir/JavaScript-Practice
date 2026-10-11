//Template Literals..................................................................................................
 let price = 500;
 let quantity = 3;

 console.log(
   `total price:${price*quantity} taka` );

//function call......................................................................................................
function getDiscount(price){
    return price * 0.1;
}
console.log(`You saved: ${getDiscount(price)} taka\nYour bill now ${(price*quantity)-getDiscount(price)}`)
 function getDiscount(price){
    return price*0.1;
 }
 console.log(`You saved: ${getDiscount(price)}taka\nBill Paid. ${price*quantity - getDiscount(price)}taka`)

//Output show but quantitiy not showing...............................................................................
 let stock =5;
  console.log(`status: ${stock > 0? "In stock" :"Out of stock"}`);
//if i showing stock quantity :  ${stock > 0? "In stock"+ " " + stock :"Out of stock"}`);
 
//Destucturing........................................................................................................
const student={
    name: "Shabbir",
    age: 25,
    address:{
        city: "Dhaka",
        area: "Mohammodpur",
        zipcode: 1207,
    },
    hobbies:["Bike driving", "Travelling"],
};
const {address: {city}, hobbies:[firstHobby]}= student;
console.log(city, firstHobby );

const arr = ["Red", "Blue", "Green", "Yellow"];
const [first, second, third]= arr;
console.log(second);

//Spread Operator......................................................................................................
let bin = [ "fruits", "cake"];
let bin2= ["fruits", "cake"]; 
bin2.push("bun");
console.log(bin,bin2);

//Rest operator .......................................................................................................
const arry = [1,2,3,4,100,250,300];
const [,,,,...remainig]= arry;
console.log(remainig);

//foreach..............................................................................................................
let friends= ["haameem", "Rakib","Rifat","Ridoy"];
let newfriends= friends.forEach((name,idx) => {
    console.log(`${idx } ->${name}`);

});
//Map.................................................................................................................
let fruits = ["Banana","Mango","Jackfruit","Watermelon"]
let newFruits2 = fruits.map((f) => f.toLowerCase());
console.log(newFruits2, "\n",fruits);

//Filter.সবগুলো item check করে এবং condition true হলে সবগুলোকে একটা নতুন array-তে রাখে।............................
let customFruits= fruits.filter((f)=> f.length > 5);
console.log(customFruits);

//Find..find() প্রথম যে item condition-এর সাথে মিলে যায়, শুধু সেটাই দেয়.................................................
 
let students= [
    {name: "Rahim", marks: 85},
    {name: "Karim", marks: 50},
    {name: "Samira", marks:40},
    {name: "Fahim", marks: 35},
];
let studentCheak= students.find (student => student.marks >=40);
console.log(studentCheak);

//sort() use kore sort()= Array-এর data নির্দিষ্ট order-এ সাজানোর method। 👍.........................................
let students = [
    {name: "Rahim", marks: 85},
    {name: "Karim", marks: 50},
    {name: "Samira", marks: 40},
    {name: "Fahim", marks: 35},
];

students.sort((a,b) => b.marks - a.marks);
 students.forEach(student => {
    console.log(`${student.name} -> ${student.marks}`);
 })


let numbers = [10, 20, 30, 40];
let total= numbers.reduce((sum, number) =>{
    return sum+ number;
})

console.log(total);
 let numbers = [ 10, 20, 30, 40, 50];
 let total = numbers.reduce ((sum, number) =>{
    return sum + number;
 },0);

 console.log(total);

//Reduce Method.....................................................................................................
let products =[
    {title: "Mouse", price: 500, inStock: true},
    {title: "Keyboard", price: 600, inStock: false},
    {title: "headphone", price: 400, inStock: false},
    {title: "Monitor", price: 10000, inStock: true},
];

let totalPrice = products. reduce((acc, current) =>{
    if(current.inStock){
    return acc + current.price;
    }
    return acc;
},0);

console.log(totalPrice);


let products = [
    {title: "Mouse", price: 500},
    {title: "Keyboard", price: 600},
    {title: "Headphone", price: 400},
];

let total = products.reduce((acc, current) => {
    return acc+current.price;
}, 0);

console.log(total);

