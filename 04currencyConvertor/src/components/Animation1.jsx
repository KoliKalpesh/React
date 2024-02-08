import Lottie from "lottie-react";
import React from 'react';
import Money from '../assets/Money.json';


function Animation1() {
  return (
    <div>
      <Lottie className=" m-20 mx-40" style={{width:300}} animationData={Money} />
    </div>
  )
}

export default Animation1;
