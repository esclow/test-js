document.querySelector("#btn-calc").addEventListener("click", () => {
  let fieldOne = parseInt(document.querySelector("#n1").value);
  let fieldTwo = parseInt(document.querySelector("#n2").value);

  alert(fieldOne + fieldTwo);
});
