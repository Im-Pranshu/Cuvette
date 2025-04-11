# Student Job Tracker

![Student Job Tracker Screenshot](screenshot.png)

**Student Job Tracker** is a full-stack MERN application designed to help students manage their job applications efficiently. Built with MongoDB, Express.js, React (using Vite), and Node.js, it allows users to add, filter, update, and delete job applications with a clean, responsive UI. Features include form validation, a loading spinner, and popup notifications for user feedback.

## Features

- **Add Job Applications**: Input details like Company, Role, Status (Applied, Interview, Offer, Rejected), Date, and Link. Form validation ensures all fields are filled.
- **List Applications**: View all job applications in a responsive card layout.
- **Filter Applications**: Filter by status or application date for quick access.
- **Update Status**: Change the status of any application (e.g., from Applied to Interview).
- **Delete Applications**: Remove unwanted job entries.
- **User Feedback**: Popups confirm actions (add, update, delete) or warn about empty/incomplete forms.
- **Loading Spinner**: Displays a centered loader during job creation for a smooth experience.
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices.

## Tech Stack

- **Frontend**: React.js (Vite), HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (MongoDB Atlas or local)
- **Tools**: Vite (for fast frontend build), Axios (for API requests), MongoDB Driver
- **Deployment**: Frontend (Vercel), Backend (Render)

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (local installation or MongoDB Atlas account)
- [Git](https://git-scm.com/) (for cloning the repository)
- A code editor like [VS Code](https://code.visualstudio.com/)

## Project Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Im-Pranshu/student-job-tracker.git
   cd student-job-tracker
   ```
2. **Frontend Setup**

- Navigate to frontend folder:
  `cd frontend`
  `npm install`

- Run frontend:
  `npm start`

3. **Backend Setup**

- Navigate to backend folder:
  `cd backend`
  `npm install`

- Create `.env` file in `backend/`:
  `MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxx.mongodb.net/student_jobs?retryWrites=true&w=majority`

- Run backend:
  `
