//----EFECTO 2------

//Banner avanza al dar click a los números

var slider=document.getElementById("slider");
var enla=slider.getElementsByTagName("a");
var ban=slider.getElementsByTagName("img")[1];
for (let index = 0; index < enla.length; index++) {
	enla[index].addEventListener("click",cambiar);
	enla[index].style.cursor="pointer";
}
function cambiar(){
	var num=(this.innerText);
	ban.setAttribute("src","Imágenes/Ban"+num+".png");
}

//EFECTO 3-----

//Banner avanza con derecha e izquierda

var izq=document.getElementsByClassName("izq")[0];
izq.addEventListener("click",retrocede);
izq.style.cursor="pointer";
var der=document.getElementsByClassName("der")[0];
der.addEventListener("click",avanza);
der.style.cursor="pointer";
var c=1;
function retrocede(){
	c--;
	if(c<1)c=5
		mostrar(c);
}
function avanza(){
	c++;
	if (c>=6)c=1
		mostrar(c);
}
function mostrar(){
	ban.setAttribute("src","Imágenes/Ban"+c+".png");
}

//EFECTO 4----

var f=document.getElementsByTagName("footer")[0];
var red=f.getElementsByTagName("img");
for (let i = 0; i < red.length; i++) {
	red[i].addEventListener("mouseover",trans);
	red[i].addEventListener("mouseout",normal);
	red[i].addEventListener("click",function(){
		enlace(i)
	})
}
//Opacidad en las imágenes del footer

function trans(){
	this.style.opacity="50%";
	this.style.cursor="pointer";
	this.style.border="solid 2px black";
}
function normal(){
	this.style.opacity="100%";
	this.style.border="solid 0px black";
}

//EFECTO 5----

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

//EFECTO 6----
//Debajo del cursor una descripción

//Logo
var canta=document.getElementsByClassName("menu")[0];
var des=canta.getElementsByTagName("img")[0];
des.setAttribute("title","Canta te encanta");

//Paquete 1
var p1=document.getElementsByClassName("uno dos")[0];
var d=p1.getElementsByTagName("img")[0];
d.setAttribute("title","Paquete 1");

//Paquete 2
var p2=document.getElementsByClassName("uno dos")[0];
var d2=p1.getElementsByTagName("img")[1];
d2.setAttribute("title","Paquete 2");

//Paquete 3
var p3=document.getElementsByClassName("uno dos")[0];
var d3=p1.getElementsByTagName("img")[2];
d3.setAttribute("title","Paquete 3");
