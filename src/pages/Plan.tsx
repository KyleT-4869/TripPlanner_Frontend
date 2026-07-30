import { useState } from 'react'
import Map from "./Map.tsx"
import type { RouteData } from '../types/RouteData.ts';
import LocationInput from '../components/LocationInput.tsx';
import '../styles/Plan.css';

function Plan() {
    const [route, setRoute] = useState<RouteData | null>(null);
    
    return(
        <>
            <div className="PlanPage">
                <div className="MapContainer">
                    <Map route={route} />
                </div>
                <div className="LocationInputContainer">
                    <LocationInput setRoute={setRoute}/>
                </div>
            </div>
        </>
    )
}

export default Plan