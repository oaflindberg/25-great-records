import React from "react";
import styled from "styled-components";

export const SingleCard = (props) => {
  return (
    <StyledSingleCard>
      <h1>{props.artist}</h1>
      <h1>{props.title}</h1>
      <img src={props.img} alt={props.alt}></img>
      {props.tracklist}
      <div>
        <p>{props.released}</p>
        <p>{props.genre}</p>
      </div>
    </StyledSingleCard>
  );
};

const StyledSingleCard = styled.a`
  height: 100vh;
  width: 100vw;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 20px;
  background: #333332;
  color: #e1e1e1;

  img {
    width: 330px;
    height: auto;
    align-self: center;
  }

  ol {
    margin-left: 20px;
  }
`;
