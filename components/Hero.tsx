import React from 'react'
import { info } from "../data/info";

function Hero() {
    return (
        <section>
            <p className="dark:text-white mt-[117px]">Hey, I’m</p>
            <h1>{info.name}</h1>
            <p className="dark:text-white text-lg mb-16">
                {info.about}
            </p>
        </section>
    )
}

export default Hero