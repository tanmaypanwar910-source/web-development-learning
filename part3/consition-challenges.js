// checking if a number is greater than another number:
let num1=12;
let num2=123;
if(num1>num2){
    console.log("num1 is greater than num2");
}else{
    console.log("num2 is greater than num1");
}
//checking if a string is equal to another string
let username="chai";
let anotherusername="chai";
if(username==anotherusername){
    console.log("pick another because both are same ");
}else{
    console.lof("don't worry both are same");
}
// checking if a variable is number is not 
let score=44;
if(typeof score=="number"){
    console.log("yes");
}else{
    console.log("no");
}
//bollean to chcek
let isname=true;
if(isname){
    console.log("name is true");
}else{
    console.log("name is not true");
}
//checking is array is empty or not
let iteam=[""];
console.log(iteam.length);
if(iteam.length===0){//use of 3=(===)
 console.log("array is empty");
}else{
    console.log("array is not empty");
}
