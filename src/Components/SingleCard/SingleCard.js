import React from "react";
import styled from "styled-components";
import Arrow from "../Arrow/Arrow";

export const SingleCard = (props) => {
  return (
    <StyledSingleCard>
      <Arrow href="/" arrow="&#8592;" />
      <RecordInfo>
        <h2>
          {props.artist} - {props.title}
        </h2>
        <P>{props.released}</P>
        <P>{props.genre}</P>
      </RecordInfo>
      <A href={props.spotifyUrl}>
        <Img src={props.img} alt={props.alt}></Img>
      </A>
      <TrackList>
        <h4>Tracklist:</h4>
        {props.tracklist}
      </TrackList>
    </StyledSingleCard>
  );
};

const StyledSingleCard = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 20px;
  background: #333332;
  color: #e1e1e1;
  font-family: "Lato", sans-serif;

  @media screen and (min-width: 1024px) {
    display: grid;
    height: 100vh;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 1fr);
  }

  ol {
    margin: 10px 0 20px 15px;
    font-size: 14px;
  }
`;

const RecordInfo = styled.div`
  @media screen and (min-width: 1024px) {
    grid-column: 3/7;
    grid-row: 4 / 6;
    align-self: center;
  }
`;

const P = styled.p`
  font-size: 12px;
`;

const A = styled.a`
  @media screen and (min-width: 1024px) {
    grid-column: 7/12;
    grid-row: 4/8;
    justify-self: center;
  }
`;

const Img = styled.img`
  width: 330px;
  height: auto;
  border-radius: 2px;
  margin: 20px 0;
  box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.3);

  @media screen and (min-width: 1024px) {
    grid-column: 7/12;
    grid-row: 4/8;
    width: 450px;
    justify-self: center;
    align-self: center;
    transition: 250ms ease;
    -webkit-box-reflect: below 10px;
    -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left
          bottom, from(transparent), color-stop(60%, transparent), to(rgba(250, 250, 250, 0.1)));

    :hover {
      transform: scale(1.03);
    }
  }
`;

const TrackList = styled.div`
  @media screen and (min-width: 1024px) {
    grid-column: 3/7;
    grid-row: 6/8;
    align-self: start;
  }
`;
