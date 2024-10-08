import { Box, Typography } from "@mui/material";
import React from "react";
import styled, { keyframes } from "styled-components";

const marquee = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
`;

const StyledContainer = styled.div`
  overflow: hidden;
  
  margin-bottom: 5px;
`;

const StyledPicContainer = styled.div`
  display: flex;
  animation: ${marquee} 30s linear infinite;
`;

const StyledPic = styled.div`
  flex-shrink: 0;
  width: 300px;
  margin: 0 15px; 
`;

const StyledImg = styled.img`
  width: 236px;
  height: auto;
  object-fit: cover;
  border: 1px solid rgba(238, 231, 231, 0.9);
  border-radius: 4px;
 
`;

const ImageMarquee = ({ images }) => {
  const allImages = [...images];
  return (
   
    
      <section id="marquee">
        <StyledContainer>
          <StyledPicContainer>
            {allImages.map((imageUrl, index) => (
              <StyledPic key={index}>
                <StyledImg src={imageUrl} alt={`img${index}`} />
              </StyledPic>
            ))}
          </StyledPicContainer>
        </StyledContainer>
      </section>
  );
};

export default ImageMarquee;
