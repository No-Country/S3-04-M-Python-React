import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import {BsFillMapFill} from 'react-icons/bs';
import {AiOutlineHeart , AiFillHeart} from 'react-icons/ai';
import {BsFillGearFill} from 'react-icons/bs'

export default function BtnGroup({stylesMap, stylesHeart, stylesGear, onClickMap, onClickHeart, onClickGear}) {

    // manejar estado con useState
    const heart = false;
    const porcentaje = '96%'

    

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
            <BsFillGearFill /> {' '}{porcentaje}
        </Button>
    </ButtonGroup>
  )
}
