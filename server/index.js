const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, Node.js!");
});

app.get("/data", (req, res) => {
  const data = { message: "This is data from the backend!" };
  res.json(data);
});

// Enable CORS for specific origins
const corsOptions = {
  origin: "https://example.com", // Replace with the allowed origin(s)
  methods: ["GET", "POST"], // Replace with allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Replace with allowed headers
};

app.use(cors(corsOptions));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
