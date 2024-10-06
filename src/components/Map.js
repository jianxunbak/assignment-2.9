import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const defaultIcon = new L.Icon({
  iconUrl: require("../dengue-fever.png"), // Path to marker icon
  iconSize: [50, 50], // Size of the icon
  iconAnchor: [7, 20], // Point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"), // Path to shadow icon
  shadowSize: [41, 41], // Size of the shadow
});

const Map = ({ coordinates }) => {
  const position = [1.3521, 103.8198];
  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "800px", width: "90%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {coordinates.map((coord, index) => (
        <Marker key={index} position={[coord[1], coord[0]]} icon={defaultIcon}>
          <Popup>
            Longitude: {coord[0]}, Latitude: {coord[1]}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
