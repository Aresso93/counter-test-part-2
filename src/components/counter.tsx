import { useControls } from "./hooks/useControls";
import { WrapperControlCounter } from "./wrapper.control-counter";
import { WrapperDisplayCounter } from "./wrapper.display-counter";

export function Counter(){

    const controls = useControls()

    return (
        <>  
        Counterone
        <WrapperDisplayCounter 
        value={controls.state.counter} 
        >
       
        </WrapperDisplayCounter>

        <WrapperControlCounter 
        actions={controls.actions}>

        </WrapperControlCounter>
        </>
    )

}