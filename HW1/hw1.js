/* 1 */
/* function makeMinus(num){
    if( num > 0 ) {
        let numMinus = num * -1; 
        return numMinus;
    }
    else{
        let numMinus = num ;
        return numMinus;
    }
}
 */

/* 2 */
/* 
function checkValue(val) {
    if( typeof(val) === "boolean"){
return "true";
    }
    else{
        return "false"
    }
} */


/* Тернарные операторы
 */
/* 2 */
/* function checkValue(val) {
   return typeof(val) === "boolean" ? "true" : "false";
    } */


 /*    function word(val) {
        for(let i = 0 ; i < val[0].length; i++  ) {
            console.log(val[0][i]);
        }
                    }
        
        word(["Live", true, 1]) */

/* 
        function arrayFilter(arr){
for(let i=0; i< arr.length; i++) {
    if(typeof(arr[i]) === "string") {
        return arr[i];
    } 
    
}
return 'no string in array'
        }
        
         

        function stringIteration(val){
let word = arrayFilter(val);
let back = [];

for(let i = 0 ; i < word.length; i++  ) {
    back.push(word[i])
}
return back
        } */


/* 


        function filter(array){
            let word = undefined
            for(let i =0; i < array.length; i++ ) {
                if(typeof(array[i]) === "string"){
                    word = array[i];
                } 
            }
            for(let i =0; i < word.length; i++ ){
                console.log(word[i])
            }
        }  */





  /*       function mix(array){
            let a = [];
            for( let i = 0; i < array.length; i++) {
                if (typeof(array[i]) === "number") {
                    a.push(array[i]) ;
                }
            
            }
            return a;
        }
 */


/*         function mix2(array){
          return  array.filter((val) => typeof(val) === "boolean")
        
        } */

/* 

        function test(array){
            let c = [];
            for(let i =0 ; i < array.length; i++ ){
            c.push(array[i] / 2);
            }
return c;
        } */


/*         function plusWord(array){
            return array.map((word) => word + "!") 
        } */


/* 
        function test(array){
return array.filter((number)=> typeof(number) === "number").map((item) => item * 10 )

        }  */

/* 
        function test(array){
            return array.filter((item) => typeof(item) === "string").map((item) => item.slice(1));
        } */


/*          function word(item){
            return item.split("").map((test) =>  "a" + test ); 
        } 
 */

/*         function test(arr){
            return arr.filter((word) => typeof(word) === "string").map((word) => word.slice(0, -1)).join(" ")
        } */


/* 

        function word(val){
            return val.split("");
        } */



/*         function word(val){
            let arr = []
            for( let i = 0; i<val.length; i++ ){
arr.push(val[i]);
            }
            return arr
        } */



/*         function num(arr){
            return arr.filter((elem) => typeof(elem) === "number").map((elem) => elem + "");
        } */


/*         function test(arr){
            let word = []
            for ( let i=0; i< arr.length; i++) {
 if(typeof(arr[i]) === "string") {
    word.push(arr[i]) ; 
 }

            }
return word
        }  */


/* 
        function test(val){
            if(Array.isArray(val)){
return "It is array"
            }
else{
    return "it is not array"
} 
        } */


/*         function test(val){
            return Array.isArray(val) ? "It is array" : "it is not array";
        } */



/*         function word(val){
            return val.length > 5 && val[0] ==="T" ;
        } */



/*         function check(num){
            return num > 0 && num % 7 === 0 ;
        } */


/*         function checkNum(num){
            return num < 0 ? num : -num ;
        } */


/*         function word(val){
           return val.split("").reverse().join("") ;
        } */


/*         function word(val){
            let testWord = "";
            for(let i = 0 ; i < val.length; i++){
testWord = val[i] + testWord  ;
            }
            return testWord
        } */



/*         function word(val){
            return val.filter( (elm) => typeof(elm) === "number" && elm > 0)
        } */







        ///////////////////упражнения\\\\\\\\\\\\\\\\\\\\\\\\\
        

    /*     const sentence =  ['Привет, ', 'мир', '!'] 
        
        function sentenceDelete(arr){
         arr[0]= "Пока" 
         return  sentence;
        }   */


