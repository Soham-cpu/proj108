function start() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/58U0BW4y3/model.json', ready);
}
function ready() {
    classifier.classify(getResults);
}

function getResults(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_r = Math.floor(Math.random() * 255);
        random_g = Math.floor(Math.random() * 255);
        random_b = Math.floor(Math.random() * 255);

        document.getElementById("obj").innerHTML = 'I can hear a ' + results[0].label;
        document.getElementById("obj-accuracy").innerHTML = 'Probablity of hearing a '+ results[0].label + " is " + (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("obj").style.color = "rgb(" + random_r + "," + random_g + "," + random_b + ")";
        document.getElementById("obj-accuracy").style.color = "rgb(" + random_r + "," + random_g + "," + random_b + ")";

        imgvar = document.getElementById('imgimg');

        if(results[0].label == "Cat"){
            imgvar.src = 'atc.png';
        }else if(results[0].label == "Dog"){
            imgvar.src = 'god.png';
        }else if(results[0].label == "Cow"){
            imgvar.src = 'cow.png';
        }else{
            imgvar.src = 'damedame.png';
        }
    }
}
