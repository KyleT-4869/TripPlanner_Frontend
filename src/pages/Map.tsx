import { useEffect, useState } from 'react'
import type { RouteData } from '../types/RouteData'
import L from "leaflet"
import "leaflet/dist/leaflet.css"

type MapProps = {
    route: RouteData | null;
}

function Map( { route } : MapProps) {
    useEffect(() => {
        const map = L.map("map");
        L.tileLayer(
                    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                    {
                        attribution: "&copy; OpenStreetMap contributors"
                    }
        ).addTo(map);
        if(route == null) {
            map.setView([36.7783, -119.4179], 13);
            return () => {
                map.remove();
            }
        }
        else {
            const positions: L.LatLngExpression[] = 
                route.geometry.coordinates.map(
                    coordinate => [
                        coordinate[1],
                        coordinate[0]
                    ] as L.LatLngExpression
                );

            const polyline = L.polyline(positions, {color: 'red'}).addTo(map);

            map.fitBounds(polyline.getBounds());

            return () => {
                map.remove();
            } 
        }
        
    }, [route])
    return(
        <>
            <div id="map"
            style={{
                height: "100%",
                width: "100%"
                }}>
            </div>
            
        </>
    )
}

export default Map