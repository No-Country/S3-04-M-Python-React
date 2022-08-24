import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {AiFillStar} from 'react-icons/ai';

export default function RatingStars({onClickRating}) {
    const ratings = [1,2,3,4,5];

    const [rate, setRate] = useState(null);
    const [hover, setHover] = useState(null);
    

  return (
    <ButtonGroup aria-label="Basic example">
      {ratings.map((rating, i) => {
        const ratingValue = i + 1;
        return (
        <Button 
            style={{color: '#FDA21A', backgroundColor: '#FFFFFF', borderColor: '#fff'}}
            onClick={e => {onClickRating(e); setRate(ratingValue)}}
            key = {i}
            >
            <AiFillStar color={ratingValue <= (hover || rate) ? '#FDA21A' : "#ccc"} 
              onMouseEnter = {() => setHover(ratingValue)}
              onMouseLeave = {() => setHover(null)}
            />
        </Button>
        );
      })}
       
    
</ButtonGroup>
  )
}
