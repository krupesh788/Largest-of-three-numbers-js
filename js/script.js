function largest() {
  let num1 = parseInt(document.getElementById("num1").value);

  let num2 = parseInt(document.getElementById("num2").value);

  let num3 = parseInt(document.getElementById("num3").value);

  let largest;

  if (num1 >= num2 && num1 >= num3) {
    largest = num1;
  } else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
  } else {
    largest = num3;
  }

  document.getElementById("p1").innerHTML = `The largest number is :${largest}`;
}
