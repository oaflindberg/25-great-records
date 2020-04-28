import React, { useEffect, useState } from "react";
import client from "./../contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { SingleCard } from "./../Components/SingleCard/SingleCard";

const Single = (props) => {
  const [record, setRecord] = useState(null);

  useEffect(() => {
    client
      .getEntries({
        content_type: "record",
        "fields.slug": props.slug,
      })
      .then((entries) => {
        setRecord(entries.items[0]);
      });
  }, [props.slug]);

  return (
    <div>
      <SingleCard
        artist={record && record.fields.artist}
        title={record && record.fields.title}
        img={record && record.fields.cover.fields.file.url}
        alt={record && record.fields.title}
        tracklist={record && documentToReactComponents(record.fields.trackList)}
        released={`Released: ${record && record.fields.releaseDate}`}
        genre={`Genre: ${record && record.fields.genre}`}
      />
    </div>
  );
};

export default Single;
