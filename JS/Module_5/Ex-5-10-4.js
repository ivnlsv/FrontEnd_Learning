const userName = prompt("Введите имя");
const yearOfBirth = +prompt("Введие год рождения");
if (typeof yearOfBirth === "number" && userName !== "") {
  const userAge = 2023 - yearOfBirth;
  const endOfYear = userAge % 10;
  if (endOfYear === 1) {
    alert(userName + ":" + userAge + "год");
  }
  if (endOfYear > 1 && endOfYear < 5) {
    alert(userName + ":" + userAge + "года");
  } else {
    alert(userName + ":" + userAge + "лет");
  }
} else {
  alert("Год должен быть числом!");
}
