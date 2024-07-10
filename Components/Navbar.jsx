/* eslint-disable react/prop-types */
import { Link, useLocation, useNavigate } from 'react-router-dom'
import '../CSS/Navbar.css'
import { items } from './Data'
import { useState } from 'react'
 
export default function App({cart,setData}) {
    const[searchitem,setSearchitem]=useState([]);
    const location=useLocation();
   
    const nagivate=useNavigate()
    const handlesubmit=(e)=>{
   e.preventDefault();
   nagivate(`/search/${searchitem}`)
   setSearchitem('');
    }
const handleclick=(category)=>{
    const element=items.filter((product)=>product.category===category);
    setData(element);
    
}
    return (
        <>


            <section className='navbars'>
                <div className="container">
                    <div className="header p-4">

                        <Link to={'/'} className="logo">
                            <a href="#"><img src="../Images/logo.svg" alt="" /></a>
                        </Link>

                        <div className="search">
                            <form onSubmit={handlesubmit}>
                                <input type="text" value={searchitem} onChange={(e)=>setSearchitem(e.target.value)} placeholder='Enter your product name....' />
                            </form>
                        </div>

                        <div className="icon">
                            <i className="fa-regular fa-heart mx-3"></i>
                         
                                <Link to={'/cart'}    className="position-relative">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    <span className="position-absolute cartlength top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {cart.length}
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </Link>
                          
                            <button className='mx-4  login'>login</button>
                        </div>
                    </div>
                </div>
            </section>

        {location.pathname=='/'&&(
 <section className='productfilter p-4'>
            
 <div className="container">
     <div className="row">
         <div className="col-lg-1 col-md-3 col-4 text-center mb-4">
             <span onClick={()=>setData(items)}>Nofilter</span>
         </div>
         <div className="col-lg-1 col-md-3 col-4 text-center mb-4">
             <span onClick={()=>handleclick('mobiles')}>Mobiles</span>
         </div>
         <div className="col-lg-1 col-md-3 col-4 text-center mb-4">
             <span onClick={()=>handleclick('laptops')}>Laptops</span>
         </div>
         <div className="col-lg-1 col-md-3 col-4 text-center mb-4">
             <span onClick={()=>handleclick('tablets')}>tablets</span>
         </div>
         <div className="col-lg-1 col-md-3 col-4 text-center mb-4">
             <span onClick={()=>handleclick('Shrit')}>Shirt</span>
         </div>
         <div className="col-lg-1 col-md-3 col-4 text-center mb-4">
             <span onClick={()=>handleclick('T-shrit')}>T-shrit</span>
         </div>
         <div className="col-lg-1 col-md-3 col-4 text-center mb-4">
             <span onClick={()=>handleclick('Pant')}>Pant</span>
         </div>
         <div className="col-lg-1 col-md-3 col-4 text-center mb-4">
             <span onClick={()=>handleclick('Shoes')}>Shoes</span>
         </div>
         <div className="col-lg-1 col-md-3 col-4 text-center mb-4">
             <span onClick={()=>handleclick('watch')}>Watch</span>
         </div>
        
         <div className="col-lg-1 col-md-3 col-4 text-center mb-4">
             <span onClick={()=>handleclick('Television')}>Television</span>
         </div>
         <div className="col-lg-1 col-md-3 col-4 text-center mb-4">
             <span onClick={()=>handleclick('Fans')}>Fans</span>
         </div>
         <div className="col-lg-1 col-md-3 col-4 text-center mb-4">
             <span onClick={()=>handleclick('AC')}>AC</span>
         </div>
          
     </div>

 </div>
</section>
        )}
            


        </>
    )
}