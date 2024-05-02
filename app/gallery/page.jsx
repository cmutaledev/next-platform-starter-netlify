import { RandomImage } from 'components/random-image'
import React from 'react'

export default function Page() {
    return (
        <>
            <section>
                <h1>Howdy, partner!</h1>
                <p className='py-6'>Learning all I can about Netlify Image CDN's</p>

                <div className='py-12'>
                    <RandomImage />
                </div>
            </section>
        </>
    )
}
