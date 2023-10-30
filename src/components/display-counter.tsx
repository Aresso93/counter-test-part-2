export interface DisplayCounterProps{
    value: number
}
export function DisplayCounter(props: DisplayCounterProps){

    return (
        <div className="counter">{props.value}</div>
    )
}