window.onload = () => {
	cargarModelos();

}

function cargarModelos() {
	//let latitud = 37.19226427531708;
	//let longitud = -3.6166251443071054;
	let modelos = [
		{
			latitud: 37.19224427531708,
			longitud: -3.6166211443071054,
			color: "yellow"
		},
		{
			latitud: 37.19226427531708,
			longitud: -3.6166251443071054,
			color: "red"
		},
		{
			latitud: 37.192235, 
            longitud: -3.616582,
            color: "white"
		}
	]

	for(let i = 0; i<modelos.length; i++ ) {
		var modelo = document.createElement('a-box');
		modelo.setAttribute('material', 'color:'+modelos[i].color);
		modelo.setAttribute('scale', '1 1 1');
		modelo.setAttribute('gps-entity-place', `latitude: ${modelos[i].latitud}; longitude: ${modelos[i].longitud};`);
		let escena = document.querySelector('a-scene');
		escena.appendChild(modelo);
	}
	

} 