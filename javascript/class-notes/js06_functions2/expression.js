// ? =====================================
// ?           FUNCTIONS
// ? ======================================

console.log("*** 2-EXPRESSION ****")

//* ORNEK1:
//***********************************************/

//! expression.js:10 Uncaught ReferenceError: Cannot access 'tekVeyaCift' before initialization
// console.log(tekVeyaCift(7))

const tekVeyaCift = function (num) {
  let sonuc = ""

  if (num % 2 === 0) {
    sonuc = `${num} cifttir`
  } else {
    sonuc = `${num} tektir`
  }
  return sonuc
}

const bilgi = tekVeyaCift(5)
console.log(bilgi)
console.log(tekVeyaCift(4))

//* ORNEK2:
//***********************************************/

function usAlma(taban, us) {
  return taban ** us
}

const usAl = function (taban, us) {
  return taban ** us
}

const us = usAl(3, 4)
console.log(us)
console.log(usAlma(3, 4))
