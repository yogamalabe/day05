//Do the below programs in anonymous function & IIFE
//a)Print odd numbers in an array
//1)Anonymous Function
var temp=[];
var odd =function(arr){
       for(var i=0;i<arr.length;i++){
      if(arr[i]%2!==0){
          temp.push(arr[i]);
      }
  }
    return temp.join(" ");
  }
  console.log(odd([1,2,3,4,5,6])); //output 1 3 5
  
//2)IIFE Function
var temp=[];
  (function odd (arr){
       for(var i=0;i<arr.length;i++){
      if(arr[i]%2!==0){
          temp.push(arr[i]);
      }
  }
  }([1,2,3,4,5,6]));
  console.log(temp.join(" ")); //output 1 3 5
// ------------------------------------------- //
//B)Convert all the strings to title caps in a string array
//1)Anonymous Function
var newstr="";
var titleCase = function(str){
   newstr = str.toLowerCase().split(' ');
  for (var i = 0; i < newstr.length; i++) {
      newstr[i] = newstr[i].charAt(0).toUpperCase() + newstr[i].slice(1);
  }
  return newstr.join(' ');
  }
  console.log(titleCase("guvi geek"));   //OUTPUT : Guvi Geek

  //2)IIFE Function
  var newstr="";
  (function titleCase (str){
       newstr = str.toLowerCase().split(' ');
    for (var i = 0; i < newstr.length; i++) {
        newstr[i] = newstr[i].charAt(0).toUpperCase() + newstr[i].slice(1);
    }
  }("guvi geek"));
   console.log(newstr.join(' '));  //OUTPUT : Guvi Geek
// -------------------------------------------------------- //

//C)Sum of all numbers in an array
//Anonymous Funtion
var sum=0;
  var addition=function(arr){
   for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
  }
    return sum;
  }  
  console.log(addition([1,2,3,4,5,6]));         //output : 21

  //IIFE Funtion
  var sum=0;
  (function addition (arr){
       for(let i=0;i<arr.length;i++){
           sum=sum+arr[i];
           }
  }([1,2,3,4,5,6]));
  console.log(sum);  //output : 21
// --------------------------------------------- //

//D)Return all the prime numbers in an array
//Anonymous Function
var a;
var temp=[];
var checkPrime = function (arr) {
 for(a=2;a<=arr.length;a++){
     var count=0;
     for(var i=1;i<=a;i++){
         if(a%i===0){
             count++;
         }
     }
     if(count==2){
        temp.push(a);
     }
 }
 return temp.join(" ");
}
console.log(checkPrime([2,3,4,5,6,7,8,9]));             //OUTPUT : 2 3 5 7

//IIFE Function
var a;
var temp=[];
(function checkPrime(arr) {
 for(a=2;a<=arr.length;a++){
     var count=0;
     for(var i=1;i<=a;i++){
         if(a%i===0){
             count++;
         }
     }
     if(count==2){
        temp.push(a);
     }
 }
}([2,3,4,5,6,7,8,9]));
console.log(temp.join(" "));   // OUTPUT : 2 3 5 7

// -------------------------------------------------- //
//E)Return all the palindromes in an array
//Anonymous Function
var arr = [];
var checkPalindrom = function(words){
var str = words.slice(0);
var pal = str.toString().split("").reverse().join("").split(",");
for (let i = 0; i < words.length; i++) {
  for (let k = 0; k < pal.length; k++) {
    if (words[i] == pal[k]) {
            arr.push(words[i])
    }
  }
   
}
   return arr;
}
console.log(checkPalindrom(["cool", "racecar", "pineapple", "porcupine", "pineenip","ada"])); //OUTPUT : [ 'racecar', 'pineenip', 'ada' ]

//IIFE Function

var arr = [];
 (function checkPalindrom(words){
var str = words.slice(0);
var pal = str.toString().split("").reverse().join("").split(",");
for (let i = 0; i < words.length; i++) {
  for (let k = 0; k < pal.length; k++) {
    if (words[i] == pal[k]) {
            arr.push(words[i])
    }
  }
   }
}(["cool", "racecar", "pineapple", "porcupine", "pineenip","ada"]));
console.log(arr);           //OutPut : [ 'racecar', 'pineenip', 'ada' ]

// -------------------------------------------------------------------------------------------------------------- //
//F)Return median of two sorted arrays of the same size.
//Anonymous Function
var findmedian = function (arr1, arr2, n){
  var i = 0; 
  var j = 0; 
  var count;
  var m1 = -1;
  var m2 = -1;
  for (count = 0; count <= n; count++)
  {
      
      if (i == n)
      {
          m1 = m2;
          m2 = arr2[0];
        //  break;
      }

      else if (j == n)
      {
          m1 = m2;
          m2 = arr1[0];
          //break;
      }
      if (arr1[i] <= arr2[j])
      {
          m1 = m2; 
          m2 = arr1[i];
          i++;
      }
      else
      {
          m1 = m2; 
          m2 = arr2[j];
          j++;
      }
  }

  return (m1 + m2)/2;
}
var arr1 = [1,5,13,24,35];
var arr2 = [3,8,15,17,32];
var n1 = arr1.length;
var n2 = arr2.length;
if (n1 == n2){
 console.log("Median is "+ findmedian(arr1,arr2,n1));      //OUTPUT : Median is 14
}

