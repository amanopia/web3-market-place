import './TopCollection.css'
import {CgArrowsExchangeAltV} from 'react-icons/cg';




const CollectionData = (props) => {
    return (
        <div className='collection__data'>
            {/* Number */}
            <div className='number'>
                <p>{props.number}</p>
            </div>
            {/* Image */}
            <div className='collection__image'>
                <img src={props.source} alt="img"/>
            </div>
            {/* Data */}
            <div className='data'>
                {/* Data row name */}
                <div className='upper'>
                    <h4>{props.heading}</h4>
                    <h4>{props.percentage}</h4>
                </div>
                {/* Data row price*/}
                <div className='lower'>
                    <div className='floor__price__data'>
                        <small>Floor Price: </small>
                        <CgArrowsExchangeAltV className='icon'/>
                        <small>{props.num}</small>
                    </div>
                    <div className='result__data'>
                        <CgArrowsExchangeAltV className='icon'/>
                        <small>{props.result}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollectionData;