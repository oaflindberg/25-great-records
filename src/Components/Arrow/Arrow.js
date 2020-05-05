import React from "react";
import styled from "styled-components";

const Arrow = (props) => {
  return (
    <StyledLinks href={props.href}>
      <h1>{props.arrow}</h1>
    </StyledLinks>
  );
};

const StyledLinks = styled.a`
  height: 35px;
  width: 35px;
  font-weight: bold;
`;

export default Arrow;
