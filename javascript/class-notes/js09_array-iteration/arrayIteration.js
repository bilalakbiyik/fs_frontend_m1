//* =======================================
//*           FOREACH METHOD
//* =======================================

console.log("****** ITERATION **********");

const sayilar = [4, 5, 1, 4, 6, 9];

sayilar.forEach((x) => console.log(x));

console.log("******************");
//? alternatif
sayilar.forEach(yazdir);

function yazdir(x) {
  console.log(x);
}

//? Ornek: 2 parametreli forEach
sayilar.forEach((x, i) => console.log("Değer:", x, "Sıra", i));

//? Ornek: Toplam

let sum = 0;
sayilar.forEach((sayi) => (sum += sayi));
console.log("SUM:", sum);

//? Ornek: 3 parametreli forEach

const notlar = [40, 50, 10, 40, 60, 90];

notlar.forEach((not, indis, array) => (array[indis] = not * 1.1));

//! Süslü parantezli olarak da yazılabilir.
// notlar.forEach( (not, indis, array) => {
//     array[indis] = not * 1.1
// } )
console.log(notlar);

//? forEach return yapmaz (void function)
console.log(notlar.forEach((x) => x * x)); //? undefined
const deneme = notlar.forEach((x) => x * x);
console.log(deneme); //? undefined

//* ---------------------------------- */
//*             MAP METHOD             */
//* ---------------------------------- */

const x = [2, 3, 4, 5];

const y = x.map((s) => s * 2);
console.log(y, x);

//? Bir dizideki tüm isimleri BÜYÜK harfe dönüştüren uygulamayı yazınız.
const names = ["Mustafa", "Murat", "Ahmet", "Mustafa", "Ayşe", "canan"];

const copiedNames = names.map((n) => n.toUpperCase());
console.log(copiedNames, names);

const euro = 32.97;
const dolar = 30.5;

const iPhoneTl = [90000, 75000, 60000, 40000, 30000];

const iPhoneDolar = iPhoneTl.map((tl) => Math.trunc(tl / dolar));
console.log(iPhoneDolar);

const iPhoneEuro = iPhoneTl.map((tl) => Math.trunc(tl / euro));
console.log(iPhoneEuro);

//* ---------------------------------- */
//*           FILTER METHOD            */
//* ---------------------------------- */

const c = [31000, 20000, 15000, 70000];

const d = c.filter((tl) => tl > 30000);
console.log(d, c);

//? 50000 den büyük olanlar
const maaslar = [90000, 75000, 60000, 40000, 30000];
const ortalamaMaaslar = maaslar.filter((m) => m > 50000);
console.log(ortalamaMaaslar, maaslar);

const dusukMaaslar = maaslar.filter((m) => m >= 30000 && m < 50000);
console.log(dusukMaaslar, maaslar);

//? maasi 50000 den az olanlara %20 zam yapalım. (Orijinal diziyi değiştirerek)
maaslar.map((m, i, arr) => {
  if (m >= 30000 && m < 50000) {
    arr[i] = m * 1.2;
  }
});

console.log(maaslar);

//* ---------------------------------- */
//*        CHAINING (PIPELINE)         */
//* ---------------------------------- */

//? maasi 50000 den az olanlara %20 zam yapalım. (Orijinal diziyi değiştirerek)

const salary = [90000, 75000, 60000, 40000, 30000];

const zamliMaaslar = salary.filter((m) => m < 50000).map((m) => m * 1.2);
console.log(zamliMaaslar);
