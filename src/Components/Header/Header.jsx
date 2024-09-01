import React, { useEffect, useState } from 'react'
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import './Header.css'
import GUJARAT_PANEL_broucher from '../../Assets/GUJARAT PANEL broucher.pdf'
import glogo from '../../Assets/Effect.png'
import gemlogo from '../../Assets/gemlogo.jpeg'
import Iso_90012015 from '../../Assets/Effect.png'
import { MdDownload } from "react-icons/md";
import { TfiAngleDown } from "react-icons/tfi";
import { stack as Menu } from 'react-burger-menu'
import { Accordion, styled } from '@mui/material';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaHome } from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";
import { FaCircleInfo } from "react-icons/fa6";
import { MdEqualizer } from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { MdContactPhone } from "react-icons/md";
import { PiArrowUpBold } from "react-icons/pi";
import { FaSquareWhatsapp } from "react-icons/fa6";
import Havells1 from '../../Assets/solarinverter/Havells1.png'
import Havells2 from '../../Assets/solarinverter/Havells2.png'
import SOFAR1 from '../../Assets/solarinverter/SOFAR1.jpg'
import SOFAR2 from '../../Assets/solarinverter/SOFAR2.jpg'
import evvo1 from '../../Assets/solarinverter/evvo1.png'
import evvo2 from '../../Assets/solarinverter/evvo2.jpg'
import evvo3 from '../../Assets/solarinverter/evvo3.jpg'
import evvo4 from '../../Assets/solarinverter/evvo4.jpg'
import ACDBBOX from '../../Assets/Assessory/ACDBBOX.png'
import CableTie from '../../Assets/Assessory/CableTie.jpg'
import DCDBBOX from '../../Assets/Assessory/DCDBBOX.png'
import EarthingKit from '../../Assets/Assessory/Earthing Kit.png'
import EndClamp from '../../Assets/Assessory/End Clamp.png'
import JBolt from '../../Assets/Assessory/J Bolt.png'
import MidClamp from '../../Assets/Assessory/Mid Clamp.png'
import cable1 from '../../Assets/cable/cable1.jpg'
import cable2 from '../../Assets/cable/cable2.jpg'
import { IoIosArrowForward } from "react-icons/io";

