
//? Selectors

const ekleBtn = document.getElementById("ekle-btn")
const gelirInput = document.getElementById("gelir-input")
const ekleFormu = document.getElementById("ekle-formu")

const gelirinizTd = document.getElementById("geliriniz")
const giderinizTd = document.getElementById("gideriniz")
const kalanTd = document.getElementById("kalan")

//? Variables

let gelirler = 0
let harcamaListesi = []





//* Ekle Formu
ekleFormu.addEventListener("submit", (e) => {
    e.preventDefault() // submit yapıldığında sayfanın yenilenmesini önlemek için... form'ların varsayılan özelliklerini devre dışı bırakıyoruz.
    gelirler = gelirler + Number(gelirInput.value)
    console.log(gelirler);
    // gelirInput.value = ''
    ekleFormu.reset()
    localStorage.setItem("gelirler", gelirler)
    hesaplaVeGuncelle()
    // gelirinizTd.textContent = gelirler

})

//! Harcama Formu

const harcamaFormu = document.getElementById("harcama-formu")
const harcamaAlaniInput = document.getElementById("harcama-alani")
const tarihInput = document.getElementById("tarih")
const miktarInput = document.getElementById("miktar")

const harcamaBody = document.getElementById("harcama-body")
const temizleBtn = document.getElementById("temizle-btn")

harcamaFormu.addEventListener("submit", (e) => {
    e.preventDefault()
    const yeniHarcama = {
        tarih: tarihInput.value,
        miktar: miktarInput.value,
        alan: harcamaAlaniInput.value,
        id: new Date().getTime()
    }
    // console.log(yeniHarcama);
    harcamaListesi.push(yeniHarcama)
    console.log(harcamaListesi);
    localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi))
    harcamayiDomaYaz(yeniHarcama)
    hesaplaVeGuncelle()

    harcamaFormu.reset()
    tarihInput.valueAsDate = new Date()
})

harcamayiDomaYaz = ({id, miktar, tarih, alan}) => {

    // const {id, miktar, tarih, alan} = yeniHarcama
    console.log({id, miktar, tarih, alan});


    //! 1. Yöntem (güvenli olmayan, innerHTML)
    // harcamaBody.innerHTML += `
    //     <tr>
    //         <td>${tarih}</td>
    //         <td>${alan}</td>
    //         <td>${miktar}</td>
    //         <td><i id=${id} class="fa-solid fa-trash-can text-danger"  type="button"></i></td>
    //     </tr>    
    // `

    //! 2. Yöntem
    const tr = document.createElement("tr")
    const appendTd = (content) => {
        const td = document.createElement("td")
        td.textContent = content;
        return td
    }

    const createLastTd = () => {
        const td = document.createElement("td")
        const iElement = document.createElement("i")
        iElement.id = id
        iElement.className = "fa-solid fa-trash-can text-danger"
        iElement.type = "button"
        td.appendChild(iElement)
        return td
    }

    tr.append(
        appendTd(tarih),
        appendTd(alan),
        appendTd(miktar),
        createLastTd() 
    )

    harcamaBody.append(tr)
    // harcamaBody.prepend(tr)

}

const hesaplaVeGuncelle = () => {
    const giderler = harcamaListesi.reduce(
        (toplam, harcama) => toplam + Number(harcama.miktar), 0
    )
    // console.log(giderler);
    giderinizTd.textContent = giderler
    gelirinizTd.textContent = gelirler
    kalanTd.textContent = gelirler - giderler
}

//? Event listeners

window.addEventListener("load", () => {
    gelirler = Number(localStorage.getItem("gelirler")) || 0
    harcamaListesi = JSON.parse(localStorage.getItem("harcamalar")) || []
    harcamaListesi.forEach(harcama => {
        harcamayiDomaYaz(harcama)
    });


    gelirinizTd.textContent = gelirler
    hesaplaVeGuncelle()
    tarihInput.valueAsDate = new Date()
})

harcamaBody.addEventListener("click", (e) => {
    // console.log(e.target.classList.contains("fa-trash-can"));
    if (e.target.classList.contains("fa-trash-can")) {
        e.target.parentElement.parentElement.remove()
        const id = e.target.id
        harcamaListesi = harcamaListesi.filter((harcama) => harcama.id != id)
        // console.log(harcamaListesi);
        localStorage.setItem("harcamalar", JSON.stringify(harcamaListesi))
        hesaplaVeGuncelle()
    }
})

temizleBtn.addEventListener("click", (e) => {
    if (confirm("Tüm veriler silinecek. Devam etmek istiyor musunuz?")) {
        harcamaListesi = []
        gelirler = 0
        harcamaBody.innerHTML = ""
        // localStorage.clear() // Tüm localstorage'i siler
        localStorage.removeItem("gelirler")
        localStorage.removeItem("harcamalar")
        hesaplaVeGuncelle()
    }
})