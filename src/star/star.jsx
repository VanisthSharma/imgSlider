/* eslint-disable react/prop-types */
import css from "./star.module.css";
import { FaStar } from "react-icons/fa";
export default function Star({
  number,
  countStar,
  clickFunc,
  hoverFunc,
  leaveFunc,
  reLeave,
}) {
  return (
    <>
      <div className={css.starHolder} onClick={reLeave}>
        <div className={css.star}>
          {number.map((_, x) => {
            return (
              <FaStar
                className={`${x <= countStar && css.YellowStar} ${css.casual}`}
                key={x}
                onMouseOver={() => hoverFunc(x)}
                onMouseLeave={leaveFunc}
                onClick={() => clickFunc(x)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
