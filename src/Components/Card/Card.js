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
  scroll-snap-align: start;
  img {
    width: 300px;
    height: auto;
    align-self: center;
    margin: 20px;
    box-shadow: -5px 5px 10px rgba(0, 0, 0, 0.3);
    -webkit-box-reflect: below 10px;
    -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left
          bottom, from(transparent), color-stop(60%, transparent), to(rgba(250, 250, 250, 0.1)));

    @media screen and (min-width: 1024px) {
      width: 450px;
    }
  }
`;
