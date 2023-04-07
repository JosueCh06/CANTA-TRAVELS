$(document).ready(function(){

//EFECTO 7-----

//Efecto a los botones de derecha e izquierda
$(".izq, .der").mouseover(function(){
	$(this).css({
		"transform":"scale(0.95)",
		"opacity":"0.7",
		"transition":"all 0.5s"
	})
});
$(".izq, .der").mouseout(function(){
	$(this).css({
		"transform":"scale(1)",
		"opacity":"1",
		"transition":"all 0.5s"
	})
});

//EFECTO 8----

//Al dar click el titulo se pone a la izquierda
$(".uno, .uno tres").click(function(){
	$("h2").animate({
		left:"250px",
		height:"+90px",
		width:"+90px"
	});
})

//EFECTO 9----

//Efecto zoom en los bloques

	$(".uno ,.uno dos, .uno tres").mouseover(function(){
$(this).css({
	"transform":"scale(1.09)",
	"opacity":"0,7",
	"transition":"all 0.5s",
	
})
});

$(".uno, .uno dos, .uno tres").mouseout(function(){
$(this).css({
	"transform":"scale(1)",
	"opacity":"1",
	"transition":"all 0.5s",
	
})
});

})