var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList()

recognition.interimResults = false;
recognition.maxAlternatives = 3;

let startBtn = document.getElementById('start-btn');

startBtn.onclick = function() {
  recognition.start();
  console.log('Ready to receive yer voice.');
}

recognition.onresult = function(e) {
  let last = e.results.length - 1;
  let word = e.results[last][0].transcript;

  // console.log(diagnostic.textContent);
  console.log('results: ', event.results)
  console.log('result: ', word);
  console.log('Confidence: ' + e.results[0][0].confidence);
}

recognition.onspeechend = function() {
  recognition.stop();
  console.log('stopped');
}

recognition.onnomatch = function(e) {
  diagnostic.textContent = "I didn't recognise that color.";
}

recognition.onerror = function(e) {
  diagnostic.textContent = 'Error occurred in recognition: ' + e.error;
}
