import { useState, useRef } from 'react'
import Button from '../components/Button.tsx'

function Plan() {
    const address = useRef<string>("");
    const city = useRef<string>("");
    const country = useRef<string>("");
    // const [address, setAddress] = useState<string>("");
    // const [city, setCity] = useState<string>("");
    // const [country, setCountry] = useState<string>("");
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
                    className="countryInput"
                    onChange={(e) => country.current = e.target.value}
                    placeholder ="Country"
                />
            </form>
        </>
    )
}

export default Plan