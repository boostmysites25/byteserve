import React, { useEffect, useRef, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix for default icon
let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = () => {
  // Use useMemo to memoize the location array for Powai
  const location = useMemo(() => [19.1187, 72.9074], []);

  const mapRef = useRef(); // Reference to the map

  // Center the map to the location when it loads
  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView(location, 14); // Set view to the location and zoom level
    }
  }, [location]); // Now location will not change on every render

  return (
    <MapContainer
      center={location}
      zoom={14}
      style={{ height: "70vh", width: "100%", zIndex: 0 }}
      whenCreated={(mapInstance) => (mapRef.current = mapInstance)} // Save the map instance to ref
      scrollWheelZoom={false} // Disable zooming with the scroll wheel
      zoomControl={false} // Disable zoom control
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      />
      <Marker position={location}>
        <Popup>Powai, Mumbai</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
