import React from "react";
import { inject, observer } from "mobx-react";
import "../scorescreen.min.css";
import Lottie from "react-lottie";
import animationData from "../lotties/correct";
const ScoreScreen = ({ store }) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="scorescreen">
      <div>
        <Lottie options={defaultOptions} height={150} width={150} />
      </div>
      <div className="score">Correct! Total:{store.score}Points </div>
    </div>
  );
};

export default inject("store")(observer(ScoreScreen));
