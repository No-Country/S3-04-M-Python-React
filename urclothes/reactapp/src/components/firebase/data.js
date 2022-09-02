/* 
datos en numeros.

Se determina cada color por numero para poder computarizarlo, o pasarlo por 
las funciones de normalizacion. esto puede interpretarse en funcion de 
cada stereotype y vicularla con la tienda.
*/
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

const url = 'https://raw.githubusercontent.com/BrainJS/brain.js/master/examples/javascript/recommendation-engine/images/articles/';

/*
Items estos son de referencia para la base de datos.
*/
const data = [
  {
    trainingInformation: {
      color: color_black,
      hasPrinting: 0,
      neckline: neckline_round,
      price: 19.99,
    },
    displayingInformation: {
      imageFile: `${url}cl_black_nl_circle_hp_false_prc_1999.jpg`,
      title: 'Rainbow Shirt',
      coordinates: {
        lat: -34.68186785690417,  
        lng: -58.57845199362653
      }
    },
  },
  {
    trainingInformation: {
      color: color_blue,
      hasPrinting: 0,
      neckline: neckline_round,
      price: 19.99,
    },
    displayingInformation: {
      imageFile: `${url}cl_blue_nl_circle_hp_false_prc_1999.jpg`, 
      title: 'R - bow Shirt',
      coordinates: {
          lat: -34.58459637073636, 
          lng: -58.539041856720694
        }
    },
  },
  {
    trainingInformation: {
      color: color_darkblue,
      hasPrinting: 1,
      neckline: neckline_round,
      price: 29.99,
    },
    displayingInformation: {
      imageFile: `${url}cl_darkblue_nl_circle_hp_true_prc_2999.jpg`,
      title: 'Printed Shirt',
      coordinates: {
        lat: -34.58459637073636, 
        lng: -58.539041856720694
      }
    },
  },
  {
    trainingInformation: {
      color: color_gray,
      hasPrinting: 0,
      neckline: neckline_v,
      price: 9.99,
    },
    displayingInformation: { 
        imageFile: `${url}cl_gray_nl_v_hp_false_prc_999.jpg`,
        title: 'Gray V-neck Shirt',
        coordinates: {
          lat: -34.58459637073636, 
          lng: -58.539041856720694
        }
    },
  },
  {
    trainingInformation: {
      color: color_white,
      hasPrinting: 0,
      neckline: neckline_v,
      price: 9.99,
    },
    displayingInformation: { 
        imageFile: `${url}cl_white_nl_v_hp_false_prc_999.jpg`,
        title: 'White V-neck Shirt',
        coordinates: {
          lat: -34.58459637073636, 
          lng: -58.539041856720694
        }
     },
  },
  {
    trainingInformation: {
      color: color_green,
      hasPrinting: 0,
      neckline: neckline_round,
      price: 17.99,
    },
    displayingInformation: {
      imageFile: `${url}cl_green_nl_circle_hp_false_prc_1799.jpg`,
      title: 'Green Shirt',
      coordinates: {
        lat:-34.673680097064505,
        lng:-58.51047408977797
      }
    },
  },
  {
    trainingInformation: {
      color: color_blue,
      hasPrinting: 0,
      neckline: neckline_round,
      price: 17.99,
    },
    displayingInformation: {
      imageFile: `${url}cl_blue_nl_circle_hp_false_prc_1799.jpg`,
        title: 'Blue Shirt',
        coordinates: {
          lat: -34.58459637073636, 
          lng: -58.539041856720694
        }
    },
  },
  {
    trainingInformation: {
      color: color_turqoise,
      hasPrinting: 1,
      neckline: neckline_round,
      price: 15.99,
    },
    displayingInformation: {
      imageFile: `${url}cl_turqoise_nl_circle_hp_true_prc_1599.jpg`,
      title: 'Printed Shirt',
      coordinates: {
        lat: -34.67396244708636, 
        lng: -58.381041414268324
      }
    },
  },
  {
    trainingInformation: {
      color: color_skin,
      hasPrinting: 1,
      neckline: neckline_round,
      price: 15.99,
    },
    displayingInformation: {
      imageFile: `${url}cl_skin_nl_circle_hp_true_prc_1599.jpg`,
      title: 'Printed Shirt',
      coordinates: {
        lat: -34.58459637073636, 
        lng: -58.539041856720694
      }
    },
  },
  {
    trainingInformation: {
      color: color_darkblue,
      hasPrinting: 1,
      neckline: neckline_round,
      price: 15.99,
    },
    displayingInformation: {
        imageFile: `${url}cl_darkblue_nl_circle_hp_true_prc_1599.jpg`,
        title: 'Printed Shirt',
        coordinates: {
          lat: -34.66379723994309,  
          lng: -58.68350875411975
        }
    },
  },
  {
    trainingInformation: {
      color: color_turqoise,
      hasPrinting: 1,
      neckline: neckline_round,
      price: 15.99,
    },
    displayingInformation: {
      imageFile: `${url}cl_turqoise_nl_circle_hp_true_prc_1599_1.jpg`,
      title: 'Printed Shirt',
      coordinates: {
        lat: -34.58459637073636, 
        lng: -58.539041856720694
      }
    },
  },
  {
    trainingInformation: {
      color: color_darkblue,
      hasPrinting: 1,
      neckline: neckline_round,
      price: 15.99,
    },
    displayingInformation: {
        imageFile: `${url}cl_darkblue_nl_circle_hp_true_prc_1599_1.jpg`,
        title: 'Printed Shirt',
        coordinates: {
          lat: -34.58459637073636, 
          lng: -58.539041856720694
        }
    },
  },
  {
    trainingInformation: {
      color: color_lightblue,
      hasPrinting: 0,
      neckline: neckline_round,
      price: 19.99,
    },
    displayingInformation: {
        imageFile: `${url}cl_lightblue_nl_circle_hp_false_prc_1999.jpg`,
        title: 'Light Blue Shirt',
        coordinates: {
          lat: -34.58459637073636, 
          lng: -58.539041856720694
        }
    },
  },
  {
    trainingInformation: {
      color: color_lightgreen,
      hasPrinting: 0,
      neckline: neckline_round,
      price: 19.99,
    },
    displayingInformation: {
        imageFile: `${url}cl_lightgreen_nl_circle_hp_false_prc_1999.jpg`,
        title: 'Light Green Shirt',
        coordinates: {
          lat: -34.58459637073636, 
          lng: -58.539041856720694
        }
    },
  },
  {
    trainingInformation: {
      color: color_skin,
      hasPrinting: 0,
      neckline: neckline_round,
      price: 19.99,
    },
    displayingInformation: {
        imageFile: `${url}cl_skin_nl_circle_hp_false_prc_1999.jpg`,
        title: 'Skin Shirt',
        coordinates: {
          lat: -34.58459637073636, 
          lng: -58.539041856720694
        }
    },
  },
  {
    trainingInformation: {
      color: color_gray,
      hasPrinting: 0,
      neckline: neckline_round,
      price: 19.99,
    },
    displayingInformation: {
        imageFile: `${url}cl_gray_nl_circle_hp_false_prc_1999.jpg`,
        title: 'Gray Shirt',
        coordinates: {
          lat: -34.58459637073636, 
          lng: -58.539041856720694
        }
    },
  },
];

export default data;