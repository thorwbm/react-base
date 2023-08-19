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
            bg-gradient-to-b from-zinc-900 to-black
            ${props.className ?? ''}

        `}>
            <span>{props.leftText}</span>
            <span>{props.rightText}</span>
        </div>
    )
}