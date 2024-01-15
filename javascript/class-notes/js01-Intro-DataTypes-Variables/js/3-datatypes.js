/* -------------------------------------------------------------------------- */
/*                                 DATA TYPES                                 */
/* -------------------------------------------------------------------------- */
//! bir değişkenin türünü görebilmek için typeof dan faydalanılır
x = 15.34;
console.log(typeof x);

/* -------------------------------------------------------------------------- */
//!                      PRIMITIVE DATA TYPES                                 */
/* -------------------------------------------------------------------------- */
// Tek bir değer tutabilen değişkenler
// Number,String,Null, Undefined,Boolean, BigInt

//! Number Data Type
// ondalıklı sayı,negatif yada pozitif sayı değerlerini tanımlandığı değişken türüdür.

yas = 40;
sayi = 56.87;
console.log(yas);

sonuc = sayi * 5 + 6;
console.log(sonuc);

const pi = Math.PI;
console.log(pi);

//? Ondalıklı kısmı düzenlemek için kullanılan yöntemler + floor ve ceil de kullanılabilir
// round

let yuvarlanmisSonuc = Math.round(sonuc);
console.log("sonuc", sonuc);
console.log(yuvarlanmisSonuc);

// trunc
let truncSonuc = Math.trunc(sonuc);
console.log(truncSonuc);

// virgülden sonra gelen ondalıklı kısımda kaç hane gösterilecekse: toFixed(sayı)

let fixedSonuc = sonuc.toFixed(2);
console.log(sonuc.toFixed(2));
console.log(fixedSonuc);

//! Random metodu
// rastgele sayı üretmek için kullanılır
// 0-1 arasında bir sayı üretir

console.log(Math.round(Math.random() * 100 + 1));

console.log(Math.pow(2, 8)); // kuvvet alma
console.log(5 ** 3);
console.log(Math.sqrt(144)); // karekök
console.log(Math.pow(125, 1 / 3)); // JavaScript'te 0.1 + 0.2 işleminin sonucunun 0.30000000000000004 olarak çıkması, JavaScript'in (ve birçok diğer programlama dilinin) sayıları nasıl temsil ettiğiyle alakalıdır. Bu durum, kayan nokta sayıları (floating point numbers) ile ilgili bir hassasiyet sorunudur ve IEEE 754 standardı tarafından belirlenen çift duyarlılık kayan nokta formatından kaynaklanır.

// console.clear();
