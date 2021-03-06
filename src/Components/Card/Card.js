import React from "react";
import styled from "styled-components";

export const Card = (props) => {
  return (
    <StyledCard>
      <img src={props.img} alt={props.alt}></img>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  scroll-snap-align: center;
  img {
    width: 300px;
    height: 300px;
    align-self: center;
    border-radius: 2px;
    margin: 20px;
    box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.3);
    -webkit-box-reflect: below 10px;
    -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left
          bottom, from(transparent), color-stop(60%, transparent), to(rgba(250, 250, 250, 0.1)));

    @media screen and (min-width: 1024px) {
      width: 450px;
      height: 450px;
      transition: 250ms ease;

      :hover {
        transform: scale(1.03);
      }
    }
  }
`;
