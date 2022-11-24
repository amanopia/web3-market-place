import './collection.css'
import {FaChevronDown} from 'react-icons/fa';
import CollectionData from '../Top-collection-cards/TopCollection';

import Image from '../../assets/1125.webp'
import Image2 from '../../assets/bayc.jpg'
import Image3 from '../../assets/bayc2.jpg'
import Image4 from '../../assets/crown.png'

const Collection = () => {
    return (
        <section className="container  collection__container" id="collection">
            <div className='collection__header'>
                <div>
                    <h2>Our Top Collection in <span className="gradient">24 Hours</span></h2>
                    <FaChevronDown className='arrow__gradient'/>
                </div>
                <a href="#asda">View Ranking</a>
            </div>
            <div className='small__cards__container'>
                <CollectionData number="1" source={Image} heading="Trippin" percentage="67.80%" num="0.32" result="363.3"/>
                
            </div>

            
        </section>
    )
}

export default Collection;