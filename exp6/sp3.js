const wait = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Done waiting!");
  }, 2000);
});

wait.then(message => console.log(message));