"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { color } from "framer-motion";

type Props = {};

function Login({}: Props) {
  return (
    <div onClick={() => signIn("google")} className="bg-[#9e9e9b] h-screen flex flex-col items-center justify-center text-center">
      <a href="https://imgbb.com/"><img src="https://i.ibb.co/tzcGnGh/download-removebg-preview.jpg" alt="download-removebg-preview" className="w-96 align-top" /></a>
      <p className="text-white font-bold text-3xl py-4 px-3">
        Welcome To The MiningBot
      </p>
      <button
        onClick={() => signIn("google")}
        className="text-white font-bold text-3xl animate-pulse"
      >
        Sign In To Use Our AI Assistant
      </button>
    </div>
  );
}

export default Login;
