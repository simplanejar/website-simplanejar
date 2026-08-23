import { VscFlag } from "react-icons/vsc";
import { FiYoutube } from "react-icons/fi";
import { PiUsersThree } from "react-icons/pi";
import { GoBook } from "react-icons/go";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaRegStar, FaArrowRight } from "react-icons/fa";
import { FiTarget } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";

const data = {
    title: "NOSSA JORNADA",
    subtitle: "Uma história construída **etapa por etapa.**",
    description: "Desde 2014, o SIM PLANEJAR tem como propósito tornar o planejamento financeiro mais acessível, simples e próximo da realidade das pessoas, incentivando maior consciência financeira e ajudando cada indivíduo a **assumir o controle da própria vida financeira** por meio de pequenas mudanças e decisões mais conscientes no dia a dia.",
    quote: "Acreditamos que pequenas mudanças hoje constroem **grandes conquistas** amanhã.",
    dates : [
        {
            year: "2014",
            title: "O início de um propósito",
            description: "O SIM PLANEJAR nasce com o objetivo de disseminar educação financeira de forma simples, prática e acessível para todos os brasileiros.",
            icon: VscFlag
        },
        {
            year: "2016",
            title: "Conteúdo que transforma",
            description: "Lançamento do canal no YouTube com séries educativas que ajudaram milhares de pessoas a entender melhor suas finanças.",
            icon: FiYoutube
        },
        {
            year: "2018",
            title: "Crescimento da comunidade",
            description: "A comunidade SIM PLANEJAR se fortalece nas redes sociais, levando informação de qualidade para ainda mais pessoas.",
            icon: PiUsersThree
        },
        {
            year: "2020",
            title: "Chegada do livro",
            description: "Publicação do livro \"Planejamento Financeiro: Você no controle!\”, ampliando o impacto e gerando ainda mais transformações.",
            color: "#01AEAA",
            icon: GoBook
        },
        {
            year: "2022",
            title: "Novos recursos e ferramentas",
            description: "Criação de simuladores e ferramentas gratuitas para apoiar decisões financeiras mais conscientes e planejadas.",
            color: "#01AEAA",
            icon: BsGraphUpArrow
        },
        {
            year: "Hoje",
            title: "Um futuro com mais possibilidades",
            description: "Seguimos evoluindo para inspirar, educar e apoiar ainda mais pessoas a conquistarem seus sonhos e construírem uma vida financeira melhor.",
            color: "#01AEAA",
            icon: FaRegStar
        }

    ],
    lowcard: {
        top: "Nossa missão continua a mesma:",
        main: "Levar educação financeira para a vida real, de forma **simples, humana e transformadora.**",
        icons: [
            {
                icon: CiHeart,
                text: "Mais conhecimento para melhores escolhas."
            },
            {
                icon: FiTarget,
                text: "Mais planejamento para alcançar objetivos."
            }, 
            {
                icon: PiUsersThree,
                text: "Mais pessoas protagonistas da sua vida financeira."
            }
        ]
    }
}

const CONNECTOR_SECONDARY_COLOR = "#01AEAA";

function renderHighlightedText(
  text: string,
  color: string = "text-primary",
  newLine: boolean = false
) {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return parts.map((part, i) =>
    i % 2 === 1
      ? <span key={i} className={`${color} ${(newLine ? "block" : undefined)}`}>{part}</span>
      : part
  )
}

function QuoteBox({ className = "" }: { className?: string }) {
    return (
        <div className={`relative w-!auto min-h-[140px] p-4 sm:p-5 bg-card-bg shadow-[0_2px_8px_0_rgba(0,0,0,0.35)] rounded-[10px] ${className}`}>
            <img
                className="absolute top-3 left-3 sm:top-4 sm:left-4 w-5 h-3 sm:w-6 sm:h-4"
                src="/about/journey/open-quote.png"
                alt=""
            />
            <p className="font-bold text-center text-base sm:text-lg md:text-2xl px-6 sm:px-10 md:px-16 py-2 break-words">
                {renderHighlightedText(data.quote)}
            </p>
            <img
                className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-5 h-3 sm:w-6 sm:h-4"
                src="/about/journey/close-quote.png"
                alt=""
            />
        </div>
    )
}

