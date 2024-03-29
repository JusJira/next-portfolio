import React from 'react'
import Image from 'next/image'

function CertBox(props: { certDetail: { name: any; thumbnail: any; source: any; date: any; }; }) {
    const { name, thumbnail, source, date } = props.certDetail;
    return (
        <article className="w-full max-h-[25rem] overflow-hidden relative group">
            <div className="flex items-center absolute right-4 top-4 z-10">
            </div>
            <Image
                src={thumbnail}
                className="object-cover w-full h-auto aspect-video scale-100 hover:scale-110 transition duration-[1.5s]"
                alt="certImage"
                width={1000}
                height={1000}
            />
            <div
                className="absolute w-full bottom-0 left-0 backdrop-blur-md dark:text-white text-white bg-black/50 p-4 translate-y-[100%] group-hover:translate-y-0 transition duration-700"
            >
                <h3 className="mr-2 text-xl">{name}</h3>
            </div>
        </article>

    )
}

export default CertBox