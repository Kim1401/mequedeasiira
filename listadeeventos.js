function agregaimgdepeliculaaldiv(imagenbase64, iddeldiv){
	document.getElementById(iddeldiv).innerHTML += "<img src='"+imagenbase64+"' height='42' width='42'>"
}
function cargarpeliculasdelmessyanno(){
	let clasepeliculainstanciada = new Pelicula();
	clasepeliculainstanciada.peliculapormesyanno(document.getElementById("mesactual").value,document.getElementById('annoactual').value).then(function(response){
		for(var elemento in response){
			agregaimgdepeliculaaldiv(response[elemento].IMAGEN,response[elemento].FECHA.getDate()+1);
		}
	}, 
	function(error){
		console.log(error);
	});
}
(function(){
	$('#cuadrotabla').block({
		message: '<h4>Charging...</h4><img src="/img/carga.gif" style= "widht: 25%;height:25%;"/>'
	});
	let Eventoactual = new _Evento();
	Eventoactual.Seleccionartodos().then(function(response){...},
		function(error){
			console.error("Failed:", error)
		}
	});
