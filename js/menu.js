db=5+1;
document.write(tabla(db));
var menusor=new Array(db);
var menugombok=[new menugomb("<img src='kepek/cimer.png'>","fooldal.html"),new menugomb("Hasznos_info","info.html"),new menugomb("Szabályok","szabaly.html"),new menugomb("Update_info","update.html"),new menugomb("Clan_Wars","war.html"),new menugomb("Külső","kulso.html")];
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