// 1. Create a function that uses the following asynchronous sleep call to print the message 'hello world' after 2 seconds

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function run() {
    await sleep(2000)
    console.log('hello world')
}

//run()

// 2. Write an async function that attempts to fetch data from 'https://api.example.com/nonexistent', 
// which will likely lead to a 404 error. Use try/catch to handle the error and log "Error fetching data" if the request fails.

async function fetchData() {
    try {
        const res = await fetch('https://api.example.com/nonexistent')
        console.log(res)
    } catch (err) {
          console.log('error fetching data')
    }
}

fetchData()