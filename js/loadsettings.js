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
   
   
$("#bplai, #bset").each(function(){ this.style.visibility = "hidden"	})
    
    var divsettings = document.createElement('div');
divsettings.setAttribute('id', 'marco2');
divsettings.style.width = marco.style.width;
divsettings.style.height = marco.style.height;
divsettings.style.backgroundColor = "LemonChiffon"
divsettings.style.zIndex = 5000
divsettings.style.position = "absolute";
divsettings.style.display = "block"
   
    divsettings.innerHTML = "<br><br>&nbsp;&nbsp;&nbsp;&nbsp; LINGUA 1 &nbsp;&nbsp;<select id='L1'> </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; LINGUA 2 &nbsp;<select id='L2'></select><i class='fa fa-bullhorn' style='text-align:right;'></i><br><br><br><br><br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id='bsave' class='button' onclick='javascript:saveset(this);' style='font-size:100%; border-radius: 10%; width:12%; height:8%; display: inline; '>SAVE</button><br><br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='http://bluefish.openoffice.nl/'>Made with Bluefish HTML editor.</a>"
  
  document.body.appendChild(divsettings);
  divsettings.style.top = 0;
divsettings.style.left = anchocaja ;

   listlenguas[0].forEach(loadlenguas)
   
   
   
 function saveset(){
  lenguas[0] = L1.value 
  lenguas[1] = L2.value
filltextboxs()

 document.body.removeChild(document.body.lastChild) 
        $("#bplai, #bset").each(function(){ this.style.visibility = "visible"	})

 if (navigator.cookieEnabled) {       setcoki() }
        }  