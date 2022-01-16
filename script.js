

//**************************** || La declaration des variables globale ||*************************************

const buttM= document.getElementById('btnM'); 
const buttF= document.getElementById('btnF'); 
const buttN= document.getElementById('btnN'); 
const buttT= document.getElementById('btnT'); 
const block=document.getElementsByClassName('contenue');

var bHeight=400;
var bHeight=400;
var dWidth=210;
var dHeight=250;

var  result=0.0;
//**************************** || L'evenement de la premiere page avec jquery=> premiere abonnement ||*********************



//**************************** || L'evenement de la premiere botton => premiere abonnement ||*********************


buttM.addEventListener('click', function(e){
    let child1 = document.getElementById('imgBx1');
    block[0].removeChild(child1);
   document.getElementById('carte1').style.height=bHeight+"px";

   let elt = document.createElement("img");
   elt.src="images/mus1.png";
   document.getElementById("cont1").appendChild(elt);
   elt.style.height= dHeight + "px";
   elt.style.width= dWidth + "px";

//**************************** || Pour Caluler le montant ||*********************
   result=result + parseFloat(document.getElementById('btnM').value);
   let eltR= document.getElementById('res');
   eltR.innerHTML=result +"HD";
   e.preventDefault();
});

//**************************** || L'evenement de la Deuxieme botton => Deuxieme abonnement ||*********************

buttF.addEventListener('click', function(e){
    let child2 = document.getElementById('imgBx2');
    block[1].removeChild(child2);
   document.getElementById('carte2').style.height=bHeight+"px";
   //    let cont= document.getElementById('mBx1');
   //    cont.scr="images/mus1.png";
   let elt = document.createElement("img");
   elt.src="images/fit2.png";
   document.getElementById("cont2").appendChild(elt);
   elt.style.height= dHeight + "px";
   elt.style.width= dWidth + "px";


//**************************** || Pour Caluler le montant ||*********************
   result=result + parseFloat(document.getElementById('btnF').value);
   let eltR= document.getElementById('res');
   eltR.innerHTML=result +"HD";
   e.preventDefault();
});

//**************************** || L'evenement de la Troisiéme botton => Troisiéme abonnement ||*********************
buttN.addEventListener('click', function(e){
    let child2 = document.getElementById('imgBx3');
    block[2].removeChild(child2);
   document.getElementById('carte3').style.height=bHeight+"px";
   //    let cont= document.getElementById('mBx1');
   //    cont.scr="images/mus1.png";
   let elt = document.createElement("img");
   elt.src="images/nat2.png";
   document.getElementById("cont3").appendChild(elt);
   elt.style.height= dHeight + "px";
   elt.style.width= dWidth + "px";

//**************************** || Pour Caluler le montant ||*********************
   result=result + parseFloat(document.getElementById('btnN').value);
   let eltR= document.getElementById('res');
   eltR.innerHTML=result +"HD";
   e.preventDefault();
});


//**************************** || L'evenement de la Quatrieme botton => Quatrieme abonnement ||*********************
buttT.addEventListener('click', function(e){
    let child2 = document.getElementById('imgBx4');
    block[3].removeChild(child2);
   document.getElementById('carte4').style.height=bHeight+"px";
   //    let cont= document.getElementById('mBx1');
   //    cont.scr="images/mus1.png";
   let elt = document.createElement("img");
   elt.src="images/tins3.png";
   document.getElementById("cont4").appendChild(elt);
   elt.style.height= dHeight + "px";
   elt.style.width= dWidth + "px";

   result=result + parseFloat(document.getElementById('btnT').value);
   let eltR= document.getElementById('res');
   eltR.innerHTML=result +"HD";
   e.preventDefault();
});


//**************************** || Le script javascript Pour calculer le montant d'abonement ||**************************
// Make the DIV element draggable:
dragElement(document.getElementById("imgBx1"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
