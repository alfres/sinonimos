 function loadlenguas(item,index,arr) {

 select = document.getElementById("L1");
 select2 = document.getElementById("L2");
          var opt = document.createElement('option');
          var opt2 = document.createElement('option');
            opt.value = index;
            opt.innerHTML = arr[index];
            if (index == lenguas[0]){ opt.selected = true;}
            opt2.value = index;
            opt2.innerHTML = arr[index];
            if (index == lenguas[1]){ opt2.selected = true;}
            select.appendChild(opt);
            select2.appendChild(opt2);	
}  
   
  function loadgridsizes(item,index,arr) {
 select = document.getElementById("L3");

          var opt = document.createElement('option');
          opt.value = arr[index];
          opt.innerHTML = arr[index];
   
          var res = opt.value.split(" X ");
          if (parseInt(res[0]) == ncolumns && parseInt(res[1]) == nfilas){ opt.selected = true;}
            select.appendChild(opt);
         
} 

  
$("#bplai, #bset").each(function(){ this.style.visibility = "hidden"	})
    
    var divsettings = document.createElement('div');
divsettings.setAttribute('id', 'marco2');
divsettings.style.width = marco.style.width;
divsettings.style.height = marco.style.height;
divsettings.style.backgroundColor = "LemonChiffon"
divsettings.style.zIndex = 5000
divsettings.style.position = "absolute";
divsettings.style.display = "block"
   
 divsettings.innerHTML =  "<br><br>&nbsp;&nbsp;&nbsp;&nbsp;"
 divsettings.innerHTML += "LANG 1 &nbsp;<select id='L1'> </select>"
 divsettings.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "
 divsettings.innerHTML += "LANG 2 &nbsp;<select id='L2'></select>"
 divsettings.innerHTML += "<i class='fa fa-bullhorn' style='text-align:right;'></i>"
 divsettings.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "
 divsettings.innerHTML += "<i style='font-size:24px' class='fa'>&#xf0ce;</i>&nbsp;&nbsp;<select id='L3'>"
 divsettings.innerHTML += "<br><br><br><br><br><br><br><br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" 
 divsettings.innerHTML += "<button id='bsave' class='button' onclick='javascript:saveset(this);' style='font-size:100%; border-radius: 10%; width:12%; height:8%; display: inline; '>SAVE</button>"
 divsettings.innerHTML += "<br><br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
 divsettings.innerHTML += "<a href='http://bluefish.openoffice.nl/'>Made with Bluefish HTML editor.</a>"
  document.body.appendChild(divsettings);
  divsettings.style.top = 0 + "px";
divsettings.style.left = anchocaja + "px";

   listlenguas[0].forEach(loadlenguas)
   gridsizes.forEach(loadgridsizes)
   
   
 function saveset(){
 	
  lenguas[0] = L1.value 
  lenguas[1] = L2.value
  var res = L3.value.split(" X ");
  nfilas = parseInt(res[1])
  ncolumns = parseInt(res[0])
filltextboxs()
resizedivs()
 document.body.removeChild(document.body.lastChild) 
 $("#bplai, #bset").each(function(){ this.style.visibility = "visible"	})

 if (navigator.cookieEnabled) {       setcoki() }
        }  
