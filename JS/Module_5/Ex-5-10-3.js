const userName = prompt("Введите имя");
const yearOfBirth = +prompt("Введие год рождения");
if (typeof yearOfBirth === 'number' ) {
  const userAge = 2023 - yearOfBirth;
  alert(userName + ":" + userAge);
} else {
  alert("Год должен быть числом!");
}
