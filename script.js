function surligne(champ, erreur)
{
	if(erreur)
		champ.style.backgroundColor = "red";
	else
		champ.style.backgroundColor = "";
}

function verifNom(champ)
{
	if(champ.value.length < 2 || champ.value.length > 25)
	{
		surligne(champ,true);
		return false;
	}
	else
	{
		surligne(champ, false);
		return true;
	}
}

function verifPrenom(champ)
{
	if(champ.value.length < 2 || champ.value.length > 25)
	{
		surligne(champ,true);
		return false;
	}
	else
	{
		surligne(champ, false);
		return true;
	}	
}

function verifVille(champ)
{
	if(champ.value.length < 2 || champ.value.length > 25)
	{
		surligne(champ, true);
		return false;
	}
	else
	{
		surligne(champ, false);
		return true;
	}
}

function verifAge(champ)
{
	var age = parseInt(champ.value);
	if(isNaN(age) || age < 18)
	{
		surligne(champ, true);
		return false;
	}
	else
	{
		surligne(champ, false);
		return true;
	}
}


function verifForm(f)
{
	var nomOK = verifNom(f.nom);
	var prenomOK = verifPrenom(f.prenom);
	var villeOK = verifVille(f.ville);
	var ageOK = verifAge(f.age);

	if(nomOK && prenomOK && villeOK && ageOK)
		return true;
	else
	{
		alert("Essaye de remplir le formulaire correctement. Respecte moi x)")
		return false;
	}
}