
interface contentProps{
    children?: any
    className?: string
}

export default function Content(props:contentProps){
    return (
        <div className={`          
           bg-gradient-to-b
           from-zinc-600 dark:from-zinc-900
           via-zinc-100 dark:via-zinc-500
            to-zinc-500 dark:to-zinc-900

            flex justify-center items-center flex-1 
            text-3xl p-5 gap-2 text-zinc-600 dark:text-zinc-200
            ${props.className ?? ''}
        `}>
            {props.children}
        </div>
    )
}