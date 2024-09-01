import React, { useEffect } from 'react'
import Breadcrumbs from '../Breadcrumbs'
import { VscGraph } from "react-icons/vsc";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { BiSolidCertification } from "react-icons/bi";
import { RiCustomerServiceLine } from "react-icons/ri";
import './Qualitypolicy.css'
import qualitydiagram from '../../Assets/ads2.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { v4 as uuidv4 } from 'uuid';
import s1 from '../../Assets/Grid-Tie.png'
import s2 from '../../Assets/Solar-Off-Grid.png'
import s3 from '../../Assets/Solar-Panel-Image.png'
import s4 from '../../Assets/maxresdefault.jpg'
import s5 from '../../Assets/maxresdefault (1).jpg'
import { FcCustomerSupport } from "react-icons/fc";

function Qualitypolicy() {
    useEffect(() => {
        AOS.init()
    }, [])
    const products = [
        {
          id: uuidv4(),
          img: s1,
          title: 'Pre-Design'
        },
        {
          id: uuidv4(),
          img: s2,
          title: 'Detailed-Design'
        },
        {
          id: uuidv4(),
          img: s3,
          title: 'Solar-Permit-Design'
        },
        {
          id: uuidv4(),
          img: s5,
          title: 'Shadow Analysis Report & Structure Certificate'
        },
        {
          id: uuidv4(),
          img: s4,
          title: 'MW Ground Mount Design'
        },
        {
            id: uuidv4(),
            img: s4,
            title: 'Reports'
          }
      ]
    return (
        <div>
            <Breadcrumbs title='Services' />
            <section className='m-top53px'>
                <div className='container'>
                    <div className='divA' data-aos="fade-up">
                        <h4 className='blinking-paragraph'>No.1 Solar System Provider & Installer in Palanpur</h4>
                        <div>
                            <h3>Complete Solution of Solar Design, Engineering & Consultancy. </h3>
                        </div>
                        <div>
                            <p>
                                Your Expert Solar Design Team!
                                Residential | Commercial | Industrial | Ground Mount
                            </p>
                        </div>
                    </div>
                    <div className='divB'>
                        <h2>Our Services</h2>

                        <div>
                            <h1>What makes us the trusted name in Solar Rooftop System & Solar Panel Solutions?</h1>
                            <p><strong>Palanpur Solar has been a life-enriching solution for many decades and we are constantly striving to provide possible and quality solutions that build trust with millions of people.</strong></p>
                            <p><strong>Want to buy Solar Rooftop System, Solar Rooftop Panels, Solar water pumps for your house? We at Palanpur solar provide and install all types of solar panel solutions & services at the best price with lower maintenance costs.</strong></p>
                        </div>
                    </div>
                    <div>
                        <div className='product-container'>
                            <Swiper

                                breakpoints={{
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 4,
                                        spaceBetween: 40,
                                    },
                                    1024: {
                                        slidesPerView: 5,
                                        spaceBetween: 50,
                                    },
                                }}
                                loop={true}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={true}
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}

                            >
                                {
                                    products?.map((product, index) => {
                                        return (
                                            <SwiperSlide key={product.id} className='swiper-child'>
                                                {/* <div key={product.id} className='swiper-child'> */}
                                                <a href='#'>
                                                    <img src={product.img} width='100px' height='100px' />
                                                    <h3>{product.title}</h3>
                                                </a>
                                                {/* </div> */}
                                            </SwiperSlide>

                                        )
                                    })
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className='CustomerSupport' data-aos="fade-up">
                    <div><FcCustomerSupport style={{fontSize: '-webkit-xxx-large'}}/></div>
                    <div>
                        <h5>Do You Still Have A Question Regarding Our Services?</h5>
                        <p>To know more about our services, please contact us.</p>
                    </div>
                    <div>
                        <a href='/contact'>Contact us</a>
                    </div>
                </div>
            </section>
            <section className='m-top53px'>

            </section>
        </div>
    )
}

export default Qualitypolicy
