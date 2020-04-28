import React, { useEffect, useState } from "react";
import { Card } from "./../Components/Card/Card";
import styled from "styled-components";
import "./../App.css";
import client from "./../contentful";

const Home = () => {
  const [record, setRecord] = useState(null);

  useEffect(() => {
    client
      .getEntries({
        content_type: "record",
      })
      .then((entries) => {
        setRecord(entries.items);
      });
  }, []);

  return (
    <StyledHome>
      {record &&
        record.map((record, i) => {
          return (
            <Card
              slug={record.fields.slug}
              key={i}
              artist={record.fields.artist}
              title={record.fields.title}
              img={record.fields.cover.fields.file.url}
              alt={record.fields.title}
            ></Card>
          );
        })}
    </StyledHome>
  );
};

const StyledHome = styled.div`
  width: 100vw;
  display: flex;
  background: salmon;
  justify-content: center;
  flex-wrap: wrap;
`;

export default Home;
