// declares the sayHello function
function sayHello() {
    let message = "Hello!"
    return message; // returns value instead of printing it
  }

  console.log(sayHello());




  

  function findAverage(x, y) {
    var answer = (x + y) / 2;
    return answer;
  }
  
  var avg = findAverage(5, 9);






function laugh() {
    var laugh = "hahahahahahahahahaha!";
    return laugh;
  }
  
  console.log(laugh()/* call the laugh function */);




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