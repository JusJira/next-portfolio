import React from 'react'

function Experience(props: { details: any; title: any; }) {
    const details = props.details;
    const title = props.title
    return (
        <section
            className="flex items-start justify-between flex-col sm:flex-row dark:text-light"
        >
            <h2 className="w-[15rem] mt-16">{title}</h2>
            <div className="w-full">
                {
                    details.map((item: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; date: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; location: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; description: any[]; }, index: number) => (
                        <div key={index} className="my-16">
                            <div className="flex justify-between items-center flex-wrap">
                                <h3 className="text-xl font-semibold">{item.name}</h3>
                                <p className="text-sm dark:text-gray">
                                    {item.date}
                                </p>
                            </div>
                            <p className="text-sm mt-3 text-dark-blue dark:text-blue">{item.location}</p>
                            <ul className="mt-3">
                                {item.description.map((item ,index) => (
                                    <li key={index} className="dark:text-gray">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Experience