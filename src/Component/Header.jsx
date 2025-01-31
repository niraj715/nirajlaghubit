import React, { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Category from './Category'
// import Footer from './Footer'

function Header() {
    let [cat,setCat]=useState([])
    useEffect(()=>{
        fetch(`https://laghubittanews.com/wp-json/wp/v2/categories`).then((v)=>v.json()).then((b)=>setCat(b))
    },[])
  return (
    <>
      <section className='top'>
        <div className='container d-flex justify-content-between '>
      <i class="bi bi-calendar2"> १८ पुष २०८१, बिहीबार</i>
      
      <div><i class="bi bi-facebook"></i></div>
      </div>
        </section>
        <section className='py-5'>
            <div className="container d-flex justify-content-between ">
               <img className='logo' src="https://laghubittanews.com/wp-content/themes/laghubitta/img/laghubittanews.jpg" alt="" srcset="" />
               <img className='slide' src="https://laghubittanews.com/wp-content/themes/laghubitta/img/gif-900-x-100.gif" alt="" srcset="" />
            </div>
        </section>
       <nav className="navbar navbar-expand-lg bg-success">
  <div className="container">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        {cat.map((a)=>(
          <li className="nav-item">
  <Link className="nav-link" to={`/cat/${a.id}`}>{a.name}</Link>
</li>

        ))}
         
      </ul>
     
    </div>
  </div>
</nav>

<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cat/:cid/' element={<Category/>}/>
    {/* <Route path='/' element={<Footer/>}/> */}


</Routes>

        
    </>
  )
}

export default Header
