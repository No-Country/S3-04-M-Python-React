import React, {useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card';


import BtnGroup from './btnGroup';
import RatingStar from './ratingStars';
// import data from '../firebase/data';
import data from './firebase/data';
import axios from 'axios';


// import framer motion
import { Reorder, motion } from 'framer-motion';


export default function Tarjeta() {
  const [store, setStore ] = useState([]);
  const [order, setOrder ] = useState([...store]);

  useEffect(() => {
    return () => {
      setStore(data)
    }
  }, [data])
  
console.log(store)
// console.log(window)
// const ml = window.ml5;
const bn = window.brain;

// using axios to connect to api.
const url = 'https://jsonplaceholder.typicode.com/albums/1/photos';

const api = axios.create({
  baseURL: url
})

useEffect(() => {
  api.get('/').then( res => {
    console.log(res)
  })
}, [])

// creating data 
const createData = async () => {
  let res = await api.post('/', { title: '', id: 4})
}

// deleting data 
const deleteData = async (id) => {
  let del = await api.delete(`/${id}`);
}

//updateData
const updateData = async (id, val) => {
  let update = await api.patch(`/${id}`, {
    title: val
  })
}
 
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
      console.log(sorted)
      
      ratingItem = getNormalizedItemFromStock(
        Math.floor(Math.random() * data.length - 1 + 1)
        );
      }
      
    function getNormalizedItemFromStock(index) {
      const item = data[index];
      const trainingInformation = item.trainingInformation;
    
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
    <motion.div layout className="d-flex flex-wrap card-conteiner" >
        {/* framer motion  */}
        {store.map((card, i) => ( 
          
            <Card className="text-white cardComponent mb-2" key={i}>
              <Card.Img src={card.displayingInformation.imageFile} alt={card.displayingInformation.title} />
              <Card.ImgOverlay style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                  <Card.Title className="text-end">
                    {card.displayingInformation.title}
                  </Card.Title>
                  <Card.Text>
                    {card.description}
                  </Card.Text>
                  <div className="text-center mb-2" 
                    style={{
                      display: 'flex',
                      marginBottom: '0px',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      height: '80px'
                    }}>
                        <RatingStar onClickRating={nextTry}/>                
                        <BtnGroup rating={formatAsPercent(card.wanted)} />                        
                    </div>
              </Card.ImgOverlay>
            </Card>
                    
        ))}
    </motion.div>    
  )
}

