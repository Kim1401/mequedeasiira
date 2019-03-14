return new Promise(function(resolve,reject){

});
	peliculaspormesyanno(mes,anno){
		var objetoaenviar = this;
		var vectordepeliculasfiltradas = [];

		return new Promise(function(resolve, reject){
			try{
				var xhr = new XMLHttpRequest();
				chr.open('POST', 'http://localhost:8080/api/seleccionartodos');
				xhr.setRequestHeader('Content-Type', 'application/json');
				xhr.onload = function(){
					if(xhr.status === 200){
						var peliculas = JSON.parse(xhr.responseText);

						for(var elemento in peliculas){
							var fechadelapelicula = new Date(peliculas[elemento].FECHA);
							if((fechadelapelicula.getMonth() +1 == mes) && (fechadelapelicula.getFullYEar() == anno)){
								vectordepeliculasfiltradas.push(peliculas[elemento]);
							}
						}
						resolve(vectordepeliculasfiltradas);
					}
					else{
						reject(xhr);
					}
				};
				chr.send(JSON.stringify(objetoaenviar));
			}
			catch(err){
				reject(err.message);
			}
		});
	}