'use client'
import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import MaxWidthWrapper from './sharedUi/MaxWidthWrapper';

const defaultIcon = L.icon({
    iconRetinaUrl: markerIcon2x.src,
    iconUrl: markerIcon.src,
    shadowUrl: markerShadow.src,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

const Map = () => {
  return (
    
        <div className="w-full  flex justify-center bg-white h-96">
            <MapContainer
                className="h-full w-full z-10"
                center={[27.715186, 85.369466]}
                zoom={17}
                scrollWheelZoom={true}
            >
            <TileLayer
                attribution=" "
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[27.715186, 85.369466]} icon={defaultIcon}>
                <Popup>
                <div>
                    <p>EOS Web Solution</p>
                </div>
                </Popup>
            </Marker>
            </MapContainer>
        </div>
    
  )
}

export default Map