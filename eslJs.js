var timeWords = ["yesterday", "last night", "2 years ago", "the day before yesterday", "45 minutes ago", "last Spring Festival"];
var subjects = ["I", "my mom", "my dad", "a dog", "my friend", "a car"];
var verbs = ["eat", "play with", "go to", "talk to", "see", "want"];
var objects = ["me", "my teacher", "a car", "a cat"];


document.getElementById("timeBtn").onclick = function() {document.getElementById("timeBtn").innerHTML = timeWords[Math.floor(Math.random()*timeWords.length)];};
document.getElementById("subjectBtn").onclick = function() {document.getElementById("subjectBtn").innerHTML = subjects[Math.floor(Math.random()*subjects.length)];};

function changeTimeWord() {
	// change time words
	
	// chnage subjects
	

}