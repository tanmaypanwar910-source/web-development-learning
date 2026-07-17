// ✅ Use for...of to loop through array values.
// ✅ Use for...in to loop through object keys (or array indexes if you specifically need the indexes).
/*
1. write a 'for' loop that through the array ["green tea","black tea","chai","oolaong tea"]
and stop the loop when if finds "chai"
store all teas before "chai" in a new array named 'selectedtea'*/
// let array=["green tea","black tea","chai","oolaong tea"];
// let selectedtea=[];
// for(let i=0;i<array.length;i++){
//     if(array[i]==="chai"){
//         break;}
        
//         selectedtea.push(array[i]);
//     }
     

// console.log(selectedtea);
/*
2.Write a 'for' loop that loops throught the array 
["london","newyork","paris","berlin"] and skips "paris"
store the other cities in a new array named 'visitedcities' */
// let array=["london","newyork","paris","berlin"];
// let visitedcities=[];
// for(let i=0;i<array.length;i++){
//       if(array[i]!=="paris"){
//         visitedcities.push(array[i]);
//       }
// }
// console.log(visitedcities);
// let array=["london","newyork","paris","berlin"];
// let visitedcities=[];
// for(let i=0;i<array.length;i++){
//     if(array[i]==="paris"){
//         continue;//this is like in quiz we skip particular question not whole quiz
//     }
//     visitedcities.push(array[i]);
// }
// console.log(visitedcities);
/*
3. use a'for-of' loop to iterate through the array '[1,2,3,4,5]'
and stop when number before '4' in an array named 'smallnumbers' */
// let numbers=[1,2,3,4,5];
// let smallnumber=[];
// for(const num of numbers){
//     if(num===4){
//         break;
//     }
//     smallnumber.push(num);
// }
// console.log(smallnumber);
/*
4. use a 'for-of' loops to iterate through the array ["chai","green tea","herbal tea","black tea"]
and skip "herbal tea".
store the other teas in an array named 'preferredteas' */
// let array=["chai","green tea","herbal tea","black tea"];
// let preferredtea=[];
// for(const tea of array ){
//     if(tea==="herbal tea"){
//         continue;
//     }
//     preferredtea.push(tea);
// }
// console.log(preferredtea);
/*
5.use a 'for-in' loop to loop through an object
 containing city populations. 
  stop the loop when the population of "berlin" is found and store all 
  previous cities ' populations in a new object named 'citypopulation'
  let citiespopulaton ={
  "london" : 8900000
  "new york : 8400000,
  "paris :2200000,
  "berlin : 3500000 
};
*/
// let citiespopulaton ={
//   "london" : 8900000,
//   "new york": 8400000,
//   "paris" :2200000,
//   "berlin" : 3500000,
// };
// let citypopulation = {};
// for (let city in citiespopulaton) {
//     if (city === "berlin") break;
//     citypopulation[city] = citiespopulaton[city];
// }
// console.log(citypopulation);
// for(const city in citiespopulaton){
//     console.log(citiespopulaton[city]);
// }
// let citynewpopulation={};
// for(const city in citiespopulaton){
//     //key =value
//     if(city === "new york") break;
//     citynewpopulation[city]=citiespopulaton[city];
// }
// console.log(citynewpopulation);
 /*
 6. use a 'for-in' loop to loop through an object containing city population.
 skip any city with a population below 3 million and store the rest in a new 
 object named 'largecities' */
//  let worldcities={
//       "sydeny": 5000000,
//       "tokyo": 9000000,
//       "berlin": 3500000,
//       "paris": 2200000
//  };
// let largecities={};
// for(const city in worldcities){
//     if(worldcities[city]<3000000) continue;
//     largecities[city]=worldcities[city]; // important to acess the line
// }
// console.log(largecities);
/*
7. write a 'foreach' loop that iterates through the array '["earl grey","green tea","chai","oolang tea"]
stop the loops when "chai" is found, and store all previous tea types in an array named 'available teas' */
// let teacollection=["earl grey","green tea","chai","oolang tea"];
// let availabletea=[];
// for(const tea in teacollection){
//     if(tea==="chai") break;
//     availabletea.push(tea);
// }
// console.log(availabletea);
// let teacollection=["earl grey","green tea","chai","oolang tea"];
// let availableteas=[];
// teacollection.forEach((tea)=>{
//     console.log(tea);
// });
//  let teacollection=["earl grey","green tea","chai","oolang tea"];
//  let availableteas=[];
//  teacollection.forEach(function(tea){
//     if(tea==="chai"){
//         return ;
//     }
//     availableteas.push(tea);
//  })
//  console.log(availableteas);
 /*
8. Write a 'foreach' loop that iterates through the array 
'["berlin","tokyo","sydney","paris"] .
skip "sydeny" and store the other cities in a new array
named 'traveledcities. */
// let citynames=["berlin","tokyo","sydney","paris"];
// let traveledcities=[];
// citynames.forEach(function(city){
//     if(city==="sydney") {
//         return;}
//     traveledcities.push(city);
// });
// console.log(traveledcities);
// without function
// let citynames=["berlin","tokyo","sydney","paris"];
// let traveledcities=[];
// citynames.forEach((city)=>{
//     if(city==="sydney"  ){
//         return ;}
//         traveledcities.push(city);
// });
// console.log(traveledcities);

/*
9. write a 'for' loop that iterates through the array '[2,5,7,9]'
skip the value '7' and multiply the rest by 2. Store the result 
in a new array named 'doublenumbers'*/
let num=[2,5,7,9];
let doublenumbers=[];
//return can only be used inside a function else break or continue will going to be used
for(let i=0;i<num.length;i++){
    if(num[i]===7) continue;
    
    doublenumbers.push(num[i]*2);
};
console.log(doublenumbers);
/*
10. use a 'for-of' loop  to iterate through the array ["chai","green tea","black tea","jasmine tea","herbel tea"]
and stop when the length of the current tea name is greater than 10 .
store the teas iterated over in array named 'shortTea'*/
let longtea= ["chai","green tea","black tea","jasmine tea","herbel tea"];
let shortTea=[];
let i;
for(tea of longtea){
    if(tea.length > 10 ) break ;
    shortTea.push(tea);
}
console.log(shortTea);