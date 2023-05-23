// Question One
// function job() {
//   return new Promise(function (resolve, reject) {
//     reject();
//   });
// }

// let promise = job();

// promise

//   .then(function () {
//     console.log("Success 1");
//   })

//   .then(function () {
//     console.log("Success 2");
//   })

//   .then(function () {
//     console.log("Success 3");
//   })

//   .catch(function () {
//     console.log("Error 1");
//   })

//   .then(function () {             // then after catch always gets executed because promise is already rejected
//     console.log("Success 4");
//   });

//   Question Two

// function job(state) {
//   return new Promise(function (resolve, reject) {
//     if (state) {
//       resolve("success");
//     } else {
//       reject("error");
//     }
//   });
// }

// let promise1 = job(true);

// promise1

//   .then(function (data) {
//     console.log(data);

//     return job(false); // returning the promise that gets rejected and this can only be catched by catch
//   })

//   .catch(function (error) {
//     console.log(error);

//     return "Error caught";
//   })

//   .then(function (data) {
//     console.log(data);

//     return job(true);
//   })

//   .catch(function (error) {
//     console.log(error);
//   });

// //   Question Three

function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

let promise2 = job(true);

promise2

  .then(function (data) {
    console.log(data);

    return job(true);
  })

  .then(function (data) {
    if (data !== "victory") {
      throw "Defeat"; // throw always return exceptions or user defined error so anything after this won't be exceuted and this can be catched.
    }

    return job(true);
  })

  .then(function (data) {
    console.log(data);
  })

  .catch(function (error) {
    console.log(error);

    return job(false);
  })

  .then(function (data) {
    console.log(data);

    return job(true); // this will be skiped because the catch before him returned a promise that gets rejected.
  })

  .catch(function (error) {
    console.log(error);

    return "Error caught";
  })

  .then(function (data) {
    console.log(data); // this will be shown because in then after catch, anything retuned from the catch will be ad a data for him, to be excuted.

    return new Error("test");
  })

  .then(function (data) {
    console.log("Success:", data.message); // this will get excutted because its chained to the first one.
  })

  .catch(function (data) {
    console.log("Error:", data.message); // this won't be excuted because error created can not be neccessary rejected promise.
  });
