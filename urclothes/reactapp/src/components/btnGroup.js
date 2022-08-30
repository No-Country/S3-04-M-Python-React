import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import MapaGoogle from './mapaGoogle';

import {BsFillMapFill} from 'react-icons/bs';
import {AiOutlineHeart , AiFillHeart} from 'react-icons/ai';
import {BsFillGearFill} from 'react-icons/bs'

import {useClothesContext} from '../contexts/AppProvider';

export default function BtnGroup({stylesMap, stylesHeart, stylesGear, onClickHeart, /*onClickMap,*/ onClickGear, rating}) {


const {dispatch, showDestiny, longitud, latitud} = useClothesContext();
    const [heart, setHeart] = useState(false)

    const mapStyle = {
        width: '100%',
        height: '33vh',
        borderRadius: '10px',
        position: 'relative',
        overflow: 'hidden'
    }
    
    const popOverMap = (
        <Popover id="popover-basic" className="card-popover" style={{width: '85vw'}}>
          <Popover.Body>
          <strong> Visualiza la tienda en Google map </strong>
            <MapaGoogle style={mapStyle}/>
          </Popover.Body>
        </Popover>
      )

const handleHeart = () => {
  setHeart(!heart)
}

    const onClickMap = () => {
        dispatch({type:"SET_LAT", value: 10.502219280479151});
        dispatch({type:"SET_LNG", value: -66.90413403673223});
        dispatch({type:"SET_SHOW_DESTINY", value: !showDestiny});
       
    }

  return (
    <ButtonGroup aria-label="Basic example">
        <OverlayTrigger trigger="click" placement="bottom" overlay={popOverMap}>
        <Button 
            style={{color: '#0b5ed7', backgroundColor: '#FFFFFF', borderColor: '#fff',...stylesMap}}
            onClick={onClickMap}
            >
            <BsFillMapFill />
        </Button>
        </OverlayTrigger>
        
        <Button 
            style={{color: '#de5b3e', backgroundColor: '#FFF', borderColor: '#fff',...stylesHeart}}
            onClick={handleHeart}
            >
            <AiFillHeart color={heart ? '#de5b3e' : "#ccc"} />
        </Button> 
        
        <Button 
            style={{color: '#0b5ed7', backgroundColor: '#FFFFFF', borderColor: '#fff',...stylesGear}}
            onClick={onClickGear}
            >
            <BsFillGearFill /> {'  '}{rating == false ? '0%' : rating}
        </Button>
    </ButtonGroup>
  )
}