//number
let num1=120;
let anothernum=new Number(120);
console.log(num1);
console.log(anothernum);
console.log(anothernum.valueOf());
console.log(typeof num1);
console.log(typeof anothernum);
//boolean
let isloggedin=true;
let ispaid=false;
console.log(isloggedin);
console.log(typeof isloggedin);
//STRING 
let name="tanmay";
console.log(typeof name);
//NULL
let iteam=null;
console.log(typeof iteam);// LEGECY BUG
//UNDEFINED
let iteam2;
console.log(typeof iteam2);
//BIGINT
let mynumber=BigInt(1234567890123456789012345678901234567890);// GREATRER THAN THE STORGE VALUE CAN STORE USING BIGNIT
console.log(mynumber);
console.log(typeof mynumber);
//primitive datatype are immutable= cannot change 
let a=10;
a=a+10;
console.log(a);
let str="mohit";
str="naveen";
//there is two box with name mohit and naveen first the str is pointed to mohit now we change the pointer and change it to the naveen that's why the ans is naveen but the box in which mohit is store remain is same 
console.log(str[0]);
let str1="mohit";
str1[0]="n";
console.log(str1);// this show not change in the string  
let w=10;
let y=w;
y=20;
console.log(w,y);//1:48:59