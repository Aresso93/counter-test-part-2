export interface WrapperProps{}

export function Wrapper({title, children}){
    
    return (
        
        <div className="wrapper-div">
            {title}
            {children}
        </div>
        
    )

}