function addNumbers() {
    const num1 = parseFloat(document.getElementById("num1").value) || 0;
    const num2 = parseFloat(document.getElementById("num2").value) || 0;
    document.getElementById("result").value = num1 + num2;
  }