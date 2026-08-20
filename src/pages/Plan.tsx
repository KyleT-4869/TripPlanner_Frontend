import { useState } from 'react'
import Map from "./Map.tsx"
import LocationInput from '../components/LocationInput.tsx'
import ErrorMessage from '../components/ErrorMessage.tsx'
import Loader from '../components/Loader.tsx'
import type { RouteData } from '../types/RouteData.ts'
import '../styles/Plan.css';

function Plan() {
    const [route, setRoute] = useState<RouteData | null>(null);
    const [hasError, setHasError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const API_URL:string = import.meta.env.VITE_API_URL;
    
    async function functionToPass(startLocationString: string | null, endLocationString: string | null) {
        const url:string = `${API_URL}/route/getRoute?origin=${startLocationString}&dest=${endLocationString}`;
        setLoading(true);
        try {
            const response = await fetch(url);

            if(!response.ok) {
                setHasError(true);
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
        finally {
            setLoading(false);
            setHasError(false);
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
                <div className="LoaderContainer">
                    {loading && <Loader/>}
                </div>
                <div className="ErrorContainer">
                    {hasError && <ErrorMessage errorMessage='Something went wrong'/>}
                </div>
            </div>
        </>
    )
}

export default Plan