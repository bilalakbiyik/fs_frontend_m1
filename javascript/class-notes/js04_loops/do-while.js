/* ---------------------------------- */
/*     DONGULER (LOOPS) - DO-WHILE    */
/* ---------------------------------- */

// let sayac = 12
// do {
//     console.log("Cohort16", sayac);
//     sayac++
//     console.log(sayac);
// } while (sayac <= 10)

// console.log("Dongu bitti");

// let devam = ""
// do {
//     let vize = Number(prompt("Lütfen vize notunu giriniz:"))
//     let final = Number(prompt("Lütfen final notunu giriniz:"))
//     let ortalama = vize * 0.3 + final * 0.7

//     const sonuc = ortalama >= 50 ? `${ortalama} ile Geçti` : `${ortalama} ile Kaldı`
//     console.log(sonuc);

//     let devam = prompt("Hesaplamaya devam etmek ister misiniz? e/h") //! burada let ile atama yaptığım için çalışmamış. Bu şekilde olunca "e" girilince çıkmıyor. aşağıdaki gibi olunca çalışıyor.
// } while (devam === "e" || devam === "E")
// console.log("Uygulama kapaniyor");

let devam = "e"
while (devam === "e" || devam === "E") {
  let vize = Number(prompt("Lütfen vize notunu giriniz:"))
  let final = Number(prompt("Lütfen final notunu giriniz:"))
  let ortalama = vize * 0.3 + final * 0.7

  const sonuc =
    ortalama >= 50 ? `${ortalama} ile Geçti` : `${ortalama} ile Kaldı`
  console.log(sonuc)
  devam = prompt("Hesaplamaya devam etmek ister misiniz? e")
}
console.log("Uygulama kapaniyor")