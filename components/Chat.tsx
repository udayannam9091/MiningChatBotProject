"use client";

import { firestore } from "@/firebase/firebase";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect, useRef } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import ChatInput from "./ChatInput";
import Message from "./Message";

type Props = {
  chatId: string;
};

function Chat({ chatId }: Props) {
  const { data: session } = useSession();
  const messageEndRef = useRef<null | HTMLDivElement>(null);

  const [messages] = useCollection(
    session &&
      query(
        collection(
          firestore,
          `users/${session?.user?.uid!}/chats/${chatId}/messages`
        ),
        orderBy("createdAt", "asc")
      )
  );
  //console.log("🚀 ~ file: Chat.tsx:27 ~ Chat ~ messages:", messages?.docs);
  const dict=[{
    '1':"what is the process of acquiring mining license",
    '2':"Explain about the mining Rules and Regulation till today",
    '3':'Explain Mines and Minerals amendment act, 2023',
    '4':"Are there any changes on regulations that may impact mining operations" ,
    '5':"Explain about examinations and certificates of competency and of Fitness in india",
    '6':"Explain about environmental compliance acts in india",
    '7':"What is section 7 of the Land Acquisition Act?",
    '8':'explain The Payment of Wages (Mines) Rules, 1956',
    '9':'explain about the Colliery Control Rules, 2004',
  }]
  const getrandomnum:Number=Math.floor(Math.random()*(Math.floor(9)-Math.floor(7)+1)+Math.floor(7))

  useEffect(() => {
    messageEndRef.current?.scrollIntoView();
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden">
      {messages?.empty && (
        <>
          <p className="mt-10 text-center text-white text-2xl">
            Frequently Asked Questions
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 mx-auto mt-5 text-white animate-bounce"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div className="right1 w-full flex justify-center items-center flex-col">
          <div className="text-center w-full text-5xl invisible font-bold ">
                         Frequently Asked Questions</div>
            <div className="itemsrow flex py-6 justify-around">
              <div className="faq flex flex-col justify-center items-center py-5
              
              ">
                <div className="py-6"></div>
                  <button className="bg-gray-600 w-[13vw] text-sm hover:bg-gray-700 py-5 px-4 mx-4  my-2 rounded-md ">{dict[0][getrandomnum.toString()]} →</button>
               </div>
            <div className="faq flex flex-col justify-center items-center">
              <button className="bg-gray-600 w-[13vw] text-sm hover:bg-gray-700 py-5 px-4 mx-4  my-2 rounded-md">"Explain about the mining
              Rules and Regulation till today" →</button>
            </div>
            <div className="faq flex flex-col justify-center items-center text-2xl">
            <div className="py-6"></div>
            <button className="bg-gray-600 w-[13vw] text-sm hover:bg-gray-700 py-5 px-4 mx-4  my-2 rounded-md">"Explain Mines and 
              Minerals amendment act, 2023 " →</button>
            
          </div>
        </div>
        <div className="itemsrow-1 flex py-2 space-x-8 justify-around">
          <div className="faq flex flex-col justify-center items-center">
            <button className="bg-gray-600 w-[13vw] text-sm hover:bg-gray-700 py-3 px-4 mx-4  my-2 rounded-md ">"Are there any changes
              on regulations that may impact mining operations" →</button>
          </div>
          <div className="faq flex flex-col justify-center items-center">
            <button className="bg-gray-600 w-[13vw] text-sm hover:bg-gray-700 py-3 px-4 mx-4  my-2 rounded-md">"Explain about examinations
              and certificates of competency and of Fitness in india" →</button>
          </div>
          <div className="faq flex flex-col justify-center items-center text-2xl">
            <button className="bg-gray-600 w-[13vw] text-sm hover:bg-gray-700 py-6 px-4 mx-4  my-2 rounded-md">"Explain about
              environmental compliance acts in india" →</button>
            
          </div>
        </div>
          </div>
        </>
      )}
      {messages?.docs.map((message) => (
        <Message key={message.id} message={message.data()} />
      ))}
      <div ref={messageEndRef} />
    </div>
  );
}

export default Chat;
