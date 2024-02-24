console.log("**** CREATE NODE ****")

//? 1- yeni bir li elementi olustur
const newLi = document.createElement("li")

//? 2- Eger text tabanlı bir element ise text dugumunu olustur
const textLi = document.createTextNode("Go")

//? 3- Olusturulan text dugumunu yeni elemente bagla (append)
newLi.appendChild(textLi)

//?4- Yeni olusan elementi DOM tree'ye ekle.
document.querySelector("ul").appendChild(newLi)

//* Ikinci bir li oluşturalım
const newLi2 = document.createElement("li")
newLi2.textContent = "C++"
document.querySelector("ul").appendChild(newLi)


//? element.before() veya element.after() ile bir elementi istediğimiz elementin önüne ya da devamına eklemek mümkündür.
const react = document.querySelector("ul li:nth-child(4)")
react.before(newLi2, newLi)

//* ----------- ID, CLASS gibi özellikleri atama -----------

//? element.attribute = "yeni deger"
//? yazma
newLi.className = "list bold text-success bg-warning"
newLi.id = "new.li"
newLi.name = "list"
//?okuma
console.log(newLi.className);


//? 2- setAttribute(atr, "deger") getAttribute("atr")

newLi2.setAttribute("class", "list red bold")
newLi2.setAttribute("id", "new-li2")

console.log(newLi2.getAttribute("id"));
console.log(newLi2.getAttribute("class"));

//? 3) Yontem (classList)
newLi2.classList.add("border", "border-danger", "border-3")

newLi.classList.remove("bold", "text-success")

console.log(newLi.classList.contains("red"));
console.log(newLi2.classList.contains("red"));

newLi.classList.toggle("red") //? yoksa ekliyor
newLi2.classList.toggle("red") //? varsa kaldırıyor



//* --------- InnerHtml ile Yeni bir element oluşturma --------

document.querySelector("main").innerHTML += `
    <div class="d-flex gap-2">
        <input type="text" class="form-control">
        <button class="btn btn-danger">Submit</button>
    </div>     
    
    <div class="card mt-4" style="width: 13rem;">
        <img src="https://cdn.pixabay.com/photo/2016/03/22/20/48/bird-1273739_1280.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">kuş</h5>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" class="btn btn-primary">Git</a>
        </div>
    </div>
`