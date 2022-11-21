import './collection.css'
import {FaChevronDown} from 'react-icons/fa';

const Collection = () => {
    return (
        <section className="container  collection__container" id="collection">
            <div className='collection__header'>
                <div>
                    <h2>Our Top Collection in <span className="gradient">24 Hours</span></h2>
                    <FaChevronDown className='arrow__gradient'/>
                </div>
                <p>View Ranking</p>
            </div>
            
        </section>
    )
}

export default Collection;