import { DisplayCounter } from "./display-counter";
import { Wrapper } from "./wrapper";

export interface DisplayCounterProps{
    value: number
}

export function WrapperDisplayCounter(props:DisplayCounterProps){

    return ( 
    <>
    <Wrapper
    title={'Display'}
    >
    <DisplayCounter 
    value={props.value}>
    </DisplayCounter>
    </Wrapper>
    </>
    )
}