"use strict";
//1.

// for (let i = 0; ; i++) {
//   let sk = parseInt(prompt(`Iveskite teigiama skaiciu`));
//   if (sk < 0) {
//     console.log(`blogas pazimys ${sk}`);
//     break;
//   }
// }

//2.

// for (let i = 1; i < 100; i++) {
//   if (i % 3 == 0) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }

//3.

// for(let i=2;i<12;i++){
//     let suma = i**3
//     console.log(`${i} ** 3 = ${suma}`)
// }

//4.

// const leFamily = {
//   me: 33,
//   father: 55,
//   mother: 53,
//   sister: 32,
//   brother1: 28,
//   brother2: 25,
//   aunt: 61,
// };
// let kiek = 0;
// for (let key in leFamily) {
//   console.log(`${key} ${leFamily[key]}`);
// }

//5.

// const object = {
//     a: 15,
//     b:10,
//     c:25,
//     d:30,
// }
// let kiek= 0;
// for (let key in object){
//     kiek++
// }
// console.log(`Šiame objeikte yra ${kiek}-ios savybes`)

//6.

// let sak= prompt("Iveskite sakini:");
// let zodziai = sak.split(" ");
// for (let zodis of zodziai) {
//   console.log(zodis);
// }

//7.

// let simboliai = 0;
// let sak = prompt("Iveskite sakini:");
// for (let zodis of sak) {
//   simboliai++;
// }
// console.log(`${sak} . <=Ši sakini sudaro tiek ${simboliai} simboliu`);

//8.

// let i = 20;
// const n = 50;
// do {
//   if (i % 2 == 0) console.log(i);
//   i++;
// } while (i <= n);

//9.

// let skaic = 0;
// do {
//   skaic = parseInt(prompt(`Iveskite skaiciu`));
//   if (skaic >= 0) {
//     continue;
//   } else {
//     alert(`Jusu įvestas neigiamas skaicius ${skaic}`);
//     break;
//   }
// } while (skaic >= 0);

//10.

// let suma = 0;
// let skaic = 0;
// do {
//   skaic = parseInt(prompt(`Iveskite skaiciu`));
//   if (skaic > 0) {
//     suma += skaic;
//   } else {
//     console.log(suma);
//     break;
//   }
// } while (skaic > 0);
