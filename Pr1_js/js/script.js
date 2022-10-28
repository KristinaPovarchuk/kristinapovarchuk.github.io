//--------------------------- task 1
 


 
var str = ['a', 'b', 'c'],
    num = [1, 2, 3];
var strNum = str.concat(num);

document.getElementById('task1').innerHTML = strNum;
 

//--------------------------- task 2
var str1 = ['a', 'b', 'c'];

str1.push('d','e')

document.getElementById('task2').innerHTML = str1;
//--------------------------- task 3
 var num1 = [1, 2, 3];

 num1 = num1.reverse();
 
 document.getElementById('task3').innerHTML = num1;
 //--------------------------- task 4


 var arr1 = ['js', 'css', 'jq']

 document.getElementById('task4').innerHTML = arr1.pop();

 //--------------------------- task 5
var arr2 =[1,2,3,4,5]
 arrSilce = arr2.slice(3,5)
 document.getElementById('task5').innerHTML = arrSilce;
//--------------------------- task 6

var arr3 =[1,2,3,4,5]
  arr3.splice(1,2)
  document.getElementById('task6').innerHTML = arr3;
//--------------------------- task 7
var arr3 =[1,2,3,4,5]
arrSplice = arr3.splice(1,3)
document.getElementById('task7').innerHTML = arrSplice;
//--------------------------- task 8

var arr3 = [1, 2, 3, 4, 5];
arr3.splice(3,0, "a", "b", "c");
document.getElementById('task8').innerHTML = arr3;

//--------------------------- task 9

arr3 = [1, 2, 3, 4, 5];
arr3.splice(1,0, "a", "b",);
arr3.splice(6,0, "c",);
arr3.splice(8,0, "e",);

document.getElementById('task9').innerHTML = arr3;

//--------------------------- task 10
const points = [3, 4, 1, 2, 7];
points.sort(function(a, b){return a-b});
document.getElementById("task10").innerHTML = points;

//--------------------------- task 11
var objectTask11 = {
  js: 'test',
   jq: 'hello', 
  css: 'world'
};
  document.getElementById("task11").innerHTML = Object.keys(objectTask11);

//--------------------------- task 12
var str = 'aaa@bbb@ccc';
document.getElementById("task12").innerHTML = str.replace(/@/g, '!');

//--------------------------- task 13
var date = new Date('2025-12-31')
date = ('31/12/2025')
document.getElementById("task13").innerHTML =date;

//--------------------------- task 14
 
str = 'я вчу javascript!'
document.getElementById("task14").innerHTML = str.split('');

//--------------------------- task 15
arr = ['x']
arr.length = 6

for (var i = 1; i < arr.length; i++) {
    arr[i] = arr[i - 1] + 'x'
}

    
document.getElementById("task15").innerHTML = arr;



//--------------------------- task 16

function arrayFill(str, numEl) {
  let arr = []
  arr.length = numEl
  for (let index = 0; index < arr.length; index++) {
      arr[index] = str
  }
  return arr;
}
arr = arrayFill('x', 4)
document.getElementById("task16").innerHTML = arr
//--------------------------- task 17

arr = [
  [
      [1, 2],
      [3, 4]
  ],
  [
      [5, 6],
      [7, 8]
  ]
]

let sum = 0;

arr = arr.flat(Infinity)

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
document.getElementById("task17").innerHTML = sum
//--------------------------- task 18
function task18Foo() {
let styles = ['Jazz', 'Blues']
styles.push('Rock-n-Roll')
styles[Math.round((styles.length - 1) / 2)] = 'Classics'
styles.unshift('Rap', 'Reggae')
document.getElementById("task18").innerHTML = "Додано два елементи в початок -> " + styles + "<br>"
};
document.getElementById("task25").innerHTML = "Сума ->" + sumSalaries(salaries) + "<br>"