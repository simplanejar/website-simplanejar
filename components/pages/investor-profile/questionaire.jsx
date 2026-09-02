import "@/app/globals.css";
import Image from "next/image"
import Link from "next/link"
import "@/app/layout"

import Alvo from "./assetsQuestionaire/alvo.svg";
import CaixaDeTexto from "./assetsQuestionaire/caixadetexto.svg";
import Casal from "./assetsQuestionaire/casal.png";
import Escudo from "./assetsQuestionaire/escudo.svg";
import Grafico from "./assetsQuestionaire/grafico.svg";
import HomemComputador from "./assetsQuestionaire/homemComputador.png";
import MulherComputador from "./assetsQuestionaire/mulherComputador.png";
import Presente from "./assetsQuestionaire/presente.svg";
import Senhora from "./assetsQuestionaire/senhora.png";

const gradient = "bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8]";

const imageAlt = {
    alvoAlt: "Alvo",
    caixadeTextoAlt: "Caixa de diálogo",
    casalAlt: "Casal sorrindo olhando para o tablet",
    escudoAlt: "Escudo com fechadura no centro",
    graficoAlt: "Gráfico de pizza",
    hComputadorAlt: "Homem sorrindo usando o notebook",
    mComputadorAlt: "Mulher anotando em caderno ao lado do notebook",
    presenteAlt: "Pacote de presente",
    senhoraAlt: "Senhora usando o tablet ao lado de um livro"
}

const firstText = {
    prev: "TESTE DE PERFIL DE INVESTIDOR", //degrade
    title: {
        t1: "Descubra qual é o seu ",
        t2: "perfil de investidor." //roxo
    },
    blueText: "Conhecer o seu perfil é o primeiro passo para tomar decisões mais conscientes.", //azul escuro
    text: "Mais importante do que buscar rentabilidades ou seguir tendências é compreender o seu perfil, o seu momento e o seu nível tolerância ao risco."
}

const secondText = {
    title: "Investir começa pelo autoconhecimento.",
    text: {
        t1: "Seja protagonista da sua vida financeira.",
        t2: "Você no controle." //roxo
    }
}

const box = {
    titles: {
        t1: "7 perguntas rápidas",
        t2: "Resultado imediato",
        t3: "100% gratuito",
        t4: "Educacional"
    },
    text: {
        p1: "Leva cerca de 2 minutos.",
        p2: "Você descobre seu perfil.",
        p3: "Sem custo.",
        p4: "Não representa recomendação de investimentos."
    }
}

const button = "Fazer o teste"


