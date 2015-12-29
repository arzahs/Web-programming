var outDanger = function (text){
		var eventDanger = document.querySelector('.bg-danger');
		eventDanger.innerHTMl = text;
	}
	window.addEventListener("load", function(){
		var inputLogin = document.querySelector('#inputLogin');
		var inputPassword = document.querySelector('#inputPassword');
		var inputPassword2 = document.querySelector('#inputPassword2');
		var male = document.querySelector('#male');
		var female = document.querySelector('#female');
		var inf = document.querySelector('#information');
		var licenze = document.querySelector('#licenze');
		var comment = document.querySelector('#comment');
		var submit = document.querySelector('.btn');
		

		submit.addEventListener("click", function(){
			if(inputLogin.value == ""){
				document.querySelector('.bg-danger').innerHTML ="Поле логин пустое!!!";
			}
			else if(inputPassword.value == ""){
				document.querySelector('.bg-danger').innerHTML ="Поле пароля пустое!!!";
			}
			else if(inputPassword2.value == ""){
				document.querySelector('.bg-danger').innerHTML ="Поле подтверждения пароля пустое!!!";
			}
			else if(!male.checked && !female.checked){
				document.querySelector('.bg-danger').innerHTML ="Выбирите пол";
			}
			else if(!licenze.checked){
				document.querySelector('.bg-danger').innerHTML ="Вы не согласны с лицензионным соглашением?";
			}
			else if(inputPassword.value != inputPassword2.value){
				document.querySelector('.bg-danger').innerHTML ="Подтверждение пароля не равно паролю!";
			}
			else {
				document.querySelector('.bg-success').innerHTML += "Логин: "+inputLogin.value+"<br>"; 
				document.querySelector('.bg-success').innerHTML += "Пароль: "+inputPassword.value+"<br>";
				if(male.checked){
					document.querySelector('.bg-success').innerHTML += "Пол: "+male.value+"<br>";
				}else{
					document.querySelector('.bg-success').innerHTML += "Пол: "+female.value+"<br>";
				}
				document.querySelector('.bg-success').innerHTML += "Услышал о нас: "+inf.value+"<br>";
			}
		});
		var Reg = new RegExp("^.*[^a-z].*$");

		inputPassword.addEventListener("keyup", function(){
			if(inputPassword.value.length<6)
			{
				document.querySelector('.bg-danger').innerHTML ="Пароль слишком маленький(6-10 знаков)!";
			}
			else if(inputPassword.value.length>10){
				document.querySelector('.bg-danger').innerHTML ="Пароль слишком большой(6-10 знаков)!";
			}
			else {
				document.querySelector('.bg-danger').innerHTML ="";
			}
			
			if(Reg61.test(inputPassword.value))
 					{
 					document.querySelector('.bg-danger').innerHTML ="пароль должен содержать только буквы a-z";
				    }
			
		});

		inputPassword2.addEventListener("keyup", function(){
			if(inputPassword2.value != inputPassword.value)
			{
				document.querySelector('.bg-danger').innerHTML ="Подтверждение пароля отличается от пароля";
			}else {
				document.querySelector('.bg-danger').innerHTML ="";
			}
		});

		inputLogin.addEventListener("keyup", function(){
			inputLogin.value=inputLogin.value.toLowerCase().replace(/\d/g,'');;
		});
		comment.addEventListener("keyup", function(){
			comment.value=comment.value.toLowerCase().replace(/\d/g,'');;
		});

	});
	