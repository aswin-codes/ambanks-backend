const { NlpManager } = require("node-nlp");
const fs = require("fs");

// Create a new instance of NlpManager
const manager = new NlpManager({ languages: ["en"] });

// Read the dataset from the JSON file
const dataset = JSON.parse(fs.readFileSync("./intents/dataset.json"));

// Loop through the intents and add documents and answers
for (const intent of dataset.intents) {
  for (const pattern of intent.patterns) {
    manager.addDocument("en", pattern, intent.tag);
  }
  for (const response of intent.responses) {
    manager.addAnswer("en", intent.tag, response);
  }
}

// Define a function to train and save the manager
async function trainAndSave() {
  await manager.train();
  manager.save();
  console.log("Training and saving completed.");
}

// Call the trainAndSave function to train and save the manager
trainAndSave();
