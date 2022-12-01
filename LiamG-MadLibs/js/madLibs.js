// JavaScript Document

//Variables
var Word0 = ""; //fictional monster
var Word1 = "";	//object that makes sound
var Word2 = ""; //animal
var Word3 = ""; //action
var Word4 = ""; //place - fantasy
var Word5 = ""; //weapon/tool/resource
var Word6 = "";	//type of being
var Word7 = "";	//weapon
var Word8 = "";	//musical instrument
var Word9 = ""; //song
var Word10 = ""; //least favorite food
var Word11 = ""; //meal of the day
var Meal = "";
var imageChoice = "";

function Start(){
	Word0 = document.forms["madLibs"]["word0"].value;
	Word1 = document.forms["madLibs"]["word1"].value;
	Word2 = document.forms["madLibs"]["word2"].value;
	Word3 = document.forms["madLibs"]["word3"].value;
	Word4 = document.forms["madLibs"]["word4"].value;
	Word5 = document.forms["madLibs"]["word5"].value;
	Word6 = document.forms["madLibs"]["word6"].value;
	Word7 = document.forms["madLibs"]["word7"].value;
	Word8 = document.forms["madLibs"]["word8"].value;
	Word9 = document.forms["madLibs"]["word9"].value;
	Word10 = document.forms["madLibs"]["word10"].value;
	Word11 = document.forms["madLibs"]["word11"].value;
	Meal = document.forms["madLibs"]["word11"].value;
	
	switch(Meal){
		case "dinner":
			imageChoice = "images/dinner.png";
			break;
		case "lunch":
			imageChoice = "images/lunch.png";
			break;
		case "breakfast":
			imageChoice = "images/breakfast.png";
			break;
	}
	
	document.getElementById("story").innerHTML = "The towering beast roared as its footsteps grew closer, while you stood completely still, frozen from fear. As it got closer, the ground shook more and more, making you lose your balance and eventually fall over. Looking at the silhouetted figure, it seemed to resemble a " + Word0 + " that you’ve seen before. Just as the massive foot of the beast was lowering down to crush you, you woke up. There’s a sound. It’s your " + Word1 + ". You turn it off and drag yourself out of your bed, making sure not to step on your pet " + Word2 + "." + "<br>" + "As you open the door of your bedroom, ready to head out to " + Word3 + ", the door transforms into a portal, transporting you to " + Word4 + ". As you lay on the ground, you think to yourself. “Well. I’m not at home anymore.” You pull yourself up and look around. It feels like you’ve seen your surroundings somewhere before. Noticing a tree, you approach it and find what appears to be a " + Word5 + ". You quickly pick it up, making sure nobody is around to see you take it. There’s nobody around, so it must be free, right? That’s what you thought, until a crowd of armed " + Word6 + " quickly surrounded you." + "<br>" + "“What is your business here, stranger?” One of them asks, pointing their " + Word7 + " at you. You try to explain how you ended up in their world, when another " + Word6 + " approaches and asks a question that could completely change your day. “Are you not our hero’s bard? I believe I have seen your face somewhere around here before.” To test their theory, they pass you a " + Word8 + " to play for them. You have never played this one in your life, but you know exactly what to try playing. They stand around and watch as you try to play " + Word9 + " with the " + Word8 + "." + "<br>" + "“Amazing work! You really are the bard! Come along with us to the village, we’ll bring you back to your crew.” Everyone around you starts to cheer and head away, some singing the tune you performed for them. You pick up the " + Word5 + " that you found, and followed them out of the woods, along the trail, and into the village. You might not know this world, but you already know you won’t be missing the " + Word10 + " you were supposed to have for " + Word11 + " tonight." + "<br>" + " <img src='" + imageChoice + "' alt='Your Choice!' style='py-3'> "
}