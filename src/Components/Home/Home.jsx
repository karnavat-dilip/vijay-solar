import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Banner1 from '../../Assets/Clean_Energy_03_1350x758-1.mp4'
import liquifyvector from '../../Assets/33_bg_1.gif'
import round1 from '../../Assets/round.png'
import 'animate.css'
import Banner2 from '../../Assets/Banner2.jpg'
import profile_img from '../../Assets/img-35-1.jpeg'
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
import Domestic from '../../Assets/services_agri_icon.png'
import Mining from '../../Assets/services_mining_icon.png'
import Industry from '../../Assets/services_industry_icon.png'
import FireFighting from '../../Assets/services_fire_icon.png'
import Construction from '../../Assets/services_construction_icon.png'
import Residential from '../../Assets/services_residential_icon.png'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import './Home.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { v4 as uuidv4 } from 'uuid';
import { Accordion, styled } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionActions from '@mui/material/AccordionActions';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import logo1 from '../../Assets/logo1.jpg'
import testy1 from '../../Assets/testi1.jpg'
import testy2 from '../../Assets/testi2.jpg'
import testy3 from '../../Assets/testi3.jpg'
import logo3 from '../../Assets/logo3.jpg'
import logo4 from '../../Assets/logo4.jpg'
import logo5 from '../../Assets/logo5.jpg'
import logo7 from '../../Assets/logo7.jpg'
import logo8 from '../../Assets/logo8.jpg'
import logo9 from '../../Assets/logo9.jpg'
import logo10 from '../../Assets/logo10.jpg'
import logo11 from '../../Assets/logo11.jpg'
import logo12 from '../../Assets/logo12.jpg'
import logo13 from '../../Assets/logo13.jpg'


