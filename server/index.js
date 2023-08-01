require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

//routes

const apiKey = process.env.API_KEY;
const headers = {
  "x-api-key": apiKey,
};

app.get("/data", (req, res) => {
  const data = { message: "This is data from the backend!" };
  res.json(data);
  console.log(data);
});

app.get("/dog", async (req, res) => {
  try {
    const API_URL = "https://api.thedogapi.com/v1/images/search";
    const response = await axios.get(API_URL);

    const data = response.data;
    res.set(headers);
    res.json(data);
    console.log("data", data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.get("/dog/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const API_URL = `https://api.thedogapi.com/v1/images/${id}`;
    const response = await axios.get(API_URL);

    const data = response.data;
    res.json(data);
    console.log("data", data.id);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
