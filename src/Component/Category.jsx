import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Category() {
  let { cid } = useParams()
  let [cate, setCate] = useState([])
  useEffect(() => {
    fetch(`https://laghubittanews.com/wp-json/wp/v2/posts?categories=${cid}`).then((n) => n.json()).then((i) => setCate(i))
  }, [cid])
  return (
    <>
      <div className="container">

        {cate.map((c) => (
          <div className="row shadow p-3">
           
              <div className="col-lg-4">
                <img className='w-100' src={c.featured_image_src} alt="" srcset="" />
              </div>
              <div className="col-lg-8">
                <h5 className='py-4 text-success'>{c.title.rendered} </h5>
                {/* <h4>{c.date_gmt}</h4> */}
                {/* <h6>{c.guid.rendered}</h6> */}
                <h6>{c.modified_gmt}</h6>
                <h6>{c.content.rendered}</h6>


                
              </div>
            
          </div>
        ))}
      </div>




      {/* <div className="container">
        <div className="row">

        </div>

      </div>
      <ul>
        {cate.map((c)=>(
            <li>{c.title.rendered}</li>
        ))}
      </ul> */}
    </>
  )
}

export default Category
