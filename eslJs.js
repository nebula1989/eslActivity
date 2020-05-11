var timeWords = ["yesterday", "last night", "2 years ago", "the day before yesterday", "45 minutes ago", "last Spring Festival"];
var subjects = ["I", "my mom", "my dad", "a dog", "my friend", "a car"];
var verbs = ["eat", "play with", "go to", "talk to", "see", "want"];
var objects = ["me", "my teacher", "a car", "a cat"];


document.getElementById("timeBtn").onclick = function() {changeTimeWord()};

function changeTimeWord() {
	var randomTimeWord = timeWords[Math.floor(Math.random()*timeWords.length)];
	document.getElementById("timeBtn").innerHTML = randomTimeWord;		
}