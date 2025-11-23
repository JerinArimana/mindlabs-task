import React from "react";
import Image from "next/image";
import leftArrow from "../../public/images/ArrowLeft.svg";
import rightArrow from "../../public/images/ArrowRight.svg";

const MonitorTab = ({ image, bodyTitle, paragraph }: any) => {
  return (
     <div className="ticket-wrapper">
      <div className="ticket-image">
        <Image src={image} alt="Dashboard Preview" />
      </div>

      <div className="ticket-content">
        <h2>{bodyTitle}</h2>
        <p>{paragraph}</p>
        <div className="ticket-arrows">
          <button className="arrow-btn">
            <Image src={leftArrow} alt="left arrow" className="left" />
          </button>
          <button className="arrow-btn active">
            <Image src={rightArrow} alt="right arrow" className="right" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default MonitorTab