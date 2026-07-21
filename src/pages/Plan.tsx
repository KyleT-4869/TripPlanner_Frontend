import { useState, useRef } from 'react'
import Button from '../components/Button.tsx'

function Plan() {
    const startingAddress = useRef<string>("");
    const startingCity = useRef<string>("");
    const startingState = useRef<string>("");
    const destinationAddress = useRef<string>("");
    const destinationCity = useRef<string>("");
    const destinationState = useRef<string>("");
    
    const API_URL:string = import.meta.env.VITE_API_URL;

    // async function callNominatim(url:string) {
    //     try {
    //         const response:any = await fetch(url)

    //         if(!response.ok) {
    //             throw new Error(`Response status:  + ${response.status}`)
    //         }
    //         const result:any =  await response.json();
    //         return result[0];
           
    //     } catch(e:any) {
    //         console.log(e.message);
    //     }
    // }

    // function delay(ms:any) {
    //     return new Promise(resolve => {
    //         setTimeout(resolve, ms);
    //     });
    // }

    // async function handleClick(e:any) {
    //     e.preventDefault();

    //     const startingNomiatimParams = new URLSearchParams({
    //         q: `${startingAddress.current}, ${startingCity.current}, ${startingState.current}`,
    //         format: "json",
    //         addressdetails: "1",
    //         limit: "1",
    //         countrycodes: "us",
    //     });

    //     const destinationNominatimParams = new URLSearchParams({
    //         q: `${destinationAddress.current}, ${destinationCity.current}, ${destinationState.current}`,
    //         format: "json",
    //         addressdetails: "1",
    //         limit: "1",
    //         countrycodes: "us"
    //     });

    //     const startingUrl:string = `${NOMINATIM_SEARCH_URL}${startingNomiatimParams}`;
    //     const destinationUrl:string =  `${NOMINATIM_SEARCH_URL}${destinationNominatimParams}`;

    //     const startingCoordinates = await callNominatim(startingUrl);

    //     await delay(1000);

    //     const destinationCoordinates = await callNominatim(destinationUrl);

    //     console.log(destinationCoordinates);
    //     console.log(startingCoordinates);
        
    // }

    async function handleClick(e:any) {
        e.preventDefault();
        const startAddress:string = `${startingAddress.current},${startingCity.current},${startingState.current}`;
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
        <>
            <div className="PlanPage">
                <form>
                    <div className="StartingLocationDiv">

                        <div className="StartingAddressDiv">
                            <label htmlFor="startingLocation">Address</label>
                            <input
                                id="startingAddress" 
                                type="text"
                                required
                                className="StartingAddressInput"
                                onChange={(e) => startingAddress.current = e.target.value}
                                placeholder="Starting Address"
                            />
                        </div>
                        
                        <div className="StartingCityDiv">
                            <label htmlFor="startingCity">City</label>
                            <input
                                id="startingCity"
                                type="text"
                                required
                                className="startingCityInput"
                                onChange={(e) => startingCity.current = e.target.value}
                                placeholder ="Starting City"
                            />
                        </div>
                        
                        <div className="StartingStateDiv">
                            <label htmlFor="startingState">State</label>
                            <input
                                id="startingState"
                                type="text"
                                required
                                className="startingStateInput"
                                onChange={(e) => startingState.current = e.target.value}
                                placeholder ="Starting State"
                            />
                        </div>
                        
                    </div>

                    <div className="DestinationDiv">

                        <div className="DestinationAddressDiv">
                            <label htmlFor="destinationAddress">Address</label>
                            <input
                                id="destinationAddress"
                                type="text"
                                required
                                className="destinationAddressInput"
                                onChange={(e) => destinationAddress.current = e.target.value}
                                placeholder="Destination State"
                            />
                        </div>

                        <div className="DestinationCityDiv">
                            <label htmlFor="destinationCity">City</label>
                            <input
                                id="destinationCity"
                                type="text"
                                required
                                className="destinationCityInput"
                                onChange={(e) => destinationCity.current = e.target.value}
                                placeholder="Destination City"
                            />
                        </div>

                        <div className="DestinationStateDiv">
                            <label htmlFor="destinationState">State</label>
                            <input
                                id="destinationState"
                                type="text"
                                required
                                className="destinationStateInput"
                                onChange={(e) => destinationState.current = e.target.value}
                                placeholder="Destination State" 
                            />
                        </div>

                    </div>

                    <input type="submit" value="Submit" onClick={handleClick}/>
            </form>
            </div>
            
        </>
    )
}

export default Plan