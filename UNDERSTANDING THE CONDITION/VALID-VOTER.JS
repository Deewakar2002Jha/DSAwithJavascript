// check the user is valid or not to vote with input validation
let voter = Number(prompt("enter the age"));

if (isNaN(voter)){
    console.log("please enter the valid input");
}
else if(voter>=18){
    console.log("you can vote for election");
}
else{
    console.log("you can't vote for election");
}