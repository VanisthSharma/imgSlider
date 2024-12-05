import { useState, useEffect } from "react";
import Slider from "./slider/slider";
function App() {
  let arr = [1, 2, 3, 4, 5];
  let [star, setStar] = useState(0);
  let [leave, setLeave] = useState(true);

  const clickFunc = (idx) => {
    setLeave(false);
    setStar(idx);
  };
  const hoverFunc = (idx) => {
    setStar(idx);
  };
  const leaveFunc = () => {
    leave && setStar(0);
  };

  const [currImg, setImg] = useState(0);
  const [imgArr, setArr] = useState([]);

  const nextImg = () => {
    currImg < 6 ? setImg(currImg + 1) : setImg(0);
    setStar(0);
  };
  const prevImg = () => {
    currImg > 0 ? setImg(currImg - 1) : setImg(6);
    setStar(0);
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const urls = await Promise.all(
          Array.from({ length: 7 }).map(async () => {
            const response = await fetch("https://picsum.photos/1280/720");
            return response.url;
          })
        );
        setArr(urls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);
  return (
    <>
      <Slider
        arr={arr}
        star={star}
        hoverFunc={hoverFunc}
        clickFunc={clickFunc}
        leaveFunc={leaveFunc}
        currImg={currImg}
        prev={prevImg}
        imgArr={imgArr}
        next={nextImg}
      ></Slider>
    </>
  );
}

export default App;
