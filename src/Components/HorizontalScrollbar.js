import React from "react";
// import { Box, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";
import BodyPart from "./BodyPart";
import Carousel from "better-react-carousel";

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  let settings = {
    breakpoint: 800,
    cols: 4,
    rows: 1,
    gap: 10,
    loop: true,
    hideArrow: true,
    showDots: true,
    // overflow:true,
  };
  return (
    <Carousel
      {...settings}
      style={{
        overflow:'auto',
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {data.slice(1).map((item) => (
        <Carousel.Item
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          // m="0 40px"
        >
          {bodyParts ? (
            <BodyPart
              item={item}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HorizontalScrollbar;
