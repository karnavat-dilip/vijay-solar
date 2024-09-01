import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Breadcrumbs from '../Breadcrumbs'
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

import { useParams } from 'react-router-dom';
import ReactImageMagnify from 'react-image-magnify';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { v4 as uuidv4 } from 'uuid';
import './ProductById.css'
function ProductById() {
    const { id } = useParams();
    const productId = parseInt(id);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        AOS.init()
    }, [])

    const productsData = {
        "panels": [
            {
                "id": 19,
                "type": "ACDB Box",
                "img": ACDBBOX,
                "description": "IP 67 Enclosure with Transparent cover",
                "features": [
                    "MCB or Fuse",
                  
                ],
                "specifications": [
                    "SPD",
                    "Wire polycabe or RR",
                  
                ],
                "other_info": [
                   ""
                ]
            },
            {
                "id": 18,
                "type": "Cable Tie",
                "img": CableTie,
                "description": "Brand Self Locking Stainless Steel Ball Lock Cable Ties",
                "features": [
                    "Provides a strong, durable method of bundling and fastening",
                    
                ],
                "specifications": [
                    "The ties are designed for use in application where strength, vibration, weathering, corrosion extremes are a factor.",
                  
                ],
                "other_info": [
                   ""
                ]
            },
            {
                "id": 17,
                "type": "DCDB Box",
                "img": DCDBBOX,
                "description": "IP 67 Enclosure with Transparent cover",
                "features": [
                    "MCB or Fuse",
                ],
                "specifications": [
                    "SPD",
                  
                ],
                "other_info": [
                    "Wire polycabe or RR",
                    
                ]
            },
            {
                "id": 16,
                "type": "Earthing Kit",
                "img": EarthingKit,
                "description": "3 Nos-Earthing Rod (14mm Dia, 1.0 mtr & 1.5 mtr Length,  Standard & 250 Micron Copper Coating)",
                "features": [
                    "1 Nos-LA",
                    "(1 mtr Length, 14 mm Dia)",
                   
                ],
                "specifications": [
                    "1 Set-Mounting Base & SS-304 Nut-Bolt Set",
                    
                ],
                "other_info": [
                    "1 Nos- 10kg & 15 kg BFC Bag",
                ]
            },
            {
                "id": 15,
                "type": "End Clamp",
                "img": EndClamp,
                "description": "Clamp : 30 mm , 35 mm , 40 mm",
                "features": [
                    ""
                ],
                "specifications": [
                    ""
                ],
                "other_info": [
                    ""
                ]
            },
            {
                "id": 14,
                "type": "J Bolt",
                "img": JBolt,
                "description": "SS 304 With Nut and washer",
                "features": [
                    ""
                ],
                "specifications": [
                    "J boltM6(40*40) , M6(60*40) , M8(40*40) , M8(60*40)"
                ],
                "other_info": [
                    ""
                ]
            },
            {
                "id": 13,
                "type": "Mid Clamp",
                "img": MidClamp,
                "description": "Material : Aluminium",
                "features": [
                    "Thickness : 3 mm",
                    
                ],
                "specifications": [
                    "Quantity Per Pack : 50 Piece",
                  
                ],
                "other_info": [
                    "Clamp : 30 mm , 35 mm , 40 mm",
                    
                ]
            },
            {
                "id": 12,
                "type": "Havells Wire",
                "img": cable1,
                "description": "Minimum Bending Radius: 8D Nominal Voltage (UO/U): 600/1100 V",
                "features": [
                    "Max. Operating Temperature: 85°C .",
                    "Flammability: IEC 60332-1",
                 
                ],
                "specifications": [
                    "Flame Retardant",
                   
                ],
                "other_info": [
                    "Smooth Surface with Enhanced Lubrication Properties",
                    "High Insulation Resistance",
                    "RoHS Compliant"
                ]
            },
            {
                "id": 11,
                "type": "Polycab Wire",
                "img": cable2,
                "description": "Minimum Bending Radius: 8D Nominal Voltage (UO/U): 600/1100 V",
                "features": [
                    "Max. Operating Temperature: 85°C .",
                    "Temperature Range: -15°C to +85°C . • Flame Resistant: ASTM 2863",
                
                ],
                "specifications": [
                    "Flammability: IEC 60332-1",
                    "High Abrasion Resistance",
                    
                ],
                "other_info": [
                    "Flame Retardant",
                    "Smooth Surface with Enhanced Lubrication Properties",
                    "High Insulation Resistance"
                ]
            },
            {
                "id": 10,
                "type": "EVVO 4000TL-G2 / 5000TL-G2 / 6000TL-G2",
                "img": evvo4,
               "description": "Three Phase Inverter Dual MPPT",
                "features": [
                    "Max 98.3% efficiency",
                   
                ],
                "specifications": [
                    "Power Limit Export Feature",
                    
                ],
                "other_info": [
                    "Interface Selection WiFi/RS485/GPRS",
                    "All in One, Flexible & Economical Solution",
              
                ]
            },
            {
                "id": 9,
                "type": "EVVO 3000TL3P / 4000TL3P / 5000TL3P / 6000TL3P / 8000TL3P / 10000TL3P / 12000TL3P",
                "img": evvo4,
                "description": "Three Phase Inverter Dual MPPT",
                "features": [
                    "Max 98.3% efficiency",
                   
                ],
                "specifications": [
                    "Power Limit Export Feature",
                    
                ],
                "other_info": [
                    "Interface Selection WiFi/RS485/GPRS",
                    "All in One, Flexible & Economical Solution",
              
                ]
            },
            {
                "id": 8,
                "type": "EVVO 20000TLG23P / 25000TLG23P / 30000TLG23P / 33000TLG23P",
                "img": evvo3,
                "description": "Three Phase Inverter Dual MPPT",
                "features": [
                    "Max 98.3% efficiency",
                  
                ],
                "specifications": [
                    "Outdoor IP65 Production Level",
                  
                ],
                "other_info": [
                    "Smart Control & Flexible Configuration",
                    "IV Curve Scanning Function",
                ]
            },
            {
                "id": 7,
                "type": "EVVO 15000TLG23P",
                "img": evvo2,
                "description": "Three Phase Inverter Dual MPPT",
                "features": [
                    "Max 98.3% efficiency",
                    
                ],
                "specifications": [
                    "Outdoor IP65 Production Level",
                  
                ],
                "other_info": [
                    "Smart Control & Flexible Configuration",
                    "IV Curve Scanning Function"
                ]
            },
            {
                "id": 6,
                "type": "EVVO 1100TL-AV /1600TL-AV / 2200TL-AV / 3000TL-AV /3300TL-AV",
                "img": evvo1,
                "description": "Single Phase Inverter Single MPPT",
                "features": [
                    "40% DC oversizing",
                    "IP65 ingress protection",

                ],
                "specifications": [
                    "Built – in Zero Export function",
                    "Suitable for motor ratings commonly from 5 HP to 500 HP or higher.",
                    "light weight, quick and easy to install",
                ],
                "other_info": [
                    "Smart monitoring, Wifi/Ethernet/GPRS",
                    "Max. efficiency up to 97.7%",
                ]
            },
            {
                "id": 5,
                "type": "SOFAR 6.6KTL-X/ 8.8KTL-X/ 11KTL-X/ 12KTL-X",
                "img": SOFAR2,
                "description": "High-yield Max 98.3% efficiency",
                "features": [
                    "Real-time precise MPPT algorithm for max harvest",

                ],
                "specifications": [
                    "Wide input voltage operation range from 160V to 960V",
                    "All in one. Flexible and economical system solution",
                ],
                "other_info": [
                    "Optimum selection for big PV plants, commercial buildings…",
                    "Low maintenance cost",
                    "High powered density"
                ]
            },
            {
                "id": 4,
                "type": "SOFAR 4KTLM-G3/ 4.6KTLM-G3/ 5KTLM-G3/ 6KTLM-G3",
                "img": SOFAR2,
                "description": "Built-in zero export function",
                "features": [
                    "Optional AFCI function",
                    "Compact design, light in weight",
                    "Natural cooling, no fans, low noise"
                ],
                "specifications": [
                    "Max. efficiency 98.4%",
                    "Two MPP trackers with 1.5*DC overload"
                ],
                "other_info": [
                    "Smart monitoring, remote firmware upgrade",
                ]
            },
            {
                "id": 3,
                "type": "SOFAR 1100TL-G3/ 1600TL-G3/ 2200TL-G3/ 2700TL-G3/ 3000TL-G3/ 3300TL-G3",
                "img": SOFAR1,
                "description": "Easy installation and maintenance due to “Plug & Play” connection",
                "features": [
                    "-High-yield Max 97.7% efficiency",
                    "Real-time precise MPPT algorithm for max harvest",
                    "Wide input voltage operation range",
                    "-All in one. Flexible and economical system solution"
                ],
                "specifications": [
                    "Free site selection due to IP65",
                    "Interface selection-Wi-Fi / RS485 /GPRS",
                    "-Low maintenance cost",
                    "Detachable cover for easy installation"
                ],
                "other_info": [
                    "Rust-free aluminum covers",
                    "Flexible monitoring solution",
                    "-Intelligent grid management"
                ]
            },
            {
                "id": 2,
                "type": "Havells ENVIRO GTI 5500 TX/ 6600 TX/ 8800 TX/ 11000 TX",
                "img": Havells2,
                "description": "-DC Switch Built in DC switch for solar DC disconnection",
                "features": [
                    "-BIS and IEC Certified IEC 62116, IEC 61727, IEC 61683, IEC 60068(1,2,14,30), IEC 62109-1/2, EN 61000-6-1,6-2,6-3,6-4 & BIS Certified",
                    "-LCD & LED Display 101.6 mm LCD display for checking generation data with LED for fault, alarm indication",
                ],
                "specifications": [
                    "Warranty : 10 Year Warranty",
                ],
                "other_info": [
                    "Inverter Capacity : 10 Kw , 8.0 Kw , 5.0/5.2 Kw , 6.0 Kw",
                ]
            },
            {
                "id": 1,
                "type": "Havells ENVIRO GTI 1100 NG/ 2200 NG/ 3000 NG/ 3300 NG/ 4000 D/ 5000 D",
                "img": Havells1,
                "description": "Warranty : 10 Year Standard Warranty",
                "features": [
                    "-BIS and IEC Certified IEC 62116, IEC 61727, IEC 61683, IEC 60068(1,2,14,30), IEC 62109-1/2, EN 61000-6-1,6-2,6-3,6-4 & BIS Certified",

                ],
                "specifications": [
                    "-Zero Export Built in zero export for residential application",

                ],
                "other_info": [
                    "Inverter Capacity : 1.1 Kw , 3.0 Kw , 2.2 Kw , 3.3 Kw , 4.2/4.6 Kw , 5.0/5.2 Kw",
                ]
            }
        ]
    }
    const products = [
        {
            id: uuidv4(),
            img: Havells1,
            title: 'Havells ENVIRO GTI 1100 NG/ 2200 NG/ 3000 NG/ 3300 NG/ 4000 D/ 5000 D',
            description: 'Built in zero export for residential application'
        },
        {
            id: uuidv4(),
            img: Havells2,
            title: 'Havells ENVIRO GTI 5500 TX/ 6600 TX/ 8800 TX/ 11000 TX',
            description: 'Built in DC switch for solar DC disconnection'
        },
        {
            id: uuidv4(),
            img: SOFAR1,
            title: 'SOFAR 1100TL-G3/ 1600TL-G3/ 2200TL-G3/ 2700TL-G3/ 3000TL-G3/ 3300TL-G3',
            description: 'Real-time precise MPPT algorithm for max harvest'
        },
        {
            id: uuidv4(),
            img: SOFAR2,
            title: 'SOFAR 4KTLM-G3/ 4.6KTLM-G3/ 5KTLM-G3/ 6KTLM-G3',
            description: 'Built-in zero export function'
        },
        {
            id: uuidv4(),
            img: SOFAR2,
            title: 'SOFAR 6.6KTL-X/ 8.8KTL-X/ 11KTL-X/ 12KTL-X',
            description: 'Real-time precise MPPT algorithm for max harvest'
        },
        {
            id: uuidv4(),
            img: evvo1,
            title: 'EVVO 1100TL-AV /1600TL-AV / 2200TL-AV / 3000TL-AV /3300TL-AV',
            description: 'Single Phase Inverter Single MPPT. 40% DC oversizing'
        },
        {
            id: uuidv4(),
            img: evvo2,
            title: 'EVVO 15000TLG23P',
            description: 'Three Phase Inverter Dual MPPT Max 98.3% efficiency'
        },
        {
            id: uuidv4(),
            img: evvo3,
            title: 'EVVO 20000TLG23P / 25000TLG23P / 30000TLG23P / 33000TLG23P',
            description: 'Three Phase Inverter Dual MPPT Max 98.3% efficiency'
        },
        {
            id: uuidv4(),
            img: evvo4,
            title: 'EVVO 3000TL3P / 4000TL3P / 5000TL3P / 6000TL3P / 8000TL3P / 10000TL3P / 12000TL3P',
            description: 'Power Limit Export Feature Interface Selection WiFi/RS485/GPRS'
        },
        {
            id: uuidv4(),
            img: evvo4,
            title: 'EVVO 4000TL-G2 / 5000TL-G2 / 6000TL-G2',
            description: 'Single Phase Inverter Dual MPPT 2 MPPT high precision string detection'
        },
        {
            id: uuidv4(),
            img: cable2,
            title: 'Polycab Wire',
            description: 'HR FR LSH LF – Heat Resistance Free'
        },
        {
            id: uuidv4(),
            img: cable1,
            title: 'Havells Wire',
            description: 'Minimum Bending Radius: 8D Nominal Voltage (UO/U): 600/1100 V'
        },
        {
            id: uuidv4(),
            img: MidClamp,
            title: 'Mid Clamp',
            description: 'Material : Aluminium'
        },
        {
            id: uuidv4(),
            img: JBolt,
            title: 'J Bolt',
            description: 'SS 304 With Nut and washer'
        },
        {
            id: uuidv4(),
            img: EndClamp,
            title: 'End Clamp',
            description: 'description not found'
        },
        {
            id: uuidv4(),
            img: EarthingKit,
            title: 'Earthing Kit',
            description: '3 Nos-Earthing Rod (14mm Dia, 1.0 mtr & 1.5 mtr Length,  Standard & 250 Micron Copper Coating)'
        },
        {
            id: uuidv4(),
            img: DCDBBOX,
            title: 'DCDB Box',
            description: 'IP 67 Enclosure with Transparent cover'
        },
        {
            id: uuidv4(),
            img: CableTie,
            title: 'Cable Tie',
            description: 'The ties are designed for use in application where strength, vibration, weathering, corrosion extremes are a factor.'
        },
        {
            id: uuidv4(),
            img: ACDBBOX,
            title: 'ACDB Box',
            description: 'IP 67 Enclosure with Transparent cover'
        }
    ]

    useEffect(() => {

        const foundProduct = productsData.panels.find(item => item.id === productId);
        setProduct(foundProduct);
    }, [productId]);


    const { type, img, description, features, specifications, other_info } = product || {};

    return (
        <>
            <Breadcrumbs title='Product Details Default' />
            <section className='m-top53px'>
                <div>
                    <div>
                        {product ? (
                            <div>
                                <div className='img-magnify container'>
                                    <div className='border1px'>
                                        <ReactImageMagnify {...{
                                            smallImage: {
                                                alt: 'Wristwatch by Ted Baker London',
                                                isFluidWidth: true,
                                                src: img,

                                            },
                                            largeImage: {
                                                src: img,
                                                width: 800,
                                                height: 800
                                            },
                                            enlargedImagePosition: 'over',
                                            lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' }

                                        }} />
                                    </div>
                                    <div className='description' data-aos="fade-up">
                                        <h2>{type}</h2>
                                        <h3>Description</h3>
                                        <p>{description}</p>
                                        <h3>Features</h3>
                                        <ul>
                                            {features.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className='specification'>
                                    <div className='otherinfo' data-aos="fade-up">
                                        <h3>Specifications</h3>
                                        <ul>
                                            {specifications.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className='otherinfo' data-aos="fade-up">
                                        <h3>Other Info</h3>
                                        <ul>
                                            {other_info.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <p>Product not found</p>
                        )}
                    </div>
                </div>
            </section>
            <section className='m-top53px' data-aos="fade-up">
                <div className='container'>
                    <div className='h1-container'><h1>Related Products</h1></div>
                    <div>
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
                            modules={[Autoplay, Navigation]}

                        >
                            {
                                products?.map((product, index) => {
                                    return (
                                        <SwiperSlide key={product.id} className='related-product'>
                                            <a key={product.id} href={`/Allproduct/${index + 1}`}>
                                                <img src={product.img} width='100' />
                                                <h4>{product.title}</h4>
                                                <p>{`${product.description.slice(0, 48)}...`}</p>
                                                <ul>
                                                    <li><a >Read More</a></li>
                                                </ul>
                                            </a>
                                        </SwiperSlide>
                                    )
                                })

                            }
                        </Swiper>
                    </div>

                </div>
            </section>
            <section className='m-top53px'>

            </section>
        </>
    )
}

export default ProductById
