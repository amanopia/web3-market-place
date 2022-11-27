import './check.css'
import CheckBid from '../check__bid__cards/CheckBid';
import {FaEthereum} from 'react-icons/fa';
import ImagePerson1 from '../../assets/person1 (1).jpg';
import ImagePerson2 from '../../assets/person2 (1).jpg';
import Image1 from '../../assets/palette1.jpg';
import Image2 from '../../assets/palette2.jpg';
import Image3 from '../../assets/palette3.jpg';
import Image4 from '../../assets/palette4.jpg';

const CheckCollection = () => {
    return (
        <div className="container collection__container" id="check__collections">
            <div className="header">
                <h2>Check the Collections</h2>
            </div>
            <div className="check__items">
                <div className="section__one">
                    {/* Item 1 */}
                    <img src={Image1} alt="something"/>
                    {/* Item 2 */}
                    <div className='section__one__data__parent'>
                        <div className='section__one__child__one'>
                            <img src={ImagePerson1} alt="person"/>
                            <div>
                                <h3>The Futr Abstr</h3>
                                <small>10 in the stock</small>
                            </div>
                        </div>
                        <div className='section__one__child__two'>
                            <small>Highest Bid</small>
                            <div>
                                <FaEthereum />
                                <p>0.25 ETH</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section__two">
                    <CheckBid image={Image2} person={ImagePerson1} title="Nether World"/>
                    <CheckBid image={Image3} person={ImagePerson2} title="All That Gl..."/>
                    <CheckBid image={Image4} person={ImagePerson1} title="Floral Clac..."/>
                </div>
                <div className="section__three">
                    <h3>TOP COLLECTION OVER</h3>
                    <h4>Last 7 days</h4>
                </div>
            </div>
        </div>
    )
}

export default CheckCollection;