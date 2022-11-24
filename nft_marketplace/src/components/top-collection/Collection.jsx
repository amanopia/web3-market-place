import './collection.css'
import {FaChevronDown} from 'react-icons/fa';
import CollectionData from '../Top-collection-cards/TopCollection';
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
            <div className='collection__data'>
                <CollectionData />
                <CollectionData />
                <CollectionData />
                <CollectionData />
                <CollectionData />
                <CollectionData />
                <CollectionData />
                <CollectionData />
                <CollectionData />
            </div>
            
        </section>
    )
}

export default Collection;