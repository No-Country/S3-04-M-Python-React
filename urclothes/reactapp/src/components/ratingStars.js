import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {AiFillStar} from 'react-icons/ai';
import {AiOutlineStar} from 'react-icons/ai';

export default function ratingStars({onClickRating}) {
    const ratings = [0,1,2,3,4];

    

  return (
    <ButtonGroup aria-label="Basic example">
    
        <Button 
            style={{color: '#FDA21A', backgroundColor: '#FFFFFF', borderColor: '#fff'}}
            onClick={e => {onClickRating(1)}}
            key = {0}
            >
            <AiOutlineStar />
        </Button>
        <Button 
            style={{color: '#FDA21A', backgroundColor: '#FFFFFF', borderColor: '#fff'}}
            onClick={e => {onClickRating(2)}}
            key = {1}
            >
            <AiOutlineStar />
        </Button>
        <Button 
            style={{color: '#FDA21A', backgroundColor: '#FFFFFF', borderColor: '#fff'}}
            onClick={e => {onClickRating(3)}}
            key = {2}
            >
            <AiOutlineStar />
        </Button>
        <Button 
            style={{color: '#FDA21A', backgroundColor: '#FFFFFF', borderColor: '#fff'}}
            onClick={e => {onClickRating(4)}}
            key = {3}
            >
            <AiOutlineStar />
        </Button>
        <Button 
            style={{color: '#FDA21A', backgroundColor: '#FFFFFF', borderColor: '#fff'}}
            onClick={e => {onClickRating(5)}}
            key = {4}
            >
            <AiOutlineStar />
        </Button>
    
</ButtonGroup>
  )
}
