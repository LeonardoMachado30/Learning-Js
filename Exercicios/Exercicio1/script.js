	
function carregar(){
	var msg = window.document.getElementById('msg')
	var img = window.document.getElementById('image')
	//Pegando a data atual
	var data = new Date()

	//var hora = data.getHours()
	var hora = 0

	msg.innerHTML = `Agora são ${hora} hora.`

	if(hora >= 4 && hora <= 12){
		img.src = 'manha.png'
		document.body.style.background = '#EAC898'
	}else if( hora >= 12 && hora <= 18){
		img.src = 'tarde.png'
		document.body.style.background = '#FA9D4A'
	}else{
		img.src = 'noite.png'
		document.body.style.background = '#013274'
	}
}
	