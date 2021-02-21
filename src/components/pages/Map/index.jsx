import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

const MapPage = () => {
  const { latlng } = useParams();

  const position =
    latlng != "" && latlng
      ? [Number(latlng.split(",")[0]), Number(latlng.split(",")[1])]
      : [-6, 71.5];
  const zoomLevel = latlng != "" && latlng ? 6 : 2;

  const countries = useSelector(({ DataReducer: { data } }) => data);

  return (
    <div className="map">
      {countries.length && (
        <MapContainer center={position} zoom={zoomLevel} scrollWheelZoom={true}>
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://carto.com/attributions">OpenStreetMap</a> contributors'
          />

          {countries
            .filter(item => item.latlng.length && item.latlng)
            .map((item, i) => (
              <Marker key={i} position={item.latlng}>
                <Popup>
                  <h4>
                    {item.name}({item.alpha3Code})
                  </h4>
                  <NavLink
                    style={{ fontSize: "1.1rem" }}
                    to={`/specificCountry/${item.alpha3Code}`}>
                    More Info
                  </NavLink>
                </Popup>
              </Marker>
            ))}
        </MapContainer>
      )}
    </div>
  );
};

export default MapPage;
