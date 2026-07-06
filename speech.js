//live caption

//not supported if on iphone safari
if (!("webkitSpeechRecognition" in window)) {

    statusText.innerText =
        "Speech recognition isn't supported on this browser.";

}

//elements

const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const clearBtn = document.getElementById("clearBtn");

const output = document.getElementById("output");
const statusText = document.getElementById("status");


//speech recognition set

const recognition = new webkitSpeechRecognition();

recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = "en-US";


//stores the caption
let captionHistory = "";


//when click, start listening

startBtn.addEventListener("click", () => {

    recognition.start();

    statusText.innerText = "Listening 🎤";

});


//stop listening

stopBtn.addEventListener("click", () => {

    recognition.stop();

    statusText.innerText = "Stopped ⏹️";

});


//clearing the transcript

clearBtn.addEventListener("click", () => {

    captionHistory = "";

    output.innerHTML = "Your captions will appear here...";

});


//the speech results

recognition.onresult = (event) => {

    let transcript = "";

    for (
        let i = event.resultIndex;
        i < event.results.length;
        i++
    ) {

        if (event.results[i].isFinal) {

            transcript += event.results[i][0].transcript;

        }

    }

    if (transcript !== "") {

        const currentTime =
            new Date().toLocaleTimeString();

        captionHistory += `

            <div class="caption-entry">

                <strong>${currentTime}</strong>

                <p>${transcript}</p>

            </div>

        `;

        output.innerHTML = captionHistory;

        output.scrollTop = output.scrollHeight;

    }

};


recognition.onerror = (event) => {

    statusText.innerText = "Microphone Error ❌";

    console.error(event.error);

};


//keep listening

recognition.onend = () => {

    if (statusText.innerText === "Listening 🎤") {

        recognition.start();

    }

};