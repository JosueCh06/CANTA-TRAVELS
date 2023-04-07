$(document).ready(function(){
	//EFECTO 20---

	//Efecto en los botones de enviar
	$("input[name=submit]").mousedown(function(){
	$(this).css({
		"transform":"scale(1.2)",
		"opacity":"0.6",
		"transition":"all 0.5s"
	})
})

$("input[name=submit]").mouseup(function(){
	$(this).css({
		"transform":"scale(1)",
		"opacity":"1",
		"transition":"all 0.5s"
	})
})

});

//EFECTO 21----

//Banner automático
var fin=document.getElementsByClassName("final")[0];
var ban=fin.getElementsByTagName("img")[0];
var c=1;
var t;
function rotacion(){
	ban.setAttribute("src","Imágenes/Final"+c+".png");
	c++;
	if(c>=4) c=1;
	t=setTimeout("rotacion()",2000);

}
window.onload=rotacion;

//EFECTO 22----

//Detener y reiniciar animación
ban.addEventListener("dblclick",detener);
var contar=0;
function detener(){
	if(contar%2==0) clearTimeout(t);
	else 
		rotacion();
	contar++;
}

