import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {AiFillStar} from 'react-icons/ai';
import {AiOutlineStar} from 'react-icons/ai';

export default function ratingStars() {
    const ratings = [1,2,3,4,5];

    const onClickRating = (e) => {
        alert(e)
    }

  return (
    <ButtonGroup aria-label="Basic example">
    {ratings.map((rating, i) => (
        <Button 
            style={{color: '#FDA21A', backgroundColor: '#FFFFFF', borderColor: '#fff'}}
            onClick={e => {onClickRating(rating)}}
            key = {i}
            >
            <AiOutlineStar size={25} />
        </Button>
    ))}
</ButtonGroup>
  )
}
