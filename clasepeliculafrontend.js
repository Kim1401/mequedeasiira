class _Pelicula {
   constructor(_id, 
NOMBRE,
    DURACIONMINUTOS,
    GENERO,
    IDIOMAAUDIO,
    IDIOMASUB,
    SINOPSIS,
    CLASIFICACION,
    PRECIO,
    HORAINICIO,
    FECHA,
    MINUTOINICIO,
    ASIENTOS,
    IMAGEN,
    ESTADO){

    this._id=_id;
    this.NOMBRE =NOMBRE;
    this.DURACIONMINUTOS=DURACIONMINUTOS;
    this.GENERO=GENERO;
    this.IDIOMAAUDIO=IDIOMAAUDIO;
    this.IDIOMASUB=IDIOMASUB;
    this.SINOPSIS=SINOPSIS;
    this.CLASIFICACION=CLASIFICACION;
    this.PRECIO=PRECIO;
    this.HORAINICIO=HORAINICIO;
    this.FECHA=FECHA;
    this.MINUTOINICIO=MINUTOINICIO;
    this.ASIENTOS=ASIENTOS;
    this.IMAGEN=IMAGEN;
    this.ESTADO=ESTADO;
   }

peliculapormesyanno(mes,anno){
    var objetoaenviar = this;
    var vectordepeliculasfiltradas = [];

    return new Promise(function(resolve, reject){
      try{
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:8080/api/seleccionartodos');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function(){
          if(xhr.status === 200){
            var peliculas = JSON.parse(xhr.responseText);

            for(var elemento in peliculas){
              var fechadelapelicula = new Date(peliculas[elemento].FECHA);
              if((fechadelapelicula.getMonth() +1 == mes) && (fechadelapelicula.getFullYear() == anno)){
                vectordepeliculasfiltradas.push(peliculas[elemento]);
              }
            }
            resolve(vectordepeliculasfiltradas);
          }
          else{
            reject(xhr);
          }
        };
        xhr.send(JSON.stringify(objetoaenviar));
      }
      catch(err){
        reject(err.message);
      }
    });
  }
Guardar() {
   var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
      try {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:8080/api/Nuevapelicula');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function() {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      }
      else{
        reject(xhr); 
      }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);}
    });
}    
Modificar() {	
    var objetoaenviar = this;
    // Return a new promise.
    return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
    try {
           
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://localhost:8080/api/Modificapelicula');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else{
      reject(xhr); 
    }
      };
xhr.send(JSON.stringify(objetoaenviar));         
}
catch(err) {
     reject(err.message);
}
    });
}   
Eliminar() {
  var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff   
      try {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://localhost:8080/api/Eliminapelicula');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function() {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      }
      else{
        reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));        
}
catch(err) {
     reject(err.message);
}
    });
    
    
}
Seleccionartodos() {
  var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
  // Do the usual XHR stuff
  try {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/api/seleccionartodos');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else{
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));        
}
catch(err) {
     reject(err.message);
}
    });   
}
    
Seleccionarporfecha() {
  var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
  // Do the usual XHR stuff
  try {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8080/api/seleccionarporfecha');
    xhr.setRequestHeader('Content-Type', 'application/json'); 
    xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else{
      reject(xhr); 
    }
};
xhr.send(JSON.stringify(objetoaenviar));         
}
catch(err) {
     reject(err.message);

}
    }); 
}
    
Seleccionarporid(req,res) {
	var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
  // Do the usual XHR stuff
  try {
    var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:8080/api/seleccionarporid');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    if (xhr.status === 200) {
      resolve(JSON.parse(xhr.responseText));
    }
    else{
      reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));           
}
catch(err) {
     reject(err.message);
}
    });   
}
    
Seleccionarpornombre(req,res) {
  var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
  // Do the usual XHR stuff
  try {
    var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:8080/api/seleccionarpornombre');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
  if (xhr.status === 200) {
    resolve(JSON.parse(xhr.responseText));
  }
  else{
    reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));          
}
catch(err) {
     reject(err.message);
}
});
    
}
}
            
