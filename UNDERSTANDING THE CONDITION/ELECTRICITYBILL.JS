let unit = Number(prompt("enter the number of unit"));
amount = 0;

if (unit>400){
        amount = (unit-400)*13;
        unit = 400;
}
if(unit >200 && unit <= 400){
        amount +=(unit-200)*8;
        unit=200
}
if(unit>100 && unit<=200){
    amount += (unit-100)*6;
    unit = 100;
}
amount += unit*4;

console.log("YOUR ELECTRICITY BILL IS "+ " " +amount);

/**
 * unit          price
 * up to 100        4/unit
 * 101 to 200       6/unit
 * 201 to 400       8/unit
 * more then 400    13/unit
 */