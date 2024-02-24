console.log("***** SELECTORS *****")


document.title = "FS16"

//*===========================================
//*            GETELEMENTBYID()
//*===========================================

console.log(document.getElementById("add-new-item"));


//? id'si add-new-item olan elementi seçer
const headerText = document.getElementById("add-new-item")
console.log(headerText);

//! seçilen elementin style propertysini manipüle ettik
//? herşey key-value şeklinde yazılır.
document.getElementById("add-new-item").style.color = "blue";
document.getElementById("add-new-item").style.backgroundColor = "darkred";
headerText.style.border = "5px solid red"
//! Note: propertylerde kabapCase değil camelCase notasyonu kullanılır

//? NOTE
// headerText.style = "font-family: tahoma; font-size: 30px" //? CSS vari erişim

//? id'si btn olan elementi seçer
const addBtn = document.getElementById("btn")
console.log(addBtn);

//? html elementlerinin içeriklerini okuma ve değiştirme
const htmlLi = document.getElementById("html-li")
htmlLi.style.color = "red"

//? bir text elementinin içeriği aşağıdaki attribute'ler ile değiştirilebilir
//! textContent, innerText, innerHTML
console.log(htmlLi.textContent);
htmlLi.textContent = "HTML5"
htmlLi.textContent = "<h2>HTML5</h2>"

document.getElementById("js-li").innerText = "JS"
document.getElementById("js-li").innerText = "<h2>JS</h2>"

document.getElementById("react-li").innerHTML = "React JS>"
document.getElementById("react-li").innerHTML = 
    "<h2 style='color: blue'>REACT JS</h2>"

//! innerHTML Cross-Site Scripting (XSS) saldırılarına açık hale getirdiği için endüstriyel projelerde kullanılmamalı. Güvenliksiz

//? Input'ların değerinin okunması/yazılması

const myInput = document.getElementById("input")
console.log(myInput.value);

// myInput.addEventListener("change", (e) => {
//     console.log(e);
// })

addBtn.value = "Submit"

//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================

const allLi = document.getElementsByTagName("li")
console.log(allLi); //? HTML Collection - array'ye benziyor ama array değil.arrayLike grubunda array metodları direk olarak kullanılamaz. for yapısı kullanılabilir ancak forEach kullanılamaz.

//? HTML Collection'daki herbir elemente indisleme ile erişilebilir.
console.log(allLi[1].textContent);
allLi[2].textContent = "JS-React"

//? Toplu bir şekilde erişim için for yapıları kullanılabilir
for (let li of allLi) {
    console.log(li.textContent);
}

//? Alternatif olarak (ArrayLike grubunu Array'a çevirip array methodlarını kullanabiliriz)
//? 1- spread
 const arrAllLi = [...allLi] 
 console.log(arrAllLi);

 arrAllLi.forEach((li) => (li.style.color = "fuchsia"))

//? 2- array.from()
Array.from(allLi).map((li) => (li.style.backgroundColor = "green"))
//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

const myList = document.getElementsByClassName("list")
console.log(myList); //? HTML Collection



// document.getElementsByClassName("item-list")[0].style.color = "hotpink");



//* ========================================
//*              QUERYSELECTOR()
//* ========================================
console.log(document.querySelector("#btn"));
console.log(document.querySelector(".item-list"));
console.log(document.querySelector("li")); //? ilk gördüğü elementi seçer

//? CSS selectorleri querrySelector ile kullanılabilir

const myH3 = document.querySelector("main section.item-list h3")
console.log(myH3);

const react = document.querySelector(".item-list ul li:nth-child(4)")
react.style.backgroundColor = "gray"

//* ========================================
//*              QUERYSELECTORALL()
//* ========================================

const liste = document.querySelectorAll(".item-list .list")
console.log(liste); //? NodeList: yeni nesil bir arrayLike. forEach var.

liste.forEach((li) => console.log(li.innerText));