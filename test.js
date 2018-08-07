// console.log("Works")

var x=9, y=10;
function add(num1, num2){
  console.log(num1 + num2)
}
add(x,y)
//var sum = add(20, 35)
// console.log(sum + sum)

function randomValue(){
   return Math.floor(Math.random()*20 +1)
}
 console.log(randomValue())

function sumUp3(x,y,z){
  console.log(x)
  console.log(y)
  console.log(z)
  console.log(x + y+ z)
}

sumUp3(randomValue(), randomValue(), randomValue())