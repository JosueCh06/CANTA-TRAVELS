$(document).ready(function(){

	//EFECTO 11----

	//Efecto zoom en las imágenes
	$(".uno img").mouseover(function(){
	$(this).css({
	"transform":"scale(1.09)",
	"opacity":"0,7",
	"transition":"all 0.5s",
	"border":"5px dotted yellow"
})
});

	$(".uno img").mouseout(function(){
	$(this).css({
	"transform":"scale(1)",
	"opacity":"1",
	"transition":"all 0.5s",
	"border":""
})
});
	//EFECTO 12----

	//El main entra por la derecha
	$("#bloque").animate({"left":0+"px"}, 1000);
});