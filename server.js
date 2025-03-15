const express = require("express");
const cors = require("cors"); // Import CORS

const app = express();
app.use(cors()); // Enable CORS

// Static course data
const courses = [
  {
    image: "fullstack.jpg",
    lecturer: "John Doe",
    subject: "Full-Stack Development",
    title: "Mastering Full-Stack"
  },
  {
    image: "flutter.jpg",
    lecturer: "Jane Smith",
    subject: "Flutter",
    title: "Flutter for Beginners"
  },
  {
    image: "https://i.postimg.cc/t4jPgV91/Android.jpg",
    lecturer: "David Johnson",
    subject: "Android Development",
    title: "Android Masterclass"
  },
  {
    image: "aspnet.jpg",
    lecturer: "Emily White",
    subject: "ASP.Net",
    title: "ASP.Net Essentials"
  },
  {
    image: "https://drive.google.com/uc?export=view&id=1VIk2btLfsWjCBaEqDZE543XU5_XHUS3g",
    lecturer: "Robert Brown",
    subject: "Java",
    title: "Advanced Java Programming"
  },
  {
    image: "python.jpg",
    lecturer: "Alice Green",
    subject: "Python",
    title: "Python for Data Science"
  }
];

// API route to serve course data
app.get("/courses", (req, res) => {
  res.json(courses);
});

app.get("/", (req, res) => {
  res.send("Hello Students!");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
