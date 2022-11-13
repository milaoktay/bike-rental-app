import React from "react";
import { Map, Marker, ZoomControl } from "pigeon-maps";

export function MyMap(props) {
  const { providers, status, zoom } = props;
  const [lat, lng] = props.position;

  return status == null ? (
    <Map height={500} center={[lat, lng]} zoom={zoom}>
      {providers.map((ele, i) => (
        <Marker
          key={i}
          width={50}
          anchor={[ele.location.latitude, ele.location.longitude]}
        />
      ))}
      <ZoomControl />
    </Map>
  ) : (
    status
  );
}
