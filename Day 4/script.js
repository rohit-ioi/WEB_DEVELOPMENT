// let a;
// console.log(a);

// let ioi = [1,2,"ioiStud", true];

// console.log(ioi);

// let user1 = {
//     Name : 'Rohit',
//     age : 18,
//     gender : "Male"
// }
// console.log(user1)
// console.log(user1.Name);

// If else, Switch


// try{

// }catch{

// }

// let bank = 10;
// if(bank>=10){
//     console.log("Allowed for purchasing CAR");
// }
// else{
//     console.log("Not Elig");
// }

// switch(bank){
//     case 1: console.log("Rohit");
//     break;
//     case 10: console.log("Car Affordability");
//     break;
//     default:
//         console.log("Invalid input");
// }

// let rain = true;
// rain ? console.log("it's rannnnnnnn"):console.log("hjgjcbskj");


// let n = 10;
// for (let i =0; i<n; i++){
//     console.log("pwioi");
// }

// let i = 1;
// let n = 10;
// do {
//     console.log("Hello World!");
//     i++;
// } while(i<n);

// Functions

// function Rohit(){
//     let mob = 8102208145;
//     let space = " ";
//     console.log("Hello World!" + space + mob);
// }

// Rohit();

// function prakhar(){
//     let mob = 123535354;
//     let name = "Rohit";
//     // let xyz = mob + name;
//     return name + mob;
// }
// let det = prakhar();
// console.log(det);


// function ioi(prm1){
//     let cal = prm1 * 0.8;
//     return cal;
// }
// let printake = ioi(80);
// console.log("asdfgh", printake);



// function Rohit(char){
//     let x = "Hello";
//     if(x==char){
//         console.log("Yes");
//     }
//     else{
//         console.log("No");
//     }
// }

// Rohit1 = Rohit("Hello");
// console.log(Rohit1);



function withdrawal(account_balance, to_be_withdrawn, mode_of_withdrawal){
    if(account_balance>to_be_withdrawn){
    if(mode_of_withdrawal=="Cash"||"UPI"||"ATM"||"Transfer"){

        if(mode_of_withdrawal=="Cash"){
            let withdrawal_limit = 50000;
            let amount_left = account_balance - to_be_withdrawn;
            console.log(withdrawal_limit);
            console.log(amount_left);
        }
        else if(mode_of_withdrawal =="Transfer"){
            let withdrawal_limit = 25000;
            let amount_left = account_balance - to_be_withdrawn;
            console.log(withdrawal_limit);
            console.log(amount_left);
        }
        else if(mode_of_withdrawal == "ATM"){
            let withdrawal_limit = 20000;
            let amount_left = account_balance - to_be_withdrawn;
            console.log(withdrawal_limit);
            console.log(amount_left);
        }
        else{
            let withdrawal_limit = 100000;
            let amount_left = account_balance - to_be_withdrawn;
            console.log(withdrawal_limit);
            console.log(amount_left);
        }
    }
}
return console.log("The respective withdrawal limit and amount left in the account is", withdrawal_limit, amount_left);
}

let account_balance = 500000;
let to_be_withdrawn = 15000;
let mode_of_withdrawal = "UPI";
let calculations = withdrawal(account_balance,to_be_withdrawn,mode_of_withdrawal)
console.log(calculations);