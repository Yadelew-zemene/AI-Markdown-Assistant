


#AI-Markdown-Assistant

A full-stack web application that allows users to write notes in Markdown and use AI to summarize or rewrite them. 
The focus of this project is clean architecture, real-world API usage, and simplicity rather than exaggerated features.

---

## Features

*  Write notes using Markdown
*  Live Markdown preview
*  AI-powered actions:

  - Summarize notes
  - Rewrite notes for clarity
*  Full-stack integration (React → Node.js → OpenAI API)
*  Save notes locally (localStorage)
*  Basic loading and error handling



## Tech Stack                           

###Frontend

* React (Create React App)
* JavaScript (ES6)
* react-markdown
* CSS

###Backend

* Node.js
* Express.js
* OpenAI API

# Database

* Not required for MVP
* Notes are stored using localStorage for simplicity



=>Why This Project

This project was built to:

* Learn how Large Language Models are integrated into real applications
* Practice prompt engineering for different AI behaviors
* Build a clean full-stack architecture


## 📂 Project Structure
ai-markdown-assistant/
│
├──client/ai-notes-assiatnt        # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
|   |___READMe.md
│
├── server/        # Node.js backend
│   ├── index.js
│   ├── routes/
│   ├── controllers/
│   └── package.json
│
└── README.md


 API Endpoints

## Summarize Notes
POST /api/summarize

Request Body:
json
{
  "text": "Markdown content"
}


#Rewrite Notes

POST /api/rewrite

Request Body:

json
{
  "text": "Markdown content"
}

---


##Running the Project Locally

###Clone the Repository

```bash
git clone https://github.com/your-username/ai-markdown-notes.git
cd ai-markdown-notes
```

### Start the Backend

```bash
cd server
npm install
npm start
```

### Start the Frontend

```bash
cd client
npm install
npm start


Frontend runs on `http://localhost:3000`
Backend runs on `http://localhost:5000`


###Prompt Design (Example)

Summarization Prompt:Summarize the following markdown notes into clear bullet points.

Rewrite Promp:Rewrite the following notes to be clearer and more professional.
## What I Learned

* Integrating OpenAI API in a backend securely
* Designing REST APIsfor AI-powered features
* Basic prompt engineering techniques
* Managing frontend and backend communication
* Building a complete project from idea to implementation
## Possible Improvements 

* User authentication
* Save notes in a database (mySql)
* Multiple notes per user
* Tone selection (formal, simple, detailed)
* Export notes as PDF

---

 ##👤 Author

**Yadelew Zemene Abay**
A Computer Science Student
Interested in Full‑Stack Development and AI‑powered web applications

## 📄 License

This project is for educational and portfolio purposes.
