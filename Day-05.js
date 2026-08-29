//Template Literals...............................
 let price = 500;
 let quantity = 3;

 console.log(
   `total price:${price*quantity} taka` );

//function call...................................
function getDiscount(price){
    return price * 0.1;
}
console.log(`You saved: ${getDiscount(price)} taka\nYour bill now ${(price*quantity)-getDiscount(price)}`)
 function getDiscount(price){
    return price*0.1;
 }
 console.log(`You saved: ${getDiscount(price)}taka\nBill Paid. ${price*quantity - getDiscount(price)}taka`)

//Output show but quantitiy not showing............
 let stock =5;
  console.log(`status: ${stock > 0? "In stock" :"Out of stock"}`);
//if i showing stock quantity :  ${stock > 0? "In stock"+ " " + stock :"Out of stock"}`);
 
//Destucturing...................................
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

//Spread Operator...............................
let bin = [ "fruits", "cake"];
let bin2= ["fruits", "cake"]; 
bin2.push("bun");
console.log(bin,bin2);

Rest operator ................................
const arry = [1,2,3,4,100,250,300];
const [,,,,...remainig]= arry;
console.log(remainig);
