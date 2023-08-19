
import { IconHome, Icon360View, Icon123, Icon24Hours, Icon3dCubeSphereOff } from "@tabler/icons-react";
import MenuItem from "./MenuItem";
import GroupMenu from "./GroupMenu";

interface MenuProps{
    className?: string 
}

export default function Menu(props:any){
    return (
        <div className={`
            flex flex-col justify-start flex-1
            text-xl gap-1 
            ${props.className ?? ''}
        `}>  
            <GroupMenu texto="conceitos"/>
                <MenuItem icone={<Icon123 />} label="Primeiro Conceito" url="/"/>
                <MenuItem icone={<Icon24Hours />} label="segundo Conceito" url="/"/>
                <MenuItem icone={<Icon3dCubeSphereOff />} label="terceiro Conceito" url="/"/>
            <GroupMenu texto="conceitos"/>
            <GroupMenu texto="conceitos"/>
            <GroupMenu texto="conceitos"/>
            
        </div>
    )
}