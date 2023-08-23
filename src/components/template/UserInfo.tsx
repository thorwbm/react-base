import { IconDotsVertical } from "@tabler/icons-react"
import thor from "../../image/programathor.png"
import Image from "next/image"

interface UserInfoProps{
    nome: string
    email: string
    imagemUrl: string | null
    className?: string
}


export default function UserInfo(props: UserInfoProps){

    return(
        <div className={`flex gap-2 items-center ${props.className ?? ''}`}>
            <Image 
                src={props.imagemUrl ?? thor}
                alt="Avatar"
                className="rounded-full"
                style={{
                    width: '40px',
                    height: '40px',
                }}

            />
            <div className={`flex flex-col f-1`}>
                <span className={`text-sm max-w-[200px]`}>{props.nome}</span>
                <span className={`text-xs `}>{props.email}</span>
            </div>
            <IconDotsVertical className=""/>
        </div>
    )
}