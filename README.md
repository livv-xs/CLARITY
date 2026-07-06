# CLARITY 🎙️

### AI-Powered Live Caption & Communication Assistant

CLARITY is a web-based application that provides **real-time speech-to-text captions** and AI-powered tools to improve communication. It is designed to help users better understand conversations by generating live captions, summarizing discussions, translating transcripts, answering questions about conversations, and converting text to speech.

---

**✨ Features**

### 🎤 Live Caption

* Converts spoken English into live text using the browser's Speech Recognition API.
* Displays captions with timestamps.
* Automatically continues listening until stopped.

### 🤖 AI Summary

* Generates a concise summary of the conversation using AI.

### 🌍 AI Translation

* Translates the transcript into different languages.

### ❓ Ask AI

* Ask questions about the conversation.
* AI answers using only the transcript instead of making up information.

### 🔊 Text-to-Speech

* Reads generated text aloud to improve accessibility.

---

**Technologies Used**

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js
* CORS
* dotenv

### AI

* OpenRouter API
* Large Language Models (LLMs)
* Browser Speech Recognition API

---

## 📂 Project Structure


CLARITY/
│
├── ai.js
├── speech.js
├── tts.js
├── utils.js
├── server.js
├── index.html
├── style.css
├── package.json
└── package-lock.json


---

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/CLARITY.git
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
OPENROUTER_API_KEY=your_api_key_here
```

Start the server:

```bash
node server.js
```

Open `index.html` in your browser.

---

## 📸 Demo

### Home Page & Live Caption
<img width="1438" height="778" alt="1" src="https://github.com/user-attachments/assets/5884c22f-9ac0-444f-954b-aff07f835bab" />

### Text To Speech & AI Summary
<img width="1439" height="773" alt="2" src="https://github.com/user-attachments/assets/d673aba0-ed32-4549-840b-232eebc0625f" />

### Translation & Ask AI
<img width="1440" height="769" alt="3" src="https://github.com/user-attachments/assets/41d9cbeb-2073-40ed-89dc-d1b4f7efcdb1" />


---

## 💡 Motivation

Communication barriers can make conversations difficult for people who are deaf or hard of hearing or for multilingual speakers. CLARITY aims to improve accessibility by combining live speech recognition with AI-powered language assistance in one simple web application.

---

## 🔮 Future Improvements

* Speaker identification
* Conversation history
* Mobile support
* Cloud deployment
* More language options
* Better speech recognition accuracy

---

## 👩‍💻 Developer

Developed by **Livia Kurniawan**

Built as a personal project to explore web development, AI integration, and accessibility technologies.
