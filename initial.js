function setcoki() {
  var expiration_date = new Date();
  expiration_date.setFullYear(expiration_date.getFullYear() + 1);
cookie_string = "mylevel=" + nivel + "; path=/ ; expires=" + expiration_date.toUTCString();
document.cookie = cookie_string
cookie_string = "le1=" + lenguas[0] + "; path=/ ; expires=" + expiration_date.toUTCString();
document.cookie = cookie_string
cookie_string = "le2=" + lenguas[1] + "; path=/ ; expires=" + expiration_date.toUTCString();
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
blok.h = 3

blok.style.top =  parseInt((0 - (altop * 3)))
blok.style.left = (anchocaja * 3)
$(".kaixa").each(function(){ this.style.display = "block"	})

}


function resizedivs() {
mark.style.height = altocaja;
mark.style.width = (anchocaja * 7);

bloke.style.height = (altop * 3);
bloke.style.width = anchocaja;


cositas.style.width = anchocaja
cositas.style.height = (altocaja / 3)

$(".cop,#copnext ").each(function(){ this.style.top = ((altocaja / nfilas) * parseInt(this.title))})

$(".kaixa,.cop,#copnext,#colen1,#colen2,#conivel,#copuntos ").each(function(){
	this.style.width = anchocaja
	this.style.height = altop
	this.style.lineHeight = this.style.height;
	if (window.innerWidth < 801) {
		this.style.fontSize="12px"} else if (window.innerWidth < 1025) {
		this.style.fontSize="15px"} else if (window.innerWidth < 1153) {
		this.style.fontWeight = "bolder";
		this.style.fontSize="18px"} else  {
		this.style.fontWeight = "bolder";
		this.style.fontSize="19px"	
	}		
	})

$(".cop,#copnext,#colen1,#colen2,#conivel,#copuntos ").each(function(){
	
	this.style.height = (altocaja / nfilas)
	this.style.lineHeight = this.style.height;		
	})

$(".kaixa").each(function(){ this.style.top = (altop * this.style.zIndex)	})

cbarra.style.width = anchocaja;
cbarra.style.height = (altocaja / 2);
cbarra.style.top = (altocaja / 3);
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
resizedivs()
c.innerText = copylistawords.length
  
if (navigator.cookieEnabled) {
if (document.cookie.indexOf("mylevel") < 0) { setcoki() }
 nivel = parseInt(getCookie("mylevel"))
 lenguas  = [parseInt(getCookie("le1")),parseInt(getCookie("le2"))]
 }
 filltextboxs()
 
if (navigator.appVersion.search("Android") != -1) {
$.getScript("js/objetocaja.js", function() {$.getScript("js/androidfunctions.js");})
}
}