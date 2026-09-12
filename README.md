
# AI-Markdown-Assistant

A full-stack web application that allows users to write notes in Markdown and use AI to summarize or rewrite them. 

The focus of this project is clean architecture, real-world API usage, and simplicity rather than exaggerated features.

---

## 🚀 Features

- **Markdown Editor:** Write notes using native Markdown syntax.
- **Live Preview:** Real-time rendered Markdown preview.
- **AI-Powered Actions:**
  - **Summarize:** Generate quick summaries of your notes.
  - **Rewrite:** Refine and clarify your notes for better readability.
- **Full-Stack Integration:** Seamless data flow from React → Node.js → Gemini API.
- **Local Persistence:** Save notes locally using `localStorage`.
- **User Experience:** Basic loading states and error handling.

---

## 🛠 Tech Stack

### Frontend
- **Framework:** React (Create React App)
- **Language:** JavaScript (ES6)
- **HTTP Client:** Axios
- **Markdown Parsing:** `react-markdown`
- **Styling:** CSS

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **AI Integration:** Google Gemini API
- **Architecture:** REST API

### Database
- *Not required for MVP.* Notes are stored directly in the browser using `localStorage` for simplicity.

---

## 💡 Why This Project

This project was built to:
- Learn how Large Language Models (LLMs) are integrated into real-world applications.
- Practice prompt engineering for different AI behaviors.
- Build a clean full-stack architecture.
- Understand frontend and backend communication.

---

## 📂 Project Structure

```text
ai-markdown-assistant/
│
├── client/ai-notes-assistant        # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Actions.jsx
│   │   │   ├── Editor.jsx
│   │   │   └── Preview.jsx
│   │   ├── App.js
│   │   └── index.js
│   │
│   └── package.json
│
├── server/                          # Node.js backend
│   ├── index.js
│   ├── routes/
│   │   └── airoutes.js
│   ├── controllers/
│   │   ├── aiController.js
│   │   └── fileController.js
│   ├── middleware/
│   │   └── upload.js
│   └── package.json
│
└── README.md
```

---

## 📡 API Endpoints

### 1. Summarize Notes
- **Endpoint:** `POST /api/summarize`
- **Request Body:**
  ```json
  {
    "text": "Markdown content"
  }
  ```

### 2. Rewrite Notes
- **Endpoint:** `POST /api/rewrite`
- **Request Body:**
  ```json
  {
    "text": "Markdown content"
  }
  ```

---

## 💻 Running the Project Locally

### 1. Clone the Repository
```bash
git clone https://github.com/Yadelew-zemene/AI-Markdown-Assistant.git
cd AI-Markdown-Assistant
```

### 2. Start the Backend

Navigate to the `server` directory and install dependencies:
```bash
cd server
npm install
```

Create a `.env` file inside the `server` directory:
```env
GEMINI_API_KEY=your_api_key_here
```

Start the backend server:
```bash
node --env-file=.env index.js
```
> **Note:** The backend runs on `http://localhost:5000`. Do not commit your real API key to GitHub.

### 3. Start the Frontend

Open a new terminal window, navigate to the client directory, and start the React application:
```bash
cd client/ai-notes-assistant
npm install
npm start
```
> The frontend runs on `http://localhost:3000`.

---

## 🧠 Prompt Design

### Summarization Prompt
> *"Summarize these markdown notes in bullet points."*

### Rewrite Prompt
> *"Rewrite these markdown notes clearly and professionally."*

---

## 📚 What I Learned

- Securing and integrating the Gemini API into a Node.js backend.
- Designing clean REST APIs for AI-driven features.
- Practicing basic prompt engineering techniques.
- Managing client-server asynchronous communication.
- Handling asynchronous AI requests effectively.
- Building a complete project end-to-end from initial idea to implementation.

---

## 🔮 Possible Improvements

- [ ] Add User authentication.
- [ ] Save notes in a database (e.g., MySQL).
- [ ] Support multiple notes per user.
- [ ] Add tone selection (formal, simple, detailed).
- [ ] Include more AI writing tools.
- [ ] Export notes to PDF format.
- [ ] Enable cloud synchronization.

---

## 👤 Author

**Yadelew Zemene Abay**  
*Computer Science Student*  
Interested in Full-Stack Development and AI-powered web applications.

---

## 📄 License

This project is created for educational and portfolio purposes.
