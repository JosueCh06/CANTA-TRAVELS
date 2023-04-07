
//EFECTO 19----

//Validación de formularios

function validar_Mensaje() {

	var nombre=document.getElementById("nombre").value;
	var email=document.getElementById("email").value;
	var mensaje=document.getElementById("mensaje").value;
	var expresion = /\w+@\w+\.+[a-z]/;
    var exptext=/[a-zA-Z]+/;
    
    if(nombre===""){
    	alert("Complete los campos");
    	return false;
    }
    if (email==="") {
    	alert("Complete los campos");
    	return false;
    }
    if (mensaje==="") {
    	alert("Complete los campos");
    	return false;
    }
    if (!expresion.test(email)) {
       alert("El email no es válido");
       return false;
    }
    if(!exptext.test(nombre)){
        alert("Ingrese solo letras");
        return false;
    }
    alert("Mensaje enviado")
    return false;
}

function validar_Reclamo() {

	var nombre=document.getElementById("nombre1").value;
	var email=document.getElementById("email1").value;
	var mensaje=document.getElementById("mensaje1").value;
	var expresion = /\w+@\w+\.+[a-z]/;
    var exptext = /[a-zA-Z]+/;
    
    if(nombre===""){
    	alert("Complete los campos");
    	return false;
    }
    if (email==="") {
    	alert("Complete los campos");
    	return false;
    }
    if (mensaje==="") {
    	alert("Complete los campos");
    	return false;
    }
    if (!expresion.test(email)) {
       alert("El email no es válido");
       return false;
    }
    if(!exptext.test(nombre)) {
        alert("Ingrese solo letras");
        return false;
    }
    alert("Reclamo enviado")
    return false;
}

//---------------------------------------------------------------------

//Opacidad en las imágenes del footer
var f=document.getElementsByTagName("footer")[0];
var red=f.getElementsByTagName("img");
for (let i = 0; i < red.length; i++) {
	red[i].addEventListener("mouseover",trans);
	red[i].addEventListener("mouseout",normal);
	red[i].addEventListener("click",function(){
		enlace(i)
	})
}
function trans(){
	this.style.opacity="50%";
	this.style.cursor="pointer";
	this.style.border="solid 2px black";
}
function normal(){
	this.style.opacity="100%";
	this.style.border="solid 0px black";
}

//Al dar click se abre la página correspondiente

function enlace(i){
	if(i==0){
	window.location.assign("https://www.youtube.com/channel/UCX3lEekrhvmkZClXVFi32sg");
	}
	else if(i==1){
	window.location.assign("https://www.facebook.com/Agencia-de-Viajes-CantaTravels-101138831634605/?modal=admin_todo_tour");
	}
	else{
		window.location.assign("https://twitter.com/cantatravels");
	}
}
