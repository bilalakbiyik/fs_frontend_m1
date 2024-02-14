console.log("** NEW OPERATORS **");

//* =============================================
//*  DESTRUCTURING (OBJECT)
//* =============================================

const product = {
    id: "12345",
    brand: "Apple",
    type: "smart phone",
    price: 3000,
};

const product1 = {
    id: "12346",
    brand: "Samsung",
    type: "smart phone",
    price: 2500,
};

//? . notasyonu
console.log(product.price);
let proPrice = product.price;
console.log(proPrice);
proPrice += 100;
console.log(proPrice);

//? square bracket
const proId = product["id"];
console.log(proId);

//? Destructuring
//? degisike isimleri objedeki key'lere es olmalıdır.
let { id, price } = product;
console.log("ID:", id);

price += 500;
console.log("Price:", price);
console.log(product);

// product.price = price
// console.log(product)

const { type } = product;
console.log("Type:", type);

//? key'ler isim değişikliği : ile yapılablir
const { id: pro1Id, price: pro1Price } = product1;
console.log("PRO1:", pro1Id);
console.log("PRO1:", pro1Price);


//! destr ile tek satırda birçok objeninin keyi değişken haline getirilebilir
// const {id,brand,price,type} = product

//? NESTED DESTR

const insanlar = {
    kisi1: {
        kimlikNo: "1234567890",
        adi: "Ahmet",
        soyadi: "Can",
        meslek: "Mimar",
        maas: 30000,
    },
    kisi2: {
        kimlikNo: "44234567890",
        adi: "Canan",
        soyadi: "Can",
        meslek: "Sosyal Gelişim Uzmanı",
        maas: 25000,
    },
};

console.log(insanlar.kisi2.meslek);
console.log(insanlar["kisi2"]["meslek"]);

//   //? Level1 destr.
//   const {kisi1,kisi2} = insanlar
//   console.log(kisi1);

//   //? Level2 destr.
//   const {adi, maas} = kisi1
//   console.log(adi,maas);

//? Iki seviyeli destr.

const {
    kisi1: { adi, meslek },
    kisi2: { adi: kisi2ad, meslek: kisi2meslek },
} = insanlar;
console.log(adi, meslek);
console.log(kisi2ad, kisi2meslek);

//* Example
const team = [
    {
        name: "Josh",
        surname: "Barry",
        job: "developer",
        age: 30,
    },
    {
        name: "John",
        surname: "Barry",
        job: "tester",
        age: 45,
    },
    {
        name: "Hazel",
        surname: "Nut",
        job: "team lead",
        age: 40,
    },
]

console.log("************************************")
team.forEach((person) => {
    console.log("Name:", person.name);
    console.log("Surname:", person["surname"]);
    console.log("Job:", person.job);
    console.log("Age:", person["age"]);
    console.log("************")
})

console.log("************************************")
team.forEach((person) => {
    const { name, surname, job, age } = person
    console.log("Name:", name);
    console.log("Surname:", surname);
    console.log("Job:", job);
    console.log("Age:", age);
    console.log("************")
})

//? Yolda veya havada destr.
console.log("************************************")
team.forEach(({ name, surname, job, age }) => {
    console.log("Name:", name);
    console.log("Surname:", surname);
    console.log("Job:", job);
    console.log("Age:", age);
    console.log("************")
})

//! -------- FUNCTIONLARDA DESTR. KULLANIMI --------

const objGoster = function () {
    return {
        name: "Hazel",
        surname: "Nut",
        job: "team lead",
        age: 40,
    }
}

console.log(objGoster());

let { name, surname, job, age } = objGoster()

console.log(name, surname, job, age);
console.log("Age:", ++age);

//? Function parametresi

const data = {
    id: "123",
    desc: "This is top secret information",
    createdTime: "1900",
}

const printData = () => {
    console.log(`${data.id} - ${data.desc} - ${data.createdTime}`);
}

const printDataDestr = () => {
    const { id, desc, createdTime } = data
    console.log(`${id} - ${desc} - ${createdTime}`);
}

const printDataDestrAir = ({ id, desc, createdTime }) => {
    console.log(`${id} - ${desc} - ${createdTime}`);
}

printData(data);
printDataDestr(data)
printDataDestrAir(data)

//* =============================================
//*  DESTRUCTURING (ARRAY)
//* =============================================

const people = ["Ali", "Veli", "Canan", "Can"]
let ali = people[0]
console.log(people);

