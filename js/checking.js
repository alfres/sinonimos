var checkingloaded = true; 
 function iguales(xx,yy,zz){
 	var pala = ""
 cadenaeraser = ""
removelist.length = 0
removelist2.length = 0
 if (zz == true){
 	pala = rejilla[xx][yy].en
 	speaker = rejilla[xx][yy].sp

	  for (x = 0; x < ncolumns; x++) {
	for (y = 0; y < nfilas; y++) {
	if (typeof rejilla[x][y] == "object"){
	if (rejilla[x][y].fam == rejilla[xx][yy].fam){
rejilla[x][y].style.backgroundColor = "Chartreuse"
removelist.push(rejilla[x][y].id)
removelist2.push(x)
removelist2.push(y)
cadenaeraser = cadenaeraser += "#" + rejilla[x][y].id + ","

   }
	}

	}  
	}
	cadenaeraser = cadenaeraser.substring(0, cadenaeraser.length-1)
	
	if (pala != ""){ cantar2(pala,speaker) }
 
  myVar = 	setTimeout(function () {$(cadenaeraser).fadeTo("slow", 0.1,borrarboxes);},1500);
	
	} else {  borrarboxes() }
	
}
function txekear(){
var z = false ; var x2 ; var y2 
  for (x = 0; x < (ncolumns - 1); x++ ) {
	for (y = 0; y < (nfilas) ; y++) {

	if (typeof rejilla[x][y] == "object"){
	if (rejilla[x][y].style.backgroundColor != "Chartreuse") {
		
	if (rejilla[x][y].fam === rejilla[x+1][y].fam ){
	z = true
	x2 = x
	y2 = y
		myVar3 = rejilla[x][y].fam
	copylistawords.forEach(unavez)
	
	break;
	}
	}
	}
	
	}  
	if(z == true){break}
	}
	
	  for (x = 0; x < ncolumns; x++) {
	for (y = 0; y < (nfilas -1); y++) {
	if (typeof rejilla[x][y] == "object"){
	if (rejilla[x][y].style.backgroundColor != "Chartreuse") {
	if (rejilla[x][y].fam == rejilla[x][y+1].fam){
	z = true
	x2 = x
	y2 = y
	myVar3 = rejilla[x][y].fam
	copylistawords.forEach(unavez)
	break;
	}
	}
	}
	
	}
	if(z == true){break}
	
	} 
	  
 
	
	iguales(x2,y2,z)
}
function borrarboxes() {
	
	s = false
	if (removelist.length > 0) {
	s = true
	clearTimeout(myVar);
	removelist.forEach(borrarboxes2)
	
	if (puntos > npuntos ){ subirnivel() ; return }
	borrarboxes3(s)
	}else{ borrarboxes3(s) }
	
 }
 
 function borrarboxes2(item) {
 	
 var b = document.getElementById(item);
     b.parentNode.removeChild(b)
puntos = puntos + 1
copuntos.innerText = "POINTS: " + puntos	
 }
  function borrarboxes3(s) {
  
 	if (s == true) {
 for (x = 0; x < removelist2.length; x += 2) {
rejilla[removelist2[x]][removelist2[x+1]] = false
 	
	}
myVar2 = setTimeout(function (){txekear()},100)	
	
 } else { bajar(false) }

 }
 function bajar(s) {
	clearTimeout(myVar2);
	
	for (y = (nfilas -2); y > -1; y--) {
	  for (x = 0; x < ncolumns ; x++) {

		if (typeof rejilla[x][y] == "object"){
		if (rejilla[x][y+1] == false) {
		var b = document.getElementById("marco");
 var box = document.createElement("div");	
 copiarbox(box,rejilla[x][y])
 box.id = "h" + x + "v" + (y + 1)
box.v = (rejilla[x][y].v +1)
b.appendChild(box);
	
 box.style.top = parseInt(rejilla[x][y].style.top) + (altocaja / nfilas) + "px"
box.style.left= parseInt(rejilla[x][y].style.left) + "px"
 var b2 = document.getElementById(rejilla[x][y].id);
 b2.parentNode.removeChild(b2)	
		rejilla[x][y] = false
		rejilla[x][y+1] = box
		s = true
		return bajar(s)
	} 
	}
}
}
if(s == true){ txekear()
	} else { purgarlista() ; newpalabro(); }
}

function subirnivel(){
	nivel = nivel + 1
if (navigator.cookieEnabled) {setcoki()}
	puntos = 0
 cantar2("chalo bero bat","Serbo-Croatian Male")
clearInterval(inter);

 fplay(document.getElementById("bplai"))

}

function cantar(pala) {
var msg = new SpeechSynthesisUtterance(pala);
 msg.volume = 3 ;
 msg.pitch = 2 ;
 msg.rate = 0.8;
 msg.lang = 'en-EN';
synth.speak(msg);
pala = ""
}

function cantar2(pala,speaker) {
	p = pala
	if (p.slice(-1) == ")") {
p = p.slice(0,(p.length - 4))
}

responsiveVoice.speak(p, speaker, {volume: 1})
pala = ""
}



function unavez(item,index,arr) {
if (arr[index].fam == myVar3) { copylistawords[index].veces = (copylistawords[index].veces + 1)}
}

function purgarlista() {
	
	if (copylistawords.length > nwords) {
		
		for (x = copylistawords.length; x > 0; x--) {
			if (copylistawords[x-1].veces > nveces){
if (copylistawords.length > nwords) {

	copylistawords.splice((x-1),1)
	c.innerText = copylistawords.length
}
}	
}
}
}