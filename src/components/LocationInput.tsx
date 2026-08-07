import { useRef } from 'react'
import  "../styles.css"

type LocationInputProps = {
    functionToCall: (
        startLocationString: string | null, 
        endLocationString: string | null,
    ) => Promise<void>;
}

function LocationInput({functionToCall} : LocationInputProps) {
    const originAddress = useRef<string>("");
    const originCity = useRef<string>("");
    const originState = useRef<string>("");
    const destinationAddress = useRef<string>("");
    const destinationCity = useRef<string>("");
    const destinationState = useRef<string>("");


    async function handleSubmit(e:React.SubmitEvent<HTMLElement>) {
        e.preventDefault();

        const startAddress:string = `${originAddress.current},${originCity.current},${originState.current}`;
        const destination:string = `${destinationAddress.current},${destinationCity.current},${destinationState.current}`;

        await functionToCall(startAddress, destination);
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