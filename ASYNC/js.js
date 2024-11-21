// Asynchronous Javascript.

// CALLBACK HELL! Old way of doing async javascript
// console.log("Start");

// Simulating asynchronous operations with nested callbacks
/* setTimeout(() => {
  console.log("Step 1: Preparing data...");
  setTimeout(() => {
    console.log("Step 2: Fetching data from API...");
    setTimeout(() => {
      console.log("Step 3: Processing data...");
      setTimeout(() => {
        console.log("Step 4: Saving data...");
        setTimeout(() => {
          console.log("Step 5: Operation complete!");
        }, 1000); // Step 5
      }, 1000); // Step 4
    }, 1000); // Step 3
  }, 1000); // Step 2
}, 1000); // Step 1

console.log("End"); */

// ES 6 (2015) Promises

/* const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const randomNumber = Math.random()
        if (randomNumber > 0.5) {
            resolve(randomNumber)
        } else {
            reject(new Error("Promise failed!!"))
        }

    }, 1000)

}) */

/* myPromise.then((result) => {
    console.log(result)
}).catch((error) => {
    console.error(error)
}).finally(() => {
    console.log("This happens no matter what.")
}) */

// API - application programming interface
// RESTFul API
// JSON - Javascript Object Notation

/* {
    "name": "Alice",
    "age": 25,
    "isStudent": true,
    "skills": ["JavaScript", "Python", "HTML"],
    "address": {
      "city": "New York",
      "zip": "10001"
    }
  }
  const person = {
    name: "Alice",
    age: 25,
    isStudent: true,
    skills: ["JavaScript", "Python", "HTML"],
    address: {
      city: "New York",
      zip: "10001"
    }
} */

// Fetch

/* fetch("https://random.dog/woof.json")
  .then((res) => res.json())
  .then((data) => getData(data))
  .catch((err) => console.error(err)); */

/* function getData(data) {
  const dogImage = document.createElement("img")
  dogImage.src = data.url
  document.body.append(dogImage)
}   */

// https://random.dog/woof.json

// async/await

const apiEndpoint = "http://gutendex.com/books";

async function getBook(id) {
  //try/catch
  try {
    const result = await fetch(`${apiEndpoint}/${id}`);
    const data = await result.json();
    renderSite(data);
  } catch (error) {
    console.log(error);
  }
}
function renderSite(data) {
  console.log(data);
}
getBook(1);
