import { useRef } from 'react'
import  "../styles.css"
import type { RouteData } from '../types/RouteData';

type LocationInputProps = {
    setRoute: (route: RouteData | null) => void;
}

function LocationInput({setRoute} : LocationInputProps) {
    const originAddress = useRef<string>("");
    const originCity = useRef<string>("");
    const originState = useRef<string>("");
    const destinationAddress = useRef<string>("");
    const destinationCity = useRef<string>("");
    const destinationState = useRef<string>("");

    const API_URL:string = import.meta.env.VITE_API_URL;

    async function handleSubmit(e:any) {
        e.preventDefault();
        const startAddress:string = `${originAddress.current},${originCity.current},${originState.current}`;
        const destination:string = `${destinationAddress.current},${destinationCity.current},${destinationState.current}`;
        const url = `${API_URL}/callNominatim/start/${startAddress}/dest/${destination}`;
        
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
        <div className="LocationInput">
            <form className="LocationForm" onSubmit={handleSubmit}>
                <div className="Origin">
                    <div className="OriginAddress">
                        <label htmlFor="originAddress">Starting Address</label>
                        <input
                            id="originAddress"
                            type="text"
                            required
                            className="originAddressInput"
                            onChange={(e) => originAddress.current = e.target.value}/>
                    </div>

                    <div className="OriginCity">
                        <label htmlFor="originCity">Starting City</label>
                        <input
                            id="originCity"
                            type="text"
                            required
                            className="originCityInput"
                            onChange={(e) => originCity.current = e.target.value}/>
                    </div>

                    <div className="OriginState">
                        <label htmlFor="originState">Starting State</label>
                        <input
                            id="originState"
                            type="text"
                            required
                            className="originStateInput"
                            onChange={(e) => originState.current = e.target.value}/>
                    </div>
                </div>

                <div className="Destination">
                    <div className="DestinationAddress">
                        <label htmlFor='destinationAddress'>Destination Address</label>
                        <input
                            id="destinationAddress"
                            type="text"
                            required
                            className="destinationAddressInput"
                            onChange={(e) => destinationAddress.current = e.target.value}/>
                    </div>

                    <div className="DestinationCity">
                        <label htmlFor="destinationCity">Destination City</label>
                        <input
                            id="destinationCity"
                            type="text"
                            required
                            className="destinationCityInput"
                            onChange={(e) => destinationCity.current = e.target.value}/>
                    </div>

                    <div className="DestinationState">
                        <label htmlFor="destinationState">Destination State</label>
                        <input
                            id="destinationState"
                            type="text"
                            required
                            className="destinationStateInput"
                            onChange={(e) => destinationState.current = e.target.value}/>
                    </div>
                </div>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default LocationInput