//* ==============================================
//*                  EVENTS
//* ===============================================

console.log("****** EVENTS *******")

const yazdir = () => document.write("Hello FS16")
yazdir()

//? Selectorler
const h2 = document.querySelector(".add-item h2")
const body = document.querySelector("body")
const myInput = document.getElementById("input")
const addButton = document.getElementById("btn")
const ul = document.querySelector("ul")
const form = document.querySelector("form")
//?event tanımlamalari

//* mouse h2 elemenitini üzerine geldiğinde tetiklenir
h2.onmouseover = function () {
    //   h2.style.color = "red"
    h2.classList.add("red", "center")
}

//* mouse h2 elemenitinin üzerinden ayrıldığınıda tetiklenir
h2.onmouseout = () => {
    h2.classList.remove("red", "center")
}

//* DOM içeriklerinin tamamı yüklendikten sonra tetiklenen event (onload)
body.onload = function () {
    myInput.focus()
}

//? DOMContentLoaded (metin vb. içerikler yüklenince tetiklenir. Resim, link gibi içeriklerin yüklenmesini beklemez)
// body.DOMContentLoaded = function() {
//     myInput.focus()
// } 

addButton.onclick = (e) => {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.value);
    // console.log(e.target.id, e.target.name);
    myInput.focus()
    if (!myInput.value.trim()) {
        alert("Lütfen bir içerik giriniz")
        // myInput.focus()
        return
    }
    const li = document.createElement("li")
    li.textContent = myInput.value
    ul.appendChild(li)
    myInput.value = ""
    // myInput.focus()
}

//? 
//?
form.onsubmit = function (e) {
    e.preventDefault() //?
    // console.log(e.target);
}

myInput.onkeydown = function(e) {
    console.log(e);
}