 let price = 500;
 let quantity = 3;

 console.log(
   `total price:${price*quantity} taka` );


function getDiscount(price){
    return price * 0.1;
}
console.log(`You saved: ${getDiscount(price)} taka\nYour bill now ${(price*quantity)-getDiscount(price)}`)