export function Box() {
    return (
        <div className="grid grid-cols-4 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] max-[1000px]:grid-cols-2 gap-6 max-[1000px]:gap-5 max-[700px]:gap-4
                         mt-[50px] max-[700px]:mt-8
                         py-10 px-10 max-[1000px]:py-6 max-[1000px]:px-6 max-[700px]:py-5 max-[700px]:px-4
                         rounded-[10px] bg-[#FCFCFE] mb-8">
            <div className="flex items-center gap-4 max-[700px]:gap-2">
                <div className="w-[clamp(2.5rem,5vw,4rem)] max-[700px]:w-9 aspect-square rounded-[50%] bg-[#F2F0FD] overflow-hidden flex items-center justify-center shrink-0">
                    <Image src={CaixaDeTexto} alt={imageAlt.caixadeTextoAlt} className="w-[50%] h-[50%] object-contain object-center" />
                </div>
                <div className="flex flex-col justify-center min-w-0 text-[#071F6B]">
                    <h3 className="text-[clamp(12px,1.5vw,25px)] max-[700px]:text-sm m-0 font-bold">{box.titles.t1}</h3>
                    <p className="text-[clamp(8px,1.5vw,16px)] max-[700px]:text-xs m-0 font-semibold">{box.text.p1}</p>
                </div>
            </div>

            <div className="flex items-center gap-4 max-[700px]:gap-2">
                <div className="w-[clamp(2.5rem,5vw,4rem)] max-[700px]:w-9 aspect-square rounded-[50%] bg-[#F2F0FD] overflow-hidden flex items-center justify-center shrink-0">
                    <Image src={Grafico} alt={imageAlt.graficoAlt} className="w-[50%] h-[50%] object-contain object-center" />
                </div>
                <div className="flex flex-col justify-center min-w-0 text-[#071F6B]">
                    <h3 className="text-[clamp(12px,1.5vw,25px)] max-[700px]:text-sm m-0 font-bold">{box.titles.t2}</h3>
                    <p className="text-[clamp(8px,1.5vw,16px)] max-[700px]:text-xs m-0 font-semibold">{box.text.p2}</p>
                </div>
            </div>

            <div className="flex items-center gap-4 max-[700px]:gap-2">
                <div className="w-[clamp(2.5rem,5vw,4rem)] max-[700px]:w-9 aspect-square rounded-[50%] bg-[#F2F0FD] overflow-hidden flex items-center justify-center shrink-0">
                    <Image src={Escudo} alt={imageAlt.escudoAlt} className="w-[50%] h-[50%] object-contain object-center" />
                </div>
                <div className="flex flex-col justify-center min-w-0 text-[#071F6B]">
                    <h3 className="text-[clamp(12px,1.5vw,25px)] max-[700px]:text-sm m-0 font-bold">{box.titles.t3}</h3>
                    <p className="text-[clamp(8px,1.5vw,16px)] max-[700px]:text-xs m-0 font-semibold">{box.text.p3}</p>
                </div>
            </div>

            <div className="flex items-center gap-4 max-[700px]:gap-2">
                <div className="w-[clamp(2.5rem,5vw,4rem)] max-[700px]:w-9 aspect-square rounded-[50%] bg-[#F2F0FD] overflow-hidden flex items-center justify-center shrink-0">
                    <Image src={Presente} alt={imageAlt.presenteAlt} className="w-[50%] h-[50%] object-contain object-center" />
                </div>
                <div className="flex flex-col justify-center min-w-0 text-[#071F6B]">
                    <h3 className="text-[clamp(12px,1.5vw,25px)] max-[700px]:text-sm m-0 font-bold">{box.titles.t4}</h3>
                    <p className="text-[clamp(8px,1.5vw,16px)] max-[700px]:text-xs m-0 font-semibold">{box.text.p4}</p>
                </div>
            </div>
        </div>
    )
}

export default function Questionaire() {
    return (
        <section className="font-sans overflow-x-hidden my-[50px] mx-[40px]">

            <div className="flex flex-row justify-between items-start">

                <div className="flex flex-col w-full lg:w-[60%] max-[1000px]:gap-[5vw] gap-10">

                    {/* primeiro parágrafo */}
                    <div className="flex flex-col gap-4 mt-8">
                        <h3 className={`${gradient} bg-clip-text text-[clamp(20px,1.5vw,24px)] font-extrabold text-transparent`}>{firstText.prev}</h3>
                        <h1 className="w-full md:w-[80%] font-[800] text-[clamp(25px,3vw,38px)]">
                            {firstText.title.t1}
                            <span className="text-[#7C4DFF]">{firstText.title.t2}</span>
                        </h1>
                        <h2 className="text-[#071F6B] font-bold text-[clamp(20px,2vw,24px)]">{firstText.blueText}</h2>
                        <p className="font-semibold text-[clamp(14px,1.5vw,16px)]">{firstText.text}</p>
                    </div>

                    {/* imagens 1 mobile */}
                    <div className="grid grid-cols-2 gap-4 w-full md:hidden">
                        <Image
                            src={MulherComputador}
                            alt={imageAlt.mComputadorAlt}
                            className="w-full aspect-[5/4] object-cover rounded-2xl block"
                        />
                        <Image
                            src={Casal}
                            alt={imageAlt.casalAlt}
                            className="w-full aspect-[5/4] object-cover rounded-2xl block"
                        />
                    </div>

                    {/* segundo parágrafo */}
                    <div className="flex flex-col gap-4">
                        <h1 className="text-[#7C4DFF] font-extrabold text-[clamp(25px,2.5vw,38px)]">{secondText.title}</h1>
                        <div className={`mb-3 h-[1vw] w-[7vw] rounded-[10px] ${gradient}`} />
                        <p className="font-extrabold text-[clamp(18px,1.5vw,20px)]">{secondText.text.t1} <br /> <span className="text-[#071F6B]">{secondText.text.t2}</span></p>
                    </div>


                    <div className="font-bold hidden md:block md:text-[clamp(12px,1vw,30px)] mt-4">
                        <Link href="/suitability/form" className="w-full md:w-auto flex flex-row justify-center items-center gap-[1.5vw] py-[1vw] px-[6vw] border-none cursor-pointer rounded-[1vw] bg-[#7C4DFF] text-white transition-colors duration-300 ease-in-out hover:bg-[#6939E8] hover:shadow-lg transition-all duration-200">
                            <Image src={Alvo} alt={imageAlt.alvoAlt} className="w-[4vw] max-w-[30px]" />
                            {button}
                        </Link>
                    </div>
                </div>

                {/* imagens laterias (desktop) */}
                <div className="w-[80%] max-w-[777px] grid-cols-2 gap-[clamp(0.5rem,1.5vw,1.25rem)]
                     max-[1000px]:w-[40%] max-[1000px]:grid-cols-1
                     max-[1000px]:gap-[0.4rem] max-[1000px]:pr-[50px]
                     hidden md:grid">
                    <Image src={MulherComputador} alt={imageAlt.mComputadorAlt} className="w-full h-full block" />
                    <Image src={Casal} alt={imageAlt.casalAlt} />
                    <Image src={HomemComputador} alt={imageAlt.hComputadorAlt} />
                    <Image src={Senhora} alt={imageAlt.senhoraAlt} />
                </div>
            </div>


            {/* box */}
            <div>
                <Box />
            </div>

            {/* imagens 2 mobile */}
            <div className="grid grid-cols-2 gap-4 w-full md:hidden  my-[50px]">
                <Image
                    src={HomemComputador}
                    alt={imageAlt.hComputadorAlt}
                    className="w-full aspect-[5/4] object-cover rounded-2xl block"
                />
                <Image
                    src={Senhora}
                    alt={imageAlt.senhoraAlt}
                    className="w-full aspect-[5/4] object-cover rounded-2xl block"
                />
            </div>

            <div className="font-bold text-[clamp(12px,3vw,20px)] block md:hidden mt-[50px]">
                <Link href="/suitability/form" className="w-full md:w-auto flex flex-row justify-center items-center gap-[1.5vw] py-[3vw] px-[6vw] border-none cursor-pointer rounded-[1vw] bg-[#7C4DFF] text-white transition-colors duration-300 ease-in-out hover:bg-[#A280FF]">
                    <Image src={Alvo} alt={imageAlt.alvoAlt} className="w-[4vw] max-w-[30px]" />
                    {button}
                </Link>
            </div>
        </section>
    )
}