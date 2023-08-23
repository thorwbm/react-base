interface FooterProps{
    leftText?: string
    rightText?: string
    className?: string
}

export default function Footer(props: FooterProps){
    return (
        <div className={`
            flex justify-between items-center
            h-16 text-am px-10
            py-5
            bg-gradient-to-t from-zinc-600  dark:from-black to-zinc-500 dark:to-zinc-900
            ${props.className ?? ''}

        `}>
            <span className="text-sm text-zinc-200 dark:text-zinc-400">{props.leftText}</span>
            <span className="text-sm text-zinc-200 dark:text-zinc-400">{props.rightText}</span>
        </div>
    )
}