import './TopCollection.css'
import {CgArrowsExchangeAltV} from 'react-icons/cg';
import Image from '../../assets/1125.webp'
import Image2 from '../../assets/bayc.jpg'
import Image3 from '../../assets/bayc2.jpg'
import Image4 from '../../assets/crown.png'



const CollectionData = (props) => {
    return (
        <div className="collection__data">
            {/* 1 */}
            <div className='number'>
                {/* {props.number} */}
                <p>1</p>
            </div>
            {/* 2 */}
            <div className='collection__image'>
                {/* <img src={props.image} alt="someImg" /> */}
                <img src={Image2} alt="someImg" />
            </div>
            {/* 3 */}
            <div className='top__collection__data'>
                <div className='collection__data__upper'>
                    {/* <h4>{props.title}</h4> */}
                    <h4>Trippin Ape</h4>
                    {/* <h4>{props.percentage}</h4> */}
                    <h4>+64.30%</h4>
                </div>
                <div className='collection__data__lower'>
                    <div className='side__left'>
                        <small>Floor Price</small>
                        <CgArrowsExchangeAltV />
                        {/* <small>{props.rateFraction}</small> */}
                        <small>34.2</small>
                    </div>
                    <div className='side__right'>
                        <CgArrowsExchangeAltV />
                        {/* <small>{props.rate}</small> */}
                        <small>2382.32</small>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CollectionData;