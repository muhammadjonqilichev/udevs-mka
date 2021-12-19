import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import GirlInRed from '../../components/Girlinred/Girlinred'
import { girlSrc } from '../../components/Girlinred/srcgirl'
import Publications from '../../components/Piblications/Publications'
import { publicInfo } from '../../components/Piblications/srcfor'

function Page_4() {
    return (
        <>
            <Header />
            <GirlInRed {...girlSrc} />
            <Publications {...publicInfo} />
            <Footer />
            <dialog false >
                
            </dialog>
        </>
    )
}

export default Page_4
