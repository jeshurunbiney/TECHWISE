// const promiseExample = new Promise((resolve, reject) => {
//     console.log("Promise is being created");
//     //console.log(reject);
//     //console.log(resolve);
//     setTimeout(() => {
//         console.log("Promise object->", promiseExample)
//         resolve("Promise is resolved")
//         console.log("promise object ->", promiseExample);
//     }, 2000);
// })

// console.log(promiseExample);

const promiseExample2 = new Promise((resolve, reject) => {
    console.log("Promise is being created");
    setTimeout(() => {
        const success = true; // this is to stimulate that something happened successfully or not
        if (success) {
            resolve("Promise is resolved");
        } else {
            reject("Promise is rejected");
        }    
        }, 1000);
    })
console.log(promiseExample2);

// promiseExample2.then((result) => {
//     console.log("result ->", result); // this is the result of the promise
//     console.log(promiseExample2); //this is just to show that the promise is resolved
// }).catch((error) => {
//     console.log("error ->", error);
// })      

const promiseObj = promiseExample2.then((result) => {
    console.log("result ->");// this is the result of the promise
    console.log(promiseExample2); //this is to show that the promise is resolved
})
console.log(promiseObj);
//very unsecure way to store api key in the code, use the dotenv package instead
// const finnhubAPIkey = "replace this with your own api key"

const finnhubApiKey = "cmu15mpr01qsv99lsnggcmu15mpr01qsv99lsnh0"  //replace with your own api key

//const url = ""

const baseUrl = "https://finnhub.io/api/v1"
const quoteEndpoint = "/quote"

function fetchStockPrice(symbol) {
    fetch(`${baseUrl}${quoteEndpoint}?symbol=${symbol}&token=${finnhubApiKey}`)
    .then((response) => {
        console.log("response ->", response);
        return response.json();
    }).then((data) => {
        console.log("data ->", data);
    })
}

fetchStockPrice("AAPL")
