const inputedPromoCode = prompt("Введите промокод");
const promoCode = "скидка";
if (promoCode === inputedPromoCode.toLowerCase()) {
  alert("Промокод применен");
} else {
  alert("Промокод не работает");
}
