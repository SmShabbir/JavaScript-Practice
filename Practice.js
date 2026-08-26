let item = {
    product: "cloth",
    cloths:{
        Shirt: 300,
        pant:  600,
        shose: 1200,
    }
}
let totalCloths= 0;
let totalPrice=0;

for(const ele in item.cloths){
    totalPrice  += item.cloths[ele];
    totalCloths++; 
}

let avg = totalPrice / totalCloths;

console.log("Average Price is", avg);
