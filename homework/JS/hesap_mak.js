const num1 = +prompt("İlk sayıyı girin: ");
const islem = prompt("Dört işlemden birini girin ( +, -, *, / ): ");
const num2 = +prompt("İkinci sayıyı girin: ");

if (islem == "+") {
  console.log("İşlem Sonucu = ", num1 + num2);
} else if (islem == "-") {
  console.log("İşlem Sonucu = ", num1 - num2);
} else if (islem == "*") {
  console.log("İşlem Sonucu = ", num1 * num2);
} else if (islem == "/") {
  console.log("İşlem Sonucu = ", num1 / num2);
} else {
  console.log("Yanlış giriş yaptınız!");
}
