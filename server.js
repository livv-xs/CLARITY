require("dotenv").config();
//open enviroment file (dotenv) to open API key

const express = require("express");
//const creates a variable
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); //for the express to read and understand json


const PORT = 3000;
//the port number the server listens to 

//AI helper -- using openRouter AI

async function askAI(prompt) {
    
    console.log("Using model:", "openrouter/free");

    const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {

            method: "POST",

            headers: {

                "Authorization":
                    `Bearer ${process.env.OPENROUTER_API_KEY}`,

                "Content-Type":
                    "application/json"

            },

            body: JSON.stringify({

                model: "openrouter/free",

                messages: [

                    {
                        role: "user",
                        content: prompt
                    }

                ]

            })

        }
    );

    if (!response.ok) {

        throw new Error(await response.text());

    }

    const data = await response.json();

    return data.choices[0].message.content;

}
// Summarize route (if someone sends a post req to this code, summarize
app.post("/summarize", async (req, res) => { //async hv to wait for gemini to rep
//REQ is request, res -- receive 
    try {

        const transcript = req.body.transcript;

        const summary = await askAI(

        `Summarize this transcript in 3 bullet points:

        ${transcript}`

        );

        res.json({

            summary

        });

    }

    catch (error) { //to catch error

        console.error(error);

        res.status(500).json({

            error: "Something went wrong."

        });

    }

});

// translate
app.post("/translate", async (req, res) => {

    try{

        const transcript = req.body.transcript;

        const language = req.body.language;

        const translation = await askAI(

        `Translate this transcript into ${language}.

        Transcript:

        ${transcript}`

        );

        res.json({

            translation

        });

    }
    catch(error){

        console.error(error);

        res.status(500).json({

            error:"Translation failed."

        });

    }

});

// Ask AI
app.post("/ask", async (req, res) => {

    try {

        const transcript = req.body.transcript;

        const question = req.body.question;

        const answer = await askAI(

    `You are a helpful AI communication assistant.

    Here is the conversation transcript:

    ${transcript}

    Answer the user's question using ONLY the information in the transcript.

    If the transcript does not contain enough information, politely say that the transcript doesn't provide enough information rather than making up an answer.

    Question:

    ${question}`

    );

    res.json({

        answer

    });
    }

    catch (error) {

        console.error(error);

        res.status(500).json({

            error: "Failed to answer question."

        });

    }

});

app.listen(PORT, () => { //start listening req 

    console.log(
        `Server is running on http://localhost:${PORT}`
    );

});