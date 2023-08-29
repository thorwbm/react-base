'use client'

import {useState } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Logo from "./Logo";
import Menu from "./Menu";
import UserInfo from "./UserInfo";
import { IconMoon, IconSun } from "@tabler/icons-react";

interface PageProps {
    title: string
    subTitle: string
    children?: any
    className?: string
}

export default function Page(props: PageProps) {

    const [tema, setTema] = useState<'dark' | ''>('');

    const ususario = {
        nome: "Wemerson B Maduro gjhgjkhg hgfhgfhf gfssfsgfsf dgfdgfdgfd gfdgfdgfd",
        email: "lagoawb@gmail.com",
        imagemUrl: null
    }

    function togleTeme(){
        tema === '' ? setTema('dark') : setTema('')
    }

    return (
        <div className={`
            flex felx-col 
            h-screen ${tema}
            ${props.className ?? ''}
        `}>
            <aside  className={`flex flex-col          
                                bg-zinc-100 dark:bg-zinc-400
                              `}>
                <Logo className="flex justify-center pt-2 pb-2" gradiente/>
                <hr className="mx-2 border-zinc-500"/>
                <Menu className="p-5 overflow-auto"/>
                <div className=" bottom-0 ">
                    <hr className="mx-2 border-zinc-500"/>
                    <UserInfo  className="p-3" {...ususario}/>
                </div>
            </aside>
            <div className="absolute right-4 top-4">
                <button className="" onClick={togleTeme}>
                    {tema === 'dark' ?  <IconSun/> :  <IconMoon/>}                  
                </button>
               
            </div>
            <div className={`
                flex flex-col h-screen 
                 flex-1
            `}>
                <Header title={props.title} subTitle={props.subTitle} />
                <Content>
                    {props.children}
                </Content>
                <Footer leftText="teste esquerdo" rightText="teste direito"/>

            </div>
        </div>
    )
}