//2///


/* var arr = {
	'ru':['голубой', 1, true],
	'en':['blue', 'red', 'green'],
};
 */
/* 
console.log(arr['ru'], typeof(arr['ru'] === "string")) */


/* function findString(arr){
    return  arr.filter((val) => typeof(val) === "boolean")
}  */


///3\\\\\
/* 
var obj = {
    Коля: '1000',
     Вася: '500', 
     Петя: '200',
    }; */



    ///4///
/*     let fruit = prompt("Какой фрукт купить?", "apple");

    let bag = {
      [fruit]: 5, 
    };
    
    alert( bag.apple );  */



    ////5////
/*     let user = {     
        name: "John",  
        age: 30,
        worker: true,
        firstname: "John",  
        exp: 15,
      };

console.log(user.name , user.age) */





/*       console.log( user.name );
      user["name"]; */

/*       user.test = "rest"

      delete user.test */

/*     user.age = 20,
 */





/* function objMix(obj){
    return Object.keys(obj) 
} */


/* function objMix(obj){
    let objKey= [];
for (let key in obj){
objKey.push(key)
}
return objKey
     
} 
 */

/* function objMix(obj){
    return Object.values(obj) 
} */

/* function objMix(obj){
    let objVal= [];
for (let key in obj){
    objVal.push(obj[key])
}
return objVal
     
} */

/* 
function objMix(obj){
let key= Object.keys(obj);
let val = Object.values(obj);

return [key, val ]

} */

/* function objMix(obj){
    let keys = [];
    let val = [];
    for (let key in obj) {
        keys.push(key);
        val.push(obj[key])
    }
    return [keys, val ]
} */


/* function objMix(arrKeys, arrValues ){
    let objTest = {};
    for (let i = 0; i < arrKeys.length; i++  ){
        objTest[arrKeys[i]] = arrValues[i] 
    }
return objTest
} */




/*  fetch("https://dummyjson.com/products").then((elm) => elm.json()).then((elm) => console.log(elm)) */

/* async function day(){
    let responce = await fetch("https://dummyjson.com/products")
    responce = await responce.json()
    console.log(responce)
}  */



/* 
fetch("https://dummyjson.com/products").then((response) => response.json()).then((resp) => console.log(resp))
console.log("test1")
console.log("test2")
console.log("test3") */


/* async function test(){
    let response =  await fetch("https://dummyjson.com/products");
    response =await response.json();
    console.log(response)
    console.log("test1")
console.log("test2")
console.log("test3")
} 
 */



/*  async function getData(){
let data = await fetch("http://localhost:3000/companies");
data = await data.json();
console.log(data);
}  */

/* 
async function postData(){
    let data =  await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        
          },
          body: JSON.stringify(
            {
                id: "91",
                firstName: "Семён",
                lastName: "Петров",
                email: "SemenPetrov+446@gmail.com",
                age: 34
              },
          )
    });

    let response = await data.json();
    let status = data.status;

    console.log(status);
    console.log(response)

} */




/* async function newPostData(data){
    let newGetData = await fetch("http://localhost:3000/companies", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        
          },
          body: JSON.stringify(data) 

    });
let status = newGetData.status;
let resp = await newGetData.json();

console.log(status);
console.log(resp);

}   */


/* async function newPutData(){
    let newPutData = await fetch("http://localhost:3000/users/90", {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        
          },
          body: JSON.stringify( {
            id: "92",
            firstName: "Семён",
            lastName: "Петров",
            email: "SemenPetrov+446@gmail.com",
            age: 34
          },
          ) 

    });
let status =  newPutData.status;
let resp = await newPutData.json();

console.log(status);
console.log(resp);

}  
 */

/* async function newDeleteData(){
    let newDeleteData = await fetch("http://localhost:3000/users/2", {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        
          },
        })
let statusNew = newDeleteData.status;

console.log(statusNew);

} 
  */

