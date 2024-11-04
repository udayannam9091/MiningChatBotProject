
import { DiscussServiceClient } from "@google-ai/generativelanguage";
import { GoogleAuth } from "google-auth-library";
import * as fs from 'fs';

const MODEL_NAME = "models/chat-bison-001";
const API_KEY = process.env.API_KEY;

const client = new DiscussServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

const contdata=fs.readFileSync('context.txt','utf-8')

const query = async (prompt: string, chatId: string) => {
  const res = await client.generateMessage({
      model: MODEL_NAME,
      temperature:0.5,
      candidateCount:1,
      prompt: {
        context:contdata,
        messages:[{ content: prompt}]
      },
      
    })
    .then((res) => res[0].candidates[0].content)
    .catch((err) =>
      console.log(`MiningBot unable to find an answer fot that! ${err.message}`)
    );

  return res;
};

export default query;
