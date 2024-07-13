/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import '../CSS/Cart.css'
export default function Cart({ cart, setCart }) {
    const removeproductcard = (id) => {
        const element = cart.filter((product) => product.id !== id);
        setCart(element);
    }
 
    
    return (
        <div>
            {cart.length==0?(
                <div className='text-center mt-5'>
                    <Link to={'/'} className='btn continue_btn'>Continue</Link>
                </div>
            ):(
                <section className='container add_cart_card'>
                {cart.map((product) => {
                    return (
                        <>
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-12">
                                    <div className="cartcard">
    
                                        <div className="cart_img">
                                            <img  src={product.imgSrc} alt="" />
                                        </div>
    
                                        <div className="cartcarddeatails mx-4">
                                            <div className="cart_tittle mb-1">{product.title}</div>
                                            <div className="cart_description mb-1">{product.description}</div>
                                            <div className="cartitem_price d-flex">
                                                <div className="current_price">Rs{product.current_price}</div>
                                                <div className="original_price mx-2">Rs{product.original_price}</div>
                                                <div className="discount mx-2">({product.discount}%OFF)</div>
                                            </div>
                                            <div className="return_product mb-1"><span>14 days </span>return available</div>
                                            <div className="delviry_date mb-1"><span>Delvired</span> by 10-2-24</div>
                                        </div>
                                        <div className="cross-icon">
                                            <i onClick={() => removeproductcard(product.id)} className="fa-solid crossicon fa-xmark"></i>
                                        </div>
                                    </div>
                                </div>
                                
                              
                            </div>
                        </>
                    )
                })}
    
                <div className="cartpage_btn mt-5 mb-5">
                    <button className='mx-4' onClick={()=>setCart([])}>Clear</button>
                    <button className='mx-4'>CheckOut</button>
                </div>
    
    
            </section>
            )}
        </div>
    )
}