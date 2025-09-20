let cartvalue = Number(prompt("enter the cartvalue"));

if(cartvalue>0 && cartvalue<=5000){
    let discount_5 = cartvalue*5/100;
    let totalamount = cartvalue - discount_5;

    // console.log("congulation you got 5% discount")
    console.log("total amount after 5% discount to pay"+ " " + Math.floor(totalamount));
}
else if(cartvalue > 5000 && cartvalue <=7000){
    let  discount_10 = cartvalue*10/100;
    totalamount = cartvalue - discount_10;

    // console.log("congulation you got 10% discount");
    console.log("total amount after 10% discount to pay" +" "+ Math.floor(totalamount));
}
else if(cartvalue > 7000 && cartvalue <=9000){
    let  discount_20 = cartvalue*20/100;
    totalamount = cartvalue - discount_20;
    
    // console.log("congulation you got 20% discount");
    console.log("total amount after 20% discount to pay" +" "+ Math.floor(totalamount));
}
else if(cartvalue > 9000) {
    let  discount_30 = cartvalue*30/100;
    totalamount = cartvalue - discount_30;
    
    // console.log("congulation you got 30% discount");
    console.log("total amount after 30% discount to pay" +" "+ Math.floor(totalamount));
}
else{
    console.log("total amount to pay" +" "+ cartvalue);
}

/* efficient way
let amount = Number(prompt("What is the final amount?"));
let dis = 0;

if (amount > 0 && amount <= 5000) {
    dis = 5;
} else if (amount > 5000 && amount <= 7000) {
    dis = 10;
} else if (amount > 7000 && amount <= 9000) {
    dis = 20;
} else if (amount > 9000) {
    dis = 30;
}
console.log(amount - Math.floor((dis * amount) / 100));

*/