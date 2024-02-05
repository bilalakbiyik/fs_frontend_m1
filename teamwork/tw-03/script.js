// function reverseWordsWithoutArray(sentence) {
//     let reversedSentence = "";
//     let word = "";

//     for (let i = sentence.length - 1; i >= 0; i--) {
//         if (sentence[i] === " " || i === 0) {
//             if (i === 0) {
//                 word += sentence[i];
//             }

//             for (let j = word.length - 1; j >= 0; j--) {
//                 reversedSentence += word[j];
//             }

//             if (i !== 0) {
//                 reversedSentence += " ";
//             }

//             word = "";

//         } else {
//             word += sentence[i];
//         }
//     }

//     return reversedSentence;
// }
// const inputSentence = "Hello World"
// const reversedSentence = reverseWordsWithoutArray(inputSentence)
// console.log(reversedSentence);

// let n = +prompt("Ilk kaç Fibonacci numarası gösterilsin?")
// let cikti = ""

// if (n === 1) {
//     console.log(`Fibonacci serisinin ilk sayısı şudur: 0`);
// } else if (n === 2) {
//     console.log('Fibonacci serisinin ilk iki sayısı şunlardır: 0, 1')
// } else {
//     let a = 0, b = 1;
//     cikti = "0,1";

//     for (let i = 3; i <= n; i++) {
//         let c = a + b;
//         cikti += "," + c;
//         a = b
//         b = c
//     }

// }
// console.log(`Fibonacci serisinin ilk ${n} sayısı şunlardır: ${cikti}`)

// let n = +prompt("Ilk kaç Fibonacci numarası gösterilsin?")
// let a = 0, b = 1;
// let cikti = ""

// for (let i = 0; i <= n; i++) {
//     cikti = a;
//     a = b;
//     b = cikti + b;
// }
// console.log(`Fibonacci serisinin ilk ${n} sayısı şunlardır: ${cikti}`)

// function fibonacciYazdir(adet) {
//     var a = 0, b = 1;
//     var temp;

//     for (var i = 0; i < adet; i++) {
//         console.log(a);

//         temp = a;
//         a = b;
//         b = temp + b;
//     }
// }

// var adet = prompt("Kaç adet Fibonacci sayısı yazdırmak istiyorsunuz?");
// fibonacciYazdir(adet)

// const myCar = 'My car is yellow';

// function aName(){
//     myCar = 'My car is red';
//     console.log(myCar);
// }

// aName()
// console.log(myCar);

// function evenNumber(num){
//     if(num % 2 == 0) {
//         console.log(`${num} çifttir`);
//     } else {
//         console.log(`${num} tektir`);
//     }
// }

// evenNumber(3)
// evenNumber(2)

const square = (num = "") => num ** 2;


console.log(square());

