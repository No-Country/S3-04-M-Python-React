import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {AiFillStar} from 'react-icons/ai';

export default function RatingStars({onClickRating}) {
    const ratings = [5,4,3,2,1];

    const [rate, setRate] = useState(null);
    const [hover, setHover] = useState(null);
    const [position, setPosition] = useState(null);
    

  return (
    <ButtonGroup aria-label="Basic example">
      {ratings.map((rating, i) => {
        const ratingValue =  ratings;
        return (  
            <Button 
                style={{color: '#FDA21A', backgroundColor: '#FFFFFF', borderColor: '#fff'}}
                onClick={e => {onClickRating(e); setRate(ratingValue); setPosition(i)}}
                key = {i}
                >
                {position !== i ? 
                <AiFillStar color={ratingValue <= (hover || rate) ? '#FDA21A' : "#ccc"} 
                  onMouseEnter = {() => setHover(ratingValue)}
                  onMouseLeave = {() => setHover(null)}
                /> : 
                <AiFillStar color={ null <= (hover || rate) ? '#FDA21A' : "#ccc"} 
                  onMouseEnter = {() => setHover(ratingValue)}
                  onMouseLeave = {() => setHover(null)}
                /> }
            </Button>
        );
      })}
       
    
</ButtonGroup>
  )
}
