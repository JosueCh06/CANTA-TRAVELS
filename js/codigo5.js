$(document).ready(function(){

	//EFECTO 16----

	//La imagen se oculta y se muestra al presionar los botones
	$("#btn1").click(function(){
	$("#canta").slideDown(3000);
	});
	$("#btn2").click(function(){
	$("#canta").slideUp(3000);
	});

	//EFECTO 17---

	//El footer y el header animados
	$("header").animate({"top": 0 + "px"},1000);
	$("footer").animate({"top": 0 + "px"},1000);

	//--------------------------------------------------------------

	//Efecto zoom a los cuadros
	$(".partida ,.iten, .info, .info1, .reco").mouseover(function(){
	$(this).css({
	"transform":"scale(1.09)",
	"opacity":"0,7",
	"transition":"all 0.5s",
	
})
});

	$(".partida, .iten, .info, .info1, .reco").mouseout(function(){
	$(this).css({
	"transform":"scale(1)",
	"opacity":"1",
	"transition":"all 0.5s",
	
})
});

	//Efecto zoom a una imagen
	$("img").eq(1).mouseover(function(){
	$(this).css({
	"transform":"scale(1.09)",
	"opacity":"0,7",
	"transition":"all 0.5s",
	
})
});

	$("img").eq(1).mouseout(function(){
	$(this).css({
	"transform":"scale(1)",
	"opacity":"1",
	"transition":"all 0.5s",
})
});
});

//------------------------------------------------

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