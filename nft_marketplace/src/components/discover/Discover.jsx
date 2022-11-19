import {BiCategory} from 'react-icons/bi';
import {MdOutlineCollectionsBookmark} from 'react-icons/md';
import {BiDollarCircle} from 'react-icons/bi';
import {BsFilter} from 'react-icons/bs';

import TinyTags from '../tiny-tags/TinyTags';

import './discover.css';

const Discover = () => {
    return (
        <section className="container discover__container" id="discover">
            <h2>Discover</h2>
            {/* TAG CONTAINER */}
            <div class="tag__container">
                <div className='tag__container__left'>
                    <TinyTags className="tinyTags" icon={<BiCategory />} description="Category" />
                    <TinyTags className="tinyTags" icon={<MdOutlineCollectionsBookmark />} description="Collection" />
                    <TinyTags className="tinyTags" icon={<BiDollarCircle />} description="Price Range" />
                </div>
                <div className="tag__container__right">
                    <TinyTags className="tinyTags" icon={<BsFilter />} description="Filter & Sort" />
                </div>
                {/* TINY CARDS */}
            </div>
            
            
        </section>
    )
}

export default Discover;