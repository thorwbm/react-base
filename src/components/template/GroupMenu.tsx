interface GroupMenuProps{
    className?: string
    texto: string
}

export default function GroupMenu(props: GroupMenuProps){

    return(

        <div className="uppercase text-xs text-zinc-400 font-bold pt-4"> 
            {props.texto}
        </div>
    )
    
}