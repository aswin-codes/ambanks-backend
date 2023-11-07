const { NlpManager } = require("node-nlp");
const fs = require("fs");

// Load the trained model
const manager = new NlpManager();
manager.load();

// Load the test set
const testSet = JSON.parse(fs.readFileSync("./test/testset.json"));

let correctPredictions = 0;
let totalPredictions = 0;

// Iterate through test cases and evaluate predictions
const calculateAccuracy = async () => {
  await testSet.test_set.forEach(async (testCase) => {
    const { user_input, expected_intent } = testCase;

    const response = await manager.process("en", user_input);

    //console.log(response.answer);

    if (response && response.intent) {
      const predictedIntent = response.intent;

      if (predictedIntent === expected_intent) {
        correctPredictions++;
      }

      totalPredictions++;
      const accuracy = (correctPredictions / totalPredictions) * 100;
      console.log(`Accuracy: ${accuracy.toFixed(2)}%`);
    }
  });

 
};

calculateAccuracy();
