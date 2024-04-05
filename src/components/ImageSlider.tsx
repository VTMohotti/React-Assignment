import React, { useEffect, useState } from "react";
import { Box, Paper, Slide, styled } from "@mui/material";

type Slide = {
  id: number;
  imageUrl: string;
};

type ImageSliderProps = {
  slides: Slide[];
};

const IndicatorContainer = styled(Box)({
  position: "absolute",
  bottom: "20px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

const Dot = styled(Box)({
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  backgroundColor: "#fff",
  margin: "0 5px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  "&.active": {
    backgroundColor: "#007bff",
  },
});

const ImageSlider: React.FC<ImageSliderProps> = ({ slides }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDotClick = (index: number) => {
    setCurrentSlideIndex(index);
  };

  return (
    <Box
      position="relative"
      width="100%"
      height="60vh"
      overflow="hidden"
      marginTop="20px"
    >
      {slides.map((slide, index) => (
        <Slide
          key={slide.id}
          direction="right"
          in={index === currentSlideIndex}
          mountOnEnter
          unmountOnExit
        >
          <Paper
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: `url(${slide.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Slide>
      ))}
      <IndicatorContainer>
        {slides.map((_, index) => (
          <Dot
            key={index}
            className={index === currentSlideIndex ? "active" : ""}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </IndicatorContainer>
    </Box>
  );
};

export default ImageSlider;
