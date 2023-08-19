interface HeaderProps{
    title: string
    subTitle: string
    className?: string
}

export default function Header(props: HeaderProps){
    return (
        <div className={`
            flex flex-col justify-center px-5 py-5
            bg-gradient-to-b from-black to-zinc-900
            ${props.className ?? ''}
        `}>
            <h1 className={`text-xl font-black`}>
                {props.title}
            </h1>
            <h2 className="text-sm text-zinc-400">{props.subTitle}</h2>


        </div>
    )
}