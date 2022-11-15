var mto=0.5;
var menu_score = 0;
var naoh = 25;
var sand = 50;
function dispmenu(val)
{
   val.classList.toggle("change");
  menu_score = menu_score+1;
  if(menu_score==1)
  {
    document.getElementById("navbar").setAttribute("style","display:block");
    document.getElementById("simulation-cont").setAttribute("style","opacity:0.5");
      if(mto!=1)
        document.getElementById("matwork").setAttribute("style","opacity:1");
    menu_score=-1;
    document.body.style.backgroundColor="black";
  }
  else
    {
      if(mto!=1)
        document.getElementById("matwork").setAttribute("style","opacity:10");
         document.body.style.backgroundColor="white";
          document.getElementById("simulation-cont").setAttribute("style","opacity:01");
      document.getElementById("navbar").setAttribute("style","display:none");
	  }
}

function ladle()
{
	document.getElementById("simulation").innerHTML="<img src='images/binderInSand.gif' width='50%'>";
	document.getElementById("ladle").style.display = "none";
	setTimeout(() => {
	document.getElementById("coreBox").style.display = "block";
	}, 7000);
}

function coreBox()
{
	document.getElementById("simulation").innerHTML="<img src='images/sandInBox.gif' width='60%'>";
	document.getElementById("coreBox").style.display = "none";
	setTimeout(() => {
	document.getElementById("rammer").style.display = "block";
	}, 6000);
}

function rammer()
{
	document.getElementById("simulation").innerHTML="<img src='images/ramming.gif' width='35%'>";
	document.getElementById("rammer").style.display = "none";
	setTimeout(() => {
	document.getElementById("pin").style.display = "block";
	}, 2000);
}

function pin()
{
	document.getElementById("simulation").innerHTML="<img src='images/insertPin.gif' width='50%'>";
	document.getElementById("pin").style.display = "none";
	setTimeout(() => {
	document.getElementById("cylinder").style.display = "block";
	}, 4000);
}

function cylinder()
{
	document.getElementById("simulation").innerHTML="<img src='images/CO2.gif' width='60%'>";
	document.getElementById("cylinder").style.display = "none";
	setTimeout(() => {
	document.getElementById("core").style.display = "block";
	}, 3000);
}

function core()
{
	document.getElementById("simulation").innerHTML="<img src='images/core.gif' width='80%'>";
	document.getElementById("core").style.display = "none";
}

function resetfun()
{
	alert("Simulation will get restart.");
	location.reload();
}