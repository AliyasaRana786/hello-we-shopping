/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import '../CSS/ProductPage.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 

export default function ProductPage({ items, cart, setCart }) {
    const handleclick = (id,  imgSrc,title,  description, current_price, original_price, discount) => {
        const obj = {
            id: id,
            imgSrc: imgSrc,
            title: title,
            description: description,
            current_price: current_price,
             
            original_price: original_price,
            discount: discount,
            
        }
        setCart([...cart, obj]);
        toast.success('your item is added`', {
            position: "top-right",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",

        });
        
    }
    return (
        <>
   <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"

            />
        <section className="container">
            <div className="row">
                {items.map((product) => {
                    return (
                        <>
                            <div className="col-lg-3 col-md-6 col-12 mt-5">

                                <div className="productcard text-center" key={product.id}>
                                    <Link to={`/product/${product.id}`} className="productcard_img text-center">
                                        <img className="img-fluid" src={product.imgSrc} alt="" />
                                    </Link>
                                    <div className="productcard_tittle text-center">{product.title}</div>
                                    <div className="productcard_des text-center mt-2">{product.description}</div>
                                    <div className="price mt-2">
                                        <div className="current_price">Rs {product.current_price}</div>
                                        <div className="original_price">Rs {product.original_price}</div>
                                        <div className="discount">( {product.discount}%OFF)</div>
                                    </div>
                                    <div onClick={() => handleclick(product.id,product.imgSrc, product.title, product.description,product.current_price, product.original_price, product.discount)} className="addtocart text-center mt-3">AddToCart</div>
                                </div>
                            </div>

                        </>
                    )
                })}




            </div>
        </section>
        </>
    )
}