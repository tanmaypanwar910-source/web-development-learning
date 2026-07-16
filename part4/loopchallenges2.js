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
let teacollection=["earl grey","green tea","chai","oolang tea"];
let availabletea=[];
for(const tea in teacollection){
    if(tea==="chai") break;
    availabletea.push(tea);
}
console.log(availabletea);