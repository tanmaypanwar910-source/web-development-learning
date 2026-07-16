/*1. Declare an array name 'teaflavors' that conatins the strings "green tea","black
 Access the first element of the array and store it in a variable name 'firstTea'*/ 

 let teaflavors=["green tea","black tea","oolong tea"]
 const  firstTea = teaflavors[0];
 console.log(firstTea);
 /*
 2. Declare an array named 'cities' containing "london" ,"tokyo". "paris" , and "newyork" acess the third element in the array and store it in a variable name 'favoritecity*/
 let cities=["london","tokyo","paris","newyork"]
 const favoritecity=cities[2];
 console.log(favoritecity);
 /*
 3.you have an array named 'teatypes' containing "herbal tea","white tea", and "masala chai" change the second element of the array to "jasmine tea" */
 let teatypes=["herbel tea","white tea","masala tea"];
 teatypes[2]="jasmine tea";
 console.log(teatypes);
 /* 
 4. Declare an array named 'citiesvisites' containing "mumbai","sydney"
 Add "Berlin" to the array using the 'push' method */
 let citiesvisited=["mumbai","sydney"];
 //when we know thw position 
//  citiesvisited[1]="berlin";
//  console.log(citiesvisited);
//  citiesvisited[2]="berlin";
//  console.log(citiesvisited);
 //incase of the long  array size which we don't know
 citiesvisited[citiesvisited.length]="berlin";
 console.log(citiesvisited);
 // with the help of the push
 citiesvisited.push("berlin");//to push at the [end ]
 console.log(citiesvisited);
 /*
 5. you have an array named 'teaorders with "chai","iced tea","matcha",and "ear grey".
 Remove the last elelment of the array usinng the 'pop" method and store it in a variable name lastorder */
 let teaorders=["chai","ices tea"," matcha"," earl grey"];
// teaorders.pop("ear grey");
 console.log(teaorders);
 let lastorder=teaorders.pop();
 console.log(teaorders);
 console.log(lastorder);
 /*
 6. you have an array named 'popularteas' containing "green tea","oolang tea"and "chai ".
 create a soft copy of this array named 'softcopyteas */
 let popularteas=["green tea"," oolang tea","chai"];
 let softteas=popularteas;
 popularteas.pop();
 console.log(softteas);
 console.log(popularteas);
 //in array pop()  impact both   as in the above example
 /*
 7.you have an array named 'topcities' containing "berlin","singapore",and "newyork".
 create a hardcopy of this array named 'hardcopycities'*/
 let topcities=["berlin","singapore","newyork"];
 //let hardcoprcities=[...topcities];
 let hardcoprcities=topcities.slice();
 topcities.pop();
 console.log(topcities);
 console.log(hardcoprcities);
 /*
 8. you have two arrays: 'europeancities' containing "paris" ans "rome" , and 'asiancities' containing "tokyo" and "bangkok".
 merge these two arrays into a new array named 'worldcities'. */
 let europeancities=["paris","rome"];
 let asiancities=["tokyo","bangkok"];
 //let wordcities=europeancities+asiancities;
 //let wordcities=[europeancities,asiancities];
 let wordcities=europeancities.concat(asiancities);

 console.log(wordcities);
 console.log(typeof wordcities);// give 2d array= ans
 /*
 9. you have an array named 'teamenu' containing "masala chai","oolang tea","green tea" and "earl grey".
 find the length of the array and store it in a variable name 'menulength'
  */
 let teamenu=["masala chai","oolang tea","green tea","earl grey"];
 let menulength=teamenu.length;
 console.log(menulength)
 /*
 10.you have an array named 'citybucketlist' containing "kyoto" ,"london","cape town"and "vancouver"
 check if "london"is in the array and store the result in a variablenamed'islondoninlist */
 let citybucketlist=["kyoto","london","capetown","vancouver"];
 let islondoninlist=citybucketlist.includes("london");
 console.log(islondoninlist);




