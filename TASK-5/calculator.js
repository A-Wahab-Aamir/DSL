function calculate() {
	var num1 = document.getElementById('firstNumber').value;
	var num2 = document.getElementById('secondNumber').value;
	
	num1 = parseFloat(num1);
	num2 = parseFloat(num2);
	if (isNaN(num1) || isNaN(num2) ) {
	  alert("Please enter valid input. ");
	}
	else {
	  var op = document.getElementById('operator').value;
	  var result;
	  if (op == '+' ) {
	    result = num1 + num2;
	  } else if (op == '-') {
	    result = num1 - num2;
	  } else if (op == '*') {
	     result = num1 * num2;
	  } else {
	      result = num1 / num2;
	  }
	  document.getElementById('result').innerHTML = " = " + result;
	  
	}
}