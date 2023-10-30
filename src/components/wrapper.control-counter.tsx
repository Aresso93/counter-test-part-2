import { ControlCounter } from "./control-counter";
import { Wrapper } from "./wrapper";

export interface ControlProps{
    actions: {
        reset: () => void;
        addition: VoidFunction;
        subtraction: VoidFunction;
    }
}


export function WrapperControlCounter(props:ControlProps){


    return ( 
    <>
    <Wrapper
    title={'Controlli'}>
    <ControlCounter
    actions={props.actions}
    >
        
    </ControlCounter>
    </Wrapper>
    </>
    )
}