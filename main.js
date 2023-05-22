"https://teachablemachine.withgoogle.com/models/2gsDdjSTi/"

function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classsifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/2gsDdjSTi/model.json", modelReady);
}

function modelReady(){
    classsifier.classify(gotResults);
}