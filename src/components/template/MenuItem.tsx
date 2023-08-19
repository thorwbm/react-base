import Link from "next/link";

interface MenuItemProps{
    label: string
    url: string
    icone: any

}

export default function MenuItem(props:MenuItemProps){
    return(
        <Link href={props.url} className={`
            flex items-center 
            text-sm text-zinc-3 hover:bg-zinc-900
            gap-2 w-full rounded-md px-2 py-1            
        `}>
            <span>{props.icone}</span>
           <span>{props.label} </span> 
        </Link>
    )
}