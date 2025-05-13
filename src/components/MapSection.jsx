import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import { Icon, Style } from 'ol/style';

const MapSection = () => {
    const mapRef = useRef();

    useEffect(() => {
        const coordinates = fromLonLat([72.84616, 19.10026]);

        const marker = new Feature({
            geometry: new Point(coordinates),
        });

        marker.setStyle(
            new Style({
                image: new Icon({
                    src: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', // or your own marker icon
                    anchor: [0.5, 1],
                    scale: 0.05,
                }),
            })
        );

        const vectorLayer = new VectorLayer({
            source: new VectorSource({
                features: [marker],
            }),
        });

        new Map({
            target: mapRef.current,
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
                vectorLayer,
            ],
            view: new View({
                center: coordinates,
                zoom: 17,
            }),
        });
    }, []);

    return (
        <section className="px-4 md:px-10 mt-16 mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-6">
                Locate Us 📍
            </h2>
            <div
                ref={mapRef}
                style={{ height: '350px', width: '100%' }}
                className="rounded-xl overflow-hidden shadow-md"
            />
        </section>
    );
};

export default MapSection;
