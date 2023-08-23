import { IconFishHook } from "@tabler/icons-react";
import Link from "next/link";
import Flex from "./Flex";

interface LogoProps {
    subtitulo?: string
    grande?: boolean
    col?: boolean
    className?: string
    gradiente?: boolean
}

export default function Logo(props: LogoProps) {
    return (
        <Link href="/" className="cursor-pointer w-max[20%]">
            <Flex col={props.col} centerCross className={props.className}>
                <div
                    className={`
                    flex justify-center items-center
                    bg-blue-500 rounded-lg 
                    ${props.grande ? "w-[150px] h-[150px]" : "w-[50px] h-[50px]"}
                `}
                >
                    <IconFishHook size={props.grande ? 100 : 30} />
                </div>
                <Flex col centerCross gap={0}>
                    <div
                        className={`
                        ${props.grande ? "text-4xl" : "text-2xl"}
                        font-black
                    `}
                    >
                        <div className="flex flex-col justify-center items-center gap-1">
                            <span className={` 
                                ${props.gradiente ? 
                                       'bg-gradient-to-r from-blue-400 to-cyan-100 bg-clip-text text-transparent ' : 
                                       ''}
                            `}>
                                FELUMA
                            </span> 
                            <span className="text-sm text-cyan-300 drop-shadow-2xl shadow-blue-900">
                                SISTEMA OSCE
                            </span> 
                        </div>
                        

                    </div>
                    {props.subtitulo && <div className="text-zinc-500 text-sm">{props.subtitulo}</div>}
                </Flex>
            </Flex>
        </Link>
    );
}