const [kisi1, kisi2, , kisi4] = people
console.log(kisi1, kisi2, kisi4);

//* ==============================================
//*  REST (...)
//* =============================================

//? REST operatoru kullanici tarafindan girilen degerleri dizi
//? icerisine konumlandirir. Cesitli kullanim alanlari vardir.

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//!    ayri dizi yada objelere kopyalanmasini saglayabilir.

//?REST: Array

const araclar = ["Kamyon", "Tır", "Kamyonet", "Araba", "ATV", "Minibüs"]
const [arac1, arac2, arac3, , ...binekAraclar] = araclar //! rest operatörünün sonda olması gerek
console.log(arac1, arac2, arac3);
console.log(binekAraclar);

//?REST: Object

const person = {
    ad: "Hazel",
    soyad: "Nut",
    is: "team lead",
    yas: 40,
}

const { ad, soyad, yas, ...geriKalanlar } = person
console.log(geriKalanlar);

//! 2- Bir fonksiyonun argumanlarini diziye cevirmek icin kullanilabilir.
const topla = (a, b) => a + b

console.log(topla(1, 5, 2, 7, 9));

const toplam = (...sayilar) => {
    return sayilar.reduce((a, b) => a + b)
}

console.log("TOPLAM:", toplam(1, 5, 2, 7, 9));

//? REST (...) ile non-iterable olan sayilari iterable hale (diziye) cevirmiş olduk.

//* =============================================
//*  SPREAD (...)
//* =============================================

//? Spread operatoru ise iterables olan bir elemani bireysel
//? degerler haline getirir.

const ucanAraclar = ["helicopter", "drone", "ucak", "fuze"]
const karaAraclari = ["araba", "bisiklet", "marti"]

const tasitlar = [ucanAraclar, karaAraclari] //? nested
console.log(tasitlar);

const flatTasitlar = [...ucanAraclar, ...karaAraclari] //? nested olmaktan çıkardık/ flat oldu
console.log(flatTasitlar);

//? Ornek
const cumle = "Uzun ince bir yoldayim"
const cumleDizisi = [...cumle] //? cumle.split("")
console.log(cumleDizisi);

//?Ornek:
//? Spread ile bir iterable(array), non-iterable'a cevirlebilir.

const numbers = [1, 3, 4, 5]
console.log(Math.max(...numbers));

//? nested
const sahislar = {
    sahis1: {
        name: "Can",
        surname: "Canan",
        dob: "1990",
        job: "developer",
        salary: "140000",
        drivingLicense: true,
    },
    sahis2: {
        name: "John",
        surname: "Sweet",
        dob: "1990",
        job: "tester",
        salary: "110000",
        drivingLicense: false,
    },
    sahis3: {
        name: "Steve",
        surname: "Job",
        dob: "2000",
        job: "developer",
        salary: "90000",
        drivingLicense: true,
    },
}

//? Javascript'de Objeler default olarak iterable degildir.
//? Ama for in ve for of donguleri ile itere edilebilirler.

//? Objelerin key ve value'larini okumak icin built-in metotlar vardir.
//? Bu mettotlar aslinda objelerin key ve/veya value'lari bir dizi olarak dondurur.

//! FOR - IN
//* for (key in object) {
//*   // code block to be executed
//* }

//? s  => objedeki her bir key i gösterir
for (let s in sahislar) {
    // console.log(s);
    // console.log(sahislar[s]); //! square bracket(her bir objeyi getirir)
    console.log(sahislar[s].salary); //! square bracket(her bir maasi getirir)
}

//? Kullanışlı Object Metodları

console.log(Object.keys(sahislar)); //? Object'in keylerini Array olarak dönüyor.
console.log(Object.values(sahislar)); //? Object'in value'larını Array olarak dönüyor.
console.log(Object.values(sahislar.sahis2)); //? Object'in value'larını Array olarak dönüyor.
console.log(Object.entries(sahislar)); //? Object'in key-value çiftini Array olarak dönüyor.
console.log(Object.entries(sahislar.sahis1)); //? Object'in key-value çiftini Array olarak dönüyor.

//! FOR - OF
//* for (x of iterable) {
//*   code block to be executed
//* }

for (let key of Object.keys(sahislar)) {
    // console.log(key);

    console.log(sahislar[key].salary); //! square
}

console.log("****************");

for (let v of Object.values(sahislar)) {
    console.log(v.salary);
}