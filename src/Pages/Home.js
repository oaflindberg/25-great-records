import React, { useEffect, useState } from "react";
import { Card } from "./../Components/Card/Card";
import styled from "styled-components";
import "./../App.css";
import { Link } from "@reach/router";
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
    <div>
      <StyledHome>
        {record &&
          record.map((record, i) => {
            return (
              <Link key={i} to={`/record/${record.fields.slug}`}>
                <Card
                  key={i}
                  img={record.fields.cover.fields.file.url}
                  alt={record.fields.title}
                ></Card>
              </Link>
            );
          })}
      </StyledHome>
    </div>
  );
};

const StyledHome = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #c3d2cf;
  scroll-snap-type: x mandatory;
  overflow-x: scroll;
  scroll-padding: 0 50%;
`;

export default Home;
