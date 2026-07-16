/*
String 
Number
Boolean
Bigint

undefined= a verible that ahs been declared but has not yet been assigned a value
null
object
symbol


Apna College
var : Variable can be re-declared & updated. A global scope variable.

let : Variable cannot be re-declared but can be updated. A block scope variable.

const : Variable cannot be re-declared or updated. A block scope variable.*/
    //var score=102; //older way of declaring variable 
let score=102;
let name="tanmay";//string
let isLoggedIn=true;//boolean
  //object
  let teatypes=["green tea","black tea","herbal tea"];//array
let  user={firstname:"tanmay",lastname:"panwar"};//object
let getscore=score;//borrowed variable

console.log(getscore);
console.log("hello");
let num=12345678976543;
console.log(num);
//null
let weather=null;
console.log(weather);//intentionally set to have no value

//let weather=current_weather("dwarka");
//23 cirrent temperature
//null means exit but can't find at the moment 
//undefined = no data id belong to dwarka
const id1=Symbol("id");
console.log(id1);
const id2=Symbol("id");
console.log(id2);
console.log(id1===id2);//false because both are unique