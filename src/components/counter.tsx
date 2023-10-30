import { ControlCounter } from "./control-counter";
import { DisplayCounter } from "./display-counter";
import { useControls } from "./hooks/useControls";
import { Wrapper } from "./wrapper";

export function Counter(){

    const controls = useControls()

    return (
        <>  
        <Wrapper>
        <DisplayCounter
        value={controls.state.counter}
        />
        </Wrapper>

        <Wrapper>

        <ControlCounter
        actions={controls.actions}
        />
        </Wrapper>

        </>
    )

}