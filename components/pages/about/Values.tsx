import { IconType } from "react-icons";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { CgFlagAlt } from "react-icons/cg";
import { FiHeart } from "react-icons/fi";
import { BsPersonArmsUp } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import Image from 'next/image'

interface ValuesCardsData {
    title: string;
    description: string;
    icon: IconType;
}

interface ODSActionData {
    image: {
        path: string;
        alt: string;
    };
    description: string;
}

interface ValuesData {
    titleTag: string;
    title: string;
    valuesCard: ValuesCardsData[];
    odsSection: {
        title: {
            firstPart: string;
            secondPart: string;
        }
        description: {
            p1: string;
            p2: string
        };
        subtitle: string;
        actions: ODSActionData[];
    }
    goalsCard: {
        title: string;
        description: string;
        icon: string;
        iconAlt: string;
    }
}

const valuesMockData: ValuesData = {
    titleTag: "Os valores que nos guiam",
    title: "Princípios que orientam todas as nossas decisões.",
    valuesCard: [
        {
            title: "Educação",
            description: "Acreditamos no poder do conhecimento para transformar vidas.",
            icon: HiOutlineBookOpen
        },
        {
            title: "Protagonismo",
            description: "Você é o protagonista da sua história e das suas escolhas.",
            icon: CgFlagAlt
        },
        {
            title: "Consciência",
            description: "Promovemos escolhas conscientes hoje para um futuro melhor.",
            icon: FiHeart
        },
        {
            title: "Acessibilidade",
            description: "Informação de qualidade, simples e acessível para todos e todas.",
            icon: BsPersonArmsUp
        },
        {
            title: "Transformação social",
            description: "Educação financeira gerando impacto positivo na sociedade.",
            icon: FaUsers
        },
        {
            title: "Simplicidade",
            description: "Tornamos o complexo simples para que todos possam avançar.",
            icon: FaRegCircleCheck
        },
    ],
    odsSection: {
        title: {
            firstPart: "Sustentabilidade e ",
            secondPart: "responsabilidade social."
        },
        description: {
            p1: "O SIM PLANEJAR está comprometido com um mundo mais justo, sustentável e com oportunidades para todos.",
            p2: "Nossas ações estão alinhadas aos Objetivos de Desenvolvimento (ODS) da Organização das Nações Unidas."
        },
        subtitle: "Nossos compromissos em ação",
        actions: [
            {
                image: {
                    path: "/about/ods/SDG-4.png",
                    alt: "Logotipo do ODS 4: Educação de Qualidade. Quadrado vermelho com o número 4 e um livro aberto branco com uma caneta."
                },
                description: "Promovemos educação financeira de qualidade para todas as pessoas."
            },
            {
                image: {
                    path: "/about/ods/SDG-5.png",
                    alt: "Logotipo do ODS 5: Igualdade de Gênero. Quadrado vermelho-alaranjado com o número 5 e o símbolo do gênero feminino com um sinal de igual no centro."
                },
                description: "Incentivamos a autonomia e o empoderamento financeiro de mulheres."
            },
            {
                image: {
                    path: "/about/ods/SDG-8.png",
                    alt: "Logotipo do ODS 8: Trabalho Decente e Crescimento Econômico. Quadrado bordô com o número 8 e um gráfico de linha em ascensão com seta para cima."
                },
                description: "Apoiamos o crescimento econômico inclusivo e oportunidades para todos."
            },
            {
                image: {
                    path: "/about/ods/SDG-10.png",
                    alt: "Logotipo do ODS 10: Redução das Desigualdades. Quadrado magenta com o número 10 e o sinal de igualdade dentro de um círculo."
                },
                description: "Acreditamos em um futuro com mais inclusão, justiça e equidade financeira."
            },
            {
                image: {
                    path: "/about/ods/SDG-17.png",
                    alt: "Logotipo do ODS 17: Parcerias e Meios de Implementação. Quadrado azul-escuro com o número 17 e cinco círculos coloridos interligados."
                },
                description: "Atuamos em parceria para multiplicar conhecimento e gerar impacto positivo."
            }
        ]
    },
    goalsCard: {
        title: "Transforme objetivos em conquistas!",
        description: "Organize suas finanças e faça escolhas conscientes para assumir o controle da sua vida financeira, tornando-se protagonista da sua própria história.",
        icon: "/about/hands-holding-heart.png",
        iconAlt: "Ícone de mãos segurando um coração."
    }
}

