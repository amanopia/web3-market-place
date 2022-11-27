import './checkCollectionTop.css';
import {FaEthereum} from 'react-icons/fa';

const CheckCollectioTop = (props) => {
  return (
    <div className='collection__top'>
        {/* Item 1 */}
        <div>
            <h4>{props.number}</h4>
        </div>
        {/* Item 2 */}
        <img src={props.image} />
        {/* Item 3 */}
        <div className='text__data'>
            <h5>{props.heading}</h5>
            <div className='price__dat'>
                <FaEthereum />
                <small>{props.price}</small>
            </div>
        </div>
        {/* Item 4 */}
        <h3 className={props.state}>{props.percentage}</h3>
    </div>
  )
}

export default CheckCollectioTop