import React, { useEffect } from 'react'
import { FaFacebook, FaInstagramSquare, FaYoutube, FaLinkedin } from 'react-icons/fa'
import './Footer.css'
import glogo from '../../Assets/Effect.png'
import { RiCustomerService2Line } from "react-icons/ri";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { TbWorldWww } from "react-icons/tb";
import AOS from 'aos'
import 'aos/dist/aos.css'

function Footer() {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <>
            <footer className='Footer'>
                <div className='container'>
                    <div className='Footer-child' data-aos="fade-down">
                        <div className='section-child' >
                            <div>
                                <img src={glogo} width='150' />
                                <p>Vijay Solar Energies Limited ("WEL”) was founded in 1990.</p>
                                <div className='customer-service'>
                                    <RiCustomerService2Line style={{
                                        width: '45px',
                                        height: '59px'
                                    }} />
                                    <ul>
                                        <li>Customer Support</li>
                                        <li>
                                            <a href="tel:+91 6351211549">+91 63512 11549</a>
                                        </li>
                                        <li>
                                            <a href="tel:+91 8780458239">+91 87804 58239</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='section-child'>
                            <div>
                                <p>It is India’s largest manufacturer of solar PV modules with the largest aggregate installed capacity of 12 GW, as of June 30, 2023 (Source: CRISIL Report).
                                </p>
                                <div className='social-icon-child' style={{
                                    height: 'fitContent',
                                    display: 'contents'
                                }}>
                                    <ul>
                                        <li>

                                            <a href='https://www.facebook.com/'>
                                                <FaFacebook />
                                            </a>

                                        </li>
                                        <li>

                                            <a href='https://www.instagram.com/'>
                                                <FaInstagramSquare />
                                            </a>

                                        </li>
                                        <li>

                                            <a href='https://www.youtube.com/'>
                                                <FaYoutube />

                                            </a>

                                        </li>
                                        <li>

                                            <a href='https://www.linkedin.com/'>
                                                <FaLinkedin />

                                            </a>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='section-child'>
                            <h3>Sitemap</h3>
                            <ul className='sitemap'>
                                <li>
                                    <a href='/Allproduct'>Our Product</a>
                                </li>
                                <li>
                                    <a href='/about'>About Us</a>
                                </li>
                                <li>
                                    <a href='/about'>Our Mission</a>
                                </li>
                                <li>
                                    <a href='/about'>Our Vision</a>
                                </li>
                                <li>
                                    <a href='/contact'>Contact Us</a>
                                </li>
                                <li>
                                    <a href='/Services'>Services</a>
                                </li>
                            </ul>
                        </div>
                        <div className='section-child'>
                            <a href='/contact'>Contact Us</a>
                            <ul className='contactus'>
                                <li>
                                    <b>Vijay Solar Energies Limited</b>
                                </li>
                                <li>
                                    second E 12, new bus port, Madhuvan Society, Nilkamal Society, Palanpur, Gujarat 385001

                                </li>
                                <li>
                                    Gujarat(INDIA)385001
                                </li>
                                <li className='contact-link'>
                                    <IoIosCall className='contact-support' /><a href='tel:+91 6351211549'>+916351211549</a>&nbsp;
                                    <a href='tel:+91 8780458239'>8780458239</a>&nbsp;
                                </li>
                                <li className='contact-link'>
                                    <IoMdMail className='contact-support' />
                                    Email Us:
                                </li>
                                <li>
                                    <a style={{
                                        left: '24px',
                                        position: 'relative'
                                    }} href='mailto:vijaysolarenergy940@gmail.com'>vijaysolarenergy940@gmail.com</a>
                                </li>

                                <li className='contact-link'>
                                    <TbWorldWww className='contact-support' />
                                    <a href='https://vijaysolarenergy.vercel.app'>https://vijaysolarenergy.vercel.app</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className='copyright'>
                    <p>Copyright © 2024-25 vijay solar energy | All Rights reserved Designed & Developed By <a href='tel:+91 9913448958'>Dilip Karnavat</a></p>
                </div>
            </footer >
        </>
    )
}

export default Footer
