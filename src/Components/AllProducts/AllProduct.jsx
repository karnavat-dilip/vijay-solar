import React, { useEffect } from 'react'
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
import gelvenaiz from '../../Assets/Assessory/gelvenaiz-pipe.jpg'
import cable1 from '../../Assets/cable/cable1.jpg'
import cable2 from '../../Assets/cable/cable2.jpg'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { v4 as uuidv4 } from 'uuid';
import './AllProducts.css'
function AllProduct() {

  useEffect(() => {
    AOS.init()
  }, [])

  const products = [
    {
        id: uuidv4(),
        img: Havells1,
        title: 'Havells ENVIRO GTI 1100 NG/ 2200 NG/ 3000 NG/ 3300 NG/ 4000 D/ 5000 D',
        description:'Built in zero export for residential application'
    },
    {
        id: uuidv4(),
        img: Havells2,
        title: 'Havells ENVIRO GTI 5500 TX/ 6600 TX/ 8800 TX/ 11000 TX',
        description:'Built in DC switch for solar DC disconnection'
    },
    {
        id: uuidv4(),
        img: SOFAR1,
        title: 'SOFAR 1100TL-G3/ 1600TL-G3/ 2200TL-G3/ 2700TL-G3/ 3000TL-G3/ 3300TL-G3',
        description:'Real-time precise MPPT algorithm for max harvest'
    },
    {
        id: uuidv4(),
        img: SOFAR2,
        title: 'SOFAR 4KTLM-G3/ 4.6KTLM-G3/ 5KTLM-G3/ 6KTLM-G3',
        description:'Built-in zero export function'
    },
    {
        id: uuidv4(),
        img: SOFAR2,
        title: 'SOFAR 6.6KTL-X/ 8.8KTL-X/ 11KTL-X/ 12KTL-X',
        description:'Real-time precise MPPT algorithm for max harvest'
    },
    {
        id: uuidv4(),
        img: evvo1,
        title: 'EVVO 1100TL-AV /1600TL-AV / 2200TL-AV / 3000TL-AV /3300TL-AV',
        description:'Single Phase Inverter Single MPPT. 40% DC oversizing'
    },
    {
        id: uuidv4(),
        img: evvo2,
        title: 'EVVO 15000TLG23P',
        description:'Three Phase Inverter Dual MPPT Max 98.3% efficiency'
    },
    {
        id: uuidv4(),
        img: evvo3,
        title: 'EVVO 20000TLG23P / 25000TLG23P / 30000TLG23P / 33000TLG23P',
        description:'Three Phase Inverter Dual MPPT Max 98.3% efficiency'
    },
    {
        id: uuidv4(),
        img: evvo4,
        title: 'EVVO 3000TL3P / 4000TL3P / 5000TL3P / 6000TL3P / 8000TL3P / 10000TL3P / 12000TL3P',
        description:'Power Limit Export Feature Interface Selection WiFi/RS485/GPRS'
    },
    {
        id: uuidv4(),
        img: evvo4,
        title: 'EVVO 4000TL-G2 / 5000TL-G2 / 6000TL-G2',
        description:'Single Phase Inverter Dual MPPT 2 MPPT high precision string detection'
    },
    {
        id: uuidv4(),
        img: cable2,
        title: 'Polycab Wire',
        description:'HR FR LSH LF – Heat Resistance Free'
    },
    {
        id: uuidv4(),
        img: cable1,
        title: 'Havells Wire',
        description:'Minimum Bending Radius: 8D Nominal Voltage (UO/U): 600/1100 V'
    },
    {
        id: uuidv4(),
        img: MidClamp,
        title: 'Mid Clamp',
        description:'Material : Aluminium'
    },
    {
        id: uuidv4(),
        img: JBolt,
        title: 'J Bolt',
        description:'SS 304 With Nut and washer'
    },
    {
        id: uuidv4(),
        img: EndClamp,
        title: 'End Clamp',
        description:'description not found'
    },
    {
        id: uuidv4(),
        img: EarthingKit,
        title: 'Earthing Kit',
        description:'3 Nos-Earthing Rod (14mm Dia, 1.0 mtr & 1.5 mtr Length,  Standard & 250 Micron Copper Coating)'
    },
    {
        id: uuidv4(),
        img: DCDBBOX,
        title: 'DCDB Box',
        description:'IP 67 Enclosure with Transparent cover'
    },
    {
        id: uuidv4(),
        img: CableTie,
        title: 'Cable Tie',
        description:'The ties are designed for use in application where strength, vibration, weathering, corrosion extremes are a factor.'
    },
    {
        id: uuidv4(),
        img: ACDBBOX,
        title: 'ACDB Box',
        description:'IP 67 Enclosure with Transparent cover'
    },
    {
      id: uuidv4(),
      img: gelvenaiz,
      title: 'gelvenaiz pipe',
      description:'hot deep gi 80 micron'
  }
]
  return (
    <div>
      <Breadcrumbs title='All Product'/>
      <section className='m-top53px' data-aos="fade-up">
        <div className='container'>
          <div className='grid-container'>
                {
                  products?.map((product,index)=>{
                        return(
                          <a key={product.id} className='product-child' href={`/Allproduct/${index+1}`}>
                            <h4>{product.title}</h4>
                            <img src={product.img} width='100'/>
                            <h3>Description</h3>
                            <p>{`${product.description.slice(0,58)}...`}</p>
                            <ul>
                              <li><a >Read More</a></li>
                            </ul>
                          </a>
                        )
                  })
                }
          </div>
        </div>
      </section>
      <section className='m-top53px'>

      </section>
    </div>
  )
}

export default AllProduct