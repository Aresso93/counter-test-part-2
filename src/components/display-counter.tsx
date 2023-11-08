import { ReactNode } from "react"

export interface DisplayCounterProps{
    value: number
    children: ReactNode
}
export function DisplayCounter(props: DisplayCounterProps){

    return (
        <div className="counter">{props.value}</div>
    )
}