/// ? =====================================
// ?              FUNCTIONS
// ? ======================================

console.log("*** ARROW ****");

//? Arrow func tanımlanması
const mesajVer = () => console.log("JavaScript is a browser language");

//? Invoke
mesajVer();

//? Örnek
const kareAl = x => x * x;
console.log(kareAl(3));

//? Örnek
// const yasHesapla = (yil) => new Date().getFullYear() - yil 

// const yil = prompt("Doğum yılı:")
// console.log(`Yaşınız ${yasHesapla(yil)}`);

// console.log(new Date().getFullYear());

const tekVeyaCift = (num) => {
    let sonuc = ""
  
    if (num % 2 === 0) {
      sonuc = `${num} cifttir`
    } else {
      sonuc = `${num} tektir`
    }
    return sonuc
  }
  
  const bilgi = tekVeyaCift(4)
  console.log(bilgi)

//* ORNEK: Bir fonksiyon icerisinde baska fonksiyonlar cagrilabilir
//* (Hesap Makinası)
//**************************************************/
const topla = (s1, s2) => s1 + s2
const carp = (s1, s2) => s1 * s2
const cikar = (s1, s2) => s1 - s2
const bol = (s1, s2) => s1 / s2

const hesapla = (num1, num2, op) => {
  let sonuc = 0
  switch (op) {
    case "+":
      sonuc = topla(num1, num2)
      break
    case "-":
      sonuc = cikar(num1, num2)
      break
    case "/":
      sonuc = bol(num1, num2)
      break
    case "*":
      sonuc = carp(num1, num2)
      break
    default:
      alert("Yanlis islem")
      break
  }
  return sonuc
}
const num1 = +prompt("1.Sayi:")
const op = prompt("Islemi giriniz: +,-,*,/:")
const num2 = +prompt("2.Sayi:")
const sonuc = hesapla(num1, num2, op)
console.log(`${num1}${op}${num2}=${sonuc}`)

