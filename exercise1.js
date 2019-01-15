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

let android = {name: "default", age: 0, occupation: "default"};

//document.write(android.age,android.name,android.occupation);

function runIt(){
  android.name = document.getElementById("name").value;
  android.age = document.getElementById("age").value;
  android.occupation = document.getElementById("occupation").value;
    
document.getElementById("myDetails").innerHTML = (android.name + " " + android.age + " " + android.occupation);

    if(android.age>19 && android.age<41) {
    console.log(true);
} else{
    console.log(false);
};
    
};
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

for(let i=0; i<11; i++) {
    if(i%2==0){
    console.log(i);
    }
        
};

for(let i=0; i<100; i++) {
    if(i%3==0 && i%5==0){
    document.write("FizzBuzz"<\br>);
    } else if(i%3==0){
        console.log("Fizz");
    } else if(i%5==0){
        console.log("Buzz");
    } else{
        console.log(i);
    }
        
};





