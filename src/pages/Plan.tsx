import { useState, useRef } from 'react'
import Button from '../components/Button.tsx'

function Plan() {
    const address = useRef<string>("");
    const city = useRef<string>("");
    const state = useRef<string>("");
    
    const NOMINATIM_SEARCH_URL:string = "https://nominatim.openstreetmap.org/search?";
    const COUNTRY:string = "United States"

    async function handleClick(e:any) {
        e.preventDefault();
        // console.log(address.current);
        // console.log(city.current);
        // console.log(state.current);

        const params = new URLSearchParams({
            q: `${address.current}, ${city.current}, ${state.current}`,
            format: "json",
            addressdetails: "1",
            limit: "1",
            countrycodes: "us",
        })

        const url = `${NOMINATIM_SEARCH_URL}${params}`;
        try {
            const response:any = await fetch(url)

            if(!response.ok) {
                throw new Error(`Response status:  + ${response.status}`)
            }
            const result:any =  await response.json();
            const place = result[0];
            console.log(place.lat);
            console.log(place.lon);
            console.log(place.display_name);
            console.log(result);

        } catch(e:any) {
            console.log(e.message);
        }
    }
    return(
        <>
            <form>
                <input 
                    type="text"
                    required
                    className="addressInput"
                    onChange={(e) => address.current = e.target.value}
                    placeholder="Address"
                />

                <input
                    type="text"
                    required
                    className="cityInput"
                    onChange={(e) => city.current = e.target.value}
                    placeholder ="City"
                />

                <input
                    type="text"
                    required
                    className="stateInput"
                    onChange={(e) => state.current = e.target.value}
                    placeholder ="State"
                />

                <input type="submit" value="Submit" onClick={handleClick}/>
            </form>
        </>
    )
}

export default Plan