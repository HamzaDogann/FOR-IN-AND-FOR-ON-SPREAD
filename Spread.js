//Spread 

//! Eski yöntem

let numbers = [10,20,30,40]

function add(a,b,c,d){
    console.log(a+b+c+d);
}


add(numbers[0],numbers[1],numbers[2],numbers[3]) //todo uzun uzun yazarız normalde.

//!Yeni yöntem
//todo | Alsana kısaca nasıl yapılır;

add(...numbers) //? Bu kadar basit.

/*
  ...numbers --=----> numbers[0],numbers[1],numbers[2],numbers[3]
*/

const diller1 = ["Java","C#"]
const diller2= ["Php","Python"]
// const diller2= ["Php","Python" ,diller1[0], diller1[1] ] //! üstteki dizinin verileri aşağıdaki dizide de olsun istersek
// Bunun yerine öğrendigimiz Spread metodunu kullanabiliriz (...numbers)

const diller3=[...diller1,...diller2]
console.log(diller3)



//! Başka bir örnek.

let array1 = ["Enes","Ali","Veli","Mehmet"];
let array2 = [...array1];

console.log(array2)
