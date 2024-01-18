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
// Bir sayıya toFixed uygulandığında sonucu stringdir.

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

console.clear();

//! String Data Type

ad="George"

let str1="Merhaba dünya bugün \"17 Ocak\""
let str2='Merhaba dünya'
let str3=`Merhaba ${ad}` // back tire 
let str4=new String("merhaba dünya")

console.log(str1);
console.log(str4);
console.log(typeof str4,str4);
console.log(typeof str3);

console.log(str1[5]);

str1[4]="ü" //  bu şekilde içindeki değere ulaşılabilir ama string değiştirilemez (immutable)

str1="Merhaba Eslohe"
console.log(str1);

let kimlik=24256400624
let adSoyad="John Smith"

console.log("Personelimiz ",adSoyad,"'in Kimlik numarası:",kimlik);
console.log(`Personelimiz ${adSoyad}'in 
Kimlik numarası:${kimlik}`);

console.clear();

//! BOOLEAN
// true ya da false değeri tutar.

let deger=undefined
let deger1=null
let deger2=0
let deger3=NaN
let deger4=''

console.log(Boolean(deger));

let kontrol=(Sifre="12x45")
console.log(Boolean(kontrol));

if (Sifre=="12x"){
    console.log("Sisteminiz açık");
}
else{
    console.log("Siteminiz kapalı");
}

//! NULL 

let personel=null
console.log(typeof null);
console.log(null+5);

console.clear();
//! UNDEFINED

let phoneNumber;
console.log(phoneNumber);
console.log(typeof phoneNumber);

phoneNumber="+905456565656"
console.log(phoneNumber);
console.log(typeof phoneNumber);

function sum(){
    return "toplam=4";
}

console.log(sum());

//! NaN - Not a number

let n;

let result=n+15
console.log(result);

console.log(isNaN(result));

// NON PRIMITIVE 
// Array,Object,function

let personelList=["Ali","Ayşe","Sema"] //Array
let personelData={name:"Ali",surname:"Güven",age:"45"} // Object

//function
function sum(){
    return "toplam=4"
 }