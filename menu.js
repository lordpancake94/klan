db=5+1;
document.write(tabla(db));
var menusor=new Array(db);
//var menugombok=["<img src='kepek/cimer.jpg'>","Főoldal","Szabályok","Valami","Facebook","Külső"];
var menugombok=[new menugomb("<img src='cimer.jpg'>","fooldal.html"),new menugomb("Főoldal","fooldal.html"),new menugomb("Szabályok","szabaly.html"),new menugomb("Valami","valami.html"),new menugomb("Facebook","face.html"),new menugomb("Külső","kulso.html")];
for(var i=0;i<menusor.length;i++)
{
	menusor[i]=document.getElementById(i);
	menusor[i].innerHTML=menugombok[i].felirat;
    menusor[i].onmouseover=valt;
    menusor[i].onmouseout=valt;
    menusor[i].onclick=megnyit;
}
menusor[0].style.width='40px';
function tabla(cellaszam)
{
	s="<table> <tr>";
	
	id=0;
	for(var i=0;i<cellaszam;i++)
	{
		s+='<td id="'+id+'"> </td>';
		id++;
	}
	s+="</tr> </table>";
	return s;
	
}

function megnyit()
{
	window.open(menugombok[this.id].hivatkozas,"foframe");
}

function valt()
{
    this.style.cursor = "pointer";
	if(this.style.backgroundColor!="red")
	{
		this.style.backgroundColor="red";
	}
	else
	{
		this.style.backgroundColor="orangered";
	}
}
function menugomb(felirat,hivatkozas)
{
    this.felirat=felirat;
    this.hivatkozas=hivatkozas;
}
