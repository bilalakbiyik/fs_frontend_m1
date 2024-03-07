//*========================================
//*             3 - FETCH API
//*========================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

console.log("FETCH")

// let userData = ""

fetch("https://api.github.com/users")
    .then((res) => {
        // console.log(res)
        if (!res.ok) {
            throw new Error(`${res.status} / Something went wrong!`)
        }
        return res.json()
    })
    .then((data) => {
        // console.log(data)
        // userData = data
        // console.log(userData)
        showUser(data)

    })
    .catch((err) => displayErr(err))


// const showUser = (data) => {
//     const userSection = document.getElementById("users")
//     for (let i = 0; i < data.length; i++) {
//         userSection.innerHTML += '<a style="text-decoration: none" href="' + data[i].url + '">' + `${i+1}- ` + data[i].login + '</a><br>'
//     }
// }

const showUser = (data) => {
    const userSection = document.getElementById("users")
    data.forEach((user) => {
        // console.log(user);
        userSection.innerHTML += `
            <h1>${user.login}</h1>
            <img src=${user.avatar_url}" alt="" width="200px"/>
        `
    });
}

const displayErr = (err) => {
    const userSection = document.getElementById("users")
    userSection.innerHTML += `
        <h2>${err}</h2>
        <img src="./img/404.png" alt="error" />
    `
} 