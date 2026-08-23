import { GoLightBulb } from "react-icons/go";
import { FiThumbsUp } from "react-icons/fi";
import { CiTrophy, CiFaceSmile, CiFaceMeh, CiFaceFrown } from "react-icons/ci";
import { TfiFaceSad } from "react-icons/tfi";
import { FaRegSadCry } from "react-icons/fa";

const data = {
    h2: "Entenda o seu **resultado**",
    p: "O Índice de Saúde Financeira do Brasileiro é uma ferramenta desenvolvida pela **FEBRABAN**, que ajuda você a entender melhor sua relação com o dinheiro.",
    pbold: "Confira abaixo o que significa cada faixa do seu resultado:",
    lowp1: "Conhecer o significado do seu resultado é o primeiro passo para **transformar sua vida financeira.**",
    lowp2: "Agora, descubra como evoluir e **conquistar seus objetivos!**",
    cards: [
        {
            number: "83-100",
            icon: "/financial-health/otima.svg",
            classification: "Ótima",
            p: "Vida financeira sem estresse, no caminho certo para realizar seus sonhos e ter tranquilidade financeira no presente e no futuro.",
            colour: "#59A565"
        },
                {
            number: "69-82",
            icon: "/financial-health/muitoboa.svg",
            classification: "Muito boa",
            p: "Você está no caminho certo, mas ainda pode melhorar alguns pontos para alcançar total tranquilidade financeira.",
            colour: "#A0C45A"
        },
                {
            number: "61-68",
            icon: "/financial-health/boa.svg",
            classification: "Boa",
            p: "Com disciplina e alguns ajustes, você pode melhorar sua saúde financeira e conquistar seus objetivos com mais segurança.",
            colour: "#518FD5"
        },
                {
            number: "57-60",
            icon: "/financial-health/ok.svg",
            classification: "Ok",
            p: "Sua vida financeira está em equilíbro, mas é importante ficar atento e buscar melhorias para não sair desse nível.",
            colour: "#68C6D2"
        },
                {
            number: "50-56",
            icon: "/financial-health/baixa.svg",
            classification: "Baixa",
            p: "Alguns cuidados são necessários para reorganizar suas finanças e evitar problemas futuros.",
            colour: "#F2B855"
        },
                {
            number: "37-49",
            icon: "/financial-health/muitobaixa.svg",
            classification: "Muito baixa",
            p: "Sua saúde financeira está comprometida e ações são necessárias para evitar dívidas e recuperar controle.",
            colour: "#F49565"
        },
                {
            number: "0-36",
            icon: "/financial-health/ruim.svg",
            classification: "Ruim",
            p: "Sua situação financeira requer atenção urgente para evitar maiores problemas e recuperar sua estabilidade.",
            colour: "#F56370"
        },
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

export default function AboutResult() {
    return(
        <section className="p-5 md:p-20">
            <div>
                <div className="text-primary bg-[#E1D6FE] w-fit py-[6px] px-[9px] rounded-[10px] font-bold text-sm mb-5">{renderHighlightedText(data.h2)}</div>
                <h2 className="font-bold text-4xl">{renderHighlightedText(data.h2)}</h2>
                <div className="w-[50px] h-[6px] mt-5 mb-5 bg-gradient-to-r from-primary to-secondary rounded-[10px]"/>
                <p className="w-[50%] text-lg">{renderHighlightedText(data.p)}</p>
                <p className="font-bold mb-10 text-lg">{data.pbold}</p>
            </div>
            <div className="md:p-10">
                <div className="bg-card-bg shadow-[0_2px_8px_0_rgba(0,0,0,0.35)] rounded-[10px] p-2 md:p-5">
                    {data.cards.map((card,index)=>{
                        const colour = card.colour
                        return(
                            <div key={index} className={`bg-card-bg shadow-[0_2px_8px_0_rgba(0,0,0,0.35)] rounded-[10px] text-[${colour}] flex flex-row my-5 items-center justify-between md:h-35 h-50`}>
                                <div style={{background:colour}} className={`text-white w-[23%] md:w-[13%] h-full rounded-l-[10px] flex items-center text-center justify-center text-3xl`}>
                                    <p className="font-bold">{card.number}</p>
                                </div>
                                <div className="p-5 flex flex-row justify-between items-center w-[90%] h-full">
                                    <img src={card.icon} className={`md:ml-10 w-10 h-10 md:w-13 md:h-13 `}/>
                                    <p style={{color:colour}} className={`w-[15%] font-bold md:text-xl`}>{card.classification}</p>
                                    <div style={{background:colour}} className={`h-full w-[2px]`}/>
                                    <p className="text-black w-[50%]">{card.p}</p>
                                </div>
                            </div>
                        )
                    }) }
                </div>
                <div className="bg-card-bg shadow-[0_2px_8px_0_rgba(0,0,0,0.35)] rounded-[10px] flex flex-row mt-10 items-center justify-between p-3 md:p-5">
                    <div className="flex flex-row items-center">
                        <div className="bg-primary rounded-[100%] p-4 mx-10">
                            <GoLightBulb className="w-8 h-8 md:w-15 md:h-15 text-white"/>
                        </div>
                            <div className="text-lg text-center md:text-left">
                                <p>{renderHighlightedText(data.lowp1)}</p>
                                <p>{renderHighlightedText(data.lowp2)}</p>
                            </div>
                        </div>
                    <img src="/financial-health/ladder.png" className="w-35 md:w-60" alt="" />
                </div>
            </div>
        </section>
    )
}