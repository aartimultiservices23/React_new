🚀 AutoSnap – React + Spring Boot + Java Auto Screenshot App

AutoSnap is a full-stack project combining:

React (Frontend)

Spring Boot (Backend)



It includes login functionality, protected routes, automatic background events, and a standalone Java application that captures desktop screenshots every few seconds.

📌 Features
🔐 Frontend (React – Vite)

Login page with styled UI

Protected routes using React Router

Pages: Home, Page One, Page Two

Auto event trigger every 20 seconds using a custom React Hook useAutoPing

LocalStorage authentication

Smooth navigation UI

🛠️ Backend (Spring Boot – Java + Maven)

/api/auth/login login API

Uses DTOs: LoginRequest & LoginResponse

CORS enabled for React (5173)



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
