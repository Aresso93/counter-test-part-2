import { ReactNode } from "react"

export interface WrapperProps{
    title: string,
    children: ReactNode
}

export function Wrapper(props:WrapperProps){
    
    return (
        
        <div className="wrapper-div">
            {props.title}
            {props.children}
        </div>
        
    )

}