let imagenenbase64 = "";
  $("#img").change(function(){
  readURL(this);
 });
    
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      imagenenbase64=e.target.result;  
    }
  reader.readAsDataURL(input.files[0]);
  }
}
var asientos = new Object();
/*Columna A*/
/*Asiento A1*/
var asientoA1 = new Object();
asientoA1.NOMBREESTUDIANTE = null;
asientoA1.SECCION=null;
asientoA1.CARNET=null;
asientos.A1= asientoA1;
/*Asiento A2*/
var asientoA2 = new Object();
asientoA2.NOMBREESTUDIANTE = null;
asientoA2.SECCION=null;
asientoA2.CARNET=null;
asientos.A2= asientoA2;
/*Asiento A3*/
var asientoA3 = new Object();
asientoA3.NOMBREESTUDIANTE = null;
asientoA3.SECCION=null;
asientoA3.CARNET=null;
asientos.A3= asientoA3;
/*Asiento A4*/
var asientoA4 = new Object();
asientoA4.NOMBREESTUDIANTE = null;
asientoA4.SECCION=null;
asientoA4.CARNET=null;
asientos.A4= asientoA4;
/*Asiento A5*/
var asientoA5 = new Object();
asientoA5.NOMBREESTUDIANTE = null;
asientoA5.SECCION=null;
asientoA5.CARNET=null;
asientos.A5= asientoA5;
/*Asiento A6*/
var asientoA6 = new Object();
asientoA6.NOMBREESTUDIANTE = null;
asientoA6.SECCION=null;
asientoA6.CARNET=null;
asientos.A6= asientoA6;
/*Columna B*/
/*Asiento B1*/
var asientoB1 = new Object();
asientoB1.NOMBREESTUDIANTE = null;
asientoB1.SECCION=null;
asientoB1.CARNET=null;
asientos.B1= asientoB1;
/*Asiento B2*/
var asientoB2 = new Object();
asientoB2.NOMBREESTUDIANTE = null;
asientoB2.SECCION=null;
asientoB2.CARNET=null;
asientos.B2= asientoB2;
/*Asiento B3*/
var asientoB3 = new Object();
asientoB3.NOMBREESTUDIANTE = null;
asientoB3.SECCION=null;
asientoB3.CARNET=null;
asientos.B3= asientoB3;
/*Asiento B4*/
var asientoB4 = new Object();
asientoB4.NOMBREESTUDIANTE = null;
asientoB4.SECCION=null;
asientoB4.CARNET=null;
asientos.B4= asientoB4;
/*Asiento B5*/
var asientoB5 = new Object();
asientoB5.NOMBREESTUDIANTE = null;
asientoB5.SECCION=null;
asientoB5.CARNET=null;
asientos.B5= asientoB5;
/*Asiento B6*/
var asientoB6 = new Object();
asientoB6.NOMBREESTUDIANTE = null;
asientoB6.SECCION=null;
asientoB6.CARNET=null;
asientos.B6= asientoB6;

