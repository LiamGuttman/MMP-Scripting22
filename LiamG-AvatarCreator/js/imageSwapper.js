// JavaScript Document

//initializing a variable - this variable is an OBJECT
//the properties will hold the filename of the 
//image we are going to show
var character={backplate:"", skin:"", shirt:"", body:"", eyes:"", mouth:""};

function setBP(changling){
	character.backplate=changling;
	console.log(character.backplate);
	bodyBuilder();
}
function setSkin(changling){
	character.skin=changling;
	console.log(character.skin);
	bodyBuilder();
}

function setShirt(changling){
	character.shirt=changling;
	console.log(character.shirt);
	bodyBuilder();
}

function setBody(changling){
	character.body=changling;
	console.log(character.body);
	bodyBuilder();
}

function setEyes(changling){
	character.eyes=changling;
	console.log(character.eyes);
	bodyBuilder();
}

function setMouth(changling){
	character.mouth=changling;
	console.log(character.mouth);
	bodyBuilder();
}
//function place the images on the page
function bodyBuilder(){
	
	if(character.backplate!=""){
		document.getElementById('backplate').innerHTML="<img class='img-fluid' src='images/"+character.backplate+"' alt='backplate'>";
	}
	
	if(character.skin!=""){
		document.getElementById('skin').innerHTML="<img class='img-fluid' src='images/"+character.skin+"' alt='skin'>";
	}
	
	if(character.shirt!=""){
		document.getElementById('shirt').innerHTML="<img class='img-fluid' src='images/"+character.shirt+"' alt='shirt'>";
	}
	
	if(character.body!=""){
		document.getElementById('body').innerHTML="<img class='img-fluid' src='images/"+character.body+"' alt='body'>";
	}
	
	if(character.eyes!=""){
		document.getElementById('eyes').innerHTML="<img class='img-fluid' src='images/"+character.eyes+"' alt='eyes'>";
	}
	
	if(character.mouth!=""){
		document.getElementById('mouth').innerHTML="<img class='img-fluid' src='images/"+character.mouth+"' alt='mouth'>";
	}

}


