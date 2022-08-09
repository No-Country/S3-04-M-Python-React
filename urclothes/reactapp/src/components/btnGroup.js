import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import {BsFillMapFill} from 'react-icons/bs';
import {AiOutlineHeart , AiFillHeart} from 'react-icons/ai';
import {BsFillGearFill} from 'react-icons/bs'

export default function BtnGroup() {

    // manejar estado con useState
    const heart = true;
    const porcentaje = '96%'

  return (
    <ButtonGroup aria-label="Basic example">
        <Button ><BsFillMapFill /></Button>
        { heart !== false  ?
        <Button ><AiFillHeart /></Button> :
        <Button ><AiOutlineHeart /></Button> 
        }
        <Button ><BsFillGearFill /> {' '}{porcentaje}</Button>
    </ButtonGroup>
  )
}
