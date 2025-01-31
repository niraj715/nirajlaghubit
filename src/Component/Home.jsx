import React, { useState } from 'react'
import { useEffect } from 'react'

function Home() {
    let [cate, setCate] = useState([])
    useEffect(() => {
        fetch(`https://laghubittanews.com/wp-json/wp/v2/posts`).then((n) => n.json()).then((i) => setCate(i))
    }, [])
    return (
        <>
            <section>
                <div className="container py-3">
                    <div className='border py-2'> <h5>लघुवित्त समाचार</h5>

                    </div>
                    <div className="row py-4">
                        {cate.map((a) => (

                            <div className="col-lg-6">
                                <div className="row shadow">
                                    <div className="col-lg-5 m-2 p-2">
                                        <img className='w-100' src={a.featured_image_src} alt="" srcset="" />
                                    </div>
                                    <div className="col-lg-6 offest-lg-1">
                                        <h5 className='py-4 text-success'>{a.title.rendered} </h5>
                                    </div>

                                </div>
                            </div>


                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}

export default Home
