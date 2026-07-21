import '../styles.css'
import { useEffect } from 'react'
import L from "leaflet"
import "leaflet/dist/leaflet.css"

function Map() {
    useEffect(() => {
        const map = L.map("map");
        map.setView([36.7783, -119.4179], 13);
        L.tileLayer(
            "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            {
                attribution: "&copy; OpenStreetMap contributors"
            }
        ).addTo(map);
        return () => {
            map.remove();
        }
    }, [])
    return(
        <>
            <div id="map"
            style={{
                height: "500px",
                width: "100%"
            }}></div>
        </>
    )
}

export default Map