import { useControls } from "./hooks/useControls"

export interface ControlProps{
    actions: {
        reset: () => void;
        addition: VoidFunction;
        subtraction: VoidFunction;
    }
}

export function ControlCounter(props:ControlProps){

    return (
        <div>
            <button onClick={()=>{
                props.actions.reset()
            }}>
            Resetta
            </button>

            <button
            onClick={()=>{
                props.actions.addition()
            }}>
            Aumenta
            </button>

            <button
            onClick={()=>{
               props.actions.subtraction()
            }}>
            Diminuisci
            </button>
        </div>
    )
}