/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom';
import '../CSS/Productdetailspage.css';
import { useEffect, useState } from 'react';
import { items } from './Data';
 
import ProductPage from './ProductPage';
export default function Productdetailspage({cart, setCart}) {
    const handleclick = (id,  imgSrc,title,  description, current_price, original_price, discount) => {
        const obj = {
            id: id,
            imgSrc: imgSrc,
            title: title,
            description: description,
            current_price: current_price,
            
            original_price: original_price,
            discount: discount
        }
        setCart([...cart, obj]);
   
      
    }
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [relatedproduct, setRelatedProduct] = useState([])
    useEffect(() => {
        const element = items.filter((product) => product.id == id);
        setProduct(element[0])

        const elements = items.filter((procategory) => procategory.category == product.category);
        setRelatedProduct(elements)
    }, [id, product.category])
    return (
        <>
 
            <section className='container'>
                <div className="productdetails_page mt-5 align-items-center">
                    <div className="row">


                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="productdetails_img text-center">
                                <img className='img-fluid' src={product.imgSrc} alt="" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-12 mt-5 mb-2">
                            <div className="productdeatils_details">
                                <div className="product_category mb-2">{product.category}</div>
                                <div className="product_tittle mb-2">{product.title}</div>
                                <div className="product_description mb-2">{product.description}</div>
                                <div className="product_price mb-2">
                                    <div className="current_price">Rs {product.current_price}</div>
                                    <div className="original_price mx-2">Rs {product.original_price}</div>
                                    <div className="discount mx-2">({product.discount}%OFF)</div>
                                </div>
                                <button className='addtocartbtn mt-4' onClick={() => handleclick(product.id,product.imgSrc, product.title, product.description,product.current_price, product.original_price, product.discount)}>AddToCart</button>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
            <section className='container'>
                <ProductPage items={relatedproduct} />
            </section>
        </>
    )
}