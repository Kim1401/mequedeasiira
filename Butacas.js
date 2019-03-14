function cargardatosdelapelicula(){
	var pelicula = JSON.parse(localStorage.getItem('peliculaseleccionada'));
	document.getElementById("datosdelapelicula").innerHTML += "<div id='infopelicula'>" +pelicula[0].NOMBRE + "<br>Tanda: "+pelicula[0].FECHA+ "<br> Inicia: "+pelicula[0].HORAINICIO +":"+pelicula[0].MINUTOINICIO+"</div>";
}

function guardardatosdelabutaca(iddelabutaca){
	var id_butaca = document.getElementById("titulobutaca").innerHTML;
	var peliculaencache = JSON.parse(localStorage.getItem('peliculaseleccionada'))
	switch(id_butaca){
		//Columna A//
		case "A1": //inicio case A1
		peliculaencache[0].ASIENTOS.A1.NOMBREESTUDIANTE= document.getElementById("nombreest").value;
		peliculaencache[0].ASIENTOS.A1.CARNET= document.getElementById("carnet").value;
		peliculaencache[0].ASIENTOS.A1.SECCION= document.getElementById("seccion").value;
		break;//fin case A1
		case "A2": //inicio case A2
		peliculaencache[0].ASIENTOS.A2.NOMBREESTUDIANTE= document.getElementById("nombreest").value;
		peliculaencache[0].ASIENTOS.A2.CARNET= document.getElementById("carnet").value;
		peliculaencache[0].ASIENTOS.A2.SECCION= document.getElementById("seccion").value;
		break;//fin case A2
		case "A3": //inicio case A3
		peliculaencache[0].ASIENTOS.A3.NOMBREESTUDIANTE= document.getElementById("nombreest").value;
		peliculaencache[0].ASIENTOS.A3.CARNET= document.getElementById("carnet").value;
		peliculaencache[0].ASIENTOS.A3.SECCION= document.getElementById("seccion").value;
		break;//fin case A3
		case "A4": //inicio case A4
		peliculaencache[0].ASIENTOS.A4.NOMBREESTUDIANTE= document.getElementById("nombreest").value;
		peliculaencache[0].ASIENTOS.A4.CARNET= document.getElementById("carnet").value;
		peliculaencache[0].ASIENTOS.A4.SECCION= document.getElementById("seccion").value;
		break;//fin case A4
		case "A5": //inicio case A5
		peliculaencache[0].ASIENTOS.A5.NOMBREESTUDIANTE= document.getElementById("nombreest").value;
		peliculaencache[0].ASIENTOS.A5.CARNET= document.getElementById("carnet").value;
		peliculaencache[0].ASIENTOS.A5.SECCION= document.getElementById("seccion").value;
		break;//fin case A5
		case "A6": //inicio case A6
		peliculaencache[0].ASIENTOS.A6.NOMBREESTUDIANTE= document.getElementById("nombreest").value;
		peliculaencache[0].ASIENTOS.A6.CARNET= document.getElementById("carnet").value;
		peliculaencache[0].ASIENTOS.A6.SECCION= document.getElementById("seccion").value;
		break;//fin case A6
	
		//Columna B//
		case "B1": //inicio case B1
		peliculaencache[0].ASIENTOS.B1.NOMBREESTUDIANTE= document.getElementById("nombreest").value;
		peliculaencache[0].ASIENTOS.B1.CARNET= document.getElementById("carnet").value;
		peliculaencache[0].ASIENTOS.B1.SECCION= document.getElementById("seccion").value;
		break;//fin case B1
		case "B2": //inicio case B2
		peliculaencache[0].ASIENTOS.B2.NOMBREESTUDIANTE= document.getElementById("nombreest").value;
		peliculaencache[0].ASIENTOS.B2.CARNET= document.getElementById("carnet").value;
		peliculaencache[0].ASIENTOS.B2.SECCION= document.getElementById("seccion").value;
		break;//fin case B2
		case "B3": //inicio case B3
		peliculaencache[0].ASIENTOS.B3.NOMBREESTUDIANTE= document.getElementById("nombreest").value;
		peliculaencache[0].ASIENTOS.B3.CARNET= document.getElementById("carnet").value;
		peliculaencache[0].ASIENTOS.B3.SECCION= document.getElementById("seccion").value;
		break;//fin case B3
		case "B4": //inicio case B4
		peliculaencache[0].ASIENTOS.B4.NOMBREESTUDIANTE= document.getElementById("nombreest").value;
		peliculaencache[0].ASIENTOS.B4.CARNET= document.getElementById("carnet").value;
		peliculaencache[0].ASIENTOS.B4.SECCION= document.getElementById("seccion").value;
		break;//fin case B4
		case "B5": //inicio case B5
		peliculaencache[0].ASIENTOS.B5.NOMBREESTUDIANTE= document.getElementById("nombreest").value;
		peliculaencache[0].ASIENTOS.B5.CARNET= document.getElementById("carnet").value;
		peliculaencache[0].ASIENTOS.A5.SECCION= document.getElementById("seccion").value;
		break;//fin case A5
		case "B6": //inicio case B6
		peliculaencache[0].ASIENTOS.B6.NOMBREESTUDIANTE= document.getElementById("nombreest").value;
		peliculaencache[0].ASIENTOS.B6.CARNET= document.getElementById("carnet").value;
		peliculaencache[0].ASIENTOS.B6.SECCION= document.getElementById("seccion").value;
		break;//fin case B6

		//Columna C//
		case "C1": //inicio case C1
		peliculaencache[0].ASIENTOS.C1.NOMBREESTUDIANTE= document.getElementById("nombreest").value;
		peliculaencache[0].ASIENTOS.C1.CARNET= document.getElementById("carnet").value;
		peliculaencache[0].ASIENTOS.C1.SECCION= document.getElementById("seccion").value;
		break;//fin case C1
		case "C2": //inicio case C2
		peliculaencache[0].ASIENTOS.C2.NOMBREESTUDIANTE= document.getElementById("nombreest").value;
		peliculaencache[0].ASIENTOS.C2.CARNET= document.getElementById("carnet").value;
		peliculaencache[0].ASIENTOS.C2.SECCION= document.getElementById("seccion").value;
		break;//fin case C2
		case "C3": //inicio case C3
		peliculaencache[0].ASIENTOS.C3.NOMBREESTUDIANTE= document.getElementById("nombreest").value;
		peliculaencache[0].ASIENTOS.C3.CARNET= document.getElementById("carnet").value;
		peliculaencache[0].ASIENTOS.C3.SECCION= document.getElementById("seccion").value;
		break;//fin case C3
		case "C4": //inicio case C4
		peliculaencache[0].ASIENTOS.C4.NOMBREESTUDIANTE= document.getElementById("nombreest").value;
		peliculaencache[0].ASIENTOS.C4.CARNET= document.getElementById("carnet").value;
		peliculaencache[0].ASIENTOS.C4.SECCION= document.getElementById("seccion").value;
		break;//fin case C4
		case "C5": //inicio case C5
		peliculaencache[0].ASIENTOS.C5.NOMBREESTUDIANTE= document.getElementById("nombreest").value;
		peliculaencache[0].ASIENTOS.C5.CARNET= document.getElementById("carnet").value;
		peliculaencache[0].ASIENTOS.C5.SECCION= document.getElementById("seccion").value;
		break;//fin case C5
		case "C6": //inicio case C6
		peliculaencache[0].ASIENTOS.C6.NOMBREESTUDIANTE= document.getElementById("nombreest").value;
		peliculaencache[0].ASIENTOS.C6.CARNET= document.getElementById("carnet").value;
		peliculaencache[0].ASIENTOS.C6.SECCION= document.getElementById("seccion").value;
		break;//fin case C6

		//Columna D//
		case "D1": //inicio case D1
		peliculaencache[0].ASIENTOS.D1.NOMBREESTUDIANTE= document.getElementById("nombreest").value;
		peliculaencache[0].ASIENTOS.D1.CARNET= document.getElementById("carnet").value;
		peliculaencache[0].ASIENTOS.D1.SECCION= document.getElementById("seccion").value;
		break;//fin case D1
		case "D2": //inicio case D2
		peliculaencache[0].ASIENTOS.D2.NOMBREESTUDIANTE= document.getElementById("nombreest").value;
		peliculaencache[0].ASIENTOS.D2.CARNET= document.getElementById("carnet").value;
		peliculaencache[0].ASIENTOS.D2.SECCION= document.getElementById("seccion").value;
		break;//fin case D2
		case "D3": //inicio case D3
		peliculaencache[0].ASIENTOS.D3.NOMBREESTUDIANTE= document.getElementById("nombreest").value;
		peliculaencache[0].ASIENTOS.D3.CARNET= document.getElementById("carnet").value;
		peliculaencache[0].ASIENTOS.D3.SECCION= document.getElementById("seccion").value;
		break;//fin case D3
		case "D4": //inicio case D4
		peliculaencache[0].ASIENTOS.D4.NOMBREESTUDIANTE= document.getElementById("nombreest").value;
		peliculaencache[0].ASIENTOS.D4.CARNET= document.getElementById("carnet").value;
		peliculaencache[0].ASIENTOS.D4.SECCION= document.getElementById("seccion").value;
		break;//fin case D4
		case "D5": //inicio case D5
		peliculaencache[0].ASIENTOS.D5.NOMBREESTUDIANTE= document.getElementById("nombreest").value;
		peliculaencache[0].ASIENTOS.D5.CARNET= document.getElementById("carnet").value;
		peliculaencache[0].ASIENTOS.D5.SECCION= document.getElementById("seccion").value;
		break;//fin case D5
		
		//Columna E//
		case "E1": //inicio case E1
		peliculaencache[0].ASIENTOS.E1.NOMBREESTUDIANTE= document.getElementById("nombreest").value;
		peliculaencache[0].ASIENTOS.E1.CARNET= document.getElementById("carnet").value;
		peliculaencache[0].ASIENTOS.E1.SECCION= document.getElementById("seccion").value;
		break;//fin case E1
		case "E2": //inicio case E2
		peliculaencache[0].ASIENTOS.E2.NOMBREESTUDIANTE= document.getElementById("nombreest").value;
		peliculaencache[0].ASIENTOS.E2.CARNET= document.getElementById("carnet").value;
		peliculaencache[0].ASIENTOS.E2.SECCION= document.getElementById("seccion").value;
		break;//fin case E2
		case "E3": //inicio case E3
		peliculaencache[0].ASIENTOS.E3.NOMBREESTUDIANTE= document.getElementById("nombreest").value;
		peliculaencache[0].ASIENTOS.E3.CARNET= document.getElementById("carnet").value;
		peliculaencache[0].ASIENTOS.E3.SECCION= document.getElementById("seccion").value;
		break;//fin case E3
		case "E4": //inicio case E4
		peliculaencache[0].ASIENTOS.E4.NOMBREESTUDIANTE= document.getElementById("nombreest").value;
		peliculaencache[0].ASIENTOS.E4.CARNET= document.getElementById("carnet").value;
		peliculaencache[0].ASIENTOS.E4.SECCION= document.getElementById("seccion").value;
		break;//fin case E4
	
		//Columna F//
		case "F1": //inicio case F1
		peliculaencache[0].ASIENTOS.F1.NOMBREESTUDIANTE= document.getElementById("nombreest").value;
		peliculaencache[0].ASIENTOS.F1.CARNET= document.getElementById("carnet").value;
		peliculaencache[0].ASIENTOS.F1.SECCION= document.getElementById("seccion").value;
		break;//fin case F1
		case "F2": //inicio case F2
		peliculaencache[0].ASIENTOS.F2.NOMBREESTUDIANTE= document.getElementById("nombreest").value;
		peliculaencache[0].ASIENTOS.F2.CARNET= document.getElementById("carnet").value;
		peliculaencache[0].ASIENTOS.F2.SECCION= document.getElementById("seccion").value;
		break;//fin case F2
		case "F3": //inicio case F3
		peliculaencache[0].ASIENTOS.F3.NOMBREESTUDIANTE= document.getElementById("nombreest").value;
		peliculaencache[0].ASIENTOS.F3.CARNET= document.getElementById("carnet").value;
		peliculaencache[0].ASIENTOS.F3.SECCION= document.getElementById("seccion").value;
		break;//fin case F3
		case "F4": //inicio case F4
		peliculaencache[0].ASIENTOS.F4.NOMBREESTUDIANTE= document.getElementById("nombreest").value;
		peliculaencache[0].ASIENTOS.F4.CARNET= document.getElementById("carnet").value;
		peliculaencache[0].ASIENTOS.F4.SECCION= document.getElementById("seccion").value;
		break;//fin case F4	

		//Columna G//
		case "G1": //inicio case G1
		peliculaencache[0].ASIENTOS.G1.NOMBREESTUDIANTE= document.getElementById("nombreest").value;
		peliculaencache[0].ASIENTOS.G1.CARNET= document.getElementById("carnet").value;
		peliculaencache[0].ASIENTOS.G1.SECCION= document.getElementById("seccion").value;
		break;//fin case G1
		case "G2": //inicio case G2
		peliculaencache[0].ASIENTOS.G2.NOMBREESTUDIANTE= document.getElementById("nombreest").value;
		peliculaencache[0].ASIENTOS.G2.CARNET= document.getElementById("carnet").value;
		peliculaencache[0].ASIENTOS.G2.SECCION= document.getElementById("seccion").value;
		break;//fin case G2
		case "G3": //inicio case G3
		peliculaencache[0].ASIENTOS.G3.NOMBREESTUDIANTE= document.getElementById("nombreest").value;
		peliculaencache[0].ASIENTOS.G3.CARNET= document.getElementById("carnet").value;
		peliculaencache[0].ASIENTOS.G3.SECCION= document.getElementById("seccion").value;
		break;//fin case G3
		case "G4": //inicio case G4
		peliculaencache[0].ASIENTOS.G4.NOMBREESTUDIANTE= document.getElementById("nombreest").value;
		peliculaencache[0].ASIENTOS.G4.CARNET= document.getElementById("carnet").value;
		peliculaencache[0].ASIENTOS.G4.SECCION= document.getElementById("seccion").value;
		break;//fin case G4

		//Columna H//
		case "H1": //inicio case H1
		peliculaencache[0].ASIENTOS.H1.NOMBREESTUDIANTE= document.getElementById("nombreest").value;
		peliculaencache[0].ASIENTOS.H1.CARNET= document.getElementById("carnet").value;
		peliculaencache[0].ASIENTOS.H1.SECCION= document.getElementById("seccion").value;
		break;//fin case H1
		case "H2": //inicio case H2
		peliculaencache[0].ASIENTOS.H2.NOMBREESTUDIANTE= document.getElementById("nombreest").value;
		peliculaencache[0].ASIENTOS.H2.CARNET= document.getElementById("carnet").value;
		peliculaencache[0].ASIENTOS.H2.SECCION= document.getElementById("seccion").value;
		break;//fin case H2
		case "H3": //inicio case H3
		peliculaencache[0].ASIENTOS.H3.NOMBREESTUDIANTE= document.getElementById("nombreest").value;
		peliculaencache[0].ASIENTOS.H3.CARNET= document.getElementById("carnet").value;
		peliculaencache[0].ASIENTOS.H3.SECCION= document.getElementById("seccion").value;
		break;//fin case H3
		case "H4": //inicio case H4
		peliculaencache[0].ASIENTOS.H4.NOMBREESTUDIANTE= document.getElementById("nombreest").value;
		peliculaencache[0].ASIENTOS.H4.CARNET= document.getElementById("carnet").value;
		peliculaencache[0].ASIENTOS.H4.SECCION= document.getElementById("seccion").value;
		break;//fin case H4
	}

	var peliculainstanciada = new _Pelicula(
	peliculaencache[0]._id,
	peliculaencache[0].NOMBRE,
    peliculaencache[0].DURACIONMINUTOS,
    peliculaencache[0].GENERO,
    peliculaencache[0].IDIOMAAUDIO,
    peliculaencache[0].IDIOMASUB,
    peliculaencache[0].SINOPSIS,
    peliculaencache[0].CLASIFICACION,
    peliculaencache[0].PRECIO,
    peliculaencache[0].HORAINICIO,
    peliculaencache[0].FECHA,
    peliculaencache[0].MINUTOINICIO,
    peliculaencache[0].ASIENTOS,
    peliculaencache[0].IMAGEN,
    peliculaencache[0].ESTADO

    )
    
    peliculainstanciada.Modificar().then(function(response) {
  console.log("Success!", response);
            alert("Butaca ha sido reservada campeón");
            
}, function(error) {
  console.error("Failed!", error);
             alert("Error " + error);
            
});
}

$('tr td').click(function(){
	document.getElementById('titulobutaca').innerHTML=$(this).attr("id");
});