var Item = require('./pelicula');
module.exports = class _Pelicula {
   constructor( ) {

   }
Guardar(req,res) {
	Item.create(
			{
    NOMBRE: req.body.NOMBRE,
    DURACIONMINUTOS: req.body.DURACIONMINUTOS,
    GENERO: req.body.GENERO,
    IDIOMAAUDIO: req.body.IDIOMAAUDIO,
    IDIOMASUB: req.body.IDIOMASUB,
    SINOPSIS: req.body.SINOPSIS,
    CLASIFICACION: req.body.CLASIFICACION,
    PRECIO: req.body.PRECIO,
    HORAINICIO: req.body.HORAINICIO,
    FECHA: req.body.FECHA,
    MINUTOINICIO: req.body.MINUTOINICIO,
    ASIENTOS: req.body.ASIENTOS,
    IMAGEN: req.body.IMAGEN,
    ESTADO: req.body.ESTADO
            }, 
	function(err, item){//inicio function 1
		if (err){
			res.send(err);}//fin if
		else{
            Item.find(function(err, item) { //inicio function 2
				if (err)
				 	res.send(err)
				    res.json(item);
				});//fin function 2
          }//fin else      	
			});//fin function 1
}//fin guardar

//modificar con el id asignado
Modificar(req,res) {
	Item.update( {_id : req.body._id},
	   {$set:{
    NOMBRE: req.body.NOMBRE,
    DURACIONMINUTOS: req.body.DURACIONMINUTOS,
    GENERO: req.body.GENERO,
    IDIOMAAUDIO: req.body.IDIOMAAUDIO,
    IDIOMASUB: req.body.IDIOMASUB,
    SINOPSIS: req.body.SINOPSIS,
    CLASIFICACION: req.body.CLASIFICACION,
    PRECIO: req.body.PRECIO,
    HORAINICIO: req.body.HORAINICIO,
    FECHA: req.body.FECHA,
    MINUTOINICIO: req.body.MINUTOINICIO,
    ASIENTOS: req.body.ASIENTOS,
    IMAGEN: req.body.IMAGEN,
    ESTADO: req.body.ESTADO
            }}, 
	function(err, item) {
		if (err){
			res.send(err);}// Obtiene y devuelve todas las personas tras crear una de ellas
        else{
            Item.find(function(err, item) {
				if (err)
				 	res.send(err)
				    res.json(item);
				});
   }     	
			});   
}   
    //eliminar con el id asignado
    Eliminar(req,res) {
	Item.remove({_id : req.body.id}, 
			function(err, item) {
				if (err)
                    {
					res.send(err);}
				// Obtiene y devuelve todas las personas tras crear una de ellas
          else{
                Item.find(function(err, item) {
				 	if (err)
				 		res.send(err)
				  res.json(item);
				});
                
                
          }
               	
			});   
}

//selecciona todas las peliculas existentes
Seleccionartodos(req,res) {
		Item.find(
		function(err, item) {
			if (err)
                
                {
				res.send(err)
                }else{
                
                
					res.json(item); // devuelve todas las Personas en JSON	
                    	 
                }
				}
			);  
}
    //seleccionar por la fecha que tiene
    Seleccionarporfecha(req,res) {
	Item.find({FECHA:req.body.FECHA}, function(err, item) {
			if (err){
				res.send(err)}
        else{
            
					res.json(item); // devuelve todas las Personas en JSON		
				
        } 
    }
			);  
}
    
    Seleccionarporid(req,res) {
	Item.find({_id:req.body._id}, function(err, item) {
			if (err){
				res.send(err)}
        else{
            
					res.json(item); // devuelve todas las Personas en JSON		
				
        } 
    }
			);
    
    
}
    //Selecciona el nombre de la película 
    Seleccionarpornombre(req,res) {
	Item.find({NOMBRE:req.body.NOMBRE}, function(err, item) {
			if (err){
				res.send(err)}
        else{
            
					res.json(item); // devuelve todas las Personas en JSON		
				
        }   
    }
			);
    
    
    
}
}