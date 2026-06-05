# Client Lead Management System (Mini CRM)

## Overview

The Client Lead Management System is a full stack web application developed to manage and organize client leads generated from websites, campaigns, and other business sources.

This project helps businesses store client information, track lead status, manage notes, and monitor lead sources through an interactive dashboard.

The application is built using React.js for the frontend, Node.js and Express.js for the backend, and MongoDB as the database.

---

# Features

* Add new client leads
* View all leads in a dashboard
* Update lead status
* Add and manage notes
* Delete leads
* Search leads by client name or source
* Track total leads from each source
* Responsive design for desktop and mobile
* MongoDB database integration

---

# Technologies Used

## Frontend

* React.js
* JavaScript
* CSS

## Backend

* Node.js
* Express.js

## Database

* MongoDB
* Mongoose

---

# Project Structure

```text
FUTURE_FS_02
│
├── client
│   ├── src
│   │   ├── components
│   │   │   ├── LeadForm.jsx
│   │   │   └── LeadList.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── server
│   ├── controllers
│   │   └── leadController.js
│   │
│   ├── models
│   │   └── Lead.js
│   │
│   ├── routes
│   │   └── leadRoutes.js
│   │
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# Application Workflow

1. Users enter lead information through the frontend form.
2. The frontend sends data to backend APIs using Axios.
3. Express.js handles API requests and business logic.
4. MongoDB stores lead data permanently.
5. The dashboard fetches and displays all leads dynamically.
6. Users can update lead status, manage notes, and delete leads.

---

# Frontend Explanation

## App.jsx

The main component of the application.

Responsibilities:

* Renders LeadForm component
* Renders LeadList component
* Manages refresh state
* Displays application heading and footer

---

## LeadForm.jsx

This component is used to add new client leads.

Features:

* Form validation
* Controlled inputs using React state
* Axios POST request to backend
* Automatic dashboard refresh after adding leads

Input Fields:

* Client Name
* Client Email
* Lead Source

---

## LeadList.jsx

This component displays all client leads.

Features:

* Fetch leads from backend
* Search functionality
* Lead source statistics
* Status update dropdown
* Notes management
* Delete functionality

Lead Status Options:

* New
* Contacted
* Converted

---

## index.css

Contains all application styling.

Includes:

* Dashboard layout
* Responsive grid system
* Lead card styling
* Form styling
* Mobile responsiveness
* Footer styling

---

# Backend Explanation

## server.js

Main backend entry file.

Responsibilities:

* Express server setup
* MongoDB connection
* Middleware configuration
* API route configuration

---

## Lead.js

Mongoose schema for storing lead data.

Database Fields:

* name
* email
* source
* status
* notes

---

## leadController.js

Contains backend business logic.

Functions:

* createLead()
* getLeads()
* updateLead()
* deleteLead()

---

## leadRoutes.js

Defines all API routes.

Routes:

* POST /api/leads
* GET /api/leads
* PUT /api/leads/:id
* DELETE /api/leads/:id

---

# Database Integration

MongoDB is used as the database for storing all lead information.

Mongoose is used for:

* Schema creation
* Database queries
* CRUD operations

Stored Data:

* Client details
* Lead sources
* Lead status
* Notes

---

# Search and Analytics

The application includes a search system that allows users to search leads by:

* Client name
* Lead source

The dashboard also displays:

* Total leads generated from each source

This helps analyze marketing and lead generation performance.

---

# Responsive Design

The application is fully responsive and optimized for:

* Desktop devices
* Tablets
* Mobile phones

CSS Grid and media queries are used for responsiveness.

---

# Installation and Setup

## Clone Repository

```bash
git clone https://github.com/yourusername/FUTURE_FS_02.git
```

---

# Backend Setup

## Navigate to server folder

```bash
cd server
```

## Install dependencies

```bash
npm install
```

## Start backend server


npm run dev

Backend runs on:

```text
https://crm-backend-1zao.onrender.com
```

---

# Frontend Setup

## Navigate to client folder

```bash
cd client
```

## Install dependencies

```bash
npm install
```

## Start frontend

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# Future Improvements

* Admin authentication using JWT
* Protected dashboard routes
* Email notifications
* Follow-up reminders
* Advanced filtering
* Dark and light mode
* Export lead reports
* Cloud deployment

---

# Learning Outcomes

This project helped in understanding:

* Full stack web development
* REST API development
* MongoDB database integration
* React state management
* CRUD operations
* Responsive UI development
* Client-server architecture

---

# Conclusion

The Client Lead Management System is a practical CRM-style application that demonstrates full stack development skills using modern technologies.

The project focuses on lead management, database integration, responsive UI design, and backend API development.

---

# Author

Developed as part of the Future Interns Full Stack Web Development Internship Program.

Developed by Himesh Kumar Dwivedi
