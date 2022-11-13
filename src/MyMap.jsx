import React from "react";
import { Map, Marker } from "pigeon-maps";

export function MyMap(props) {
  const providers = props.providers;

  return (
    <Map height={500} defaultCenter={[50.879, 4.6997]} defaultZoom={2}>
      {providers.map((ele, i) => (
        <Marker
          key={i}
          width={50}
          anchor={[ele.location.latitude, ele.location.longitude]}
        />
      ))}
    </Map>
  );
}
