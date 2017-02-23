var boxloaded = true; 
function newbox(pa){
if (blok.v < parseInt(pa.title)){
	$("#bplai, #bset").each(function(){ this.style.visibility = "visible"	})
    clearInterval(inter);
plai = false
return false
}else{
var b = document.getElementById("marco"); var box = document.createElement("div");

copiarbox(box,pa)
box.id = "h" + blok.h + "v" + (blok.v - parseInt(pa.title))
pa.style.display = "none"
 b.appendChild(box);
pausa = ((480 + b.children.length * 2) - (nivel * 10))

 box.style.top = (parseInt(blok.style.top) + (altocaja / (nfilas / 2)) - ((altocaja / nfilas) * parseInt(pa.title))) + "px"
box.style.left= parseInt(blok.style.left) + "px"

return box
}
}

function paintbox(caja){
switch(caja.gen) {
case "adj": caja.style.backgroundColor = "LemonChiffon" ; break
case "sust": caja.style.backgroundColor = "MistyRose" ; break
case "prono": caja.style.backgroundColor = "PeachPuff" ; break
case "num": caja.style.backgroundColor = "Cyan" ; break
}
}

function createrejjilla(){
	var x , y
subrejilla.length = 0
rejilla.length = 0
    for (x = 0; x < ncolumns; x++) {
	for (y = 0; y < nfilas; y++) {
	subrejilla.push(false)
       }
	rejilla.push(subrejilla)
	subrejilla = new Array() 
}
}



function neworder() {
	var ob1 = new Object(), ob2 = new Object(), ob3 = new Object()
	var n1, nn1, n2, nn2, n3, nn3
nn1 = Object.assign(ob1, p1);
nn2 = Object.assign(ob2, p2);
nn3 = Object.assign(ob3, p3);

n1 = Object.assign(p1, ob3); 
n2 = Object.assign(p2, ob1);
n3 = Object.assign(p3, ob2);

$(".kaixa").each(function(){ paintbox(this) ; this.innerText = this.testo	})
}


 
function izquierda() {
	   if ( rejilla[(blok.h-1)][(blok.v)] == false){
	blok.style.left = (parseInt(blok.style.left) - anchocaja) + "px" ; blok.h = blok.h - 1
}
} 
 function derecha() {
 	if ( rejilla[(blok.h+1)][(blok.v)] == false){
	blok.style.left = (parseInt(blok.style.left) + anchocaja) + "px" ; blok.h = blok.h + 1
}	
 }
 function abajo() {  while ( rejilla[(blok.h)][(blok.v+1)] == false) {bajarbloke();} }



function newpalabro(){
	var person
posblok()
person = Object.assign(p1, cop1);
person = Object.assign(p2, cop2);
person = Object.assign(p3, cop3);

$(".kaixa").each(function(){ paintbox(this) ; this.innerText = this.testo	})

newprew()
removelist.length = 0
removelist2.length = 0
clearInterval(inter);
inter =    setInterval(function(){bajarbloke();},pausa);
}

function bajarbloke(){
if ( rejilla[(blok.h)][(blok.v+1)] == false){
blok.style.top = (parseInt(blok.style.top) + altop) + "px"
blok.v = (blok.v + 1)
if (blok.v > 2) {cositas.style.display = 'block'}

} else{
if (plai == true){rejilla[(blok.h)][(blok.v-2)] = newbox(pa1)}
if (plai == true){rejilla[(blok.h)][(blok.v-1)] = newbox(pa2)}
if (plai == true){rejilla[blok.h][blok.v] = newbox(pa3)}

clearInterval(inter);

if (plai == true){ txekear() }
}
}

function newprew() {
	cositas.style.display = "none"
$(".cop").each(function(){ newprew2(this)	})

}

function newprew2(caja) {
	var j = copylistawords[alea(nwords)]
	var lenguas2 = copy(lenguas)
	
if (lenguas[0] == (listlenguas[0].length - 1)) {lenguas2[0] = alea(listlenguas[1].length)} 
if (lenguas[1] == (listlenguas[0].length - 1)) {lenguas2[1] = alea(listlenguas[1].length)} 

caja.innerText = j.lang[lenguas2[alea(2)]]
caja.gen = j.gen
caja.fam = j.fam
caja.en = j.lang[lenguas2[1]]
caja.sp = listlenguas[1][lenguas2[1]]
caja.testo = caja.innerText

}



function copiarbox(b1,b2) {
var person	
b1.innerText = b2.innerText
b1.setAttribute("class", "kaixa2");

person = Object.assign(b1, b2);

b1.style.width = b2.style.width
b1.style.height = b2.style.height

b1.style.lineHeight = b2.style.lineHeight
b1.style.fontSize = b2.style.fontSize
b1.style.fontWeight = b2.style.fontWeight

paintbox(b1)
}

function alea(v){
	var x1 = 0
x1 = Math.floor((Math.random() * v) ) ;
return x1;
}

function copy(o) {
   var output, v, key;
   output = Array.isArray(o) ? [] : {};
   for (key in o) {
       v = o[key];
       output[key] = (typeof v === "object") ? copy(v) : v;
   }
   
   return output;
}