import { v4 as uuidv4 } from 'uuid';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Checkmark } from 'react-checkmark'
import TranslateComponent from '../TranslateComponent';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const CustomAccordion = styled(Accordion)(({ theme }) => ({
    textTransform: 'uppercase',
    left: '-15px',
    boxShadow: 'none',
}));

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [expanded, setExpanded] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [open, setOpen] = useState(false);
    const [opencheckcircle, setopencheckcircle] = useState(false);
    const [loading, setloading] = useState(false)
    const [emailData, setEmailData] = useState({
        name: '',
        email: '',
        number: '',
        message: ''
    });

    const Changevalue = (e) => {
        const { name, value } = e.target;

        setEmailData({
            ...emailData,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setloading(true)
        try {
            const response = await axios.post('/send-email', emailData);
            console.log(response);

            console.log('Email sent successfully');
            setOpen(false);
            setopencheckcircle(true);
            setEmailData({
                name: '',
                email: '',
                number: '',
                message: ''
            })
        } catch (error) {
            alert('Error sending email');
        } finally {
            setloading(false)
        }
    };



    useEffect(() => {
        AOS.init()
    }, [])


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const Closecheckcircle = () => {
        setopencheckcircle(false)
    }

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 200) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Show the scroll button when the page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling
        });
    };



    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };
    const currentLocation = window.location.href;

    useEffect(() => {

        const links = document.querySelectorAll('.nav-links > ul > li > a');
        links.forEach(link => {
            if (link.href === currentLocation) {
                link.classList.add('active');
            }
        });

    }, [])
    useEffect(() => {

        const links = document.querySelectorAll('.offcanvas-menu > ul > li > a');
        links.forEach(link => {
            if (link.href === currentLocation) {
                link.classList.add('active');
            }
        });

    }, [])
    useEffect(() => {

        const links = document.querySelectorAll('.mobile-sub-menu > li > a');
        links.forEach(link => {
            if (link.href === currentLocation) {
                link.classList.add('active1');
            }
        });

    }, [])
    useEffect(() => {

        const links = document.querySelectorAll('.dropdown-content a');
        links.forEach(link => {
            if (link.href === currentLocation) {
                link.classList.add('active-sub-menu');
            }
        });

    }, [])


    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const products = [
        {
            id: uuidv4(),
            img: Havells1,
            title: 'Havells ENVIRO GTI 1100 NG/ 2200 NG/ 3000 NG/ 3300 NG/ 4000 D/ 5000 D'
        },
        {
            id: uuidv4(),
            img: Havells2,
            title: 'Havells ENVIRO GTI 5500 TX/ 6600 TX/ 8800 TX/ 11000 TX'
        },
        {
            id: uuidv4(),
            img: SOFAR1,
            title: 'SOFAR 1100TL-G3/ 1600TL-G3/ 2200TL-G3/ 2700TL-G3/ 3000TL-G3/ 3300TL-G3'
        },
        {
            id: uuidv4(),
            img: SOFAR2,
            title: 'SOFAR 4KTLM-G3/ 4.6KTLM-G3/ 5KTLM-G3/ 6KTLM-G3'
        },
        {
            id: uuidv4(),
            img: SOFAR2,
            title: 'SOFAR 6.6KTL-X/ 8.8KTL-X/ 11KTL-X/ 12KTL-X'
        },
        {
            id: uuidv4(),
            img: evvo1,
            title: 'EVVO 1100TL-AV /1600TL-AV / 2200TL-AV / 3000TL-AV /3300TL-AV'
        },
        {
            id: uuidv4(),
            img: evvo2,
            title: 'EVVO 15000TLG23P'
        },
        {
            id: uuidv4(),
            img: evvo3,
            title: 'EVVO 20000TLG23P / 25000TLG23P / 30000TLG23P / 33000TLG23P'
        },
        {
            id: uuidv4(),
            img: evvo4,
            title: 'EVVO 3000TL3P / 4000TL3P / 5000TL3P / 6000TL3P / 8000TL3P / 10000TL3P / 12000TL3P'
        },
        {
            id: uuidv4(),
            img: evvo4,
            title: 'EVVO 4000TL-G2 / 5000TL-G2 / 6000TL-G2'
        },
        {
            id: uuidv4(),
            img: cable2,
            title: 'Polycab Wire'
        },
        {
            id: uuidv4(),
            img: cable1,
            title: 'Havells Wire'
        },
        {
            id: uuidv4(),
            img: MidClamp,
            title: 'Mid Clamp'
        },
        {
            id: uuidv4(),
            img: JBolt,
            title: 'J Bolt'
        },
        {
            id: uuidv4(),
            img: EndClamp,
            title: 'End Clamp'
        },
        {
            id: uuidv4(),
            img: EarthingKit,
            title: 'Earthing Kit'
        },
        {
            id: uuidv4(),
            img: DCDBBOX,
            title: 'DCDB Box'
        },
        {
            id: uuidv4(),
            img: CableTie,
            title: 'Cable Tie'
        },
        {
            id: uuidv4(),
            img: ACDBBOX,
            title: 'ACDB Box'
        }
    ]
    function sliceString(inputString) {
        if (inputString.length > 20) {
            return inputString.slice(0, 20) + "...";  // Slice the first 20 characters
        } else {
            return inputString;
        }
    }


    return (
        <>
            <header className='header-section'>
                <div className='header-tops'>
                    <div className='container'>
                        <div className='container-child'>
                            <div>
                                <h4>Welcome to our Vijay Solar Energy</h4>
                            </div>
                            <div>
                                <ul className='header-user-menu'>
                                    <li>
                                        <IoIosCall /><a href='tel:+91 6351211549'>+91 6351211549</a>
                                        <a href='tel:+91 8780458239'>+91 8780458239</a>
                                    </li>
                                    <li>
                                        <IoMdMail />
                                        <a href='mailto:vijaysolarenergy940@gmail.com'>vijaysolarenergy940@gmail.com</a>
                                    </li>


                                </ul>
                            </div>
                            <TranslateComponent />
                        </div>
                    </div>

                </div>
                {/* <div className='header-center'>
                    <div className='container'>
                        <div className='header-logo-menu'>
                            <img src={gemlogo} width='200px' height='100px' alt='logo not available'></img>
                            <img src={glogo} width='200px' height='100px' alt='logo not available'></img>
                            <img src={Iso_90012015} width='100px' height='100px' alt='logo not available'></img>
                        </div>
                    </div>
                </div> */}
                <div className='header-bottom'>
                    <nav className={isSticky ? 'sticky' : 'navbar'}>
                        <div className='container'>

                            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                                <img src={glogo} width='200px' height='100px' alt='logo not available'></img>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li className="dropdown">
                                        <a href='/Allproduct'>product <TfiAngleDown />
                                        </a>
                                        <div className="stone">
                                            <div className='container'>
                                                <div className='p-list-container'>
                                                    {
                                                        products?.map((product, index) => {
                                                            return (
                                                                <div key={product.id}>
                                                                    <a href={`/Allproduct/${index + 1}`}>
                                                                        <img src={product.img} width='100' style={{ alignSelf: 'center' }} />
                                                                        <h3>{product.title}</h3>
                                                                    </a>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li><a href="/Services">Services</a></li>
                                    <li className="dropdown">
                                        <a>gallery <TfiAngleDown />
                                        </a>
                                        <div className="dropdown-content">
                                            <a href="/photos">Photos</a>
                                            <a href="/videos">Videos</a>
                                        </div>
                                    </li>
                                    <li><a href="/about">About Us</a></li>
                                    <li><a href="/contact">Contact Us</a></li>
                                </ul>


                                <ul className='download'>
                                    <li>
                                        <a onClick={handleClickOpen}>BROUCHER <MdDownload />
                                        </a>
                                    </li>
                                </ul>


                            </div>

                        </div>
                    </nav>
                </div>
            </header>
            <Dialog
                open={opencheckcircle}
                keepMounted
                onClose={Closecheckcircle}
                aria-describedby="alert-dialog-slide-description"
            >

                <DialogContent>
                    <div>
                        <Checkmark size='xxLarge' color='#01a875' />
                        <h1 style={{
                            textAlign: 'center',
                            padding: '14px'
                        }}>
                            Sent!
                        </h1>
                        <div>
                            <p>Kindly check your mail to view or download this document.</p>
                        </div>
                    </div>
                </DialogContent>

            </Dialog >
            <Dialog
                open={open}

                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >

                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        <div style={{ padding: '0px 88px 0px 0px' }}>
                            <div>
                                <img src={glogo} width='100' style={{
                                    position: 'relative',
                                    left: '50%'
                                }} />
                            </div>
                            <div className='sentmail'>
                                <input type='text' placeholder='Enter your Name' name='name' onChange={Changevalue}
                                    required />
                            </div>
                            <div className='sentmail'>
                                <input type='tel' placeholder='Enter your mobile number' name='number' onChange={Changevalue}
                                    required />
                            </div>
                            <div className='sentmail'>
                                <input type='email' placeholder='Enter your Email' name='email' onChange={Changevalue}
                                    required />
                            </div>
                            <div className='sentmail'>
                                <textarea placeholder='Message...' name='message' onChange={Changevalue}
                                    required />
                            </div>
                            <div className='sentmail'>
                                <div>
                                    <button type='submit'>Submit</button>
                                </div>
                                <div>
                                    {
                                        loading ?
                                            <Box sx={{ display: 'flex' }}>
                                                <CircularProgress style={{ color: '#01a875' }} />
                                            </Box> : ''
                                    }
                                </div>
                            </div>
                        </div>
                    </form>
                </DialogContent>

            </Dialog>
            <div className="scroll-to-top" data-aos="fade-up">
                {isVisible && (
                    <button onClick={scrollToTop}>
                        <PiArrowUpBold />
                    </button>
                )}
            </div>
            <div className='Whatsapp'>
                <ul>
                    <li>
                        <a href='https://api.whatsapp.com/send/?phone=+916351211549&text&type=phone_number&app_absent=0' target='_blank'><FaSquareWhatsapp style={{
                            width: '47px',
                            height: '48px',
                            color: '#25d366'
                        }} />
                        </a>
                    </li>
                </ul>

            </div>
            <div className="mobile-header-section d-block d-lg-none">
                {/* Start Mobile Header Wrapper */}
                <div className="mobile-header-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-between align-items-center">
                                <div className="mobile-header--left">
                                    <a href="/" className="mobile-logo-link">
                                        <img
                                            src={glogo}
                                            alt="logo not available"
                                            width='100'
                                            className="mobile-logo-img"
                                        />
                                    </a>
                                </div>
                                <Menu>
                                    <div className="offcanvas-mobile-menu-wrapper">
                                        {/* Start Mobile Menu User Top */}
                                        <div className="mobile-menu-top">
                                            <span>
                                                <b>Welcome to Vijay Solar Energy</b>
                                            </span>
                                            {/* Start Header Top Menu */}
                                            <ul className="mobile-menu-user-menu">
                                                <li className="header-user-menu-link">
                                                    <IoIosCall />
                                                    <a href="tel:+91 8780458239" target="_blank">
                                                        <b> +91 8780458239</b>
                                                    </a>
                                                    <a href="tel:+91 6351211549" target="_blank">
                                                        <b>+91 6351211549</b>
                                                    </a>
                                                </li>
                                                <a href="tel:+91 6351211549"></a>
                                                <li className="header-user-menu-link">
                                                    <IoMdMail />
                                                    <a href="mailto:vijaysolarenergy940@gmail.com" target="_blank">
                                                        &nbsp;
                                                    </a>
                                                    <b> vijaysolarenergy940@gmail.com</b>
                                                </li>
                                                {/*                <li class="header-user-menu-link"><div id="google_translate_element" class="google_translate_element"></div></li>*/}
                                            </ul>
                                            {/* End Header Top Menu */}
                                        </div>{" "}
                                        {/* End Mobile Menu User Top */}
                                        {/* Start Mobile Menu User Center */}
                                        <div className="mobile-menu-center mt-5">
                                            <form action="#" method="post">
                                                <div className="header-search-box default-search-style d-flex">
                                                    <div className="footer-subscribe-box default-search-style d-flex justify-content-center mobile-homeTitle d-flex">
                                                        {/*                        <h2>Goodluck</h2>*/}
                                                        {/*                        <h2 style="color: #ea1c26">&nbsp;Pump</h2>*/}
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        {/* End Mobile Menu User Center */}
                                        {/* Start Mobile Menu User Center */}
                                        <div className="mobile-menu-center">
                                            <form action="#" method="post">
                                                <div className="header-search-box default-search-style d-flex">
                                                    <div className="footer-subscribe-box default-search-style d-flex">
                                                        <img
                                                            className="mobile-isoImg"
                                                            src={Iso_90012015}
                                                            alt="Image not available"
                                                            width='150'
                                                        />

                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        {/* End Mobile Menu User Center */}
                                        {/* Start Mobile Menu Bottom */}
                                        <div className="mobile-menu-bottom">
                                            {/* Start Mobile Menu Nav */}
                                            <div className="offcanvas-menu">
                                                <ul>
                                                    <li className="mobileli">

                                                        <a href="/"><FaHome className='fa-icon' />Home</a>
                                                    </li>

                                                    <li className="mobileli">

                                                        <CustomAccordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                                            <AccordionSummary
                                                                expandIcon={<ExpandMoreIcon />}
                                                            >
                                                                <div style={{
                                                                    height: '16px',
                                                                    display: 'flex',
                                                                    alignItems: 'center'
                                                                }}>
                                                                    <AiOutlineAppstore className='fa-icon' />
                                                                    <a href='/Allproduct'>
                                                                        Products
                                                                    </a>
                                                                </div>
                                                            </AccordionSummary>
                                                            <AccordionDetails>
                                                                <ul className="mobile-sub-menu">
                                                                    <li>

                                                                        <a href="/Allproduct/1"><IoIosArrowForward />
                                                                            {sliceString("Havells ENVIRO GTI 1100 NG/ 2200 NG/ 3000 NG/ 3300 NG/ 4000 D/ 5000 D")}</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/2"><IoIosArrowForward />
                                                                            {sliceString("Havells ENVIRO GTI 5500 TX/ 6600 TX/ 8800 TX/ 11000 TX")}</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/3"><IoIosArrowForward />
                                                                            {sliceString("SOFAR 1100TL-G3/ 1600TL-G3/ 2200TL-G3/ 2700TL-G3/ 3000TL-G3/ 3300TL-G3")}</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/4"><IoIosArrowForward />
                                                                            {sliceString("SOFAR 4KTLM-G3/ 4.6KTLM-G3/ 5KTLM-G3/ 6KTLM-G3")}</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/5"><IoIosArrowForward />
                                                                            {sliceString("SOFAR 6.6KTL-X/ 8.8KTL-X/ 11KTL-X/ 12KTL-X")}</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/6"><IoIosArrowForward />
                                                                            {sliceString("EVVO 1100TL-AV /1600TL-AV / 2200TL-AV / 3000TL-AV /3300TL-AV")}</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/7"><IoIosArrowForward />
                                                                            {sliceString("EVVO 15000TLG23P")}</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/8"><IoIosArrowForward />
                                                                            {sliceString("EVVO 20000TLG23P / 25000TLG23P / 30000TLG23P / 33000TLG23P")}</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/9"><IoIosArrowForward />
                                                                            {sliceString("EVVO 20000TLG23P / 25000TLG23P / 30000TLG23P / 33000TLG23P")}</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/10"><IoIosArrowForward />
                                                                            {sliceString("EVVO 3000TL3P / 4000TL3P / 5000TL3P / 6000TL3P / 8000TL3P / 10000TL3P / 12000TL3P")}</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/11"><IoIosArrowForward />
                                                                            {sliceString("EVVO 4000TL-G2 / 5000TL-G2 / 6000TL-G2")}</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/12"><IoIosArrowForward />
                                                                            {sliceString("Polycab Wire")}</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/13"><IoIosArrowForward />
                                                                            {sliceString("Havells Wire")}</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/14"><IoIosArrowForward />
                                                                            {sliceString("Mid Clamp")}</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/15"><IoIosArrowForward />
                                                                            {sliceString("J Bolt")}</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/16"><IoIosArrowForward />
                                                                            {sliceString("End Clamp")}</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/17"><IoIosArrowForward />
                                                                            {sliceString("Earthing Kit")}</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/18"><IoIosArrowForward />
                                                                            {sliceString("DCDB Box")}</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/19"><IoIosArrowForward />
                                                                            {sliceString("Cable Tie")}</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="/Allproduct/20"><IoIosArrowForward />
                                                                            {sliceString("ACDB Box")}</a>
                                                                    </li>
                                                                </ul>
                                                            </AccordionDetails>
                                                        </CustomAccordion>
                                                    </li>

                                                    <li className="mobileli">
                                                        <a href="/Services" className="menuBtn">
                                                            <MdEqualizer className='fa-icon' />
                                                            <span>Services</span>
                                                        </a>
                                                    </li>
                                                    <li className="mobileli">

                                                        <a href="/about" className="menuBtn">
                                                            <FaCircleInfo className='fa-icon' />
                                                            About Us
                                                        </a>
                                                    </li>
                                                    <li className="mobileli">

                                                        <a
                                                            onClick={handleClickOpen}
                                                            className="downalodMenu"
                                                        >
                                                            <FaCloudDownloadAlt className='fa-icon' />
                                                            Broucher
                                                        </a>
                                                    </li>
                                                    <li className="mobileli">
                                                        <div>
                                                            <CustomAccordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                                                <AccordionSummary
                                                                    expandIcon={<ExpandMoreIcon />}

                                                                >
                                                                    <GrGallery className='fa-icon' />
                                                                    Gallery
                                                                </AccordionSummary>
                                                                <AccordionDetails>
                                                                    <ul className="mobile-sub-menu">
                                                                        <li>
                                                                            <a href="/photos">Photos</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="/videos">Videos</a>
                                                                        </li>

                                                                    </ul>
                                                                </AccordionDetails>
                                                            </CustomAccordion>
                                                        </div>
                                                    </li>
                                                    <li className="mobileli">

                                                        <a href="/contact"><MdContactPhone className='fa-icon' />Contact Us</a>
                                                    </li>
                                                </ul>
                                            </div>{" "}
                                            {/* End Mobile Menu Nav */}
                                        </div>{" "}
                                        {/* End Mobile Menu Bottom */}
                                    </div>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div > {" "}
                {/* End Mobile Header Wrapper */}
            </div >
        </>
    )
}

export default Header
