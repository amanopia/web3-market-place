import './TopCollection.css'
// import {CgArrowsExchangeAltV} from 'react-icons/cg';
import Image from '../../assets/1125.webp'
import Image2 from '../../assets/bayc.jpg'
import Image3 from '../../assets/bayc2.jpg'
import Image4 from '../../assets/crown.png'



const CollectionData = (props) => {
    return (
        <div className="collection__data">
            <div className='number'>
                {props.number}
            </div>
            <div className='collection__image'>
                <img src={props.image} alt="someImg" />
            </div>
            <div className='top__collection__data'>
                
            </div>
        </div>
    )
}

export default CollectionData;