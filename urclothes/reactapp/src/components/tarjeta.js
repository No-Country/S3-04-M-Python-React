import React, {useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card';

import BtnGroup from './btnGroup';
import RatingStar from './ratingStars';
// import data from '../firebase/data';
import data from './firebase/data';


export default function Tarjeta() {
  const [store, setStore ] = useState([]);

  useEffect(() => {
    return () => {
      setStore(data)
    }
  }, [data])
  
console.log(store)
// console.log(window)
// const ml = window.ml5;
const bn = window.brain

  

    //! Funcion para obtener el rating del usuario
    //? posible done different
    //* comun comment
    //TODO: improve this function


  //! Brainjs   

    const color_black = 1;
    const color_blue = 2;
    const color_darkblue = 3;
    const color_gray = 4;
    const color_white = 5;
    const color_green = 6;
    const color_turqoise = 7;
    const color_skin = 8;
    const color_lightblue = 9;
    const color_lightgreen = 10;

    const neckline_round = 1;
    const neckline_v = 2;

    const color_normalization_factor = 100;
    const neckline_normalization_factor = 10;
    const price_normalization_factor = 100;

    let trainingData = [
      {
        input: {
          color: color_black,
          hasPrinting: false,
          neckline: neckline_round,
          price: 0.1999,
        },
        output: { wanted: 0 },
      },
    ];
    
    let ratingItem;

    function nextTry(rating) {
      if(undefined !== ratingItem) {
        trainingData.push({
          input: ratingItem.trainingInformation,
          output: { wanted: rating / 4 }
        })
      }

      const network = new bn.NeuralNetwork({
        activation: 'sigmoid',
        hiddenLayers: [4]
      })
      network.train(trainingData);

      let suggestionItems = []
      for(let i = 0; i < data.length ; i++) {
        let item = getNormalizedItemFromStock(i);
        item.wanted = network.run(item.trainingInformation).wanted;
        suggestionItems.push(item)
      }
      
      const sorted = suggestionItems.sort((a,b) => b.wanted - a.wanted);
      setStore(sorted);
      
      ratingItem = getNormalizedItemFromStock(
        Math.floor(Math.random() * data.length - 1 + 1)
      );
    }

    function getNormalizedItemFromStock(index) {
      const item = data[index];
      const trainingInformation = item.trainingInformation;
    
      console.log('training Information:', trainingInformation)
      return {
        trainingInformation: {
          color: trainingInformation.color / color_normalization_factor,
          hasPrinting: trainingInformation.hasPrinting,
          neckline:
            trainingInformation.neckline / neckline_normalization_factor,
          price: trainingInformation.price / price_normalization_factor,
        },
        displayingInformation: item.displayingInformation,
      };
    }

    function formatAsPercent(num) {
      return new Intl.NumberFormat('default', {
        style: 'percent',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format((num * 10));
    }

  return (
    <div className="d-flex justify-content-between flex-wrap">
        {store.map(card => (    
        
            <Card className="text-white cardComponent mb-2" key={card.id}>
            <Card.Img src={card.displayingInformation.imageFile} alt="Card image" />
            <Card.ImgOverlay style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <Card.Title className='text-end'>{card.displayingInformation.title}</Card.Title>
                <Card.Text>
                    {card.description}
                </Card.Text>
                <Card.Text className="text-center mb-2" 
                  style={{
                    display: 'flex',
                    marginBottom: '0px',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '80px'
                  }}>
                    {/* Poner Estrellas Ranking Aca */}
                    <RatingStar onClickRating={nextTry}/>
                
                    <BtnGroup rating={formatAsPercent(card.wanted)}/>
                </Card.Text>
            </Card.ImgOverlay>
            </Card>
       
        ))}
    </div>    
  )
}