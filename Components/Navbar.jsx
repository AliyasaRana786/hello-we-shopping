/* eslint-disable react/prop-types */
import { Link, useLocation, useNavigate } from 'react-router-dom'
import '../CSS/Navbar.css'
import { items } from './Data'
import { useState } from 'react'

export default function App({ cart, setData }) {
    const [searchitem, setSearchitem] = useState([]);
    const location = useLocation();

    const nagivate = useNavigate()
    const handlesubmit = (e) => {
        e.preventDefault();
        nagivate(`/search/${searchitem}`)
        setSearchitem('');
    }
    const handleclick = (category) => {
        const element = items.filter((product) => product.category === category);
        setData(element);

    }
    return (
        <>


            <section className='navbars'>
                <div className="container">
                    <div className="header p-4">

                        <Link to={'/'} className="logo">
                            <h1>Seoland</h1>

                        </Link>

                        <div className="search">
                            <form onSubmit={handlesubmit}>
                                <input type="text" value={searchitem} onChange={(e) => setSearchitem(e.target.value)} placeholder='Enter your product name....' />
                            </form>
                        </div>

                        <div className="icon">
                            <i className="fa-regular fa-heart mx-3"></i>

                            <Link to={'/cart'} className="position-relative">
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

            {location.pathname == '/' && (
                <section className='productfilter p-4'>

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-md-3 col-4 text-center mb-2 mt-2">
                                <p onClick={() => setData(items)}>Nofilter</p>
                            </div>
                            <div className="col-lg-1 col-md-3 col-4 text-center mb-2 mt-2">
                                <p onClick={() => handleclick('mobiles')}>Mobiles</p>
                            </div>
                            <div className="col-lg-1 col-md-3 col-4 text-center mb-2 mt-2">
                                <p onClick={() => handleclick('laptops')}>Laptops</p>
                            </div>
                            <div className="col-lg-1 col-md-3 col-4 text-center mb-2 mt-2">
                                <p onClick={() => handleclick('tablets')}>tablets</p>
                            </div>
                            <div className="col-lg-1 col-md-3 col-4 text-center mb-2 mt-2">
                                <p onClick={() => handleclick('Shrit')}>Shirt</p>
                            </div>
                            <div className="col-lg-1 col-md-3 col-4 text-center mb-2 mt-2">
                                <p onClick={() => handleclick('T-shrit')}>T-shrit</p>
                            </div>
                            <div className="col-lg-1 col-md-3 col-4 text-center mb-2 mt-2">
                                <p onClick={() => handleclick('Pant')}>Pant</p>
                            </div>
                            <div className="col-lg-1 col-md-3 col-4 text-center mb-2 mt-2">
                                <p onClick={() => handleclick('Shoes')}>Shoes</p>
                            </div>
                            <div className="col-lg-1 col-md-3 col-4 text-center mb-2 mt-2">
                                <p onClick={() => handleclick('watch')}>Watch</p>
                            </div>

                            <div className="col-lg-1 col-md-3 col-4 text-center mb-2 mt-2">
                                <p onClick={() => handleclick('Television')}>Television</p>
                            </div>
                            <div className="col-lg-1 col-md-3 col-4 text-center mb-2 mt-2">
                                <p onClick={() => handleclick('Fans')}>Fans</p>
                            </div>
                            <div className="col-lg-1 col-md-3 col-4 text-center mb-2 mt-2">
                                <p onClick={() => handleclick('AC')}>AC</p>
                            </div>

                        </div>

                    </div>
                </section>
            )}



        </>
    )
}