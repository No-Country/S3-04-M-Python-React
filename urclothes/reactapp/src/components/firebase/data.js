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
const color_all = 11;

const indoors = 1;
const outdoors = 2;

const oversize = 1;
const deportivo = 2;
const casual = 3;
const formal = 4;
const asiatico = 5;
const anime = 6;
const vestidos = 7;
const disenador = 8;

// const url =
//   "https://raw.githubusercontent.com/BrainJS/brain.js/master/examples/javascript/recommendation-engine/images/articles/";

/*
Items estos son de referencia para la base de datos.
*/
const data = [
  {
    trainingInformation: {
      category: asiatico,
      hasPrinting: 0,
      activity: indoors,
      price: 19.99,
      color: color_all,
    },
    displayingInformation: {
      imageFile:
        "https://c8.alamy.com/compes/m22yty/buenos-aires-argentina-galerias-pacifico-mall-tienda-indiastyle-entrada-ropa-de-mujer-boutique-moda-global-argentina-argen-m22yty.jpg",
      title: "indiastyle",
      coordinates: {
        lat: -34.68186785690417,
        lng: -58.57845199362653,
      },
    },
  },
  {
    trainingInformation: {
      category: vestidos,
      color: color_all,
      hasPrinting: 0,
      activity: indoors,
      price: 19.99,
    },
    displayingInformation: {
      imageFile:
        "https://i.pinimg.com/736x/da/d2/48/dad2489b02580ce01e5d431f03b2e71c--federal-solar.jpg",
      title: "MISHKA",
      coordinates: {
        lat: -34.58459637073636,
        lng: -58.539041856720694,
      },
    },
  },
  {
    trainingInformation: {
      color: color_all,
      hasPrinting: 1,
      activity: indoors,
      category: vestidos,
      price: 29.99,
    },
    displayingInformation: {
      imageFile: `https://media.vogue.mx/photos/5c06fd86fdaf45d2df473f1d/master/w_1920%2Cc_limit/moda_donde_comprar_en_buenos_aires_argentina_mejores_tiendas_53505611.jpg`,
      title: "Shop Nantolin",
      coordinates: {
        lat: -34.58459637073636,
        lng: -58.539041856720694,
      },
    },
  },
  {
    trainingInformation: {
      color: color_all,
      hasPrinting: 0,
      activity: indoors,
      category: disenador,
      price: 9.99,
    },
    displayingInformation: {
      imageFile:
        "https://media.vogue.mx/photos/5c06fd8632b1ca3e8ef04aec/master/w_1920%2Cc_limit/moda_donde_comprar_en_buenos_aires_argentina_mejores_tiendas_852600647.jpg",
      title: "JT by Jessica Trosman",
      coordinates: {
        lat: -34.58459637073636,
        lng: -58.539041856720694,
      },
    },
  },
  {
    trainingInformation: {
      color: color_white,
      hasPrinting: 0,
      activity: indoors,
      price: 9.99,
    },
    displayingInformation: {
      imageFile:
        "https://media.vogue.mx/photos/5c06fd866d624e0d61a1a8dc/master/w_1920%2Cc_limit/moda_donde_comprar_en_buenos_aires_argentina_mejores_tiendas_666633363.jpg",
      title: "Tramando Clothes",
      coordinates: {
        lat: -34.58459637073636,
        lng: -58.539041856720694,
      },
    },
  },
  {
    trainingInformation: {
      color: color_skin,
      hasPrinting: 1,
      activity: indoors,
      price: 15.99,
    },
    displayingInformation: {
      imageFile:
        "https://i.argentino.com.ar/images/2018/0220/1096024-kurogane-store-anime-kpop-videojuegos-20180220132108876.jpg",
      title: "Buzbee Anime Store",
      coordinates: {
        lat: -34.58459637073636,
        lng: -58.539041856720694,
      },
    },
  },
  {
    trainingInformation: {
      color: color_gray,
      hasPrinting: 0,
      activity: indoors,
      price: 9.99,
    },
    displayingInformation: {
      imageFile:
        "https://media-cdn.tripadvisor.com/media/photo-s/09/3a/2a/21/hard-rock-cafe-buenos.jpg",
      title: "ROCKSHOP - Hard Rock Cafe",
      coordinates: {
        lat: -34.58459637073636,
        lng: -58.539041856720694,
      },
    },
  },
  {
    trainingInformation: {
      color: color_green,
      hasPrinting: 0,
      activity: indoors,
      price: 17.99,
    },
    displayingInformation: {
      imageFile:
        "https://media.vogue.mx/photos/5c06fd886d624ef095a1a8df/master/w_1920%2Cc_limit/moda_donde_comprar_en_buenos_aires_argentina_mejores_tiendas_476187764.jpg",
      title: "Kostume BA",
      coordinates: {
        lat: -34.673680097064505,
        lng: -58.51047408977797,
      },
    },
  },
  {
    trainingInformation: {
      color: color_blue,
      hasPrinting: 0,
      activity: indoors,
      price: 17.99,
    },
    displayingInformation: {
      imageFile:
        "https://media.vogue.mx/photos/5c06fd885bda8cac1ec2fb61/master/w_1920%2Cc_limit/moda_donde_comprar_en_buenos_aires_argentina_mejores_tiendas_94065495.jpg",
      title: "House of Matching Colours",
      coordinates: {
        lat: -34.58459637073636,
        lng: -58.539041856720694,
      },
    },
  },
  {
    trainingInformation: {
      color: color_turqoise,
      hasPrinting: 1,
      activity: indoors,
      price: 15.99,
    },
    displayingInformation: {
      imageFile:
        "https://scontent-lim1-1.xx.fbcdn.net/v/t1.6435-9/165852761_4077994015576944_7885101340932645223_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeEsvHFP3cLujeUnjfE1M_HF3vkP8rWATvTe-Q_ytYBO9OERdIj_YRdwaGN6_Ds6844JEr-G6wJiLmJf471_s9dd&_nc_ohc=kzz7N6YBY8UAX9HLNyP&tn=F86qffHX4ig1M-vk&_nc_ht=scontent-lim1-1.xx&oh=00_AT9zG9_TymUyYMlKfMXEQZxFWIGdRH32cmnABtRg8VS8Sw&oe=6338109C",
      title: "Aires Modernos",
      coordinates: {
        lat: -34.67396244708636,
        lng: -58.381041414268324,
      },
    },
  },
  {
    trainingInformation: {
      category: deportivo,
      hasPrinting: 1,
      activity: outdoors,
      price: 15.99,
    },
    displayingInformation: {
      imageFile:
        "https://do1pouckcwxot.cloudfront.net/argentina/uploads/2018/07/25162101/outlet2-765.jpg",
      title: "Ingenio Sport",
      coordinates: {
        lat: -34.58459637073636,
        lng: -58.539041856720694,
      },
    },
  },
  {
    trainingInformation: {
      color: color_skin,
      hasPrinting: 1,
      activity: indoors,
      price: 15.99,
    },
    displayingInformation: {
      imageFile:
        "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/301673948_1949583252098974_5522705244943554580_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEZtEADblb5v9Q-4C2UzD0zA98shiYVhakD3yyGJhWFqSuzbXKnmjkfUoPzzl534hB2IJA2fjk9gkeLQGjQOuvC&_nc_ohc=XK2Jw-EFDkEAX_T70Be&_nc_ht=scontent-lim1-1.xx&oh=00_AT_E5L27n1BciMTwEoN8I2lg_V1jIeS5rSEPWNCWESL_FA&oe=6317CE60",
      title: "Freya Sport",
      coordinates: {
        lat: -34.58459637073636,
        lng: -58.539041856720694,
      },
    },
  },
  {
    trainingInformation: {
      color: color_darkblue,
      hasPrinting: 1,
      activity: indoors,
      price: 15.99,
    },
    displayingInformation: {
      imageFile:
        "https://scontent-lim1-1.xx.fbcdn.net/v/t1.6435-9/32089495_1771269986243034_3383893681843994624_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeG7DDSYe0pAC-YY6MWtFGp0AqdKaMUBJr4Cp0poxQEmvj_Y6RZ1_jCwyThHvKIpScYzYDehI6pAAFpAfuZKmy-9&_nc_ohc=WOkM4Zi04ZUAX_ZLe6j&tn=F86qffHX4ig1M-vk&_nc_ht=scontent-lim1-1.xx&oh=00_AT8-pEmzsRQFbTj7xA0Ngo6VmpMkX4SJ4-4wIy424okOkw&oe=63383FAC",
      title: "Hobbies Di Store",
      coordinates: {
        lat: -34.66379723994309,
        lng: -58.68350875411975,
      },
    },
  },
  {
    trainingInformation: {
      color: color_black,
      category: anime,
      hasPrinting: 1,
      activity: indoors,
      price: 15.99,
    },
    displayingInformation: {
      imageFile:
        "https://scontent-lim1-1.xx.fbcdn.net/v/t1.6435-9/32215281_1771270022909697_2140411700879294464_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeHWw3tBvudwl1KjhxlKX5v3jeEzURyIg8uN4TNRHIiDy3Phtl1l065z3XjD9ReU-xyQix4dTTRWGJjGI5o2qeJU&_nc_ohc=nPhk2lEFKIoAX--ivCv&_nc_ht=scontent-lim1-1.xx&oh=00_AT_t2GNv0eSWam5EWuwR6zeToVu5X2HbApFDOY810qZ5LA&oe=633941B5",
      title: "Dixon Anime Store",
      coordinates: {
        lat: -34.58459637073636,
        lng: -58.539041856720694,
      },
    },
  },
  {
    trainingInformation: {
      color: color_darkblue,
      category: formal,
      activity: indoors,
      price: 15.99,
    },
    displayingInformation: {
      imageFile:
        "https://www.kvnstatic.com/imagenes/varios/1221-locales-kevingston.jpg",
      title: "Kevingston",
      coordinates: {
        lat: -34.58459637073636,
        lng: -58.539041856720694,
      },
    },
  },
  {
    trainingInformation: {
      color: color_lightblue,
      hasPrinting: 0,
      activity: indoors,
      price: 19.99,
    },
    displayingInformation: {
      imageFile:
        "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/277564997_1039283463466747_7419540521921743652_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeEMMC5mmdexbreuxDHuiOjxZoKw8FOT_F1mgrDwU5P8XZY-GxpgabSuxFPF_LOVlWDObxwAZy7CDBDIEPRDNigK&_nc_ohc=saX9drcDQh0AX_BBBd_&_nc_ht=scontent-lim1-1.xx&oh=00_AT-PWLmu-Z1mBgayy1GILlq7MTZtf-9EiezfAgrffm8jTA&oe=63164DCC",
      title: "Gallery Rock",
      coordinates: {
        lat: -34.58459637073636,
        lng: -58.539041856720694,
      },
    },
  },
  {
    trainingInformation: {
      category: formal,
      hasPrinting: 0,
      activity: indoors,
      price: 19.99,
    },
    displayingInformation: {
      imageFile:
        "https://cdn0.casamientos.com.ar/vendor/2141/original/960/jpg/dsc-6079_7_172141-163257269615923.webp",
      title: "Black Tie",
      coordinates: {
        lat: -34.58459637073636,
        lng: -58.539041856720694,
      },
    },
  },
  {
    trainingInformation: {
      color: color_lightgreen,
      hasPrinting: 0,
      activity: indoors,
      price: 19.99,
    },
    displayingInformation: {
      imageFile:
        "https://themonopolitan.com/assets/img/post/monopolitan/monochrome%2005.jpg",
      title: "Monopolitan Oversize",
      coordinates: {
        lat: -34.58459637073636,
        lng: -58.539041856720694,
      },
    },
  },
  {
    trainingInformation: {
      color: color_skin,
      hasPrinting: 0,
      activity: indoors,
      price: 19.99,
    },
    displayingInformation: {
      imageFile:
        "https://www.forbuenosaireslovers.com/images/places/tiendas-para-comprar-camisas-oversize-mujer-buenos-aires.jpg",
      title: "Oversize Lovers",
      coordinates: {
        lat: -34.58459637073636,
        lng: -58.539041856720694,
      },
    },
  },
  {
    trainingInformation: {
      color: color_gray,
      hasPrinting: 0,
      activity: indoors,
      price: 19.99,
    },
    displayingInformation: {
      imageFile:
        "https://bucket.somosohlala.com.ar/s3fs-public/styles/img_internal/public/DBZBIUHCSFEOJAXW4BHAESRVK4.jpg.webp?itok=2A26OWZr",
      title: "Kiara Clothes",
      coordinates: {
        lat: -34.58459637073636,
        lng: -58.539041856720694,
      },
    },
  },
  {
    trainingInformation: {
      category: deportivo,
      hasPrinting: 0,
      activity: outdoors,
      price: 19.99,
    },
    displayingInformation: {
      imageFile:
        "https://d26lpennugtm8s.cloudfront.net/stores/110/400/rte/tiendabenefit.jpg",
      title: "Tienda Benefit",
      coordinates: {
        lat: -34.58459637073636,
        lng: -58.539041856720694,
      },
    },
  },
  {
    trainingInformation: {
      category: deportivo,
      hasPrinting: 0,
      activity: outdoors,
      price: 19.99,
    },
    displayingInformation: {
      imageFile:
        "https://www.forbuenosaireslovers.com/images/places/tiendas-de-camisetas-de-futbol-en-buenos-aires.jpg",
      title: "Caola",
      coordinates: {
        lat: -34.58459637073636,
        lng: -58.539041856720694,
      },
    },
  },
  {
    trainingInformation: {
      category: formal,
      hasPrinting: 0,
      activity: indoors,
      price: 19.99,
    },
    displayingInformation: {
      imageFile:
        "https://cdn0.casamientos.com.ar/vendor/4767/3_2/960/jpg/t4_7_104767-1552919818.jpeg",
      title: "Miro",
      coordinates: {
        lat: -34.58459637073636,
        lng: -58.539041856720694,
      },
    },
  },
  {
    trainingInformation: {
      category: formal,
      hasPrinting: 0,
      activity: indoors,
      price: 19.99,
    },
    displayingInformation: {
      imageFile:
        "https://cdn0.casamientos.com.ar/vendor/9058/original/960/jpg/file-1605580944907_7_109058-160558094895969.webp",
      title: "RP Sastrería",
      coordinates: {
        lat: -34.58459637073636,
        lng: -58.539041856720694,
      },
    },
  },
];

export default data;
