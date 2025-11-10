
//initialise the chat api 
import { OpenAI, Configuration  } from "openai/client.js";
import {createRequire} from 'module'
const require = createRequire(import.meta.url)
require('dotenv').config()

//initialise chatgpt api
const OPENAI_SECRET_KEY = process.env.OPENAI_SECRET_KEY

//step2 give it some personality


//step 3 define function to retrieve tha api message


//step 4 create a function that requests a user input