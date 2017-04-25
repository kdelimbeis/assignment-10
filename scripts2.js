var CurrentValue = 1;

function Multiplier () {
	this.multiply = multiply;
	this.getCurrentValue = getCurrentValue;

	function multiply(x) {
		CurrentValue = x * CurrentValue;
		return CurrentValue;
	}
	function getCurrentValue (){
		return CurrentValue;
	}
}

var product = new Multiplier();