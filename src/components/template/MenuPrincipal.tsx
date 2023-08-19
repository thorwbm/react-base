import { Icon123, IconAppWindow, IconArrowLeftRight, IconArrowsLeftRight, IconMathGreater, IconMenu, IconNumbers, IconUsers, IconWebhook, IconX } from "@tabler/icons";
import { MenuItem } from "../../data/models/MenuItem";
import { MenuSecao } from "../../data/models/MenuSecao";
import Logo from "./Logo";
import MenuPrincipalItem from "./MenuPrincipalItem";
import MenuPrincipalSecao from "./MenuPrincipalSecao";
import Flex from "./Flex";

export default function MenuPrincipal() {
    const secoes = [
        {
            titulo: "Essenciais",
            aberta: false,
            itens: [
                {titulo:"Contador", url:"/essenciais/contador", tag:"useStates", icone:<IconNumbers/>},
                {titulo:"Votação", url:"/essenciais/votacao", tag:"useStates", icone:<IconUsers/>},
                {titulo:"Requisição API", url:"/essenciais/consultaAPI", tag:"useEffects", icone:<IconArrowsLeftRight/>},
                {titulo:"Maior Numero", url:"/essenciais/maior", tag:"useEffects", icone:<IconMathGreater/>},
                {titulo:"Contagem de Caracteres", url:"/essenciais/contagemCaracteresEfetcts", tag:"useEffects", icone:<Icon123/>},
            ],
        },
        {
            titulo: "Personalizados",
            aberta: true,
            itens: [
                {titulo:"Modal", url:"/personalizados/modal", tag:"persolanizados", icone:<IconAppWindow/>},
            ],
        },
    ];
    const mini = false;
    function renderizarSecoes() {
        return secoes.map((secao: MenuSecao) => (
            <MenuPrincipalSecao key={secao.titulo} titulo={secao.titulo} mini={mini} aberta={secao.aberta}>
                {renderizarItens(secao)}
            </MenuPrincipalSecao>
        ));
    }

    function renderizarItens(secao: MenuSecao) {
        return secao.itens.map((item: MenuItem) => (
            <MenuPrincipalItem
                key={`${item.titulo}-${item.tag}`}
                icone={item.icone}
                titulo={item.titulo}
                tag={item.tag}
                url={item.url}
                mini={mini}
            />
        ));
    }

    return (
        <aside
            className={`
            flex flex-col overflow-y-scroll overflow-x-hidden
            bg-black shadow-md shadow-zinc-800
            scrollbar-thumb-zinc-700 scrollbar-track-zinc-800 
            scrollbar-thin
            ${mini ? "items-center w-[130px]" : "w-[370px]"}
        `}
        >
            <Flex center className="m-7">
                {!mini && <Logo />}
            </Flex>
            <nav className="flex flex-col gap-4 m-7">{renderizarSecoes()}</nav>
        </aside>
    );
}
