import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import React from 'react';

// Fix default icon issue in leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const MapSection = () => {
    const position = [19.17283333, 72.83333]; // [latitude, longitude]

    return (
        <section className="px-4 md:px-10 mt-16 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6">
                Locate Us 📍
            </h2>
            <div className="w-full h-[300px] md:h-[450px] rounded-xl overflow-hidden shadow-xl">
                <MapContainer
                    center={position}
                    zoom={13}
                    scrollWheelZoom={false}
                    style={{ height: '100%', width: '100%' }}
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            Apex Consultant Office <br /> Mumbai
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </section>
    );
};

export default MapSection;
