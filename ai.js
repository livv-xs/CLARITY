//AI features !! 
// 1. AI Summary
// 2. translation
// 3. ask AI


//the elements

const summaryBtn = document.getElementById("summaryBtn");
const summaryOutput = document.getElementById("summaryOutput");

const translateBtn = document.getElementById("translateBtn");
const translationOutput = document.getElementById("translationOutput");
const languageSelect = document.getElementById("languageSelect");

const askBtn = document.getElementById("askBtn");
const askInput = document.getElementById("askInput");
const askOutput = document.getElementById("askOutput");


//its summary

summaryBtn.addEventListener("click", async () => {

    const transcript = output.innerText;

    if (transcript.trim() === "") {

        summaryOutput.innerHTML =
            "No captions to summarize.";

        return;

    }
    summaryBtn.disabled = true;
    summaryOutput.innerHTML =
        "Generating summary...";

    try {

        const response = await fetch(
            "http://localhost:3000/summarize",
            {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    transcript: transcript

                })

            }
        );

        // to handle if there is an error
        if (!response.ok) {

            if (response.status === 429) {

                summaryOutput.innerHTML =
                    "AI quota reached. Please wait a minute and try again.";

                return;

            }

            throw new Error("Request failed.");

        }

        const data = await response.json();

        summaryOutput.innerHTML =
            `<pre>${data.summary}</pre>`;

    }

    catch (error) {

        console.error(error);

        summaryOutput.innerHTML =
            "Failed to generate summary, please try again";

    }

    finally {

        // Enable button 
        summaryBtn.disabled = false;

    }

});


//translation

translateBtn.addEventListener("click", async () => {

    const transcript = output.innerText;

    if (transcript.trim() === "") {

        translationOutput.innerHTML =
            "No captions to translate...";

        return;

    }

    translateBtn.disabled = true;
    translationOutput.innerHTML =
        "Translating...";

    try {

        const response = await fetch(
            "http://localhost:3000/translate",
            {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    transcript: transcript,

                    language: languageSelect.value

                })

            }
        );

        if (!response.ok) {

            if (response.status === 429) {

                translationOutput.innerHTML =
                    "AI quota reached. Please wait a minute and try again.";

                return;

            }

            throw new Error("Request failed.");

        }

        const data = await response.json();

        translationOutput.innerHTML =
            `<pre>${data.translation}</pre>`;

    }

    catch (error) {

        console.error(error);

        translationOutput.innerHTML =
            "Failed to translate...";

    }

    finally {

    translateBtn.disabled = false;

}

});


//ask AI

askBtn.addEventListener("click", async () => {

    const transcript = output.innerText;

    const question = askInput.value;

    if (transcript.trim() === "") {

        askOutput.innerHTML =
            "No conversation available...";

        return;

    }

    if (question.trim() === "") {

        askOutput.innerHTML =
            "Please enter a question...";

        return;

    }

    askBtn.disabled = true;
    askOutput.innerHTML =
        "Thinking...";

    try {

        const response = await fetch(
            "http://localhost:3000/ask",
            {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    transcript: transcript,

                    question: question

                })

            }
        );

        if (!response.ok) {

            if (response.status === 429) {

                askOutput.innerHTML =
                    "AI quota reached. Please wait a minute and try again.";

                return;

            }

            throw new Error("Request failed...");

        }

        const data = await response.json();

        askOutput.innerHTML =
            `<pre>${data.answer}</pre>`;

    }

    catch (error) {

        console.error(error);

        askOutput.innerHTML =
            "Failed to get AI response...";

    }
    finally {

        askBtn.disabled = false;

    }
});