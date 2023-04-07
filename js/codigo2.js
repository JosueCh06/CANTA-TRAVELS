//EFECTO 10----

//Al presionar la tecla V el main cambia de color
$(document).keypress(function(e){
	if(e.which == 118 ||e.which == 86){
		$("section:first").css("background","lightgray");
	}
	if (e.which == 13) {
		$("section:first").css("background","");
	}
});

//-----------------------------------------------------------

//Cambia color al presionar una tecla
var pul=document.getElementsByClassName("dos")[0];
pul.setAttribute("title","Pulsa la tecla V, luego pulsa enter")


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