//alert("hello world!");
//
//let a = "dave";
//let b = "jones";
//
//alert(a +b);
//console.log(a);
//document.write(b);
//
//
//function square(a) {
//    
//   return a*a;
//       
//}
//
//console.log(square(3));
//
//function sumOf(a,b,c) {
//    return a + b + c;
//}
//
//document.write(sumOf(2,3,4));
//
//let Person = {name: "dave", age:28, occupation:"software"};
//
//console.log(Person);
//
//Person.age = 30;
//
//console.log(Person);
//
//let newAge = 40;
//
//function makeMeOld(newAge) {
//    Person.age = 40;
//    console.log(Person);
//};

//let android = {name: "default", age: 0, occupation: "default"};
//
////document.write(android.age,android.name,android.occupation);
//
//function runIt(){
//  android.name = document.getElementById("name").value;
//  android.age = document.getElementById("age").value;
//  android.occupation = document.getElementById("occupation").value;
//    
//document.getElementById("myDetails").innerHTML = (android.name + " " + android.age + " " + android.occupation);
//
//    if(android.age>19 && android.age<41) {
//    console.log(true);
//} else{
//    console.log(false);
//};
//    
//};
//
//let norman = "My name is Elliott";
//
//console.log(norman);
//
//console.log(norman.toUpperCase());
//
//console.log(norman.concat(12));

//let myList = ['pizza','pasta','beer'];
//
//console.log(myList);
//
//myList[myList.length] = 'crisps';
//
//console.log(myList);
//
//myList.pop();
//
//console.log(myList);

//if(android.age>19 && android.age<41) {
//    console.log(true);
//} else{
//    console.log(false);
//};

//for(let i=0; i<11; i++) {
//    if(i%2==0){
//    console.log(i);
//    }
//        
//};

//let max = 100;
//let Fizz = "Fizz";
//let Buzz = "Buzz";
//
//for(let i=1; i<max; i++) {
//    if(i%3==0 && i%5==0){
//    console.log(Fizz + Buzz);
//    } else if(i%3==0){
//        console.log(Fizz);
//    } else if(i%5==0){
//        console.log(Buzz);
//    } else{
//        console.log(i);
//    }
//        
//};

//
//let userInput = 47;
//let count = 0;
//
//
//while(userInput>1){
//    if(userInput%3==0){
//        userInput = userInput/3;
//    } else{
//        userInput = userInput + 1;
//    }
//    count++;
//    console.log(userInput);
//};
//document.write(count);

//
//let myString = "aaaa";
//let count = 0;
//
//for (let i = 0; i < myString.length; i++) {
//  for(let j = i+1; j < myString.length; j++){
//      for(let k = j+1; k < myString.length; k++) {
//          if(myString[i]==myString[j] && myString[j]==myString[k]){
//              count++;
//          }
//      }
//  }
//};
//console.log(count);
//
//<!--OR-->
//let newCount = 0;
//for(let i = 0; i< myString.length; i++) {
//    if(myString.charAt(i)==myString.charAt(i+1) && myString.charAt(i+1) == myString.charAt(i+2)){
//        newCount++;
//    }
//}
//console.log("new " + newCount);
//
//function makeIt() {
//    let newPar=document.createElement("p");
//    let newTxt=document.createTextNode(document.getElementById("userInput").value);
//    newPar.appendChild(newTxt);
//    document.body.appendChild(newPar);
//}
//
//function destroyIt() {
//    let allOfIt = document.querySelector('p');
//    allOfIt.parentNode.removeChild(allOfIt);
//}

let requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json"
request.send();
request.onload = function() {
let requestData = request.response;
let myH1 = document.createElement("h1");
myH1.textContent = console.log(requestData);
document.getElementsByTagName("body")[0].appendChild(myH1);
}