function AboutUs() {
  return (
    <div>
      <p>Vijay Solar Energies Limited ("WEL”) was founded in 1990. It is India’s largest manufacturer of solar PV modules with the largest aggregate installed capacity of 12 GW, as of June 30, 2023 (Source: CRISIL Report).
        <a href='/about' style={{ color: '#01a875' }}>Read more...</a></p>
    </div>
  );
}

function OurStrength() {
  return (
    <div>
      <p>The company certified with ISO 9001-2015, manufacturing more than 130 models with in house most advanced, highly erudite manufacturing unit having capacity of 100,000 units annually with more than 100 dedicated manpower. We have our distribution and supply network in entire India. <a href='/about' style={{ color: '#01a875' }}>Read more...</a></p>
    </div>
  );
}

function OurService() {
  return (
    <div>
      <p>Palanpur Solar has been a life-enriching solution for many decades and we are constantly striving to provide possible and quality solutions that build trust with millions of people.<a href='/about' style={{ color: '#01a875' }}>Read more...</a></p>
    </div>
  );
}


function Home() {
  const [counteron, setcounteron] = useState(false)
  const [content, setContent] = useState(AboutUs);
  const [activeLink, setActiveLink] = useState('about');

  const handleNavigation = (contentComponent, linkName) => {
    setContent(contentComponent);
    setActiveLink(linkName)
  };

  useEffect(() => {
    AOS.init()
  }, [])

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

  const productapplication = [
    {
      id: uuidv4(),
      img: Domestic,
      Appname: 'Domestic',
      moreinfo: 'Utility pumps are the most commonly referred residential pumps that serve numerous household needs. Keeping this in mind, we have well placed ourselves ahead of our.'
    },
    {
      id: uuidv4(),
      img: Mining,
      Appname: 'Mining',
      moreinfo: 'The mining industry which is referred as the world’s toughest industrialized working environments needs a bit of revamping'
    },
    {
      id: uuidv4(),
      img: Industry,
      Appname: 'Industry',
      moreinfo: 'Industries seem to be smaller when put into comparison with the amount of diverse and distinctive pumps that Goodluck is equipped with'
    },
    {
      id: uuidv4(),
      img: FireFighting,
      Appname: 'Fire Fighting & Dewatering',
      moreinfo: 'The most critical component of a Fire Sprinkler system, i.e the fire pump needs due attention, and that’s why we at Goodluck take immense care in designing..'
    },
    {
      id: uuidv4(),
      img: Construction,
      Appname: 'Construction & Building',
      moreinfo: 'Irrespective of the scale of building services Goodluck offers wide varieties of pumps, valves, and systems that perfectly match your building and construction needs.'
    },
    {
      id: uuidv4(),
      img: Residential,
      Appname: 'Residential',
      moreinfo: 'Utility pumps are the most commonly referred residential pumps that serve numerous household needs. Keeping this in mind, we have well placed ourselves ahead of our.'
    },

  ]

  return (
    <>
      <div className='swiper-container'>
        <section className='slide'>
          <div>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: false,
              }}
              // navigation={true}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
            >
              <img src={liquifyvector} alt='image not found' id='img1' />
              <SwiperSlide>


                <div className='child_slider'>
                  <h1 className='animate__animated animate__backInLeft animate__infinite' style={{ animationDuration: '5s', animationDelay: '1s' }}>Havells ENVIRO GTI 1100 NG/ 2200 NG/ 3000 NG/ 3300 NG/ 4000 D/ 5000 D</h1>
                  <div className='inner-img'>
                    <img src={round1} className='product-img1 animate__animated animate__backInRight animate__infinite' style={{ animationDuration: '5s', animationDelay: '1s' }} />
                    <img src={Havells1} className='product-img animate__animated animate__backInUp animate__infinite' style={{ animationDuration: '5s', animationDelay: '1s' }} />
                  </div>
                </div>

              </SwiperSlide>
              <SwiperSlide>

                {/* <img src={liquifyvector} id='img1' /> */}
                <div className='child_slider'>
                  <div className='inner-img'>
                    <img src={round1} className='product-img1 animate__animated animate__backInLeft animate__infinite' style={{ animationDuration: '5s', animationDelay: '1s' }} />
                    <img src={SOFAR1} className='product-img animate__animated animate__backInUp animate__infinite' style={{ animationDuration: '5s', animationDelay: '1s' }} />
                  </div>
                  <h1 className='animate__animated animate__backInRight animate__infinite' style={{ animationDuration: '5s', animationDelay: '1s' }}>SOFAR 1100TL-G3/ 1600TL-G3/ 2200TL-G3/ 2700TL-G3/ 3000TL-G3/ 3300TL-G3</h1>
                </div>

              </SwiperSlide>
              <SwiperSlide>

                {/* <img src={liquifyvector} id='img1' /> */}
                <div className='child_slider'>
                  <h1 className='animate__animated animate__backInLeft animate__infinite' style={{ animationDuration: '5s', animationDelay: '1s' }}>EVVO 1100TL-AV /1600TL-AV / 2200TL-AV / 3000TL-AV /3300TL-AV</h1>
                  <div className='inner-img'>
                    <img src={round1} className='product-img1 animate__animated animate__backInRight animate__infinite' style={{ animationDuration: '5s', animationDelay: '1s' }} />
                    <img src={evvo1} className='product-img animate__animated animate__backInUp animate__infinite' style={{ animationDuration: '5s', animationDelay: '1s' }} />
                  </div>
                </div>

              </SwiperSlide>
              <SwiperSlide>

                {/* <img src={liquifyvector} id='img1' /> */}
                <div className='child_slider'>
                  <div className='inner-img'>
                    <img src={round1} className='product-img1 animate__animated animate__backInLeft animate__infinite' style={{ animationDuration: '5s', animationDelay: '1s' }} />
                    <img src={cable2} className='product-img animate__animated animate__backInUp animate__infinite' style={{ animationDuration: '5s', animationDelay: '1s' }} />
                  </div>
                  <h1 className='animate__animated animate__backInRight animate__infinite' style={{ animationDuration: '5s', animationDelay: '1s' }}>Polycab Wire</h1>
                </div>

              </SwiperSlide>
              <SwiperSlide>

                {/* <img src={liquifyvector} id='img1' /> */}
                <div className='child_slider'>
                  <h1 className='animate__animated animate__backInLeft animate__infinite' style={{ animationDuration: '5s', animationDelay: '1s' }}>Havells Wire</h1>
                  <div className='inner-img'>
                    <img src={round1} className='product-img1 animate__animated animate__backInRight animate__infinite' style={{ animationDuration: '5s', animationDelay: '1s' }} />
                    <img src={cable1} className='product-img animate__animated animate__backInUp animate__infinite' style={{ animationDuration: '5s', animationDelay: '1s' }} />
                  </div>
                </div>

              </SwiperSlide>
              <SwiperSlide>

                {/* <img src={liquifyvector} id='img1' /> */}
                <div className='child_slider'>
                  <div className='inner-img'>
                    <img src={round1} className='product-img1 animate__animated animate__backInLeft animate__infinite' style={{ animationDuration: '5s', animationDelay: '1s' }} />
                    <img src={EarthingKit} className='product-img animate__animated animate__backInUp animate__infinite' style={{ animationDuration: '5s', animationDelay: '1s' }} />
                  </div>
                  <h1 className='animate__animated animate__backInRight animate__infinite' style={{ animationDuration: '5s', animationDelay: '1s' }}>Earthing Kit</h1>
                </div>

              </SwiperSlide>
            </Swiper>
          </div>
        </section>
        <section data-aos="fade-up">
          <div className='container'>
            <div className='h1-container'>
              <h1>Welcome to Vijay Solar Energy</h1>
            </div>
            <div className='intro'>
              <div className='d-flex'>
                <div>
                  <h4>Introduction</h4>
                  <p>At Vijay Solar Energy, we’re dedicated to harnessing the power of the sun to drive a sustainable future. With a commitment to innovation and excellence, we provide cutting-edge solar energy solutions tailored to meet the diverse needs of our clients. Our mission is to deliver reliable, efficient, and environmentally friendly solar systems that not only reduce energy costs but also contribute to a cleaner planet.
</p>
                  <h4>Join Us in Shaping a Brighter Tomorrow

                  </h4>
                  <p> Explore the benefits of solar energy with Vijay Solar Energy and take a step towards a more sustainable and cost-effective energy solution. Together, we can make a difference—one solar panel at a time.
                  </p>
                </div>
                <div>
                  <img src={profile_img} id='profile-img' />
                </div>
              </div>
              <div>
                <h4>Technology Innovations
                </h4>
                <p>At Vijay Solar Energy, we’re at the forefront of solar technology, constantly pushing the boundaries to deliver the most advanced and efficient solar solutions available. Our commitment to innovation ensures that our clients benefit from cutting-edge technology that maximizes energy production and minimizes costs.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section data-aos="fade-up">
          <div className='container'>
            <div className='h1-container'><h1>Product Category</h1></div>
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
                        <a href={`/Allproduct/${index + 1}`}>
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
        </section >
        <section data-aos="fade-up">
          <div className='container'>
            <div className='count-container'>
              <div className='totalno'>

                {<CountUp start={0} end={800} duration={2} delay={0} />}+

                <h4>Happay Clients</h4>
              </div>
              <div className='totalno'>

                {<CountUp start={0} end={900} duration={5} delay={0} />}+

                <h4>Total Projects</h4>
              </div>
              <div className='totalno'>

                {<CountUp start={0} end={35} duration={5} delay={0} />}+

                <h4>Total Product</h4>
              </div>
              <div className='totalno'>

                {<CountUp start={0} end={10} duration={5} delay={0} />}+

                <h4>Total Achivements</h4>
              </div>
            </div>
          </div>
        </section>
        <section data-aos="fade-up">
          <div className='container'>
            <div className='nav-container'>
              <div className='b-btm'>
                <h1>Who we are?</h1>
              </div>
              <div>
                <nav>
                  <ul>
                    <li className={activeLink === 'about' ? 'activelink' : ''} onClick={() => handleNavigation(AboutUs, 'about')}>About Us</li>
                    <li className={activeLink === 'strength' ? 'activelink' : ''} onClick={() => handleNavigation(OurStrength, 'strength')}>OurStrength</li>
                    <li className={activeLink === 'service' ? 'activelink' : ''} onClick={() => handleNavigation(OurService, 'service')}>Our Service</li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className='text-indent'>

              {content && content}

            </div>
            <div>
              <video
                src={Banner1}
                style={{ width: '100%' }}
                
                autoPlay
                muted
                playsInline
              />
            </div>
          </div>
        </section>
        
        <section data-aos="fade-up">
          <div className='container'>
            <div className='h1-container'><h1>Our Client</h1></div>
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
                <SwiperSlide className='swiper-child h-209'>
                  <img src={logo1} width='100' height='100' />
                </SwiperSlide>
                <SwiperSlide className='swiper-child h-209'>
                  <img src={logo3} width='100' height='100' />
                </SwiperSlide>
                <SwiperSlide className='swiper-child h-209'>
                  <img src={logo4} width='100' height='100' />
                </SwiperSlide>
                <SwiperSlide className='swiper-child h-209'>
                  <img src={logo5} width='100' height='100' />
                </SwiperSlide>
                <SwiperSlide className='swiper-child h-209'>
                  <img src={logo7} width='100' height='100' />
                </SwiperSlide>
                <SwiperSlide className='swiper-child h-209'>
                  <img src={logo8} width='100' height='100' />
                </SwiperSlide>
                <SwiperSlide className='swiper-child h-209'>
                  <img src={logo9} width='100' height='100' />
                </SwiperSlide>
                <SwiperSlide className='swiper-child h-209'>
                  <img src={logo10} width='100' height='100' />
                </SwiperSlide>
                <SwiperSlide className='swiper-child h-209'>
                  <img src={logo11} width='100' height='100' />
                </SwiperSlide>
                <SwiperSlide className='swiper-child h-209'>
                  <img src={logo12} width='100' height='100' />
                </SwiperSlide>
                <SwiperSlide className='swiper-child h-209'>
                  <img src={logo13} width='100' height='100' />
                </SwiperSlide>
                <SwiperSlide className='swiper-child h-209'>
                  <img src={testy1} width='100' height='100' />
                </SwiperSlide>
                <SwiperSlide className='swiper-child h-209'>
                  <img src={testy2} width='100' height='100' />
                </SwiperSlide>
                <SwiperSlide className='swiper-child h-209'>
                  <img src={testy3} width='100' height='100' />
                </SwiperSlide>
              </Swiper>
            </div>

          </div>
        </section >
        <section>

        </section>
      </div >
    </>
  )
}

export default Home
