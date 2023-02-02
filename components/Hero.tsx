import React from 'react'
import { info } from "../data/info";

function Hero() {
    return (
        <section>
            <p className="dark:text-white mt-[117px]">Hey, I’m</p>
            <h1>{info.name}</h1>
            <p className="dark:text-white text-lg mb-16">
                I am a student majoring in Engineering at Chulalongkorn University, Thailand.
                I enjoy creating things for the internet, whether that be websites, applications, or anything in between.
                I also enjoy configuring servers such as the server that is hosting this site!.
                I have experience working in frontend with React, Next and Tailwind CSS.
                And in backend development with Express, Flask and SocketIO.
                I also do other programming other than web development such as Python.
            </p>
        </section>
    )
}

export default Hero