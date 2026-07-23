import { useState, useRef, useEffect } from 'react'
import Map from "./Map.tsx"
import LocationInput from '../components/LocationInput.tsx';

function Plan() { 
    return(
        <>
            <div className="PlanPage">
                <LocationInput/>
            </div>
        </>
    )
}

export default Plan