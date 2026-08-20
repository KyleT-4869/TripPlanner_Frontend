import { useRef } from 'react'
import  "../styles.css"

type LocationInputProps = {
    functionToCall: (
        startLocationString: string | null, 
        endLocationString: string | null,
    ) => Promise<void>;
}

function LocationInput({ functionToCall } : LocationInputProps) {
    const startLocation = useRef<string>("");
    const endLocation = useRef<string>("");
    const transportMethod = useRef<string>("car");
    


    async function handleSubmit(e:React.SubmitEvent<HTMLElement>) {
        e.preventDefault();
        
        await functionToCall(startLocation.current, endLocation.current);
        // // const startAddress:string = `${originAddress.current},${originCity.current},${originState.current}`;
        // // const destination:string = `${destinationAddress.current},${destinationCity.current},${destinationState.current}`;

        // await functionToCall(startAddress, destination);
    }

    return(
        <div className="LocationInput">
            <form className="LocationForm" onSubmit={handleSubmit}>
                <div className="StartEndInput">
                    <div className="startLocationDiv">
                        <label htmlFor="startLocation">Start Location:</label>
                        <input 
                            id="startLocation" 
                            type="text" 
                            required 
                            className="startLocationInput"
                            onChange={(e) => {startLocation.current = e.target.value}}
                        />
                    </div>
                    <div className="EndLocationDiv">
                        <label htmlFor='endLocation'>End Location:</label>
                        <input
                            id="endLocation"
                            type="text"
                            required
                            className="endLocationInput"
                            onChange={(e) => {endLocation.current = e.target.value}}
                        />
                    </div>
                </div>
                
                <div className="TransportationChoice">
                    <fieldset>
                        <legend>Transportation method: </legend>
                        <div>
                            <label htmlFor="car">Car</label>
                            <input
                                type="radio"
                                id="car"
                                name="transportChoice"
                                value="car"
                                defaultChecked
                                onChange={(e) => {transportMethod.current = e.target.value}}
                            />
                            
                            <label htmlFor="walking">Walking</label>
                            <input
                                type="radio"
                                id="walking"
                                name="transportChoice"
                                value="walking"
                                onChange={(e) => {transportMethod.current = e.target.value}}
                            />
                            
                            <label htmlFor="bicycle">Bicycle</label>
                            <input
                                type="radio"
                                id="bicycle"
                                name="transportChoice"
                                value="bicycle"
                                onChange={(e) => {transportMethod.current = e.target.value}}
                            />

                            <label htmlFor="plane">Plane</label>
                            <input
                                type="radio"
                                id="plane"
                                name="transportChoice"
                                value="plane"
                                onChange={(e) => {transportMethod.current = e.target.value}}
                            />
                        
                        </div>
                    </fieldset>
                </div>

                <div className="AmenitiesSelect">
                    <fieldset>
                        <legend>Show me: </legend>
                        <div>
                            <label>
                                Restaurant
                                <input
                                    type="checkbox"
                                    name="amenities"
                                    id="restaurant"
                                    value="restaurant"
                                />
                            </label>

                            <label>
                                Gas station
                                <input
                                    type="checkbox"
                                    name="amenities"
                                    id="gasStation"
                                    value="gasStation"
                                />
                            </label>

                        </div>
                    </fieldset>
                </div>
                
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default LocationInput