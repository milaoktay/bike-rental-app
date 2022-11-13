import React from "react";
import { Map, Marker, ZoomControl } from "pigeon-maps";
import { useEffect, useState } from "react";

export function MyMap(props) {
  const providers = props.providers;
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    (async () => {
      if (!navigator.geolocation) {
        setStatus("Geolocation is not supported by your browser");
      } else {
        setStatus("Locating...");
        await navigator.geolocation.getCurrentPosition(
          (position) => {
            setStatus(null);
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
          },
          () => {
            setStatus("Unable to retrieve your location");
          }
        );
      }
    })();
  }, []);
  console.log(status, lat, lng);

  return status == null ? (
    <Map height={500} defaultCenter={[lat, lng]} defaultZoom={9}>
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
