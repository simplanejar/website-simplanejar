import { IconType } from "react-icons";
import { HiOutlineBookOpen } from "react-icons/hi2";
import { CgFlagAlt } from "react-icons/cg";
import { FiHeart } from "react-icons/fi";
import { BsPersonArmsUp } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";

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
        description: "Organize suas finanças e faça escolhas conscientes para assumir o controle da sua vida financeira, tornando-se protagonista da sua própria história."
    }
}

export default function Values() {
    return(
        <div>
            <section className="flex w-full max-w-360">
                <h2>{valuesMockData.titleTag}</h2>
                <h1></h1>
            </section>
        </div>
    )
    
} 