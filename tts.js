//text to speech


//the elements, get it from HTML 

const speakBtn =
    document.getElementById("speakBtn");

const stopSpeakBtn =
    document.getElementById("stopSpeakBtn");

const ttsInput =
    document.getElementById("ttsInput");


//when clicked speak button

speakBtn.addEventListener("click", () => {

    //get text from the textbox
    const text = ttsInput.value;

    //if empty return, don't speak
    if (text.trim() === "") {
        return;
    }

    //cancel any that is continuing
    speechSynthesis.cancel();

    const speech =
        new SpeechSynthesisUtterance(text);
    speech.rate = 1;      // Speed
    speech.pitch = 1;     // Pitch
    speech.volume = 1;    // Volume

    speechSynthesis.speak(speech);

});


//stop speaking, instantly stop

stopSpeakBtn.addEventListener("click", () => {

    speechSynthesis.cancel();

});