
let rastgeleSayi = Math.ceil(Math.random() * 20)

console.log(rastgeleSayi);

let mesaj = document.querySelector(".msg");

let skor = 10;

let enYuksekSkor = localStorage.getItem("top-score") || 0;
document.querySelector(".top-score").textContent = enYuksekSkor

document.querySelector(".check").addEventListener("click", () => {
    const tahmin = document.querySelector(".guess").value
    // console.log(tahmin);
    // document.querySelector(".guess").value = ""

    if (!tahmin) {
        mesaj.textContent = "Lütfen bir sayı giriniz..."
    } else if (tahmin == rastgeleSayi) {
        mesaj.textContent = "Tebrikler Bildiniz...👏🏼"
        document.querySelector("body").style.backgroundColor = "green"
        document.querySelector(".number").textContent = rastgeleSayi
        document.querySelector(".check").disabled = true

        if (skor > enYuksekSkor) {
            localStorage.setItem("top-score", skor)
            enYuksekSkor = skor
            document.querySelector(".top-score").textContent = skor
            
        }


    } else {
        if (skor > 1) {
            skor--;
            document.querySelector(".score").textContent = skor
            tahmin < rastgeleSayi 
            ? mesaj.textContent = "Arttır👆🏼" 
            : mesaj.textContent = "Azalt👇🏼"
        } else {
            mesaj.textContent = "Oyunu Kaybettiniz🥺"
            document.querySelector(".score").textContent = 0;
            document.querySelector("body").style.backgroundColor = "red"
        }
    }
})

document.querySelector(".again").onclick = () => {

    document.querySelector("body").style.backgroundColor = "#2d3436"
    rastgeleSayi = Math.ceil(Math.random() * 20)
    console.log("yeni rastgele sayi:", rastgeleSayi);
    skor = 10
    document.querySelector(".score").textContent = skor
    document.querySelector(".number").textContent = "?"
    document.querySelector(".guess").value = ""
    mesaj.textContent = "Oyun yeniden başlıyor..."
    document.querySelector(".check").disabled = false

}


document.addEventListener("keydown", function(e) {
    // console.log(event.key);
    if (e.key === "Enter") {
        document.querySelector(".check").click()
    }
})

// localStorage.setItem("harvey", "localden gelen değer 555")
// console.log(localStorage.getItem("harvey"))

document.querySelector(".check").addEventListener("click", () => {
    tahmin = document.querySelector(".guess").value

    const tahminSayi = parseInt(tahmin)

    if (tahminSayi>=1 && tahminSayi<=20 && !isNaN(tahminSayi)) {
        
    } else {
        mesaj.textContent = "Geçersiz sayı girdiniz. 1-20 aralığında bir sayı giriniz."
        skor++
    }
})