import './cards-smaller.css'

const CardSmaller = (props) => {
    return (
        <div id="smaller__card__container">
            <div className="smaller__card">
                {/* 1 */}
                <img loading="lazy" src={props.image} alt="im1" />
                {/* 2 */}
                <div className="smaller__card__text">
                    <h4>{props.title}</h4>
                    <small>By {props.creator}</small>
                    <div className="bid">
                        <div>
                            <small>Current Bid</small>
                            <p>${props.price}</p>
                        </div>
                        <button className='btn bid__btn'>Place Bid</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardSmaller;

