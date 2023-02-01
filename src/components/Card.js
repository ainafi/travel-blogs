import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const Card = (props) => {
    let badgeText
    if(props.item.OpenSpots===0){
        badgeText="SOLD OUT"
    }else if(props.item.location=== 'online'){
        badgeText='Online'
    }
    return (
        <section>
           
            <div className="card">
                {badgeText &&< div className='badge' >{badgeText}</div>}
                <img src={props.item.coverImage} alt="" />
                <div className="card--stats">
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <span>{props.item.Stats.rating}</span>
                    <span>({props.item.Stats.reviewCount})</span>
                    <span>{props.item.location}</span>
                </div>
                <div className="card--text">
                    <p>{props.item.title}</p>
                    <p><span className='bold'>From ${props.item.price}</span>/ person </p>
                 </div>  
                
            </div>
        </section>
    );
};


export default Card;