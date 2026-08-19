import { Card, cardData, renderHighlightedText } from "../../reusable/Card"

interface simulatorsData {
    title : string,
    subtitle : string,
    description : string,
    button : string,
    cards : cardData[],
    bottomItems: bottomItem[],
    mainBottomItem: bottomItem
}

interface bottomItem {
    iconPath: string,
    description: string
}

const data : simulatorsData = {
    title : "SIMULADORES E FERRAMENTAS",
    subtitle: "O futuro financeiro começa pelas decisões de hoje",
    description: "Organizar a vida financeira vai muito além do dinheiro.O planejamento financeiro influencia escolhas, segurança, liberdade e a relização de objetivos importantes ao longo da vida. O SIM PLANEJAR disponibiliza simuladores e ferramentas práticas para apoiar você nessa construção de forma simples e acessível.",
    button: "Conheça todos os simuladores",
    cards: [{
        name: "CONSTRUA SEU SONHO",
        title: "Simulador de **Reserva de sonhos e Projetos**",
        description: "Descubra quanto precisa guardar para alcançar seus sonhos e transformá-los em realidade.",
        image: "/simulators/simulators-images/simulators0.png",
        alt: "",
        icon: "/simulators/simulators-icons/simulator0.png",
        color: "#7C4DFF",
        smallImage: "/simulators/simulators-images/s0.png"
    },
    {
        name: "PLANEJAMENTO DE LONGO PRAZO",
        title: "Simulador de **Reserva para Aposentadoria**",
        description: "Planeja seu futuro e veja quanto você precisa investir para ter mais tranquilidade na aposentadoria.",
        image: "/simulators/simulators-images/simulators1.png",
        alt: "",
        icon: "/simulators/simulators-icons/simulator1.png",
        color: "#071F6B",
        smallImage: "/simulators/simulators-images/s1.png"
    },
    {
        name: "AUTOCONHECIMENTO",
        title: "Índice de **Saúde Financeira**",
        description: "Avalie sua situação financeira atual e receba dicas personalizadas para melhorar seu controle.",
        image: "/simulators/simulators-images/simulators2.png",
        alt: "",
        icon: "/simulators/simulators-icons/simulator2.png",
        color: "#01AEAA",
        smallImage: "/simulators/simulators-images/s2.png"
    },
    {
        name: "INVESTIMENTOS",
        title: "Perfil de **Investidor (Suitability)**",
        description: "Descubra seu perfil de investidor e conheça os investimentos mais adequados para você.",
        image: "/simulators/simulators-images/simulators3.png",
        alt: "",
        icon: "/simulators/simulators-icons/simulator3.png",
        color: "#7C4DFF",
        smallImage: "/simulators/simulators-images/s3.png"
    }],
    bottomItems: [
        { iconPath: "simulators/simulators-icons/bottomIcon0.svg", description: "Seguros e confiáveis" },
        { iconPath: "simulators/simulators-icons/bottomIcon1.svg", description: "Baseados em dados reais" },
        { iconPath: "simulators/simulators-icons/bottomIcon2.svg", description: "Simples e acessíveis" },
        { iconPath: "simulators/simulators-icons/bottomIcon3.svg", description: "Privacidade garantida" }
    ],
    mainBottomItem: {
        iconPath: "simulators/simulators-icons/bottomIcon3.svg",
        description: "Todos os simuladores são **gratuitos** e foram desenvolvidos para apoiar suas decisões financeiras."
    }
}


export default function Simulators() {
    return(
        <div className="flex flex-col p-[2%] items-center">
            <div className="flex flex-col md:flex-row w-full">
                <div className="flex flex-col p-4 md:p-15 w-full md:max-w-[50%]">

                    <h1 className="font-nunito text-lg md:text-2xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {data.title}
                    </h1>

                    <div className="mt-[23px] md:ml-10 h-[55%] flex flex-col justify-between">
                        <div>
                            <h2 className="text-dark-blue font-nunito text-2xl md:text-[38px] font-extrabold mb-2.5">
                                {data.subtitle}
                            </h2>
                            <div className="w-[50px] h-[5px] rounded-[10px] bg-gradient-to-r from-primary to-secondary"/>
                            <p className="text-foreground font-nunito text-sm md:text-base font-semibold my-5 max-w-full md:max-w-[75%]">
                                {data.description}
                            </p>
                        </div>

                        <div className="hidden md:flex w-[304px] h-[59px] rounded-[10px] bg-primary shadow-[0_1px_4px_0_rgba(0,0,0,0.25)] text-white font-nunito text-base font-extrabold flex-row items-center justify-between p-[15px]  cursor-pointer">
                            <button className="bg-transparent border-none font-nunito font-bold p-0">
                                {data.button}
                            </button>
                            <div>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.0312 11.0416H0V8.95844H16.0312L8.53125 1.45844L10 0L20 10L10 20L8.53125 18.5416L16.0312 11.0416Z" fill="white"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="grid grid-cols-2 gap-2 p-4 md:flex md:flex-row md:gap-0 md:p-10">
                    {data.cards.map((card, index) => (
                        <Card key={index} props={card} />
                    ))}
                </div>
            </div>

            <div className="w-[95%] p-4 md:p-[45px] flex flex-col md:flex-row md:justify-between rounded-[10px] bg-card-bg shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] text-dark-blue font-nunito text-sm md:text-base font-extrabold gap-6 md:gap-0">

                <div className="flex flex-row">
                    <div className="mt-[5px] mr-[26px] ml-[15px]">
                        <img src={data.mainBottomItem.iconPath} alt="" className="min-w-[23px] h-auto"/>
                    </div>
                    <p>{renderHighlightedText(data.mainBottomItem.description)}</p>
                </div>

                <div className="grid grid-cols-2 gap-y-4 md:flex md:flex-row">
                    {data.bottomItems.map((item, index) => (
                        <div className="flex flex-row items-center" key={index}>
                            <div className="hidden md:block w-0.5 h-[45px] bg-primary mx-8"/>
                            <div className="mt-[5px] mr-[26px] ml-[15px] md:ml-0">
                                <img
                                    src={item.iconPath}
                                    alt=""
                                    className={index === 1 ? "min-w-[31px] h-auto" : "min-w-[23px] h-auto"}
                                />
                            </div>
                            <div>{item.description}</div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}