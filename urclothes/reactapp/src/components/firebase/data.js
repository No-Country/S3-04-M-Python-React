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
    },
  },
];

export default data;