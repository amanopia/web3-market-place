// TAG ICONS
import {BiCategory} from 'react-icons/bi';
import {MdOutlineCollectionsBookmark} from 'react-icons/md';
import {BiDollarCircle} from 'react-icons/bi';
import {BsFilter} from 'react-icons/bs';

// IMAGES FOR CARDS
import Image1 from '../../assets/8machine-_-uT4XkN39vcw-unsplash.jpg'
import Image2 from '../../assets/8machine-_-ENdGpL1TcT0-unsplash.jpg'
import Image3 from '../../assets/8machine-_-fnQyAwmvXM8-unsplash.jpg'
import Image4 from '../../assets/8machine-_-GVAYgLlpeZ8-unsplash.jpg'
import Image5 from '../../assets/rohit-choudhari-S6KP_UX2O9s-unsplash.jpg'
import Image6 from '../../assets/8machine-_-wIuF0-I6H_Y-unsplash.jpg'
import Image7 from '../../assets/simon-lee-hbFKxsIqclc-unsplash.jpg'
import Image8 from '../../assets/simon-lee-IEgvy4o3byM-unsplash.jpg'
import Image9 from '../../assets/pawel-czerwinski-GT2I5UgV218-unsplash.jpg'
import Image10 from '../../assets/pawel-czerwinski-RPMcxbm2zi4-unsplash.jpg'
import Image11 from '../../assets/dim-gunger-3emffQOvHxA-unsplash.jpg'
import Image12 from '../../assets/alexander-shatov-DHl49oyrn7Y-unsplash.jpg'


import TinyTags from '../tiny-tags/TinyTags';
import CardSmaller from '../cards-smaller/CardSmaller';

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
            </div>
            {/* TINY CARDS */}
            <div className='smaller__cards__grid__container'>
                <CardSmaller image={Image1} title={"Stalagmite Skull"} creator={"Marvin McKiney"} price={"18,000"}/>
                <CardSmaller image={Image2} title={"Techno Fly"} creator={"Dorothy RasGard"} price={"18,000"}/>
                <CardSmaller image={Image3} title={"Intermediate Gates"} creator={"Annette Boney"} price={"18,000"}/>
                <CardSmaller image={Image4} title={"Multifaced Phantom"} creator={"Ralph Anders"} price={"18,000"}/>
                <CardSmaller image={Image5} title={"Dayco Serpentine Belt"} creator={"Claire Dunphy"} price={"18,000"}/>
                <CardSmaller image={Image6} title={"Masked Vigilante"} creator={"Gloria Prichett"} price={"18,000"}/>
                <CardSmaller image={Image7} title={"Neon Roman"} creator={"Cameron Tucker"} price={"18,000"}/>
                <CardSmaller image={Image8} title={"Gold Bust"} creator={"Lily Tucker Prichett"} price={"18,000"}/>
                <CardSmaller image={Image9} title={"Nether World"} creator={"Manny Delagado"} price={"18,000"}/>
                <CardSmaller image={Image10} title={"All That Glitters Is Not Gold"} creator={"Luke Dunphy"} price={"18,000"}/>
                <CardSmaller image={Image11} title={"Reflections"} creator={"Alex Dunphy"} price={"18,000"}/>
                <CardSmaller image={Image12} title={"Hello World!"} creator={"Hailey Dunphy"} price={"18,000"}/>
            </div>
            
            
        </section>
    )
}

export default Discover;