export default function Journey() {
    return (
        <div className="">
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col w-full md:w-[50%] p-6 md:p-15">
                    <h1 className="text-lg md:text-2xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-left">{data.title}</h1>
                    <div className="w-[50px] h-[6px] mt-5 mb-5 bg-gradient-to-r from-primary to-secondary rounded-[10px]"/>
                    <h2 className="text-2xl md:text-4xl font-extrabold mb-5 text-left">{renderHighlightedText(data.subtitle, "          bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent", true)}</h2>
                    <p className="w-[100%] font-medium text-lg">{renderHighlightedText(data.description)}</p>

                    <QuoteBox className="hidden md:block mt-10" />
                </div>

                <div className="w-full md:w-[50%] md:flex-shrink-0 overflow-hidden">
                    <img
                        src="/about/journey/journey.png"
                        alt=""
                        className="w-full h-full md:h-full object-cover object-center"
                    />
                </div>

                <QuoteBox className="md:hidden mt-6 mx-4 sm:mx-6" />
            </div>

            <div className="flex flex-col md:flex-row w-full items-start px-6 md:pl-20 md:pr-20 mt-10 gap-10 md:gap-0 md:overflow-x-auto">
                <div className="hidden md:flex md:flex-row md:min-w-max md:w-full">
                    {data.dates.map((dt, index) => {
                        const Icon = dt.icon;
                        const isLast = index === data.dates.length - 1;
                        const isSecondHalf = index >= 3;
                        const accentColor = dt.color ? dt.color : undefined;

                        return (
                            <div key={index} className="flex flex-row items-start" style={{ flex: isLast ? "0 0 auto" : "1 1 0%" }}>
                                <div className="flex flex-col items-center text-center flex-shrink-0 w-40">
                                    <h3
                                        className="text-primary font-bold"
                                        style={accentColor ? { color: accentColor } : undefined}
                                    >
                                        {dt.year}
                                    </h3>

                                    <Icon
                                        className="text-primary h-10 w-10 mt-2 mb-2"
                                        style={accentColor ? { color: accentColor } : undefined}
                                    />

                                    <h4
                                        className="text-primary font-semibold mb-4"
                                        style={accentColor ? { color: accentColor } : undefined}
                                    >
                                        {dt.title}
                                    </h4>

                                    <p>{dt.description}</p>
                                </div>

                                {!isLast ? (
                                    <div className="w-16 lg:w-24 flex items-center h-4 mt-[50px] flex-shrink-0">
                                        <div
                                            className={`w-full h-[2px] ${!isSecondHalf ? "bg-primary" : ""}`}
                                            style={isSecondHalf ? { backgroundColor: CONNECTOR_SECONDARY_COLOR } : undefined}
                                        />
                                    </div>
                                ) : (
                                    <div className="w-16 lg:w-24 flex items-center h-4 mt-[50px] flex-shrink-0">
                                        <div
                                            className="w-full h-[2px]"
                                            style={{ backgroundColor: CONNECTOR_SECONDARY_COLOR }}
                                        />
                                        <FaArrowRight
                                            className="text-sm flex-shrink-0"
                                            style={{ color: CONNECTOR_SECONDARY_COLOR }}
                                        />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="flex md:hidden flex-col w-full gap-8">
                    {data.dates.map((dt, index) => {
                        const Icon = dt.icon;
                        const isLast = index === data.dates.length - 1;
                        const accentColor = dt.color ? dt.color : undefined;

                        return (
                            <div key={index} className="grid grid-cols-3 grid-rows-3 gap-x-4 gap-y-2 w-full">
                                <div className="col-start-1 row-start-1 flex items-center justify-center">
                                    <Icon
                                        className="h-8 w-8 text-primary"
                                        style={accentColor ? { color: accentColor } : undefined}
                                    />
                                </div>

                                <div className="col-start-2 col-span-2 row-start-1 flex items-center">
                                    <h4
                                        className="text-primary font-semibold leading-snug"
                                        style={accentColor ? { color: accentColor } : undefined}
                                    >
                                        {dt.year} - {dt.title}
                                    </h4>
                                </div>

                                <div className="col-start-1 row-start-2 row-span-2 flex justify-center">
                                    <div
                                        className="w-[2px] h-full bg-primary"
                                        style={accentColor ? { backgroundColor: accentColor } : undefined}
                                    />
                                </div>

                                <div className="col-start-2 col-span-2 row-start-2 row-span-2">
                                    <p>{dt.description}</p>
                                </div>

                                {isLast && (
                                    <div className="col-start-1 row-start-4 flex justify-center pt-1">
                                        <FaArrowRight
                                            className="text-sm rotate-90 mt-[-15px]"
                                            style={{ color: CONNECTOR_SECONDARY_COLOR }}
                                        />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="mt-15 mb-15 mx-6 md:ml-10 md:mr-10 flex flex-col md:flex-row items-start md:items-center p-5 justify-between gap-6 md:gap-0">
                <div className="flex flex-row md:contents items-center w-full">
                    <div className="bg-primary rounded-[100px] h-fit w-fit p-3 md:p-5 flex-shrink-0">
                        <PiUsersThree className="text-white h-6 w-6 md:h-15 md:w-15"/>
                    </div>
                    <div className="flex flex-col ml-4 md:ml-5 justify-center md:mr-5 text-left">
                        <h3 className="font-semibold">{data.lowcard.top}</h3>
                        <h2 className="font-semibold text-2xl">{renderHighlightedText(data.lowcard.main, "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent", true)}</h2>
                    </div>
                </div>
                {data.lowcard.icons.map((item, index) => {
                    const Icon = item.icon
                    return (
                    <div className="flex flex-row items-center text-left w-full md:w-[18%]" key={index}>
                        <div className="bg-card-bg shadow-[0_2px_8px_0_rgba(0,0,0,0.35)] h-fit w-fit rounded-[100px] p-3 m-4 flex-shrink-0">
                            <Icon className="text-primary h-10 w-10"/>
                        </div>
                        <p>{item.text}</p>
                    </div>
                    )})}
            </div>
        </div>
    )
}