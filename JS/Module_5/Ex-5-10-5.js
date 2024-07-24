let userInput = prompt("Введите Ваш возраст");
let userAge = +userInput;
if (userInput === '' || userInput === null) {
  alert("Видимо Вам кредит не нужен. Всего доброго");
} else {
  if (userAge < 18) {
    alert("Вы не можете получить кредит");
  } else if (userAge >= 18 && userAge <= 21) {
    let wishedSum = +prompt(
      "Мы можем Вам выдать 50000 руб.\n Введите сумму кратную 1000"
    );
    let checkedSum = +wishedSum % 1000;
    if (checkedSum != 0) {
      alert(
        "Вы ввели значение не кратное 1000, мы можем выдать " +
          Math.round(wishedSum / 1000) * 1000
      );
    }
  } else if (userAge >= 22 && userAge <= 35) {
    +prompt("Мы можем Вам выдать 400000 руб.\n Введите сумму кратную 1000");
  } else if (userAge >= 36 && userAge <= 65) {
    +prompt("Мы можем Вам выдать 1000000 руб.\n Введите сумму кратную 1000");
  }
}