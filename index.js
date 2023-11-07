const express = require("express");
const cors = require("cors");
const { NlpManager } = require("node-nlp");

const app = express();
const port = 3000;

const manager = new NlpManager({ languages: ["en"] });
manager.load(); // Load the trained model

app.use(express.json());
app.use(cors());

// Define a route for chatbot interactions
app.post("/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await manager.process("en", message);
    res.json({ response: response.answer });
  } catch (err) {
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(port, () => {
  console.log(`Chatbot server is running on port ${port}`);
});
