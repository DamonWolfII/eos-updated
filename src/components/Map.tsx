'use client'
import React, { useEffect, useRef, useState } from 'react';
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
    const mapRef = useRef<L.Map>(null);
    const [showOverlay, setShowOverlay] = useState(false);

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            const map = mapRef.current;
            if (map) {
                if (e.ctrlKey) {
                    e.preventDefault();
                    setShowOverlay(false);
                    if (e.deltaY < 0) {
                        map.zoomIn();
                    } else {
                        map.zoomOut();
                    }
                } else {
                    setShowOverlay(true);
                }
            }
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Control") {
                setShowOverlay(false);
            }
        };

        document.addEventListener('wheel', handleWheel, { passive: false });
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyDown);

        return () => {
            document.removeEventListener('wheel', handleWheel);
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyDown);
        };
    }, []);

    return (
        <div className="w-full flex justify-center bg-white h-96 relative">
            {showOverlay && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
                    <p className="text-white text-xl font-semibold">Use Ctrl + Scroll to Zoom the map</p>
                </div>
            )}
            <MapContainer
                className="h-full w-full z-10"
                center={[27.715186, 85.369466]}
                zoom={17}
                scrollWheelZoom={false}
                ref={mapRef}
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
    );
};

export default Map;
