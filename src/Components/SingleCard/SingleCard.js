import React from "react";
import styled from "styled-components";

export const SingleCard = (props) => {
  return (
    <StyledSingleCard>
      <div className="record-info">
        <h2>
          {props.artist} - {props.title}
        </h2>
        <P>{props.released}</P>
        <P>{props.genre}</P>
      </div>
      <img src={props.img} alt={props.alt}></img>
      <div className="tracklist">
        <h4>Tracklist:</h4>
        {props.tracklist}
      </div>
    </StyledSingleCard>
  );
};

const StyledSingleCard = styled.div`
  height: 100vh;
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
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(12, 1fr);
  }

  img {
    width: 330px;
    height: auto;
    margin: 20px 0;

    @media screen and (min-width: 1024px) {
      grid-column: 7/12;
      grid-row: 5/8;
      width: 450px;
      justify-self: center;
      -webkit-box-reflect: below 10px;
      -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left
            bottom, from(transparent), color-stop(60%, transparent), to(rgba(250, 250, 250, 0.1)));
    }
  }

  .record-info {
    @media screen and (min-width: 1024px) {
      grid-column: 3/7;
      grid-row: 6 / 7;
    }
  }

  .tracklist {
    @media screen and (min-width: 1024px) {
      grid-column: 3/7;
      grid-row: 8/9;
    }
  }

  ol {
    margin: 20px 0 20px 20px;
    font-size: 14px;
  }
`;

const P = styled.p`
  font-size: 12px;
`;
