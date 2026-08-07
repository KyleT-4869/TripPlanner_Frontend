import { useState } from 'react'
import Map from "./Map.tsx"
import type { RouteData } from '../types/RouteData.ts';
import LocationInput from '../components/LocationInput.tsx';
import '../styles/Plan.css';

function Plan() {
    const [route, setRoute] = useState<RouteData | null>(null);
    const API_URL:string = import.meta.env.VITE_API_URL;
    
    async function functionToPass(startLocationString: string | null, endLocationString: string | null) {
        const url:string = `${API_URL}/route/getRoute?origin=${startLocationString}&dest=${endLocationString}`;

        try {
            const response = await fetch(url);

            if(!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            else {
                const result = await response.json();
                const route: RouteData = result;
                setRoute(route);
                console.log(result);
            }
        } catch(err:any) {
            console.log(err);
        }
    }

    return(
        <>
            <div className="PlanPage">
                <div className="MapContainer">
                    <Map route={route} />
                </div>
                <div className="LocationInputContainer">
                    <LocationInput functionToCall={functionToPass}/>
                </div>
            </div>
        </>
    )
}

export default Plan