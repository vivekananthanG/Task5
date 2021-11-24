//https://docs.google.com/document/d/1TPk3wqxDFi64WV-6hJOkYEzBaAYxNvZ4T9hRJGgvFjw/edit


//*********Do the below programs in anonymous function & IIFE*************

//Print odd numbers in an array

let arr=[0,1,2,3,4,5,6,7,8,9];

//anonymous funtion

let data = function(arr)
{  
     let val=[];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i] % 2 != 0)
        { 
            val.push(arr[i])
        }
    }
    return val
}

console.log(data(arr));

//IIFE

(function()
{  
     let val=[];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i] % 2 != 0)
        { 
            val.push(arr[i])
        }
    }
    console.log(val)
}
)(arr);

//Convert all the strings to title caps in a string array

let str=["guvi","javascript","course"]

//anonymous funtion

let data1 = function(str)
{  
     let val=[];
    for(let i=0;i<str.length;i++)
    {
       val.push(str[i][0].toUpperCase() + str[i].slice(1))
    }
    return val
}

console.log(data1(str));

//IIFE

(function(str)
{  
     let val=[];
    for(let i=0;i<str.length;i++)
    {
       val.push(str[i][0].toUpperCase() + str[i].slice(1))
    }
    console.log(val)
})(str);

//Sum of all numbers in an array

let ref=[0,1,2,3,4,5,6,7,8,9];
//anonymous funtion

let viv=function () {
    let sum=0;
    for(let i=0;i<ref.length;i++){
    sum+=ref[i]
    }
    return(sum)
    }
console.log(viv(ref));

//IIFE
(function () {
let sum=0;
for(let i=0;i<ref.length;i++){
sum+=ref[i]
}
console.log(sum)
})(ref);


//Return all the prime numbers in an array

let pri = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//anonymous funtion

let viv1=function () {
    let prime = [];
    for (let i = 0; i <pri.length; i++) {
        if(pri[i]==0 || pri[i]==1)
        {
            continue
        }
        if (pri[i] === 2) {
            prime.push(pri[i])
        }
        else {
            let flag = true
            for (let j = 2; j < pri[i]; j++) {
                if (pri[i] % j === 0) {
                    flag = false
                }
            }
            if (flag === true) {
                prime.push(pri[i])
            }
        }
    }
    return(prime)
}
console.log(viv1(pri));

//IIFE
(function () {
    let prime = [];
    for (let i = 0; i <pri.length; i++) {
        if(pri[i]==0 || pri[i]==1)
        {
            continue
        }
        if (pri[i] === 2) {
            prime.push(pri[i])
        }
        else {
            let flag = true
            for (let j = 2; j < pri[i]; j++) {
                if (pri[i] % j === 0) {
                    flag = false
                }
            }
            if (flag === true) {
                prime.push(pri[i])
            }
        }
    }
    console.log(prime)
})(pri);

//Return all the palindromes in an array

let pal=["madam","mom","malayalam","rayar","kaaa"]

//anonymous funtion

let palindrom = function(pal)
{  
     let val=[];
    for(let i=0;i<pal.length;i++)
    {
       let a=pal[i].split('');
       let k=a.reverse();
       let t=k.join(''); 
       if(t===pal[i])
       {
       val.push(pal[i])
       }
    }
    return val
}

console.log(palindrom(pal));

//IIFE

(function(pal)
{  
     let val=[];
    for(let i=0;i<pal.length;i++)
    {
       let a=pal[i].split('');
       let k=a.reverse();
       let t=k.join(''); 
       if(t===pal[i])
       {
       val.push(pal[i])
       }
    }
    console.log(val)
})(pal);

//Return median of two sorted arrays of same size

let a=[1, 12, 15, 26, 38]
let b=[2, 13, 17, 30, 45]

let medi=function(a,b){
var a1 = a.length;
var b1 = b.length;
if (a1 == b1){
      let k=[...a,...b]
      let datam=k.sort((t,d)=>t-d);
      return ("Median is "+ (datam[a1-1]+datam[a1])/2);
}
else{
    return ("Doesn't work for arrays of unequal size");}
}

console.log(medi(a,b));

//IIFE

    (function (a, b) {
        var a1 = a.length;
        var b1 = b.length;
        if (a1 == b1) {
            let k = [...a, ...b];
            let datam = k.sort((t, d) => t - d);
            console.log("Median is " + (datam[a1 - 1] + datam[a1]) / 2)
        }
        else {
            console.log("Doesn't work for arrays of unequal size")
        }
    })(a, b);

//Remove duplicates from an array


let chars1 = ['A', 'B', 'A', 'C', 'B'];

let dupli=function (chars1)
{
let uniqueChars1 = [];
chars1.forEach((c) => {
    if (!uniqueChars1.includes(c)) {
        uniqueChars1.push(c);
    }
})
return (uniqueChars1)
}

console.log(dupli(chars1));

//IIFE

let chars2 = ['A', 'B', 'A', 'C', 'B'];

(function (chars2)
{
let uniqueChars1 = [];
chars2.forEach((c) => {
    if (!uniqueChars1.includes(c)) {
        uniqueChars1.push(c);
    }
})
console.log(uniqueChars1)
})(chars2)



//Rotate an array by k times

let nums=[1,2,3,4,5]
let k='3'
let nums1=[1,2,3,4,5]
let k1='3'

const rotateArray1 = function(nums, k) {

    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
  
    return nums;
  }

  console.log(rotateArray1(nums,k));

  //IIFE
(function(nums1, k1) {

    for (let i = 0; i < k1; i++) {
        nums1.unshift(nums1.pop());
    }
  
    console.log(nums1);
  }
)(nums1, k1);

//**********Do the below programs in arrow functions*******************


//Print odd numbers in an array

let s=[1,2,3,4,5]

let p=s.filter(s=>(s%2)!==0)

console.log(p)

//Convert all the strings to title caps in a string array

let s1=['vivek','samy','dhoni','rahul']

let p1=s1.map((s1)=>{return s1.charAt(0).toUpperCase()+s1.slice(1)});

console.log(p1)

//Sum of all numbers in an array

let nu=[1,2,3,4,5]

let sum1=nu.reduce((c,a)=>c+=a,0)

console.log(sum1)

//Return all the prime numbers in an array

var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);



//Return all the palindromes in an array
let str1=['foo', 'racecar', 'pineapple', 'porcupine', 'pineenip']

const result = str1.filter(str1 => str1.toLowerCase() == str1.toLowerCase().split('').reverse().join(''));

console.log(result)

