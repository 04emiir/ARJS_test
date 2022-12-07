windows.onload = () => {
	cargarModelos();

}

function cargarModelos() {
	let latitud = 37.19226427531708;
	let longitud = -3.6166251443071054;

	var modelo = document.createElement("a-box");
	modelo.setAttribute('material', 'color:yellow');
	modelo.setAttribute('scale', '10 10 10');
	modelo.setAttribute('gps-entity-place', `latitude: ${latitud}; longitud: ${longitud}`);
	let escena = document.querySelector('a-scene');
	escena.appendChild(modelo);

} 