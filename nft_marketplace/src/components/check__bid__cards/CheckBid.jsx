
import './checkBid.css';
import {FaEthereum} from 'react-icons/fa';

import Image1 from '../../assets/palette1.jpg';
import Image2 from '../../assets/palette2.jpg';
import Image4 from '../../assets/palette4.jpg';
import Image3 from '../../assets/palette3.jpg';


const CheckBid = (props) => {
  return (
    <div className='check__bid'>
        {/* Item 1 */}
        <img src={props.image} alt="something"/>
        {/* Item 2 */}
        <div className='data__block__parent '>
            {/* Item 1 */}
            <h3>{props.title}</h3>
            {/* Item 2 */}
            <div className='data__block'>
                <img src={props.person} alt="person" />
                <button>
                    <FaEthereum />
                    <p>0.25 ETH</p>
                </button>
                <p>1 of 8</p>
            </div>
            {/* Item 3 */}
            <button className='btn check__bid__btn'>Place a bid</button>
        </div>
    </div>
  )
}

export default CheckBid