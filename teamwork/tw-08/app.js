const input = document.getElementById("ID")
const check = document.querySelector(".btn")
const checkAppend = document.querySelector(".checkId")

document.addEventListener("DOMContentLoaded", () => {
    input.focus()
    check.addEventListener("click", () => {
        if (input.value.length != 11) {
            if (checkAppend.children.length>0) {
                checkAppend.removeChild()
            }
            const uyari = document.createElement("p")
            uyari.textContent = "Lütfen 11 haneli kimlik numarası giriniz"
            checkAppend.appendChild(uyari)
            uyari.style.backgroundColor = "yellow"
            input.value=""
            input.focus()
        } else{
            const uyari = document.createElement("p")
            uyari.textContent = "11 haneli oldu"
            checkAppend.appendChild(uyari)
            uyari.style.backgroundColor = "yellow"
            input.value=""
            input.focus()
        }
    })
})

check.addEventListener("mouseover", () => {
    check.style.color = "black"
    check.style.backgroundColor = "brown"
})

check.onmouseout = () => {
    check.style.color = "white"
    check.style.backgroundColor = "green"
}

input.addEventListener("input", () => {
    if (checkAppend.children.length > 0) {
        document.querySelector(".checkId p").remove()
    }
})