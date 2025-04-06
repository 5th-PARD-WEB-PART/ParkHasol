import React from "react";
//import EventExample from "./components/event_example"

import Form from "./components/Form";
import Hook from "./components/hook_test1"

export default function Home(){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text=4xl font-extrabold position: absolute top-6 left-0 right-0 text-center dark:text-white">
              🌊PARD 3th Seminar
            </h1>
            <div className="position: absolute top-20 h-[2px] bg-black dark:bg-white w-full"/>

            <Form />
            <Hook />
        </div>
    );
}