//IIFE Function
var arr1 = [1,5,13,24,35];
var arr2 = [3,8,15,17,32];
var n1 = arr1.length;
var n2 = arr2.length;
var median;
(function findmedian (arr1, arr2, n){
    var i = 0; 
    var j = 0; 
    var count;
    var m1 = -1;
    var m2 = -1;
    for (count = 0; count <= n; count++)
    {
        
        if (i == n)
        {
            m1 = m2;
            m2 = arr2[0];
        }
 
        else if (j == n)
        {
            m1 = m2;
            m2 = arr1[0];
        }
        if (arr1[i] <= arr2[j])
        {
            m1 = m2; 
            m2 = arr1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = arr2[j];
            j++;
        }
    }
    median = (m1 + m2)/2;
}(arr1,arr2,n1));
 console.log("Median is "+ median);    // OUTPUT: Median is 14

//---------------------------------------------//

//G)Remove duplicates from an array
//Anonymous Function
var removeDuplicates= function(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([10,20,20,30,40,30,50,40,70,80]));   //OUTPUT:[ 10, 20, 30, 40, 50, 70, 80 ]

//IIFE
var newarr=[];
    (function removeDuplicates (arr) {
          newarr= [...new Set(arr)];
    }([10,20,20,30,40,30,50,40,70,80]));
     console.log(newarr);                         //OUTPUT: [ 10, 20, 30, 40, 50, 70, 80 ]
//---------------------------------------------------------------------------------------------------//
//H)Rotate an array by k times
//Anonymous Function
var temp=[];
var rotatearray = function(arr,n,k){
k=k%n;
for(var i = 0; i < n; i++){
    if(i<k){
        temp.push(arr[n + i - k]);
    }else
    {
        temp.push(arr[i - k]);
    }
}
    return temp.join(" ");
}
var arrele=[1,3,5,7,9];
var n=arrele.length;
var k=2;
console.log(rotatearray(arrele,n,k));  //OUTPUT : 7 9 1 3 5

//IIFE 

var temp=[];
(function rotatearray (arr,n,k){
k=k%n;
for(var i = 0; i < n; i++){
    if(i<k){
        temp.push(arr[n + i - k]);
    }else
    {
        temp.push(arr[i - k]);
    }
}
    
}([1,3,5,7,9],5,2));
console.log(temp.join(" "));   //OUTPUT : 7 9 1 3 5

//----------------------------------------------------------------------------------------------------------//


//3.Do the below programs in arrow functions.
  //a)Print odd numbers in an array
  //Arrow Function
  var temp=[];
  var odd=(arr)=>{
       for(var i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
          temp.push(arr[i]);
      }
   }
    return temp.join(" ");
}
  console.log(odd([1,2,3,4,5]));  //output : 1 3 5
  // ------------------------------------------------------------ //
 //B)Convert all the strings to title caps in a string array
  //Arrow Funtion
  var newstr="";
  var titleCase=(str)=>{
        newstr = str.toLowerCase().split(' ');
    for (var i = 0; i < newstr.length; i++) {
        newstr[i] = newstr[i].charAt(0).toUpperCase() + newstr[i].slice(1);
    }
    return newstr.join(' ');
}
  console.log(titleCase("guvi geek"));  //OUTPUT : Guvi Geek
// ------------------------------------------------------------------- //
  //C)Sum of all numbers in an array
  //Arrow Function
  var sum=0;
  var additon=(arr)=>{
       for(let i=0;i<arr.length;i++){
         sum=sum+arr[i];
   }
    return sum;
}
  console.log(additon([1,2,3,4,5,6]));      //output : 21
  // ---------------------------------------------- //
 //D)Return all the prime numbers in an array
 //Arrow Function
 var a;
 var temp=[];
 var checkPrime = (arr) => {
  for(a=2;a<=arr.length;a++){
      var count=0;
      for(var i=1;i<=a;i++){
          if(a%i===0){
              count++;
          }
      }
      if(count==2){
         temp.push(a);
      }
  }
  return temp.join(" ");
};
console.log(checkPrime([2,3,4,5,6,7,8,9]));   // OUTPUT : 2 3 5 7
// ---------------------------------------------------- //

//E)Return all the palindromes in an array
//Arrow Function
var arr = [];
var checkPalindrom = (words)=>{
var str = words.slice(0);
var pal = str.toString().split("").reverse().join("").split(",");
for (let i = 0; i < words.length; i++) {
  for (let k = 0; k < pal.length; k++) {
    if (words[i] == pal[k]) {
            arr.push(words[i])
    }
  }
   
}
   return arr;
}
console.log(checkPalindrom(["cool", "racecar", "pineapple", "porcupine", "pineenip","ada"]));  //OUTPUT: [ 'racecar', 'pineenip', 'ada' ]

// -------------------------------------------------------------------------------------------------------------------------------------------- //
