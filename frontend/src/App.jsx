import { useState, useEffect } from "react";
import axios from "axios";

const API = "https://your-backend-url.onrender.com";

function App() {
  const [jobs, setJobs] = useState([]);
  const [form, setForm] = useState({
    company: "",
    role: "",
    status: "Applied",
    date: "",
    link: "",
  });

  const fetchJobs = async () => {
    const res = await axios.get(`${API}/jobs`);
    setJobs(res.data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleAdd = async () => {
    await axios.post(`${API}/jobs`, form);
    setForm({ company: "", role: "", status: "Applied", date: "", link: "" });
    fetchJobs();
  };

  const handleDelete = async (id) => {
    await axios.delete(`${API}/jobs/${id}`);
    fetchJobs();
  };

  const handleStatusChange = async (id, status) => {
    await axios.put(`${API}/jobs/${id}`, { status });
    fetchJobs();
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>🎯 Student Job Tracker</h2>
      <input
        placeholder="Company"
        value={form.company}
        onChange={(e) => setForm({ ...form, company: e.target.value })}
      />
      <input
        placeholder="Role"
        value={form.role}
        onChange={(e) => setForm({ ...form, role: e.target.value })}
      />
      <select
        value={form.status}
        onChange={(e) => setForm({ ...form, status: e.target.value })}
      >
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <input
        type="date"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />
      <input
        placeholder="Link"
        value={form.link}
        onChange={(e) => setForm({ ...form, link: e.target.value })}
      />
      <button onClick={handleAdd}>Add Job</button>

      <hr />

      <h3>📋 Job Applications</h3>
      {jobs.map((job) => (
        <div
          key={job._id}
          style={{
            margin: "1rem 0",
            border: "1px solid #ccc",
            padding: "0.5rem",
          }}
        >
          <p>
            <strong>{job.company}</strong> - {job.role}
          </p>
          <p>Status: {job.status}</p>
          <p>Applied on: {new Date(job.date).toLocaleDateString()}</p>
          <a href={job.link} target="_blank" rel="noreferrer">
            Job Link
          </a>
          <br />
          <select
            value={job.status}
            onChange={(e) => handleStatusChange(job._id, e.target.value)}
          >
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>
          <button onClick={() => handleDelete(job._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
