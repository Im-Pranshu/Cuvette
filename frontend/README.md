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
  `nodemon start`

4. **Test Locally**

- Frontend runs on `http://localhost:5173`
- Backend runs on `http://localhost:5000`
- Add jobs, filter, update, delete—verify all features.

### Deployment on Render

1. **Backend Deployment**

- Push backend code to a GitHub repo.
- In Render dashboard:
- New > Web Service > Connect GitHub repo.
- Set runtime: Node.js.
- Build command: `npm install`.
- Start command: `npm start`.
- Add environment variable:
  - Key: `MONGO_URI`
  - Value: `<your-mongodb-atlas-uri>`
- Deploy and note URL (e.g., `https://student-job-backend-t6er.onrender.com`).

2. **Frontend Deployment**

- Push frontend code to a GitHub repo.
- In Render dashboard:
- New > Web Service > Connect GitHub repo.
- Set runtime: Node.js.
- Build command: `npm install && npm run build`.
- Start command: Leave blank (static site).
- Publish directory: `build`.
- Add environment variable:
  - Key: `NODE_ENV`
  - Value: `production`
- Deploy and note URL (e.g., `https://your-frontend.onrender.com`).

3. **Update Frontend API URL**

- In `frontend/src/App.jsx`:

```javascript
const API =
  process.env.NODE_ENV === "production"
    ? "https://student-job-backend-t6er.onrender.com"
    : "http://localhost:5000";
```

- Commit and push changes.

### Test Deployment

- Open frontend URL in browser.
- Verify `/jobs` fetches data, loader shows, and popups work.

### Features

- Add job applications with validation (all fields required).
- Filter by status and date.
- Update job status.
- Delete jobs.
- Loading spinner on adding job.
- Popups for feedback.

### Troubleshooting

- **MongoDB Error**: Ensure `MONGO_URI` is set in Render environment.
- **CORS**: Add `cors` in backend if needed:
  ```javascript
  app.use(cors({ origin: "<frontend-url>" }));
  ```

`Pranshu Sharma`, `pranshu.sharma1303@gmail.com`,`[github.com/Im-Pranshu]`
