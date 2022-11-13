import React from "react";
import { Map, Marker, ZoomControl } from "pigeon-maps";

export function MyMap(props) {
  const providers = props.providers;
  const position = props.position;
  console.log(position);
  return (
    <Map
      height={500}
      defaultCenter={[position.latitude, position.longitude]}
      defaultZoom={5}
    >
      {providers.map((ele, i) => (
        <Marker
          key={i}
          width={50}
          anchor={[ele.location.latitude, ele.location.longitude]}
        />
      ))}
      <ZoomControl />
    </Map>
  );
}
