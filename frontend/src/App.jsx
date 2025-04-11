import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const API =
  "http://localhost:5000" || "https://student-job-backend-t6er.onrender.com";

function App() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [form, setForm] = useState({
    company: "",
    role: "",
    status: "Applied",
    date: "",
    link: "",
  });
  const [statusFilter, setStatusFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState("");
  const [popup, setPopup] = useState({ visible: false, message: "" });

  const fetchJobs = async () => {
    const res = await axios.get(`${API}/jobs`);
    setJobs(res.data);
    setFilteredJobs(res.data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    let filtered = [...jobs];

    if (statusFilter !== "All") {
      filtered = filtered.filter((job) => job.status === statusFilter);
    }

    if (dateFilter) {
      filtered = filtered.filter((job) => {
        const jobDate = new Date(job.date).toISOString().split("T")[0];
        return jobDate === dateFilter;
      });
    }

    setFilteredJobs(filtered);
  }, [statusFilter, dateFilter, jobs]);

  // Show popup with message and hide after 2 seconds
  const showPopup = (message) => {
    setPopup({ visible: true, message });
    setTimeout(() => {
      setPopup({ visible: false, message: "" });
    }, 2000);
  };

  const handleAdd = async () => {
    try {
      await axios.post(`${API}/jobs`, form);
      setForm({ company: "", role: "", status: "Applied", date: "", link: "" });
      fetchJobs();
      showPopup("Job application added!");
    } catch (error) {
      showPopup("Failed to add job application.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/jobs/${id}`);
      fetchJobs();
      showPopup("Job application deleted!");
    } catch (error) {
      showPopup("Failed to delete job application.");
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await axios.put(`${API}/jobs/${id}`, { status });
      fetchJobs();
      showPopup("Status updated!");
    } catch (error) {
      showPopup("Failed to update status.");
    }
  };

  return (
    <div className="app-container">
      <h2 className="app-title">🎯 Student Job Tracker</h2>
      <div className="form-container">
        <input
          className="form-input"
          placeholder="Company"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
        />
        <input
          className="form-input"
          placeholder="Role"
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        />
        <select
          className="form-select"
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        >
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
        <input
          className="form-input"
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
        />
        <input
          className="form-input"
          placeholder="Link"
          value={form.link}
          onChange={(e) => setForm({ ...form, link: e.target.value })}
        />
        <button className="form-button" onClick={handleAdd}>
          Add Job
        </button>
      </div>

      <hr className="divider" />

      <h3 className="section-title">📋 Job Applications</h3>
      <div className="filter-container">
        <div className="filter-group">
          <label className="filter-label">Filter by Status:</label>
          <select
            className="filter-select"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option>All</option>
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>
        </div>
        <div className="filter-group">
          <label className="filter-label">Filter by Date:</label>
          <input
            className="filter-input"
            type="date"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
          />
        </div>
      </div>

      <div className="jobs-container">
        {filteredJobs.map((job) => (
          <div key={job._id} className="job-card">
            <div className="job-details">
              <h4 className="job-title">
                {job.company} - {job.role}
              </h4>
              <p className="job-status">Status: {job.status}</p>
              <p className="job-date">
                Applied on: {new Date(job.date).toLocaleDateString()}
              </p>
              <a
                className="job-link"
                href={job.link}
                target="_blank"
                rel="noreferrer"
              >
                Job Link
              </a>
            </div>
            <div className="job-actions">
              <select
                className="job-status-select"
                value={job.status}
                onChange={(e) => handleStatusChange(job._id, e.target.value)}
              >
                <option>Applied</option>
                <option>Interview</option>
                <option>Offer</option>
                <option>Rejected</option>
              </select>
              <button
                className="job-delete-button"
                onClick={() => handleDelete(job._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Popup Component */}
      {popup.visible && (
        <div className="popup">
          <div className="popup-content">
            <p>{popup.message}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
