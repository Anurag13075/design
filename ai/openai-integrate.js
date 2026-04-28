import {MAIN_DESIGN_PROMPT} from "../utils/mainPrompt.js"
import { OpenAI  } from "openai/client.js"

const openai = new OpenAI({
    apiKey:process.env.API_KEY
})


export async function  generatedesign(params) {
    const response  = await openai.responses.create({
        model:"gpt-4.1-mini",
        messages:[
            {
                role:"user",
                content:MAIN_DESIGN_PROMPT,
                
            },
         
            
        ]
    })
    console.log(response.output_text);
    console.log(response.max_output_tokens);

}


    