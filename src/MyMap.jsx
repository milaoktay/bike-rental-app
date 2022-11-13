import React from "react";
import { Map, Marker, ZoomControl, Overlay } from "pigeon-maps";
import { useState } from "react";

export function MyMap(props) {
  const { providers, status, zoom } = props;
  const [lat, lng] = props.position;
  //Overlay on click on marker state
  const [overlay, setOverlay] = useState({
    isOpen: false,
    name: "",
    location: [],
  });

  //Overlay on click on marker function
  const handleMarkerClick = (ele) => {
    const updatedOverlay = {
      isOpen: true,
      name: ele.name,
      location: [ele.location.latitude, ele.location.longitude],
    };
    setOverlay({ ...updatedOverlay });
  };

  return status == null ? (
    <Map height={450} center={[lat, lng]} zoom={zoom}>
      {providers.map((ele, i) => (
        <Marker
          key={i}
          width={50}
          anchor={[ele.location.latitude, ele.location.longitude]}
          onClick={() => handleMarkerClick(ele)}
        />
      ))}
      <ZoomControl />
      {overlay.isOpen && (
        <Overlay anchor={overlay.location} offset={[120, 79]}>
          <h3>{overlay.name}</h3>
        </Overlay>
      )}
    </Map>
  ) : (
    status
  );
}
