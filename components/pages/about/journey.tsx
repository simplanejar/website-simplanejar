import { VscFlag } from "react-icons/vsc";
import { FiYoutube } from "react-icons/fi";
import { PiUsersThree } from "react-icons/pi";
import { GoBook } from "react-icons/go";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";

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

    ]
}

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
                <div className="flex-column w-[40%] p-15">
                    <h1 className="text-lg md:text-2xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-left">{data.title}</h1>
                    <div className="w-[50px] h-[6px] mt-5 mb-5 bg-gradient-to-r from-primary to-secondary rounded-[10px]"/>
                    <h2 className="text-2xl md:text-4xl font-extrabold mb-5 text-left">{renderHighlightedText(data.subtitle, "          bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent", true)}</h2>
                    <p className="w-[90%] font-medium text-lg">{renderHighlightedText(data.description)}</p>
                    <div className="w-[90%] flex flex-row p-5 m-15 text-xl bg-card-bg shadow-[0_2px_8px_0_rgba(0,0,0,0.35)] rounded-[10px]">
                        <img className="w-6 h-4 m-4" src="/about/journey/open-quote.png" alt="" />
                        <p className="font-bold">{renderHighlightedText(data.quote)}</p>
                        <img className="w-6 h-4 m-4" src="/about/journey/close-quote.png" alt="" />
                    </div>
                </div>
                <img src="/about/journey/journey.png" alt="" className="w-[60%]" />
            </div>
            <div className="flex flex-row w-[100%] justify-between pl-20 pr-20 mt-10">
            {data.dates.map((dt, index) => {
                const Icon = dt.icon;

                return (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center ml-10 mr-10"
                    >
                        <h3
                            className="text-primary font-bold"
                            style={dt.color ? { color: dt.color } : undefined}
                        >
                            {dt.year}
                        </h3>

                        <Icon
                            className="text-primary h-10 w-10 m-2"
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
                );
            })}
            </div>
        </div>
    )
}