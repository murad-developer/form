function validation(){
	var firstName = document.querySelector('#first-name').value;
	var lastName = document.querySelector('#last-name').value;
	var email = document.querySelector('#email').value;
	var password = document.querySelector('#password').value;
	var errorText = document.querySelector('.error__submit');
	var error;
	
	errorText.style.padding = '10px';
	
	if (firstName.length < 5){
		error = 'Enter your first name';
		errorText.innerHTML = error;
		return false;
	}
	if (lastName.length < 5){
		error = 'Enter your last name';
		errorText.innerHTML = error;
		return false;
	}
	if (email.length < 8){
		error = 'Enter your email';
		errorText.innerHTML = error;
		return false;
	}
	if (password.length < 8){
		error = 'Enter your password';
		errorText.innerHTML = error;
		return false;
	}
	alert('success');
	return true;
}

$('.form__link').click(function(){
	$('.form__box').animate({height: 'toggle', opacity: 'toggle'}, 'slow')
});