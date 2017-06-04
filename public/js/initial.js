function setcoki() {
  var expiration_date = new Date();
  expiration_date.setFullYear(expiration_date.getFullYear() + 1);
  var cookie_string
cookie_string = "mylevel=" + nivel + "; path=/ ; expires=" + expiration_date.toUTCString();
document.cookie = cookie_string
cookie_string = "le1=" + lenguas[0] + "; path=/ ; expires=" + expiration_date.toUTCString();
document.cookie = cookie_string
cookie_string = "le2=" + lenguas[1] + "; path=/ ; expires=" + expiration_date.toUTCString();
document.cookie = cookie_string
cookie_string = "ncolum=" + ncolumns + "; path=/ ; expires=" + expiration_date.toUTCString();
document.cookie = cookie_string
cookie_string = "nrow=" + nfilas + "; path=/ ; expires=" + expiration_date.toUTCString();
document.cookie = cookie_string
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
    }
function posblok(){
blok.v = -1
blok.h = Math.floor(ncolumns / 2)

blok.style.top =  parseInt((0 - (altop * 3))) + "px"
blok.style.left = (anchocaja * Math.floor(ncolumns / 2)) + "px"
$(".kaixa").each(function(){ this.style.display = "block"	})

}


function resizedivs() {
	altocaja = parseInt(window.innerWidth / 2.4)
	altop = parseInt(altocaja / nfilas) ;
	altocaja = parseInt(altop * nfilas) 
	anchocaja = parseInt(window.innerWidth / (ncolumns + 2.1)) ;
mark.style.height = altocaja + "px";
mark.style.width = (anchocaja * ncolumns) + "px";

bloke.style.height = (altop * 3) + "px";
bloke.style.width = anchocaja + "px";


cositas.style.width = anchocaja + "px"
cositas.style.height = (altocaja / 3) + "px"

$(".cop,#copnext ").each(function(){ this.style.top = ((altocaja / nfilas) * parseInt(this.title)) + "px"})

$(".kaixa,.cop,#copnext,#colen1,#colen2,#conivel,#copuntos ").each(function(){
	this.style.width = anchocaja + "px"
	this.style.height = altop + "px"
	this.style.lineHeight = this.style.height;
	if (window.innerWidth < 801) {
		this.style.fontSize="9px"} else if (window.innerWidth < 1025) {
		this.style.fontSize="13px"} else if (window.innerWidth < 1153) {
		this.style.fontWeight = "bolder";
		this.style.fontSize="14px"} else  {
		this.style.fontWeight = "bolder";
		this.style.fontSize="15px"	
	}		
	})
	
$(".le").each(function(){	this.style.fontSize="80%" })
$(".cop,#copnext,#colen1,#colen2,#conivel,#copuntos ").each(function(){
	
	this.style.height = (altocaja / nfilas) + "px"
	this.style.lineHeight = this.style.height;		
	})

$(".kaixa").each(function(){ this.style.top = (altop * this.style.zIndex) + "px"	})

cbarra.style.width = anchocaja + "px";
cbarra.style.height = (altocaja / 2) + "px";
cbarra.style.top = (altocaja / 3) + "px";
//cbarra.style.display = "table-row-group";
posblok()
}

function moverbloque(evObject){
              var elCaracter = evObject.keyCode;
			  switch(elCaracter) {
    case 37: izquierda() ; break;
    case 39: derecha() ; break;
    case 40: abajo() ; break
    case 38: neworder() ; break;
} 
 }
 
 function filltextboxs() {
copuntos.innerText = "POINTS: " + puntos
conivel.innerText = "Level: " + nivel
colen1.innerText = listlenguas[0][lenguas[0]]
colen2.innerHTML = listlenguas[0][lenguas[1]] + " " + '<i class="fa fa-bullhorn" style="text-align:right;color:white"></i>'
 
 }
 
 window.onload = function() { 
 document.onkeydown = moverbloque;

c.innerText = copylistawords.length
  
if (navigator.cookieEnabled) {
if (document.cookie.indexOf("mylevel") < 0) { setcoki() }
 nivel = parseInt(getCookie("mylevel"))
 lenguas  = [parseInt(getCookie("le1")),parseInt(getCookie("le2"))]
  nfilas = parseInt(getCookie("nrow"))
   ncolumns = parseInt(getCookie("ncolum"))
 }
 
 filltextboxs()
 resizedivs()

if (navigator.appVersion.search("Android") != -1) {
$.getScript("js/objetocaja.js", function() {$.getScript("js/androidfunctions.js");})
}
}