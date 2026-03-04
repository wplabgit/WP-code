const myPromise = new Promise((resolve, reject) => {
  resolve("Promise Resolved!");
});

myPromise.then(result => console.log(result));
