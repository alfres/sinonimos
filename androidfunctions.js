var barbuttons = document.createElement('div');
barbuttons.setAttribute('id', 'c2');
barbuttons.style.width = anchocaja;
barbuttons.style.height = altocaja;

barbuttons.style.color = "white";
barbuttons.style.position = "absolute";
barbuttons.style.display = "block"

    
    
    var ic = document.createElement('i');
     ic.setAttribute('id', 'icon1');
     ic.setAttribute('class', "fa fa-fw");
     ic.onclick = neworder
   ic.innerHTML = "&#xf074;"
      
       var ic2 = document.createElement('i');
     ic2.setAttribute('id', 'icon2');
     ic2.setAttribute('class', "fa fa-fw");
     ic2.onclick = izquierda
   ic2.innerHTML = "&#xf053;"
   
   
  
      var ic3 = document.createElement('i');
     ic3.setAttribute('id', 'icon3');
     ic3.setAttribute('class', "fa fa-fw");
     ic3.onclick = derecha
   ic3.innerHTML = "&#xf054;"
      
       var ic4 = document.createElement('i');
     ic4.setAttribute('id', 'icon4');
     ic4.setAttribute('class', "fa fa-fw");
     ic4.onclick = abajo
   ic4.innerHTML = "&#xf078;" 
   
 barbuttons.appendChild(ic);
 barbuttons.appendChild(ic2);
  barbuttons.appendChild(ic3);
   barbuttons.appendChild(ic4);
document.body.appendChild(barbuttons);
barbuttons.style.left = (anchocaja * 8.0);
barbuttons.style.top = 0 ;

	$("#icon1,#icon2,#icon3,#icon4").each(function(){
	if (window.innerWidth < 801) {
	
	this.style.margin = "10% 8%";
	this.style.fontSize = "420%";
	} else if (window.innerWidth < 1025) {
		this.style.margin = "12% 10%";
	this.style.fontSize = "500%";
} else if (window.innerWidth < 1153) {
		this.style.margin = "13% 11%";
	this.style.fontSize = "550%";	
} else  {
		this.style.margin = "14% 12%";
	this.style.fontSize = "590%";		
}
})	
blok.onclick = neworder

mark.onclick = moverbloquetablet
mark.ondblclick = bajar

//c2.style.display = "block"


 function moverbloquetablet(evObject){
 	
 	//alert(((evObject.pageX - 128)/ 110))
              var elCaracter = Math.floor(((evObject.pageX - anchocaja)/ anchocaja));
              var elCaracter2 = Math.floor(((evObject.pageY - nfilas)/ (altocaja / nfilas)));
			 if(elCaracter <  blok.h) {
     
izquierda()
} 
 			else if(elCaracter >  blok.h) {
     
derecha()
} else if (elCaracter2 > blok.v){abajo()} 
 }