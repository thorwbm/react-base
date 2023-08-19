import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Logo from "./Logo";
import Menu from "./Menu";
import UserInfo from "./UserInfo";

interface PageProps {
    titulo: string
    subTitulo: string
    children?: any
    className?: string
}

export default function Page(props: PageProps) {
    const ususario = {
        nome: "Wemerson B Maduro hgfjhgfh",
        email: "lagoawb@gmail.com",
        imagemUrl: null
    }

    return (
        <div className={`
            flex felx-col 
            h-screen dark
            ${props.className ?? ''}
        `}>
            <aside  className={`flex flex-col bg-zinc-200 dark:bg-zinc-700`}>
                <Logo className="flex justify-center p-2" gradiente/>
                <hr className="mx-5 border-zinc-500"/>
                <Menu className="p-5 overflow-auto"/>
                <div className="fixed bottom-0">
                    <hr className="mx-5 border-zinc-500"/>
                    <UserInfo  className="p-3" {...ususario}/>
                </div>
            </aside>
            <div className={`
                flex flex-col h-screen
                bg-black text-white flex-1
            `}>
                <Header title={props.titulo} subTitle={props.subTitulo} />
                <Content>
                    {props.children}
                </Content>
                <Footer leftText="teste esquerdo" rightText="teste direito"/>

            </div>
        </div>
    )
}