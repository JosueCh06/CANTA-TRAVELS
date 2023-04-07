$(document).ready(function(){
//EFECTO 13----

//Al pasar el mouse cammbia la imagen

//Checta
$("img").eq(1).hover(

function(){
	$(this).attr("src","Imágenes/foto1.jpg");
},
function(){
	$(this).attr("src","Imágenes/ima1.jpg");

}
)

//Yaso
$("img").eq(3).hover(

function(){
	$(this).attr("src","Imágenes/foto3.jpg");
},
function(){
	$(this).attr("src","Imágenes/ima3.jpg");

}
)

//Obrajillo
$("img").eq(5).hover(

function(){
	$(this).attr("src","Imágenes/foto5.jpg");
},
function(){
	$(this).attr("src","Imágenes/ima5.jpg");

}
)

//Catarata de Lucle
$("img").eq(7).hover(

function(){
	$(this).attr("src","Imágenes/foto7.jpg");
},
function(){
	$(this).attr("src","Imágenes/ima7.jpg");

}
)

//Laguna Chuchún
$("img").eq(9).hover(

function(){
	$(this).attr("src","Imágenes/foto9.jpg");
},
function(){
	$(this).attr("src","Imágenes/ima9.jpg");

}
)

//Laguna 7 colores
$("img").eq(11).hover(

function(){
	$(this).attr("src","Imágenes/foto11.jpg");
},
function(){
	$(this).attr("src","Imágenes/ima11.jpg");

}
)

//EFECTO 14

//Al dar click la imagen cambia

//Santa Rosa de Quives
	$("img").eq(2).on("click",function(){
	$(this).attr("src","Imágenes/foto2.jpg")
	}
	);

//Plaza de armas Canta
	$("img").eq(4).on("click",function(){
	$(this).attr("src","Imágenes/foto4.jpg")
	}
	);

//Piscigranjas
	$("img").eq(6).on("click",function(){
	$(this).attr("src","Imágenes/foto6.jpg")
	}
	);

//Catarata velo de la novia
	$("img").eq(8).on("click",function(){
	$(this).attr("src","Imágenes/foto8.jpg")
	}
	);

//Laguna la viuda
	$("img").eq(10).on("click",function(){
	$(this).attr("src","Imágenes/foto10.jpg")
	}
	);


});

//-------------------------------------------------

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


