// declares the sayHello function
/* function sayHello() {
    let message = "Hello!"
    return message; // returns value instead of printing it
  }

  console.log(sayHello());


 */



/*   function findAverage(x, y) {
    var answer = (x + y) / 2;
    return answer;
  }
  
  var avg = findAverage(5, 9);


 */



/* function laugh() {
    var laugh = "hahahahahahahahahaha!";
    return laugh;
  }
  
  console.log(laugh()/* call the laugh function */
//   );



//function with loop
/*   function laugh(num) {

    let lenghtLaugh = '';
    for(let i = 0; i < num; i++) {
        lenghtLaugh += 'ha';     //+= oznacza x += y => x = x + y 
    }
    
    return lenghtLaugh + "!";
    
  }
  
  console.log(laugh(8));
 */


//function with integer
/* function isPrime(integer) {
    for(let x = 2; x < integer; x++) {
        if(integer % x === 0) {
            console.log(integer + " is divisible by " + x);
            return false
        }
    }
    return true;
}

isPrime(15); */




//return and print are not the same thing
/* function isThisWorking(input) {
    console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
    return "Returning: I am returning this string!";
  }
  
  isThisWorking(3);
 */



  //exercise
/*   function sleep() {
    console.log("I'm sleepy!");
    return "zzz";
    return "snore";
  }
  
  sleep(); */
//The function will return "zzz" and print "I'm sleepy!" to the console. "snore" will not be returned since the first return statement will exit the function.





// returns the sum of two numbers
function add(x, y) {
    return x + y;
  }
  
  // returns the value of a number divided by 2
  function divideByTwo(num) {
    return num / 2;
  }
  
  var sum = add(5, 7); // call the "add" function and store the returned value in the "sum" variable
  var average = divideByTwo(sum); // call the "divideByTwo" function and store the returned value in the "average" variable



//  exercise, results = 4
function addTen(x) {
    return x + 10;
  }
  
  function divideByThree(y) {
    return y / 3;
  }
  
  var result = addTen(2);
  console.log(divideByThree(result));






















/*   for (let num = 0; num < 6; i = i + 1) {
    console.log('print = ' + i);
}
 */


// zapis standardowy
/* const mnozenie = function(liczba1, liczba2) {
    // console.log("w środku funkcji");
    // console.log(liczba1, liczba2);
    let wynik = liczba1 * liczba2;

    return wynik;
};
 */
// console.log(mnozenie(2, 3));


// zapis strzałkowy

/* const mnozenie = (liczba1, liczba2) => liczba1 * liczba2;
console.log(mnozenie(2, 3));
 */

/* const mnozenie = (liczba1, liczba2) => {
    return liczba1 * liczba2;
};

console.log(mnozenie(2, 2));
 */

/* const mnozenie = liczba => liczba * 2;


console.log(mnozenie(4)); 


 */