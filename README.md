
## 🚀 AutoSnap – React + Spring Boot + Java Auto Screenshot App

AutoSnap is a modern full-stack application designed for automated screenshot and event tracking, built on a robust, secure, and extensible architecture.

### 🌟 Technology Stack

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | **React (Vite)** | Modern, fast, and responsive user interface. |
| **Backend** | **Spring Boot (Java + Maven)** | Secure, lightweight RESTful API for handling events and authentication. |

-----

### ✨ Features

#### 🔐 Frontend (React – Vite)

  * **Beautiful, clean Login UI** for user authentication.
  * **Protected routes** using **React Router** to secure application content.
  * Includes primary navigational pages:
      * 🏠 **Home**
      * 📄 **Page One**
      * 📄 **Page Two**
  * **Periodic Background Events:** Auto event trigger every **20 seconds** using a custom **`useAutoPing`** React Hook.
  * Authentication managed using **LocalStorage** for a seamless user experience.
  * Modern, responsive UI styling.

#### 🛠️ Backend (Spring Boot – Java + Maven)

  * Secure **`/api/auth/login`** endpoint for authentication.
  * Clean, maintainable **DTO-based structure** (e.g., `LoginRequest`, `LoginResponse`).
  * **CORS enabled** for the Vite development server (`http://localhost:5173`).
  * **Lightweight and ready for extensibility:**
      * Integration with persistent storage like **MySQL**.
      * Dedicated **Screenshot upload endpoint**.
      * Comprehensive **Event tracking API**.

-----

### ▶️ Running the Project

Follow these steps to get AutoSnap up and running on your local machine.

#### 1️⃣ Run Backend (Spring Boot)

1.  Navigate to the backend directory:
    ```bash
    cd backend
    ```
2.  Execute the Spring Boot application using Maven:
    ```bash
    mvn spring-boot:run
    ```

> 📌 **Runs at:** `http://localhost:8080`

#### 2️⃣ Run Frontend (React + Vite)

1.  Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2.  Install the necessary Node.js dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```

> 📌 **Runs at:** `http://localhost:5173`

-----

### 💡 Extensibility & Future Enhancements

The current structure is ready to be expanded with enterprise-level features:

  * **Database Integration:** Ready for **MySQL integration** to persist user data and event logs.
  * **Automation Logic:** Can be extended to include the actual **screenshot capture and upload endpoint** logic.
  * **Security:** Implement JWT (JSON Web Token) for stateless authentication.
