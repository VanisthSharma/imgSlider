/* eslint-disable react/prop-types */
import Star from "./star/star";
export default function FullStar({
  arr,
  star,
  clickFunc,
  hoverFunc,
  leaveFunc,
}) {
  return (
    <>
      <Star
        number={arr}
        clickFunc={clickFunc}
        hoverFunc={hoverFunc}
        leaveFunc={leaveFunc}
        countStar={star}
      />
    </>
  );
}
