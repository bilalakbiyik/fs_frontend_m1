// ? ===========================
// ?        FUNCTIONS
// ? ============================

console.log("** 1 - FUNC DECLARATION **")

//* ORNEK1:
//*******************************/

selamla()

//? Fonksiyonun tanımlanması, (hoisted)
//? Parametresiz (Dışarıdan bir değer almıyor)
function selamla() {
    console.log("Selam Cohort16");
}

selamla() //? Invoke (Call)
selamla()

//? Parametreli Func.

function selamVer(cohort, ders) {
    console.log(`Merhaba ${cohort} - ${ders}`);
}

selamVer("Cohort16", "JavaScript")
selamVer("Cohort17", "CSS")


function topla(s1, s2) {
    console.log("Toplam:", s1 + s2);
}



const num1 = +prompt("S1:")
const num2 = +prompt("S2:")
topla(num1, num2)