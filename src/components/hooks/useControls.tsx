import { useState } from "react"

export interface CounterControlProps{
    
}

export function useControls(){

    const [counter, setCounter] = useState(0) 

    const reset = () => {
        setCounter(0)
    }

    const addition = () => {
        setCounter(counter+1)
    }

    const subtraction = () => {
        setCounter(counter-1)
    }

    return {
        actions: 
        {
        reset, 
        addition, 
        subtraction,
        },
        state:{counter} 
        }
}