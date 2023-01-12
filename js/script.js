const textarea = document.getElementById("textarea");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const textoResultado = document.getElementById("textoResultado");
const botonCopiar = document.createElement("button");

botonCopiar.id = "botonCopiar";
botonCopiar.innerHTML = "Copiar";
botonCopiar.addEventListener("click", () => {
	const textoCopiar = document.getElementById("textoCopiar").textContent;
	const text = textoCopiar;
	navigator.clipboard.writeText(text).then(
		function () {},
		function (err) {
			console.error("Failed to copy: ", err);
		}
	);
});

function encriptar(texto) {
	return texto
		.replace(/e/g, "enter")
		.replace(/i/g, "imes")
		.replace(/a/g, "ai")
		.replace(/o/g, "ober")
		.replace(/u/g, "ufat");
}

function desencriptar(texto) {
	return texto
		.replace(/ufat/g, "u")
		.replace(/ober/g, "o")
		.replace(/ai/g, "a")
		.replace(/imes/g, "i")
		.replace(/enter/g, "e");
}

function resultado(texto) {
	const crearTexto = `<p class="crearTexto" id="textoCopiar">${texto}</p> <br>`;
	textoResultado.innerHTML = crearTexto;
	textoResultado.appendChild(botonCopiar);
	document.getElementById("textoResultado").style.alignContent =
		"space-between";
}

botonEncriptar.addEventListener("click", () => {
	const textoIngresado = textarea.value;
	if (!textoIngresado) {
		alert("Por favor ingrese un texto para encriptar");
	} else {
		const textoEncriptado = encriptar(textoIngresado);
		resultado(textoEncriptado);
		textarea.value = "";
	}
});

botonDesencriptar.addEventListener("click", () => {
	const textoIngresado = textarea.value;
	if (!textoIngresado) {
		alert("Por favor ingrese un texto para desencriptar");
	} else {
		const textoDesencriptado = desencriptar(textoIngresado);
		resultado(textoDesencriptado);
		textarea.value = "";
	}
});
