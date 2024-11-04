"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-flex flex-col items-center justify-center h-screen px-2 text-white"
    >
      <div className="right1 w-full flex justify-center items-center flex-col">
        <div className="text-center w-full text-5xl font-bold py-7">
          Welcome To Mining Bot
        </div>
        <div className="p-5 ">
        <a href="https://imgbb.com/"><img src="https://i.ibb.co/pPGCnL5/download-removebg-preview-removebg-preview-Photoroom-png-Photoroom-1-Photoroom-png-Photoroom.png" alt="download-removebg-preview-removebg-preview-Photoroom-png-Photoroom-1-Photoroom-png-Photoroom"></img></a>
        </div>
        
        <div className="p-7 mb-3 text-lg text-slate-400 md:text-xl dark:text-gray-400">
          <div className="text-center">
          Hi there! I'm MiningBot, Your MultiLingual dedicated assistant for navigating the complex landscape of mining industry regulations. Whether you need information on specific Acts, Rules, or Regulations, or have questions about compliance and legal requirements, I'm here to help. Just ask me anything, and I'll provide you with detailed and accurate responses to ensure you stay informed and compliant. Let's get started!

          </div>
        
        </div>

      </div>  
    </motion.div>
  );
}
