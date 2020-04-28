import React from "react";
import styled from "styled-components";

export const Card = (props) => {
  return (
    <StyledCard href={`/record/${props.slug}`}>
      <h1>{props.artist}</h1>
      <h3>{props.title}</h3>
      <img src={props.img} alt={props.alt}></img>
    </StyledCard>
  );
};

const StyledCard = styled.a`
  height: 500px;
  border-radius: 4px;
  background: #333332;
  margin: 20px;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 20px;
  text-align: center;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);

  img {
    width: 330px;
    height: auto;
    align-self: center;
  }

  ol {
    margin-left: 20px;
  }
`;
