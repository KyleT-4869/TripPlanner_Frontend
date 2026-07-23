import { useRef } from 'react'
import  "../styles.css"

interface inputFormProps {
    handleSubmit: (e:any) => void;
}

function LocationInput() {
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
                const result = await response.json;
                console.log(result);
            }
        } catch(err:any) {
            console.log(err);
        }
    }

    return(
        <div className="LocationInput">
            <form>
                <div className="Origin">
                    <div className="OriginAddress">
                        <label htmlFor="originAddress">Starting Address</label>
                        <input
                            id="originAddress"
                            type="text"
                            required
                            className="originAddressInput"/>
                    </div>

                    <div className="OriginCity">
                        <label htmlFor="originCity">Starting City</label>
                        <input
                            id="originCity"
                            type="text"
                            required
                            className="originCityInput"/>
                    </div>

                    <div className="OriginState">
                        <label htmlFor="originState">Starting State</label>
                        <input
                            id="originState"
                            type="text"
                            required
                            className="originStateInput"/>
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
                        />
                    </div>

                    <div className="DestinationCity">
                        <label htmlFor="destinationCity">Destination City</label>
                        <input
                            id="destinationCity"
                            type="text"
                            required
                            className="destinationCityInput"
                        />
                    </div>

                    <div className="DestinationState">
                        <label htmlFor="destinationState">Destination State</label>
                        <input
                            id="destinationState"
                            type="text"
                            required
                            className="destinationStateInput"
                        />
                    </div>
                </div>
                <input type="submit" value="Submit" onClick={handleSubmit}/>
            </form>
        </div>
    )
}

export default LocationInput