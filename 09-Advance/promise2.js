const promise1 =new Promise((resolve) => {
  setTimeout(() => {
    resolve(3);
  }, 1000);
});
// const promise2 = 42;
const promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log("All : ",values);
});

Promise.allSettled([promise1, promise2, promise3]).then((values) => {
  console.log("allSettled: ",values);
})

Promise.race([promise1, promise2, promise3]).then((values) => {
  console.log("race: ",values);
})

const promise4 = Promise.reject(new Error("An error occurred"));

promise4.catch((error) => {
  console.log(error.message);
});

