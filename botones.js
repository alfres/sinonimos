function fplay(t){
	t.blur()
var b = document.getElementById("marco");
while (b.children.length > 1) { b.removeChild(b.lastChild);}
puntos = 0 ; plai = true ;
listawords.length = 0
copylistawords.length = 0
pausa = ((480 + b.children.length * 2) - (nivel * 10))
filltextboxs()
$("#bplai, #bset").each(function(){ this.style.visibility = "hidden"	})
if (typeof window.boxloaded == 'undefined') {
  $.getScript('js/objetocaja.js',function(){ fplay2()  } ) 
  } else { fplay2()  }
}

function fplay2(){
pathlista = "listas/lpalabras" + nlista + ".js"
$.getScript(pathlista , function(){ fplay3()  })
createrejjilla()
}

function fplay3(){
copylistawords = copy(listawords);
copylistawords.forEach(addveces)
nwords = (30 + (nivel * 3))
if (nwords > copylistawords.length ) { nwords = copylistawords.length}
c.innerText = copylistawords.length
if (typeof window.checkingloaded == 'undefined') {
 $.getScript('js/checking.js',function(){ fplay4()  } ) 
  } else { fplay4()  }
}

function fplay4(){
newprew()
newpalabro()	
}

function fsettings(){ $.getScript("js/loadsettings.js"); }
 