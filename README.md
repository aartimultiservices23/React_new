##🚀 AutoSnap – React + Spring Boot + Java Auto Screenshot App

AutoSnap is a modern full-stack application built with:

React (Frontend)

Spring Boot (Backend)


This project demonstrates authentication, protected routing, periodic background events, and extensibility for screenshot automation and backend storage.

✨ Features
🔐 Frontend (React – Vite)

Beautiful, clean Login UI

Protected routes using React Router

Pages included:

🏠 Home

📄 Page One

📄 Page Two

Auto event trigger every 20 seconds using a custom React Hook useAutoPing

Authentication using LocalStorage

Modern, responsive UI styling

🛠️ Backend (Spring Boot – Java + Maven)

/api/auth/login endpoint

DTO-based structure (LoginRequest, LoginResponse)

CORS enabled for Vite (http://localhost:5173)

Lightweight and ready for:

MySQL integration

Screenshot upload endpoint

Event tracking API


▶️ Running the Project
1️⃣ Run Backend (Spring Boot)
cd backend
mvn spring-boot:run


Runs at:
👉 http://localhost:8080

2️⃣ Run Frontend (React + Vite)
cd frontend
npm install
npm run dev


Runs at:
👉 http://localhost:5173

Ready for MySQL integration if needed

Can be extended for screenshot upload endpoint
