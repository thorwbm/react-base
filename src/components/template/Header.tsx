interface HeaderProps{
    title: string
    subTitle: string
    className?: string
}

export default function Header(props: HeaderProps){
    return (
        <div className={`
            flex flex-col justify-center px-5 py-5
            bg-gradient-to-b from-zinc-800  dark:from-black to-zinc-600 dark:to-zinc-900
            ${props.className ?? ''}
        `}>
            <h1 className={`text-xl font-black text-white dark:text-zinc-200`}>
                {props.title}
            </h1>
            <h2 className="text-sm text-zinc-200 dark:text-zinc-400">{props.subTitle}</h2>


        </div>
    )
}