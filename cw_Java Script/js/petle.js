/* let room = "gallery";
let suspect = "Ms. Van Cleve";
let weapon = "trophy";
let solved = false;

if (room === "dining room") {
  weapon = "knife";
  solved = true;
  suspect === "Mr. Parkes";
} else if {

}

if(solved) {
  console.log(suspect + ' did it in the ' + room + ' with the ' + weapon);
} */


/* var room = "gallery";
var suspect = "Ms. Van Cleve";

var weapon = "";
var solved = false;
if (room === "dining room") {
   weapon = "knife";
   solved = true;
   suspect === "Mr. Parkes";
} else if (room === "gallery") {
   weapon = "trophy";
   solved = true;
   suspect === "Ms. Van Cleve";
} else if (room === "billiards room") {
   weapon = "pool stick";
   solved = true;
   suspect === "Mrs. Sparr";
} else if(room === "ballroom") {
   weapon = "poison";
   solved = true;
   suspect === "Mr. Kalehoff";
}

if (solved) {
   console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
} */


//liczby parzyste
/* for (let i = 1; i < 26; i++) {
   console.log(i * 2);
} */

//liczby od 100 do 1
/* for (let i = 100; i >= 1; i--) {
   console.log(i);
} */

//liczby podzielne przez 8
/* for (let i = 1; i <= 100; i++) {
   if (i%8 === 0)
   console.log(i);
} */

/* for (let i = 1; i <= 100; i++) {
   if (i%3 === 0 || i%5 === 0)
   console.log(i);
} */

//podzielne przez 3 i 5 ale wykluczamy liczby podzielne przez 5 i 3
/* for (let i = 1; i <= 100; i++) {
   if ((i%3 === 0 || i%5 === 0) && (i % 15 != 0))
   console.log(i);
} */


/* for (let i = 1; i <= 1000; i++) {
   if ((i%3 === 0 || i%5 === 0) && (i % 15 != 0))
   console.log(i);
} */
/* 
let x = 1;
// console.log( x + " wow");

let x = x + 1;
console.log(x + " wow"); */


// var x = 1;

// while (x <= 20 /* your stop condition goes here */) {
    // console.log(x); // check divisibility
    /* if (x % 3 === 0 && x % 5 === 0) {    // print Julia, James, or JuliaJames
        console.log('JuliaJames');
    }
    
    else if (x % 3 === 0) {
    console.log('Julia'); 
    }
    
    else if (x % 5 === 0) {
        console.log('James');
    }
    
    else if (x % 3 !== 0 || x % 5 !== 0) {
        console.log(x);
    }
     
    x = x +1;
     // increment x
}
 */


 var num = 99;
 var bottle = 'bottle';
 bottles = 'bottles';

 while(num > 0) {
    if(num === 1) {
       console.log(num + " bottle" + ' of juice on the wall! '
       + num + " bottle" + ' of juice! Take one down, pass it around... ' 
       + num + " bottle" + ' of juice on the wall! ');
    }
 }
/* 
var num = 99;

while (num >= 0) {
    if (num === 1) {
    console.log(num + ' bottle of juice on the wall! '
    + num + ' bottle of juice! Take one down, pass it around... ' 
    + num + ' bottle of juice on the wall! ');
    num = 1; 
    }
   else if (num > 1) {
       console.log(num + ' bottles of juice on the wall! '
    + num + ' bottles of juice! Take one down, pass it around... ' 
    + num + ' bottles of juice on the wall! ');
   num -= 1; 
   }
   
   else (num === 0) {
     console.log(num + ' bottles of juice on the wall! '
    + num + ' bottles of juice! Take one down, pass it around... ' 
    + num + ' bottles of juice on the wall! ');
    num -= 1; 
   }
    
}
 */




var num = 99;

while (num >= 1 /* your stop condition goes here */) {
    
    if (num > 2) {
    console.log(num + ' bottles of juice on the wall! '
    + num + ' bottles of juice! Take one down, pass it around... ' 
    + (num - 1) + ' bottles of juice on the wall! ');
   }

   else if (num === 1){
      console.log(num + ' bottle of juice on the wall! '
      + num + ' bottle of juice! Take one down, pass it around... ' 
      + (num - 1) + ' bottles of juice on the wall! ');
      }
      
   
   else {
    console.log(num + ' bottles of juice on the wall! '
    + num + ' bottles of juice! Take one down, pass it around... ' 
    + (num - 1) + ' bottle of juice on the wall! ');
   }
   
/*    else {
    console.log(num + ' bottle of juice on the wall! '
    + num + ' bottle of juice! Take one down, pass it around... ' 
    + (num - 1) + ' bottles of juice on the wall! ');
    }
     */
   num = num - 1;
   
    // check value of num
    // print lyrics using num
    // don't forget to check pluralization on the last line!
    // decrement num
}