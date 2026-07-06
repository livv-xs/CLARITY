//to save the transcript

const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", () => {

    const transcriptText = output.innerText;

    const blob = new Blob(
        [transcriptText],
        { type: "text/plain" }
    );

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = "Clarity_Transcript.txt";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(link.href);

});