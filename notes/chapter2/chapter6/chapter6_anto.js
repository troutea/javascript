//console.log("hello world")


const sleep = ms => new Promise(r => setTimeout(r,ms));

async function run() {
    await sleep(2000)
    console.log("hello world")

}

//run()


async function fetchData() {
    try {
    const res = await fetch('https://api.example.com/nonexistent') 
    console.log(res)
    } catch(err) {
        console.log("error fetching data")

    }
   
}

//fetchData()

async function fetchUserData() {
    try {
    const res = await fetch('https://the-one-api.dev/v2/book')
    const data = await res.json()
    console.log(data)
}
catch(err) {
        console.log("error fetching data")
}



}

//fetchUserData()

// 4. Demonstrate how to make a POST request to 'https://api.example.com/users' to create a new user with JSON data { name: "John", age: 30 } using async/await. Ensure you set the appropriate headers and catch any errors.

async function postUserData() {
  try{
const options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ name: 'james' })
        }
        const res = await fetch('https://the-one-api.dev/v2/book', options)
         const data = await res.json()

  } catch(err) {
    console.log("error fetching data")

  }

}

postUserData()