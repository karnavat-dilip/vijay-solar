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
import { Accordion, styled } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionActions from '@mui/material/AccordionActions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Qualitypolicy() {
    useEffect(() => {
        AOS.init()
    }, [])
    const productapplication = [
        {
            id: uuidv4(),
            img: s1,
            Appname: 'Pre-Design',
            moreinfo: 'Solar pre- design is a critical step that lays the groundwork for a successful solar energy project.By conducting thorough assessments and analyses, pre - design helps ensure that the final solar system is well - suited to the site’s conditions and the clients needs, minimizing risks and maximizing performance and savings.'
        },
        {
            id: uuidv4(),
            img: s2,
            Appname: 'Post-Design',
            moreinfo:'Solar Post-Design is the phase that follows the initial design and installation of a solar energy system. This crucial stage focuses on optimizing the performance, ensuring the system operates effectively, and addressing any issues that may arise after the system is up and running. It encompasses ongoing support, monitoring, and maintenance to ensure the solar system continues to meet its intended goals and performs efficiently throughout its lifespan.'
        },
        {
            id: uuidv4(),
            img: s3,
            Appname: 'Site Survey & Land Feasibility Services',
            moreinfo:'At Greet Solar, our Site Survey & Land Feasibility Services are designed to ensure that your solar energy project starts with a solid foundation. These services are crucial in assessing the suitability of your site for solar installations, optimizing system design, and addressing any potential challenges before project implementation.'
        },
        {
            id: uuidv4(),
            img: s5,
            Appname: 'Shadow Analysis and Structural Report',
            moreinfo:'At Greet Solar, we understand that thorough Shadow Analysis and a detailed Structural Report are essential components of a successful solar energy project. These analyses ensure that your solar system is optimized for maximum efficiency and that the installation site can support the system’s requirements.'
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

                    <section data-aos="fade-up">
                        <div className='container'>
                            <div className='h1-container'>
                               
                            </div>
                            <div className='grid-container'>
                                {productapplication?.map((product, index) => {
                                    return (
                                        <div className='grid-item'>
                                            <img src={product.img} width='100'/>
                                            <h1>{product.Appname}</h1>
                                            <Accordion style={{ background: 'aliceblue', boxShadow: 'none' }}>
                                                <AccordionSummary
                                                    expandIcon={<ExpandMoreIcon />}

                                                >
                                                    More Info
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    {product.moreinfo}
                                                </AccordionDetails>
                                            </Accordion>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </section>
                </div>
                <div className='CustomerSupport' data-aos="fade-up">
                    <div><FcCustomerSupport style={{ fontSize: '-webkit-xxx-large' }} /></div>
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
