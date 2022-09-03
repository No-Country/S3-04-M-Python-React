import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

import BtnGroup from "./btnGroup";
import RatingStar from "./ratingStars";
// import data from '../firebase/data';
import data from "./firebase/data";
import axios from "axios";

// import framer motion
import { Reorder, motion } from "framer-motion";

export default function Tarjeta() {
  const [store, setStore] = useState([]);
  const [order, setOrder] = useState([...store]);

  useEffect(() => {
    return () => {
      setStore(data);
    };
  }, [data]);

  // console.log(window)
  // const ml = window.ml5;
  const bn = window.brain;

  // using axios to connect to api.
  const url = "127.0.0.1:8000/api";

  const api = axios.create({
    baseURL: url,
  });

  useEffect(() => {
    api.get("/enterprises").then((res) => {
      console.log(res);
      setEnterprises(res.data);
    });
  }, []);

  // creating data
  const createData = async () => {
    let res = await api.post("/users/create", { name: "", last_name: "" });
  };

  // deleting data
  const deleteData = async (id) => {
    let del = await api.delete(`/${id}`);
  };

  //updateData
  const updateData = async (id, val) => {
    let update = await api.patch(`/${id}`, {
      title: val,
    });
  };

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

  const indoors = 1;
  const outdoors = 2;

  const oversize = 1;
  const deportivo = 2;
  const casual = 3;
  const formal = 4;
  const asiatico = 5;
  const anime = 6;

  const color_normalization_factor = 100;
  const activity_normalization_factor = 10;
  const price_normalization_factor = 100;

  let trainingData = [
    {
      input: {
        category: deportivo,
        hasPrinting: false,
        activity: outdoors,
        price: 0.1999,
      },
      output: { wanted: 0 },
    },
  ];

  let ratingItem;

  function nextTry(rating) {
    if (undefined !== ratingItem) {
      trainingData.push({
        input: ratingItem.trainingInformation,
        output: { wanted: rating / 4 },
      });
    }

    const network = new bn.NeuralNetwork({
      activation: "sigmoid",
      hiddenLayers: [4],
    });
    network.train(trainingData);

    let suggestionItems = [];
    for (let i = 0; i < data.length; i++) {
      let item = getNormalizedItemFromStock(i);
      item.wanted = network.run(item.trainingInformation).wanted;
      suggestionItems.push(item);
    }

    const sorted = suggestionItems.sort((a, b) => b.wanted - a.wanted);
    setStore(sorted);
    console.log(sorted);

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
        activity: trainingInformation.activity / activity_normalization_factor,
        price: trainingInformation.price / price_normalization_factor,
      },
      displayingInformation: item.displayingInformation,
    };
  }

  function formatAsPercent(num) {
    return new Intl.NumberFormat("default", {
      style: "percent",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num * 10);
  }

  const [enterprises, setEnterprises] = useState([]);
  return (
    <motion.div layout className="d-flex flex-wrap card-conteiner">
      {/* framer motion  */}
      <div className="d-flex justify-content-sm-between justify-content-center  flex-wrap">
        {store.map((card, i) => (
          <Card
            className="text-white cardComponent mb-2"
            key={i}
            style={{ width: "25rem" }}
            border="dark"
          >
            <Card.Img
              src={card.displayingInformation.imageFile}
              alt={card.displayingInformation.title}
              height="300px"
            />

            <Card.ImgOverlay
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background:
                  "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)) no-repeat center/100%",
              }}
            >
              {/* <h5 class="text-dark bg-light">
                {" "}
                {card.displayingInformation.title}
              </h5> */}{" "}
              <Card.Title className="text-end  text-light" marginBottom="20px">
                {card.displayingInformation.title}
              </Card.Title>
              <Card.Text>{card.description}</Card.Text>
              <div
                className="text-center mb-2"
                style={{
                  display: "flex",
                  marginBottom: "0px",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "80px",
                }}
              >
                <RatingStar onClickRating={nextTry} />
                <BtnGroup
                  rating={formatAsPercent(card.wanted)}
                  mapCoordinates={card.displayingInformation.coordinates}
                />
              </div>
            </Card.ImgOverlay>
          </Card>
        ))}
      </div>
    </motion.div>
  );
}
