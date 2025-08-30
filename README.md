🚗 Car Rental Application

A full-stack **Car Rental Management System** built with **MERN stack (MongoDB, Express.js, React, Node.js)** and deployed on **Vercel**.\
It allows users to **rent cars, manage bookings, and become owners** who can list and manage their vehicles.

* * * * *

✨ Features
----------

### 🔹 User Features

-   Register / Login with JWT authentication

-   Browse available cars

-   Book cars for specific dates

-   Manage personal profile

### 🔹 Owner Features

-   Upgrade account to **Owner** role

-   Add cars with images (via ImageKit)

-   Manage listed cars (availability toggle, delete, etc.)

-   View bookings for their cars

### 🔹 Admin / System

-   Secure API routes with JWT middleware

-   MongoDB Atlas integration

-   Cloud image storage & optimization with ImageKit

* * * * *

🛠️ Tech Stack
--------------

### Frontend

-   **React 19** (with Vite 7)

-   **Tailwind CSS 4** for styling

-   **React Router v7** for navigation

-   **React Hot Toast / Toastify** for notifications

-   **Axios** for API calls

### Backend

-   **Node.js** + **Express.js**

-   **MongoDB (Mongoose)** for database

-   **JWT** for authentication

-   **Bcrypt** for password hashing

-   **Multer** for file upload

-   **ImageKit** for image hosting

* * * * *

📂 Project Structure
--------------------

`CarRental/
│── Client/        # React frontend
│   ├── src/       # Components, pages, assets
│   ├── public/    # Static files
│   └── package.json
│
│── Server/        # Node.js + Express backend
│   ├── Configs/   # Database & ImageKit config
│   ├── controllers/ # Business logic
│   ├── middleware/  # Auth & Multer
│   ├── models/      # Mongoose schemas
│   ├── routes/      # API routes
│   └── index.js     # Server entry
│
└── README.md`

* * * * *

⚙️ Installation & Setup
-----------------------

### 🔽 Clone repository

`git clone https://github.com/your-username/car-rental.git
cd car-rental`

### ▶️ Setup Backend

`cd Server
npm install`

Create a `.env` file inside **Server/**:

`PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint`

Run server:

`npm run server`

* * * * *

### 💻 Setup Frontend

`cd ../Client
npm install`

Create `.env` file inside **Client/**:

`VITE_API_URL=http://localhost:5000/api
VITE_CURRENCY=₹`

Run frontend:

`npm run dev`

* * * * *

🚀 Deployment
-------------

-   **Frontend:** Deploy on Vercel

-   **Backend:** Can be hosted on Vercel / Render / Railway

-   **Database:** Use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas?utm_source=chatgpt.com)

* * * * *

🔑 API Endpoints
----------------

### User Routes (`/api/user`)

-   `POST /register` → Register user

-   `POST /login` → Login user

-   `GET /data` → Get user details (JWT required)

-   `GET /cars` → Fetch all available cars

### Owner Routes (`/api/owner`)

-   `POST /role` → Change user role to Owner

-   `POST /car` → Add a car

-   `GET /cars` → Get owner's cars

-   `POST /toggle` → Toggle availability

### Booking Routes (`/api/bookings`)

-   `POST /new` → Create booking

-   `GET /my` → Get user bookings

-   `GET /car/:id` → Get bookings for a car
