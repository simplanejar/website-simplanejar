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

// index 0,1,2 -> primary | index 3,4,5 (last is the arrow) -> #01AEAA
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

export default function Journey() {
    return (
        <div className="">
            <div className="flex flex-row">
                <div className="flex-column w-[50%] p-15">
                    <h1 className="text-lg md:text-2xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-left">{data.title}</h1>
                    <div className="w-[50px] h-[6px] mt-5 mb-5 bg-gradient-to-r from-primary to-secondary rounded-[10px]"/>
                    <h2 className="text-2xl md:text-4xl font-extrabold mb-5 text-left">{renderHighlightedText(data.subtitle, "          bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent", true)}</h2>
                    <p className="w-[100%] font-medium text-lg">{renderHighlightedText(data.description)}</p>
                    <div className="relative w-[100%] min-h-[140px] p-5 mt-10 text-2xl bg-card-bg shadow-[0_2px_8px_0_rgba(0,0,0,0.35)] rounded-[10px]">
                        <img
                            className="absolute top-4 left-4 w-6 h-4"
                            src="/about/journey/open-quote.png"
                            alt=""
                        />
                        <p className="font-bold text-center px-16 py-2">
                            {renderHighlightedText(data.quote)}
                        </p>
                        <img
                            className="absolute bottom-4 right-4 w-6 h-4"
                            src="/about/journey/close-quote.png"
                            alt=""
                        />
                    </div>
                </div>
                <img src="/about/journey/journey.png" alt="" className="w-[50%]" />
            </div>

            <div className="flex flex-row w-[100%] items-start pl-20 pr-20 mt-10">
                {data.dates.map((dt, index) => {
                    const Icon = dt.icon;
                    const isLast = index === data.dates.length - 1;
                    const isSecondHalf = index >= 3;
                    return (
                        <div key={index} className="flex flex-row items-start flex-1">
                            <div className="flex flex-col items-center text-center flex-shrink-0 w-40">
                                <h3
                                    className="text-primary font-bold"
                                    style={dt.color ? { color: dt.color } : undefined}
                                >
                                    {dt.year}
                                </h3>

                                <Icon
                                    className="text-primary h-10 w-10 mt-2 mb-2"
                                    style={dt.color ? { color: dt.color } : undefined}
                                />

                                <h4
                                    className="text-primary font-semibold mb-4"
                                    style={dt.color ? { color: dt.color } : undefined}
                                >
                                    {dt.title}
                                </h4>

                                <p>{dt.description}</p>
                            </div>

                        {!isLast ? (
                            <div className="flex-1 flex items-center h-4 mt-[50px] -mx-6 z-0">
                                <div
                                    className={`w-full h-[2px] ${!isSecondHalf ? "bg-primary" : ""}`}
                                    style={isSecondHalf ? { backgroundColor: CONNECTOR_SECONDARY_COLOR } : undefined}
                                />
                            </div>
                        ) : (
                            <div className="flex-1 flex items-center h-4 mt-[50px] -mx-6 z-0">
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
            <div className="mt-15 mb-15 ml-10 mr-10 flex flex-row items-center p-5 justify-between">
                <div className="bg-primary rounded-[100px] h-fit w-fit p-5">
                    <PiUsersThree className="text-white h-15 w-15"/>
                </div>
                <div className="flex flex-col ml-5 justify-center mr-5">
                    <h3 className="font-semibold">{data.lowcard.top}</h3>
                    <h2 className="font-semibold text-2xl">{renderHighlightedText(data.lowcard.main, "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent", true)}</h2>
                </div>
                {data.lowcard.icons.map((item, index) => {
                    const Icon = item.icon
                    return (
                    <div className="flex flex-row items-center w-[18%]" key={index}>
                        <div className="bg-card-bg shadow-[0_2px_8px_0_rgba(0,0,0,0.35)] h-fit w-fit rounded-[100px] p-3 m-4">
                            <Icon className="text-primary h-10 w-10"/>
                        </div>
                        <p>{item.text}</p>
                    </div>
                    )})}
            </div>
        </div>
    )
}