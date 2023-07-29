// function timeoutPromise(delay) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve();
//       }, delay);
//     });
//   }
//   function print()
//   {
//     console.log("printed")
//   }
//   // Usage example
//   const delay = 5000; // 2 seconds
//  let p =  timeoutPromise(delay);
//  console.log(p)
//     p.then(print)

function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  
  async function exampleAsyncFunction() {
    console.log("Start");
  
    // Using await to pause execution for 2000 milliseconds (2 seconds)
    await delay(2000);
  
    console.log("After 2 seconds");
  
    // Additional asynchronous or synchronous code can follow here
  
    console.log("End");
  }
  
  // Call the async function
  exampleAsyncFunction();
  