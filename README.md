# Express.js Authentication with JWT – Practice Project 🔐

This repository is a **practice project** focused on implementing secure **authentication and authorization** using **Node.js**, **Express.js**, and **JWT (JSON Web Tokens)**.

The goal was to understand how token-based login systems work, including protected routes, user role access, and session security — key concepts in backend development and modern web apps.

---

## 🔍 What This Project Covers

- ✅ User Registration & Login with hashed passwords (bcrypt)
- ✅ JWT Token Generation on successful login
- ✅ Authorization Middleware to protect routes
- ✅ Role-based access control (Admin/User demo)
- ✅ Token verification in headers for protected APIs
- ✅ Basic RESTful structure (no database focus)

---

## 🛠️ Tech Stack

| Tool         | Purpose                             |
|--------------|-------------------------------------|
| **Node.js**  | Runtime for server-side JavaScript  |
| **Express.js**| Web framework                      |
| **JWT**      | Authentication tokens               |
| **bcryptjs** | Password hashing                    |
| **Postman**  | API testing                         |

---

## 📁 Project Structure

/controllers
/routes
/middleware
/utils
server.js



- `authMiddleware.js`: Verifies JWT tokens
- `userController.js`: Handles login/register logic
- `protectedRoute.js`: Example of a route accessible only after login

---

## 🚀 How to Run

```bash
git clone https://github.com/yourusername/express-jwt-auth-practice.git
cd express-jwt-auth-practice

npm install
node server.js
Use Postman to test the following endpoints:

POST /api/register – create a new user

POST /api/login – receive JWT token

GET /api/protected – requires valid token in Authorization header

🧠 What I Learned
Token-based stateless authentication

Secure route handling in Express

Importance of hashing and storing passwords safely

Role-based route access control (if implemented)
