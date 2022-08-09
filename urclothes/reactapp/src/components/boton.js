import React from 'react';
import { Button } from 'react-bootstrap';

export default function Boton({title, onClick, styles, icons}) {

  const icon = {
    display: 'none'
  }

  return (
        <Button 
          onClick={onClick} 
          style={styles}
        >
          {icons !== undefined ?  
            <span style={{paddingRight: 10}}>
                {icons} 
            </span> : null
          }
            
            {title}
          
        </Button>
  )
}
