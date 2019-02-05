let ipt = Number(prompt("please enter amount", "0"));
let discount = Number(prompt("please enter discount", "0"));
let result;
let DiscountAmount = (ipt / 100) * discount;
let DiscountPrice = ipt - DiscountAmount;

if (ipt <= 0 || ipt > 9999999 || discount <= 0 || discount > 99) {
  result = "Input invalid data";
} else {
  result =
    "Price without discount: " +
    +ipt.toFixed(2) +
    "\n" +
    "Discount: " +
    +discount.toFixed(2) +
    "%" +
    "\n" +
    "Price with discount: " +
    +DiscountPrice.toFixed(2) +
    "\n" +
    "Saved: " +
    +DiscountAmount.toFixed(2);
}

alert(result);