export default function Values() {
    const textGradient = "bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8] bg-clip-text text-transparent";
    return(
        <div>
            <section className="flex flex-col w-full max-w-360 items-center justify-center m-auto">
                <h2 className={`text-center uppercase text-[24px] font-bold ${textGradient}`}>{valuesMockData.titleTag}</h2>
                <h1 className="text-[46px] text-center px-5 font-extrabold">{valuesMockData.title}</h1>
                <div className="flex items-center justify-center gap-x-5 gap-y-4 flex-wrap">
                    {valuesMockData.valuesCard.map((card, index) => {
                        const Icon = card.icon;
                        return (
                            <div key={index} className="rounded-[10px] bg-[##FCFCFE] shadow-[0_8px_4px_0_#F2F0FD] py-9 px-4 flex flex-nowrap gap-5 max-w-105">
                                <div key={card.title} 
                                    className={`shrink-0 grow-0 flex justify-center items-center rounded-[100px] w-30 h-30 ${index < 3 ? 'bg-[#F2F0FD]' : 'bg-[#D7ECF1]'}`}
                                >
                                    <Icon size={50} color={index < 3 ? '#7C4DFF' : '#2ED8E8'} />
                                </div>
                                <div key={card.description}>
                                    <h3 className={`text-[20px] font-bold ${index < 3 ? 'text-[#7C4DFF]' : 'text-[#2ED8E8]'}`}>{card.title}</h3>
                                    <p className="text-[18px] font-semibold">{card.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
            <section className="flex flex-nowrap w-full max-w-360 items-start justify-center m-auto my-[94px] pl-[30px]">
                <div className="w-[290px]">
                    <div className="w-10 h-[5px] rounded-[10px] bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8] mb-[18px]"/>
                    <h2 className="text-[24px] font-extrabold mb-[12px] pr-4">
                        <span>{valuesMockData.odsSection.title.firstPart}</span>
                        <span className={textGradient}>{valuesMockData.odsSection.title.secondPart}</span>
                    </h2>
                    <p className="font-semibold pr-9">{valuesMockData.odsSection.description.p1}</p>
                    <p className="font-semibold pr-9">{valuesMockData.odsSection.description.p2}</p>
                </div>
                <div className="pl-4 border-l border-l-[#D9D9D9]">
                    <h2 className={`text-[24px] font-bold uppercase mb-[38px] mt-[25px] ${textGradient}`}>{valuesMockData.odsSection.subtitle}</h2>
                    <div className="flex flex-wrap gap-[10px]">
                        {
                            valuesMockData.odsSection.actions.map((action, index) => (
                                <div key={index} className="max-w-[207px]">
                                    <Image src={action.image.path} alt={action.image.alt} width={180} height={180} />
                                    <p className="font-semibold mt-[6px]">{action.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className="max-w-360 w-full m-auto px-[55px]">
                <div className="flex items-center justify-around w-full bg-[#071F6B] rounded-[10px] py-[36px]">
                    <div className="bg-[#F2F0FD] w-[130px] h-[130px] rounded-[100px] flex justify-center items-center shrink-0 mx-4">
                        <Image src={valuesMockData.goalsCard.icon} width={85} height={84} alt={valuesMockData.goalsCard.iconAlt}/>
                    </div>
                    <h2 className="text-[38px] text-white font-extrabold max-w-[403px] pr-5">{valuesMockData.goalsCard.title}</h2>
                    <div className="w-[1px] self-stretch bg-[#D9D9D9] mr-4"/>
                    <p className="text-white text-[20px] font-semibold max-w-[519px] pr-4">{valuesMockData.goalsCard.description}</p>
                </div>
            </section>
        </div>
    )
    
} 