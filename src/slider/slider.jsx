/* eslint-disable react/prop-types */
import css from "./slider.module.css";
import FullStar from "../FullStar";
export default function Slider({
  leaveFunc,
  star,
  hoverFunc,
  clickFunc,
  arr,
  next,
  prev,
  currImg,
  imgArr,
}) {
  return (
    <>
      <div className={css.sliderHolder}>
        <button className={`${css.buttons} ${css.leftButton}`} onClick={prev}>
          ‹
        </button>
        <button className={`${css.buttons} ${css.rightButton}`} onClick={next}>
          ›
        </button>
        {imgArr.map((x, index) => (
          <img
            key={index}
            src={x}
            className={currImg === index ? css.visibleImg : ""}
            alt="Random Image"
          />
        ))}
        <FullStar
          leaveFunc={leaveFunc}
          hoverFunc={hoverFunc}
          clickFunc={clickFunc}
          arr={arr}
          star={star}
          className={css.ratings}
        ></FullStar>
      </div>
    </>
  );
}
