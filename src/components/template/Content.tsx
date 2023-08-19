
interface contentProps{
    children?: any
    className?: string
}

export default function Content(props:contentProps){
    return (
        <div className={`          
            bg-zinc-900 
            flex justify-center items-center flex-1 
            text-3xl p-5 gap-2
            ${props.className ?? ''}
        `}>
            {props.children}
        </div>
    )
}