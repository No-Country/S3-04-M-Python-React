import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import {BsFillMapFill} from 'react-icons/bs';
import {AiOutlineHeart , AiFillHeart} from 'react-icons/ai';
import {BsFillGearFill} from 'react-icons/bs'

import useClothesContext from '../contexts/AppProvider';

export default function BtnGroup({stylesMap, stylesHeart, stylesGear, onClickHeart, onClickGear, rating}) {


    const {dispatch, showDestiny, longitud, latitud} = useClothesContext();
    // manejar estado con useState
    const heart = false;

    const onClickMap = () => {
        dispatch({type:"SET_LAT", value: 10.502219280479151});
        dispatch({type:"SET_LNG", value: -66.90413403673223});
       
    }



  return (
    <ButtonGroup aria-label="Basic example">
        <Button 
            style={{color: '#0b5ed7', backgroundColor: '#FFFFFF', borderColor: '#fff',...stylesMap}}
            onClick={onClickMap}
            >
            <BsFillMapFill />
        </Button>
        { heart !== false  ?
        <Button 
            style={{color: '#de5b3e', backgroundColor: '#FFF', borderColor: '#fff',...stylesHeart}}
            onClick={onClickHeart}
            >
            <AiFillHeart />
        </Button> :
        <Button 
            style={{color: '#de5b3e', backgroundColor: '#fff', borderColor: '#fff',...stylesHeart}}
            onClick={onClickHeart}
            >
            <AiOutlineHeart style={{borderColor: '#de5b3e'}}/>
        </Button> 
        }
        <Button 
            style={{color: '#0b5ed7', backgroundColor: '#FFFFFF', borderColor: '#fff',...stylesGear}}
            onClick={onClickGear}
            >
            <BsFillGearFill /> {' '}{rating}
        </Button>
    </ButtonGroup>
  )
}
