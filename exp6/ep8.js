const step1 = () => Promise.resolve("Step 1 Completed");

const step2 = message =>
  Promise.resolve(message + " -> Step 2 Completed");

const step3 = message =>
  Promise.resolve(message + " -> Step 3 Completed");

step1()
  .then(step2)
  .then(step3)
  .then(result => console.log(result));
