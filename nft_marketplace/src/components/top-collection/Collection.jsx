import './collection.css'
import {FaChevronDown} from 'react-icons/fa';
import CollectionData from '../Top-collection-cards/TopCollection';

import Image from '../../assets/coolApe.gif'
import Image2 from '../../assets/doodle.gif'
import Image3 from '../../assets/giphy.gif'
import Image4 from '../../assets/Kanye.gif'
import Image5 from '../../assets/McGregor.gif'
import Image6 from '../../assets/leo.png'
import Image7 from '../../assets/DonJetha.jpg'
import Image8 from '../../assets/leoL.gif';
import Image9 from '../../assets/GS.gif';
import Image10 from '../../assets/robo.gif';
import Image11 from '../../assets/boring.gif';
import Image12 from '../../assets/joint.gif';


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
                <CollectionData number="1" source={Image} heading="Eminem" percentage="+67.80%" num="0.32" result="378.3" state="up"/>
                <CollectionData number="2" source={Image2} heading="¡Faces!" percentage="-50.02%" num="0.12" result="184.6" state="down"/>
                <CollectionData number="3" source={Image3} heading="Peek a Boo" percentage="+34.12%" num="0.47" result="275.7" state="up"/>
                <CollectionData number="4" source={Image4} heading="Mr.West" percentage="-21.22%" num="0.76" result="983.3" state="down"/>
                <CollectionData number="5" source={Image12} heading="Trippin" percentage="+34.77%" num="0.27" result="523.9" state="up"/>
                <CollectionData number="6" source={Image6} heading="EmotiLeo" percentage="-1.12%" num="0.96" result="321.1" state="down"/>
                <CollectionData number="7" source={Image7} heading="Jethiya" percentage="+102.11%" num="0.45" result="689.4" state="up"/>
                <CollectionData number="8" source={Image8} heading="BitLeo" percentage="+1.20%" num="0.89" result="363.7" state="up"/>
                <CollectionData number="9" source={Image9} heading="GasSquad" percentage="-41.01%" num="0.35" result="440.3" state="down"/>
                <CollectionData number="10" source={Image10} heading="Mr.Bobbles" percentage="-72.83%" num="0.12" result="765.9" state="down"/>
                <CollectionData number="11" source={Image11} heading="Boring Co." percentage="+18.39%" num="0.77" result="206.7" state="up"/>
                <CollectionData number="12" source={Image5} heading="McGregor" percentage="-54.64%" num="0.95" result="584.6" state="down"/>    
                {/* https://app.airnfts.com/collections             */}
                {/* Promoting them cause I am using their gifs*/}
            </div>

            
        </section>
    )
}

export default Collection;