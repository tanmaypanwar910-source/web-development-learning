//array
let ar=[10,20,"tanmay",34,true];
console.log(ar);
console.log(typeof ar);
//object
//rohit 12512 18 general
let obj={
    name:"rohit",
    Accountnumber:12512,
    AGE:18,
    category:"general",
}
console.table(obj);
console.log(obj.name);
console.log(obj.Accountnumber);
console.log(obj);
console.log(typeof obj);
//FUNCTION
function add(){
    console.log("hello world");
}
add();
// in java we can store function in the variable
let age=function add(){
    console.log("hello world");
}
console.log(age);
console.log(typeof age);
//ANOTHER WAY
age();
console.log(typeof age);

//non primitive datatype are mutable
//array
let arr=[12,21,12]
console.log(arr);
arr.push(90);
arr.push("tanmay");
console.log(arr);
arr[0]=102;
console.log(arr);
//object
let history={
    friend:"mohit",
    age:21,
};
history.friend="naveen";
console.log(history);
console.log(history.friend);
//function
function sub(){
   console.log("tanmay");
}

sub();
//copy the refernce by the non primitive 
let re={
   fr:"tanmay",
   ad:40,
};
console.log(re);//1:51:56
re.fr="bablu";
let Ra=re;
console.log(Ra);
//due to the size of the array and the object 