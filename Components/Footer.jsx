import '../CSS/Footer.css'
export default function Footer(){
    return(
        <section className='footerbar mt-5 pt-5 pb-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12  ">
                         <div className="footer_logo mb-4">
                            <img className='img-fluid' src="../Images/logo.svg" alt="" />
                         </div>
                         <div className="footer_logo_para mb-4">
                            <p>Seoland ECommerce website is an online platform where businesses sell products or services, enabling customers to browse, purchase, and pay securely via the internet.</p>
                         </div>
                         <div className="footer_bar_btn mt-5">
                            <input type="text"  placeholder='your Email Address'/>
                            <button>Subscribe now</button>
                         </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 mt-4 ">
                         <h4 className='heading'>location seylond</h4>

                         <div className="location_section mt-4 mb-4 d-flex">
                            <div className="icons">
                            <i className="fa-solid faicon fa-location-dot"></i>
                            </div>
                            <div className="location_name mx-3">
                                <p>Visit Our Location</p>
                                <p>5th Street, 21st Floor, New York, USA</p>
                            </div>
                         </div>

                         <div className="location_section mt-4 mb-4 d-flex">
                            <div className="icons">
                            <i className="fa-solid faicon fa-envelope"></i>
                            </div>
                            <div className="location_name mx-3">
                                <p>Send Us Email</p>
                                <p>abcdmeht23@gmail.com</p>
                            </div>
                         </div>

                         <div className="location_section mt-4 mb-4 d-flex">
                            <div className="icons">
                            <i className="fa-solid faicon fa-phone-volume"></i>
                            </div>
                            <div className="location_name mx-3">
                                <p>Looking For Project</p>
                                <p>+91-1111-000-8900</p>
                            </div>
                         </div>

                    </div>
                    <div className="col-lg-2 col-md-6 col-6 mt-4  ">
                    <h4 className='heading'>Company</h4>
                    <ul>
                        <li className='mt-3 mb-3  '>About</li>
                        <li className='mt-3 mb-3  ' >Contact Us</li>
                        <li className='mt-3 mb-3  '>Price Table</li>
                        <li className='mt-3 mb-3  '>Service One</li>
                        <li className='mt-3 mb-3 '>Team Member</li>
                       
                    </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 col-6 mt-4 text-center-justify">
                    <h4 className='heading'>Make Money with </h4>
                    <ul>
                    <li className='mt-3 mb-3 '>Sell on Seoland</li>
                        <li className='mt-3 mb-3 ' >Fulfilment by Amazon</li>
                        <li className='mt-3 mb-3 '>Advertise Your Products</li>
                        <li className='mt-3 mb-3 '>Become an Affiliate</li>
                        <li className='mt-3 mb-3 '>Amazon Global Selling</li>
                         
                    </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}