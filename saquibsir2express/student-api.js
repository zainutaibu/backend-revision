const express = require('express');
const app = express();

// Middleware to parse JSON body
app.use(express.json());

// Sample data (students.json जैसा)
let students = [
  { id: 1, name: "Zainab Khan", email: "zainab.khan@example.com", rollNo: "BCA-001" },
  { id: 2, name: "Arjun Mehta", email: "arjun.mehta@example.com", rollNo: "BCA-002" },
  { id: 3, name: "Priya Sharma", email: "priya.sharma@example.com", rollNo: "BCA-003" },
  { id: 4, name: "Rohan Singh", email: "rohan.singh@example.com", rollNo: "BCA-004" },
  { id: 5, name: "Aisha Patel", email: "aisha.patel@example.com", rollNo: "BCA-005" },
  { id: 6, name: "Karan Joshi", email: "karan.joshi@example.com", rollNo: "BCA-006" },
  { id: 7, name: "Neha Verma", email: "neha.verma@example.com", rollNo: "BCA-007" },
  { id: 8, name: "Imran Sheikh", email: "imran.sheikh@example.com", rollNo: "BCA-008" },
  { id: 9, name: "Ritika Das", email: "ritika.das@example.com", rollNo: "BCA-009" },
  { id: 10, name: "Mohit Nair", email: "mohit.nair@example.com", rollNo: "BCA-010" }
];

// ✅ GET: all students
app.get('/students', (req, res) => {
  res.json(students);
});

// ✅ GET: single student by id
app.get('/students/:id', (req, res) => {
  const studentId = parseInt(req.params.id);
  const student = students.find(s => s.id === studentId);
  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ message: "Student not found" });
  }
});

// ✅ POST: add new student
app.post('/students', (req, res) => {
  const { name, email, rollNo } = req.body;
  
  if (!name || !email || !rollNo) {
    return res.status(400).json({ message: "All fields (name, email, rollNo) are required" });
  }

  const newStudent = {
    id: students.length + 1,
    name,
    email,
    rollNo
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
});

// ✅ Root route
app.get('/', (req, res) => {
  res.send("Welcome to Student API 🚀");
});

// ✅ Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at: http://localhost:${PORT}`);
});
