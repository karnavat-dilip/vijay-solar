import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../Breadcrumbs'
import stardelta from '../../Assets/14611_stardelta.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { v4 as uuidv4 } from 'uuid';
import { IoBarChartSharp } from "react-icons/io5";
import { PiCheckSquareOffsetFill } from "react-icons/pi";
import { IoFlaskSharp } from "react-icons/io5";
import Value from '../../Assets/values.jpg'
import OurMission from '../../Assets/mission.jpg'
import OurVision from '../../Assets/vision.jpg'
import about from '../../Assets/solar-batteries.jpg'
import TaTa from '../../Assets/testi1.jpg'
import reliance from '../../Assets/testi2.jpg'
import wasmo from '../../Assets/testi3.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './About.css'
import certificate1 from '../../Assets/certificate1.png'
import certificate2 from '../../Assets/certificate2.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

function About() {
    return (
        <div>
            <p>Vijay Solar Energies Limited ("WEL”) was founded in 1990. It is India’s largest manufacturer of solar PV modules with the largest aggregate installed capacity of 12 GW, as of June 30, 2023 (Source: CRISIL Report).</p>
        </div>
    );
}

function OurStrength() {
    return (
        <div>
            <p>The company certified with ISO 9001-2015, manufacturing more than 130 models with in house most advanced, highly erudite manufacturing unit having capacity of 100,000 units annually with more than 100 dedicated manpower. We have our distribution and supply network in entire India. </p>
        </div>
    );
}

function OurService() {
    return (
        <div>
            <p>Palanpur Solar has been a life-enriching solution for many decades and we are constantly striving to provide possible and quality solutions that build trust with millions of people.</p>
        </div>
    );
}
function AboutUs() {
    const [content, setContent] = useState(About);
    const [activeLink, setActiveLink] = useState('about');
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const openLightbox = (index) => {
        console.log(index);
        setPhotoIndex(index);
        setIsOpen(true);
    };

    const handleNavigation = (contentComponent, linkName) => {
        setContent(contentComponent);
        setActiveLink(linkName)
    };
    useEffect(() => {
        AOS.init()
    }, [])
    const images = [
        certificate1,
        certificate2,
    ]
    return (
        <div>
            <Breadcrumbs title='About Us' />
            <section className='m-top53px'>
                <div className='container'>
                    <div className='about-container'>
                        <div data-aos="fade-up">
                            <img src={about} />
                        </div>
                        <div className='second-child' data-aos="fade-up">
                            <h1>Welcome To vijay solar energy</h1>
                            <p>‘VIJAY SOLAR ENERGY’ is an authorized MNRE guaranteed Solar Contractor . ‘VIJAY SOLAR ENERGY’ has practical experience in custom solar power arrangements.It is our obsession to give you extraordinary consumer loyalty and administration in each part of your solar board establishment. ‘VIJAY SOLAR ENERGY’ is exclusive and worked by MNRE and GEDA . When they introduced solar boards on their home in 2018.</p>
                        </div>
                        {/* <div data-aos="fade-up">
                            <h1>Our Certificates</h1>
                            <div className='product-container'>
                                <Swiper

                                    loop={true}
                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={true}
                                    navigation={true}
                                    modules={[Pagination, Navigation]}

                                >
                                    {
                                        images?.map((src, index) => {
                                            return (
                                                <SwiperSlide key={index} className='swiper-child'>
                                                    <LazyLoadImage
                                                        className='lazy'
                                                        onClick={() => openLightbox(index)}
                                                        effect="blur"
                                                        src={src}
                                                        alt={`Gallery ${index}`}
                                                    />
                                                </SwiperSlide>

                                            )
                                        })
                                    }
                                </Swiper>
                                {isOpen && (
                                    <Lightbox
                                        mainSrc={images[photoIndex]}
                                        nextSrc={images[(photoIndex + 1) % images.length]}
                                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                        onCloseRequest={() => setIsOpen(false)}
                                        onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                                        onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                                    />
                                )}
                            </div>
                        </div> */}
                        <div className='second-child' data-aos="fade-up">
                            <h1>Why vijaysolarenergy?</h1>
                            <div>
                                <div className='bd-highlight'>
                                    <IoBarChartSharp />

                                    <h2>Performence</h2>
                                    <p>
                                    The efficiency of a solar panel is a measure of how well it converts sunlight into electricity. High-efficiency panels can produce more energy from the same amount of sunlight.

                                    </p>
                                </div>
                                <div className='bd-highlight'>
                                    <PiCheckSquareOffsetFill />


                                    <h2>High Quality
                                    </h2>
                                    <p>
                                    Using high-quality materials (e.g., tempered glass, durable backsheet, and high-efficiency cells) ensures the longevity and efficiency of the panels.

                                    </p>
                                </div>
                                <div className='bd-highlight'>
                                    <IoFlaskSharp />

                                    <h2>Testing</h2>
                                    <p>
                                    Measures the power output of the panel under standard test conditions (STC) to ensure it meets the rated specifications.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up">
                            <div className='nav-container'>
                                <div className='b-btm'>
                                    <h1>Who we are?</h1>
                                </div>
                                <div>
                                    <nav>
                                        <ul>
                                            <li className={activeLink === 'about' ? 'activelink' : ''} onClick={() => handleNavigation(About, 'about')}>About Us</li>
                                            <li className={activeLink === 'strength' ? 'activelink' : ''} onClick={() => handleNavigation(OurStrength, 'strength')}>OurStrength</li>
                                            <li className={activeLink === 'service' ? 'activelink' : ''} onClick={() => handleNavigation(OurService, 'service')}>Our Service</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className='text-indent'>

                                {content && content}

                            </div>
                        </div>
                        <div className='ourmission' data-aos="fade-up">
                            <div>
                                <img src={Value} width='100' />

                                <h2>Value</h2>
                                <p>
                                    We have earned clients’ trust with reliable service and quality products. We accept the consequences of our actions as a sign of responsibility. Our professionalism can be viewed through flawless service and high-end products.
                                </p>
                            </div>
                            <div>
                                <img src={OurMission} width='100' />


                                <h2>Our Mission
                                </h2>
                                <p>
                                    • The importance is treating it personnel
                                    • Human Resource enhancement
                                    • Innovation
                                    • Environmental Protection
                                </p>
                            </div>
                            <div>
                                <img src={OurVision} width='100' />

                                <h2>Our Vision</h2>
                                <p>
                                    We are planning to store and provide data base on customer server for Solar Submersible Pump Controller.


                                </p>
                            </div>
                        </div>
                        <div className='ourcustomer' data-aos="fade-up">
                            <div>
                                <h1>What Our Customers Say ?</h1>
                            </div>

                            <div style={{ height: '295px' }}>
                                <Swiper

                                    loop={true}
                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Pagination]}

                                >

                                    <SwiperSlide className='swiper-child'>
                                        <div>
                                            <p>
                                                "A wide range of varity available with reasonable price."

                                            </p>
                                            <img src={TaTa} width='100' />
                                            <h3>
                                                Project Manager
                                            </h3>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className='swiper-child'>
                                        <div>
                                            <p>
                                            "The best solar solution and service provide by company."
                                            </p>
                                            <img src={reliance} width='100' />
                                            <h3>
                                                Project Manager
                                            </h3>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className='swiper-child'>
                                        <div>
                                            <p>
                                                "You find all types of solutions related to solar. A wide range of varity available with reasonable price.
                                                "
                                            </p>
                                            <img src={wasmo} width='100' />
                                            <h3>
                                                Project Manager
                                            </h3>
                                        </div>
                                    </SwiperSlide>


                                </Swiper>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs
