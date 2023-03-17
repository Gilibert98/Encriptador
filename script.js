const mEncriptar = document.querySelector(".textboxEncrp");
const mDesencriptar = document.querySelector(".textboxDesencrp");

function encriptar(mensajeEncriptar) {
	let claveEncriptadora = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
	mensajeEncriptar = mensajeEncriptar.toLowerCase();

	for(let i=0; i<claveEncriptadora.length; i++){
		if(mensajeEncriptar.includes(claveEncriptadora[i][0])){
			mensajeEncriptar = mensajeEncriptar.replaceAll(claveEncriptadora[i][0], claveEncriptadora[i][1]);
		}
	}
	return mensajeEncriptar;
}

function desencriptar(mensajeDesencriptar) {
	let claveEncriptadora = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
	mensajeDesencriptar = mensajeDesencriptar.toLowerCase();

	for(let i=0; i<claveEncriptadora.length; i++){
		if(mensajeDesencriptar.includes(claveEncriptadora[i][1])){
			mensajeDesencriptar = mensajeDesencriptar.replaceAll(claveEncriptadora[i][1], claveEncriptadora[i][0]);
		}
	}
	return mensajeDesencriptar;
}

function botonEncriptar(){
	const mensajeEncriptado = encriptar(mEncriptar.value);
	mDesencriptar.value = mensajeEncriptado;
	mEncriptar.value = "";
	mDesencriptar.style.backgroundImage = "none";
}

function botonDesencriptar(){
	const mensajeDesencriptado = desencriptar(mEncriptar.value);
	mDesencriptar.value = mensajeDesencriptado;
	mEncriptar.value = "";
	mDesencriptar.style.backgroundImage = "none";
}

function copiar(){
	mDesencriptar.select();
	document.execCommand("copy");
}