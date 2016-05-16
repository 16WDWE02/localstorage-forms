// Does this user have a name saved?
if( localStorage.getItem('full-name') ) {
	// Put the name in the name field
	document.querySelector('#full-name').value = localStorage.getItem('full-name');
}

// Has this user picked a country?
if( localStorage.getItem('country') ) {
	
	var selectElement = document.querySelector('#country');
	// Loop over each option
	for(var i=0; i<selectElement.length; i++) {
		// Is this the option the user chose?
		if( localStorage.getItem('country') == selectElement[i].value ) {
			// Select this option
			selectElement[i].setAttribute('selected', 'selected');
		}
	}
}

if( localStorage.getItem('tac') == "true" ) {
	document.querySelector('#tac').checked = true;
}

if( localStorage.getItem('shipping') ) {

	// Get all the radio buttons
	var shippingOptions = document.querySelectorAll('[name=shipping]');

	for( var i=0; i<shippingOptions.length; i++ ) {

		if( shippingOptions[i].id == localStorage.getItem('shipping') ) {
			shippingOptions[i].setAttribute('checked', 'checked');
		}

	}

}

// Listen for input on the name field
document.querySelector('#full-name').onkeyup = function(){
	localStorage.setItem('full-name', this.value);
}

// Listen for changes in the country options
document.querySelector('#country').onchange = function(){
	localStorage.setItem('country', this.value);
}

// Listen for clicks on the TaC checkbox
document.querySelector('#tac').onclick = function() {
	localStorage.setItem('tac', this.checked);
}

// Listen for clicks on the shipping radio buttons
// document.querySelector('#shipping-int').onclick = function() {
// 	localStorage.setItem('shipping', this.id);
// }

// document.querySelector('#shipping-ni').onclick = function() {
// 	localStorage.setItem('shipping', this.id);
// }

// document.querySelector('#shipping-si').onclick = function() {
// 	localStorage.setItem('shipping', this.id);
// }

var allShippingOptions = document.querySelectorAll('[name=shipping]');

for(var i=0; i<allShippingOptions.length; i++) {
	allShippingOptions[i].onclick = shipping;
}

function shipping() {
	localStorage.setItem('shipping', this.id);
}








// function add(num1, num2, num3, num4, num5) {
// 	console.log( num1 + num2 );
// }


// sum(5,10);
// sum(18,190);
// sum(57,107);
// sum(5,10);