/* 
try{
    console.log(test)
}
catch (err){
    console.log(err.stack)
} */
/* 
console.log(test) 

console.log("test") */


/* fetch("http://localhost:30042343420/users/5648").then((elm) => elm.json()).then((elm) => console.log(elm)).catch((error) => console.log(error)) */

/* console.log(new Error("text")) */
/* try {
    throw new Error("text error")
}
catch(err){
    console.log(err)
} */

/* function arrayMix (arr1, arr2){
let a = [];
for(let i = 0; i< arr1.length; i++ ){
    a.push(arr1[i]);
}
for(let i = 0; i< arr2.length; i++ ){
    a.push(arr2[i]);
}
return a; 
} */


/* function arrMixS (arr1, arr2) {
    return [...arr1, ...arr2] 
} */

/* function test(arr1, arr2){
    console.log([arr1, arr2])
    console.log(arguments)
} */

/* function test(){
      console.log(arguments)

} */



/* function test(){
    for(let i = 0 ; i< arguments.length; i++){
        console.log(arguments[i])
    }
} */

/* function test(){
    let sum = 0;
    for(let i = 0 ; i< arguments.length; i++){
        sum += arguments[i];
    }
return sum
} */

/* function test(){
    let arr = [];
    for(let i = 0 ;  i < arguments.length; i++){
if(arguments[i]<0 ){
    arr.push(arguments[i])
}
    }
    return arr;
} */

/* function test(){
    let arr = [];
    for(let i = 0 ;  i < arguments.length; i++){
if(typeof(arguments[i]) === "string"){
arr.push(arguments[i]);
}

    }
    return arr;
 }
 */

/*  function test(){
    let arr = 1;
    for(let i = 0 ;  i < arguments.length; i++){
if(typeof(arguments[i]) === "number"){
    arr *= arguments[i]
}

    }
    return arr;
 }
 */


/*  function test(arr1, arr2 = 10){
return arr1 * arr2
  
 } */

/*  function test(arr1 = "слово не указано" , arr2 = "слово не указано"){
    return arr1 + " " +  arr2
      
     } */


//////////////throw\\\\\\\\\\\\

/*      function add(x, y) {
        if (typeof x !== 'number') {
          throw 'The first argument must be a number';
        }
        if (typeof y !== 'number') {
          throw 'The second argument must be a number';
        }
      
        return x + y;
      }
      
      const result = add('a', 10);
      console.log(result);
      
      console.log("Hello world!")
 */
/*       function add(x, y) {
        if (typeof x !== 'number') {
          throw 'The first argument must be a number';
        }
        if (typeof y !== 'number') {
          throw 'The second argument must be a number';
        }
      
        return x + y;
      }
      
      try {
        const result = add('a', 10);
        console.log(result);
      } catch (e) {
        console.log(e);
      }
      

      console.log("Hello world!") */


/* 
      function add(x, y) {
        if (typeof x !== 'number') {
          throw new Error('The first argument must be a number');
        }
        if (typeof y !== 'number') {
          throw new Error('The second argument must be a number');
        }
      
        return x + y;
      }
      
      try {
        const result = add('a', 10);
        console.log(result);
      } catch (e) {
        console.log(e.name, ':', e.message);
      }
      
      console.log("Hello world!") */



/*       function myFunction(x) {
       
        try {
          if(x < 10 &&  x > 5) {
            console.log("It`s ok")
          };
          if(x > 10) throw "too high";
          if(x < 5) throw "too low";
        }
        catch(err) {
          console.log( "Input " + err);
        }
      } */

/*       function findArr(){
let a = []
       for(let i =0; i < arguments.length ;  i++) {
        if(Array.isArray(arguments[i])){
a.push(arguments[i])
        }
       }
       return a; 
      } */


      function findArr(){
        let a = []
               for(let i =0; i < arguments.length ;  i++) {
                Array.isArray(arguments[i])  ? a.push(arguments[i]) : null;
                }
               
               return a; 
            }