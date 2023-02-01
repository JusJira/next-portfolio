import React from 'react'
import CertBox from './CertBox'

function CertWrapper(props: { certs: any }) {
    const certs = props.certs
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 my-16">
            {certs.map((certificate: any, index: any) => <CertBox key={index} certDetail={certificate} />)}
        </div>
    )
}

export default CertWrapper

