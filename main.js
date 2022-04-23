Webcam.set({
    width: 350,
    height: 300,
    image_format: "jpg",
    jpg_quality: 90
})
 var prediction1="yes"
camera=document.getElementById("camera")
Webcam.attach(camera)

function Take_Snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='resul' src=" +data_uri+ ">"
        
    })
}
console.log("ml5 version",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/03EOeUy6O/model.json",modelloaded)
function modelloaded() {
    console.log("model loadedddddddddd")
    
}




function speak()
{
    var synth = window.speechSynthesis
    speakdata1 = "the first prediction is " +prediction1

    var utterthis = new SpeechSynthesisUtterance(speakdata1+speakdata2)
    synth.speak(utterthis)

    }
function Show(){
    img=document.getElementById("resul")
    classifier.classify(img,gotresult)


}
function gotresult(error,results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results)
        document.getElementById("result1").innerHTML = results[0].label
        prediction1=results[0].label
        speak()
        if (prediction1 == "1") {
            document.getElementById("Emoji1").innerHTML = "1"
        }
        if (prediction1 == "2") {
            document.getElementById("Emoji1").innerHTML = "2"
        }
        if (prediction1 == "3") {
            document.getElementById("Emoji1").innerHTML = "3"}
        if (prediction1 == "2") {
                document.getElementById("Emoji1").innerHTML = "2"
            }
        if (prediction1 == "3") {
                document.getElementById("Emoji1").innerHTML = "3"
            }
        
    }
}
