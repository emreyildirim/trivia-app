import React from "react";
import { inject, observer } from "mobx-react";
import "../wrong.min.css";
import Lottie from "react-lottie";
import animationData from "../lotties/incorrect";
const Wrong = ({ store }) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="wrong">
      <div>
        <Lottie options={defaultOptions} height={150} width={150} />
      </div>
      <div className="wrong-answer">
        
        Wrong Answer! Your Score:{store.score - 100}
      </div>
    </div>
  );
};

export default inject("store")(observer(Wrong));
