
interface contentProps{
    children?: any
    className?: string
}

export default function Content(props:contentProps){
    return (
        <div className={`          
            flex justify-center items-center flex-1 
            text-3xl p-5 gap-2 text-zinc-600 dark:text-zinc-200
            bg-zinc-200 dark:bg-zinc-500
            ${props.className ?? ''}
        `}>
            {props.children}
        </div>
    )
}