// * =======================================================
// *             FOR LOOP
// * =======================================================

console.log(" **** FOR ****")

//! girilmeyen döngü
// for (let i = 1; i == 50; i = i * 2) {
//     console.log(i);
// }

//! sonsuz döngü
// for (let i = 1; i != 50; i = i * 2) {
//     console.log(i);
// }

// 50 kişinin notunu girerek ortalamasını alan kod
//? for döngüsünde koşul cümlesinde == veya != operatörlerini kullanamk sonsuz veya girilmeyen döngüye yol açabilir. Bu nedenle genelde < > <= >= işlemleri kullanılır.

/* let sum = 0
let i = 0
for (i; i < 5; i++) {
    const grade = +prompt(`Enter ${i + 1}. grade:`)
    sum = sum + grade
    console.log(sum);
}

console.log(i);
console.log(`AVG: ${sum / i}`); */

//? geri yönde değişim

for (let i = 10; i >= 0; i--) {
    console.log(i);
}

//? aralik verme

let n1 = 4
const n2 = 6
let sum = 0

/* if (n1 > n2) {
    console.log("n2 should be bigger than n1");
} else {
    for(let i = n1; i <= n2; i++){
        sum += i
    }
    console.log("Sum:", sum);
} */

if (n1 > n2) {
    console.log("n2 should be bigger than n1");
} else {
    for (n1; n1 <= n2; n1++) {
        sum += n1
    }
    console.log("Sum:", sum);
}

//? break - continue

for (let i = 0; i <= 10; i++) {
    if (i % 3) {
        continue
    }
    if (i === 6) {
        break
    }
    console.log(i);
}