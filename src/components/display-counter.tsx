export interface DisplayCounterProps{
    value: number
    children
}
export function DisplayCounter(props: DisplayCounterProps){

    return (
        <div className="counter">{props.value}</div>
    )
}