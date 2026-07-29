import { useState } from 'react'
import Map from "./Map.tsx"
import type { RouteData } from '../types/RouteData.ts';
import LocationInput from '../components/LocationInput.tsx';
import '../styles.css';

function Plan() {
    const [route, setRoute] = useState<RouteData | null>(null);
    
    return(
        <>
            <div className="PlanPage">
                <Map route={route} />
                <div className="LocationInputContainer">
                    <LocationInput setRoute={setRoute}/>
                </div>
            </div>
        </>
    )
}

export default Plan