/*Columna C*/
/*Asiento C1*/
var asientoC1 = new Object();
asientoC1.NOMBREESTUDIANTE = null;
asientoC1.SECCION=null;
asientoC1.CARNET=null;
asientos.C1= asientoC1;
/*Asiento C2*/
var asientoC2 = new Object();
asientoC2.NOMBREESTUDIANTE = null;
asientoC2.SECCION=null;
asientoC2.CARNET=null;
asientos.C2= asientoC2;
/*Asiento C3*/
var asientoC3 = new Object();
asientoC3.NOMBREESTUDIANTE = null;
asientoC3.SECCION=null;
asientoC3.CARNET=null;
asientos.C3= asientoC3;
/*Asiento C4*/
var asientoC4 = new Object();
asientoC4.NOMBREESTUDIANTE = null;
asientoC4.SECCION=null;
asientoC4.CARNET=null;
asientos.C4= asientoC4;
/*Asiento C5*/
var asientoC5 = new Object();
asientoC5.NOMBREESTUDIANTE = null;
asientoC5.SECCION=null;
asientoC5.CARNET=null;
asientos.C5= asientoC5;
/*Asiento C6*/
var asientoC6 = new Object();
asientoC6.NOMBREESTUDIANTE = null;
asientoC6.SECCION=null;
asientoC6.CARNET=null;
asientos.C6= asientoC6;
/*Columna D*/
/*Asiento D1*/
var asientoD1 = new Object();
asientoD1.NOMBREESTUDIANTE = null;
asientoD1.SECCION=null;
asientoD1.CARNET=null;
asientos.D1= asientoD1;
/*Asiento D2*/
var asientoD2 = new Object();
asientoD2.NOMBREESTUDIANTE = null;
asientoD2.SECCION=null;
asientoD2.CARNET=null;
asientos.D2= asientoD2;
/*Asiento D3*/
var asientoD3 = new Object();
asientoD3.NOMBREESTUDIANTE = null;
asientoD3.SECCION=null;
asientoD3.CARNET=null;
asientos.D3= asientoD3;
/*Asiento D4*/
var asientoD4 = new Object();
asientoD4.NOMBREESTUDIANTE = null;
asientoD4.SECCION=null;
asientoD4.CARNET=null;
asientos.D4= asientoD4;
/*Asiento D5*/
var asientoD5 = new Object();
asientoD5.NOMBREESTUDIANTE = null;
asientoD5.SECCION=null;
asientoD5.CARNET=null;
asientos.D5= asientoD5;
/*Columna E*/
/*Asiento E1*/
var asientoE1 = new Object();
asientoE1.NOMBREESTUDIANTE = null;
asientoE1.SECCION=null;
asientoE1.CARNET=null;
asientos.E1= asientoE1;
/*Asiento E2*/
var asientoE2 = new Object();
asientoE2.NOMBREESTUDIANTE = null;
asientoE2.SECCION=null;
asientoE2.CARNET=null;
asientos.E2= asientoE2;
/*Asiento E3*/
var asientoE3 = new Object();
asientoE3.NOMBREESTUDIANTE = null;
asientoE3.SECCION=null;
asientoE3.CARNET=null;
asientos.E3= asientoE3;
/*Asiento E4*/
var asientoE4 = new Object();
asientoE4.NOMBREESTUDIANTE = null;
asientoE4.SECCION=null;
asientoE4.CARNET=null;
asientos.E4= asientoE4;
/*Columna F*/
/*Asiento F1*/
var asientoF1 = new Object();
asientoF1.NOMBREESTUDIANTE = null;
asientoF1.SECCION=null;
asientoF1.CARNET=null;
asientos.F1= asientoF1;
/*Asiento F2*/
var asientoF2 = new Object();
asientoF2.NOMBREESTUDIANTE = null;
asientoF2.SECCION=null;
asientoF2.CARNET=null;
asientos.F2= asientoF2;
/*Asiento F3*/
var asientoF3 = new Object();
asientoF3.NOMBREESTUDIANTE = null;
asientoF3.SECCION=null;
asientoF3.CARNET=null;
asientos.F3= asientoF3;
/*Asiento F4*/
var asientoF4 = new Object();
asientoF4.NOMBREESTUDIANTE = null;
asientoF4.SECCION=null;
asientoF4.CARNET=null;
asientos.F4= asientoF4;
/*Columna G*/
/*Asiento G1*/
var asientoG1 = new Object();
asientoG1.NOMBREESTUDIANTE = null;
asientoG1.SECCION=null;
asientoG1.CARNET=null;
asientos.G1= asientoG1;
/*Asiento G2*/
var asientoG2 = new Object();
asientoG2.NOMBREESTUDIANTE = null;
asientoG2.SECCION=null;
asientoG2.CARNET=null;
asientos.G2= asientoG2;
/*Asiento G3*/
var asientoG3 = new Object();
asientoG3.NOMBREESTUDIANTE = null;
asientoG3.SECCION=null;
asientoG3.CARNET=null;
asientos.G3= asientoG3;
/*Asiento G4*/
var asientoG4 = new Object();
asientoG4.NOMBREESTUDIANTE = null;
asientoG4.SECCION=null;
asientoG4.CARNET=null;
asientos.G4= asientoG4;
/*Columna H*/
/*Asiento H1*/
var asientoH1 = new Object();
asientoH1.NOMBREESTUDIANTE = null;
asientoH1.SECCION=null;
asientoH1.CARNET=null;
asientos.H1= asientoH1;
/*Asiento H2*/
var asientoH2 = new Object();
asientoH2.NOMBREESTUDIANTE = null;
asientoH2.SECCION=null;
asientoH2.CARNET=null;
asientos.H2= asientoH2;
/*Asiento H3*/
var asientoH3 = new Object();
asientoH3.NOMBREESTUDIANTE = null;
asientoH3.SECCION=null;
asientoH3.CARNET=null;
asientos.H3= asientoH3;
/*Asiento H4*/
var asientoH4 = new Object();
asientoH4.NOMBREESTUDIANTE = null;
asientoH4.SECCION=null;
asientoH4.CARNET=null;
asientos.H4= asientoH4;
//fin asientos                                              
function botonguardarclick(){
var peliculainstanciada = new _Pelicula(0,
  document.getElementById("nombre").value,
  document.getElementById("duracion").value,
  document.getElementById("genero").value,
  document.getElementById("idiomaaudio").value,
  document.getElementById("idiomasub").value,
  document.getElementById("sinopsis").value,
  document.getElementById("clasificacion").value,
  document.getElementById("precio").value,
  document.getElementById("hora").value,
  document.getElementById("fecha").value,
  document.getElementById("minuto").value,
asientos,
imagenenbase64,
document.getElementById("estado").value
);
                                                        
peliculainstanciada.Guardar().then(function(response) {
  console.log("Success!", response);
            alert("Guardado con exito");
               
}, function(error) {
  console.error("Failed!", error);
             alert("Error " + error);            
});                                        
}
