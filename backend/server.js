const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

const jobSchema = new mongoose.Schema({
  company: String,
  role: String,
  status: String,
  date: Date,
  link: String,
});

const Job = mongoose.model("Job", jobSchema);

// Test API
app.get("/", (req, res) => {
  res.send("Student Job Tracker API Running ✅");
});

// Create
app.post("/jobs", async (req, res) => {
  const job = new Job(req.body);
  const saved = await job.save();
  res.json(saved);
});

// Read
app.get("/jobs", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

// Update
app.put("/jobs/:id", async (req, res) => {
  const updated = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});

// Delete
app.delete("/jobs/:id", async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
