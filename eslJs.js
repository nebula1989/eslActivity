var timeWords = ["yesterday", "last night", "2 years ago", "the day before yesterday", "45 minutes ago", "last Spring Festival"];
var subjects = ["I", "my mom", "my dad", "a dog", "my friend", "a car", "my neighbor", "a glass of milk", "a monkey", "my cousin", "my grandmother", "my grandfather", "my uncle", "my aunt"];
var verbs = ["eat", "play with", "talk to", "see", "make", "think about", "look at", "become", "help", "sit on", "meet", "watch", "speak to", "read to", "buy"];
var objects = ["me", "my teacher", "my mom", "my dad", "a dog", "my friend", "a car", "a shirt", "some pants", "some milk", "a computer", "a chair", "a monkey", "a piano", "a shoe", "some money", "a pencil", "some socks", "a piece of paper", "a tiger", "minecraft", "some insects"];


document.getElementById("timeBtn").onclick = function() {document.getElementById("timeBtn").innerHTML = timeWords[Math.floor(Math.random()*timeWords.length)];};
document.getElementById("subjectBtn").onclick = function() {document.getElementById("subjectBtn").innerHTML = subjects[Math.floor(Math.random()*subjects.length)];};
document.getElementById("verbBtn").onclick = function() {document.getElementById("verbBtn").innerHTML = verbs[Math.floor(Math.random()*verbs.length)];};
document.getElementById("objectBtn").onclick = function() {document.getElementById("objectBtn").innerHTML = objects[Math.floor(Math.random()*objects.length)];};