import React from 'react';
import { Button } from 'react-bootstrap';

export default function Boton({title, onClick, styles, iconLeft, iconRight}) {

  // const icon = {
  //   display: 'none'
  // }

  return (
        <Button 
          // onClick={onClick} 
          style={{padding: '12px', borderRadius: '5px', ...styles}}
        >
          {iconLeft !== undefined ?  
            <span style={{paddingRight: 10}}>
                {iconLeft} 
            </span> : null
          }
            
            {title}

            {iconRight !== undefined ?  
            <span style={{paddingLeft: 10}}>
                {iconRight} 
            </span> : null
          }
          
        </Button>
  )
}
