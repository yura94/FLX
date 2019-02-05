const a = Number(prompt("enter a", "0"));
const b = Number(prompt("enter b", "0"));
const c = Number(prompt("enter c", "0"));
let D;
let x;
let x1;
let x2;

if (a === 0 || !(isFinite(a) && isFinite(b) && isFinite(c))) {
  alert("Invalid input data");
} else {
  D = Math.pow(b, 2) - 4 * a * c;
}

if (D > 0) {
  x1 = (-b + Math.sqrt(D)) / (2 * a);
  x2 = (-b - Math.sqrt(D)) / (2 * a);
  alert("x1 =", x1);
  alert("x2 =", x2);
} else if (D === 0) {
  x = -b / (2 * a);
  alert("x =", x);
} else if (D < 0) {
  alert("no solution ");
}
