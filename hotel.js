function toggleElement(elementname){
	if(document.getElementById(elementname).style.display == 'none' ){
		document.getElementById(elementname).style.display = 'block';
		document.getElementById(elementname+"Title").innerHTML = document.getElementById(elementname+"Title").innerHTML.replace("v", "^");		
	}else{
		document.getElementById(elementname).style.display = 'none';
		document.getElementById(elementname+"Title").innerHTML = document.getElementById(elementname+"Title").innerHTML.replace("^", "v");		
	}
}

