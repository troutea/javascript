const sleep = ms => new Promise(r => setTimeout(r, ms));

async function fetchData() {
    try {
        const res = await fetch('https://dummyjson.com/products/1')
        const data = await res.json()
        console.log(data)
        
    } catch(err) {
        console.log(err.message)
    }
}

fetchData()

async function run() {
    console.log("Start code")

    const sleepStatus = await sleep(2000)
    console.log(sleepStatus)
    console.log('Finished Code')


}

run()