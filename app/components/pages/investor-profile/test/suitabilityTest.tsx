const sidebar = {
    test: "TESTE DE PERFIL DE INVESTIDOR",
    title: "Descubra qual é o seu perfil de investidor.",
    subtitle: "Responda às perguntas ao lado com sinceridade para receber um resultado que combina com você.",
    card:  {
        title: "Importante",
        body: "Este teste tem caráter educacional e não representa recomendação de investimentos."
    }
}

const questions = {
    q1: {
        title: "Como você avalia o seu conhecimento sobre investimentos?",
        answers: [
            "Possuo bom conhecimento sobre investimentos e normalmente tomo minhas decisões de forma independente.", 
            "Possuo conhecimento moderado e gosto de complementar minhas decisões com informações ou apoio especializado.",
            "Possuo conhecimento básico sobre investimentos.",
            "Possuo pouco ou nenhum conhecimento sobre investimentos."
        ]
    },
    q2: {
        title: "Qual das definições abaixo melhor reflete o seu objetivo financeiro com os investimentos?",
        answers: [
            "Busco aumento expressivo do patrimônio, inclusive aceitando perdas relevantes na busca por retornos superiores ao mercado.", 
            "Busco crescimento do patrimônio e aceito oscilações em busca de retornos acima do mercado.",
            "Busco preservar o patrimônio, mas também obter ganhos superiores aos investimentos mais conservadores.",
            "Meu principal objetivo é preservar o patrimônio."
        ]
    },
    q3: {
        title: "Por quanto tempo você está disposto a manter seus investimentos para buscar melhores resultados?",
        answers: [
            "Mais de 1 ano.", 
            "Entre 6 meses e 1 ano.",
            "Entre 3 e 6 meses.",
            "Até 3 meses."
        ]
    },
    q4: {
        title: "Imagine o seguinte cenário: seus investimentos se valorizaram 20% em seis meses. No sétimo mês, houve uma queda de 15%. O que você faria?",
        answers: [
            "Aproveitaria o momento para aumentar os investimentos.", 
            "Aguardaria mais um pouco e não tomaria nenhuma decisão imediata.",
            "Reduziria os investimentos mais arriscados e migraria para aplicações mais conservadoras.",
            "Resgataria todos os investimentos."
        ]
    },
    q5: {
        title: "Qual percentual de perda temporária você conseguiria suportar em momentos de oscilação do mercado?",
        answers: [
            "10% ou mais.", 
            "Até 10%",
            "Até 5%.",
            "Até 1%."
        ]
    }
}

const steps = ["Conhecimento e experiência", "Comportamento diante do risco"]
const buttons = {
    back: "Voltar",
    next: "Próxima etapa",
    redo: "Refazer o teste"
}

const confidential = "Suas respostas são confidenciais."

const result = {
    title: "Resultado do seu perfil",
    subtitle: "Teste de perfil de investidor"
}

const inCommonResult = {
    title: "Seu perfil é",
    meaning: "Isso significa que você:",
    behaviour: "Como é o perfil ",
    
}

const moderate = {
    moderate: "Moderado",
    description: "Você busca equilíbrio entre segurança e crescimento. Está disposto(a) a assumir riscos moderados para obter retornos acima da média a longo prazo.",
    meaning: [
        "Aceita algum nível de risco para alcançar melhores resultados.",
        "Busca diversidade para equilibrar segurança e rentabilidade.",
        "Está aberto(a) a variações de curto prazo, desde que faça sentido no longo prazo.",
        "Valoriza o crescimento do patrimônio sem abrir mão da estabilidade."
    ],
    behaviour: "Investidores moderados estão dispostos a aceitar riscos controlados em busca de melhores oportunidades. O objetivo é equilibrar crescimento e segurança, diversificando os investimentos para aproveitar boas oportunidades sem comprometer a estabilidade financeira.",
    features: [
        {title: "Risco moderado",
         text: "Você aceita oscilações moderadas em busca de retornos superiores."
        },
        {title: "Equilíbrio entre segurança e crescimento",
         text: "Suas escolhas combinam ativos mais seguros com opções voltadas para o crescimento."
        },
        {title: "Visão de médio a longo prazo",
         text: "Você entende que os melhores resultados vêm com consistência ao longo do tempo."
        },
        {title: "Diversificação é essencial",
         text: "Você busca diferentes tipos de investimentos para reduzir riscos e aumentar as chances de bons resultados."
        }
    ]
}

const conservative = {
    conservative: "Conservador",
    description: "Você prioriza segurança, estabilidade e a preservação do seu patrimônio. Prefere retornos previsíveis e evita riscos desnecessários.",
    meaning: [
        "Valoriza a segurança e a previsibilidade nas suas decisões financeiras.",
        "Prefere investir em opções mais estáveis e com menor volatilidade.",
        "Está focado(a) em construir e proteger seu patrimônio no longo prazo."
    ],
    behaviour: "Investidores com este perfil buscam mais tranquilidade e preferem aplicações de menor risco, mesmo que isso signifique retornos potencialmente menores. O foco principal é manter o patrimônio seguro e garantir estabilidade financeira.",
    features: [
        {title: "Baixa tolerância a riscos",
         text: "Você prefere evitar oscilações e perdas, mesmo que pequenas."
        },
        {title: "Foco na segurança",
         text: "Suas escolhas priorizam a proteção do patrimônio."
        },
        {title: "Visão de longo prazo",
         text: "Você valoriza a constância e a construção gradual dos resultados."
        },
        {title: "Preferência por previsibilidade",
         text: "Você se sente mais confortável com retornos estáveis e conhecidos."
        }
    ]
}

const arrojado = {
    arrojado: "Arrojado",
    description: "Você tem alta disposição para assumir riscos em busca de grandes oportunidades. Está confortável com oscilações e busca maximizar seus retornos no longo prazo.",
    meaning: [
        "Tem alta tolerância a riscos para buscar retornos superiores.",
        "Está disposto(a) a enfrentar variações significativas no curto prazo.",
        "Prioriza o crescimento acelerado do patrimônio, mesmo que isso envolva mais volatilidade.",
        "Busca explorar oportunidades mais arrojadas e inovadoras.",
        "Tem foco de longo prazo e confiança para manter seus investimentos."
    ],
    behaviour: "Investidores arrojados buscam o máximo de crescimento possível e aceitam correr riscos elevados para alcançar resultados expressivos. O objetivo é aproveitar oportunidades de alto potencial, entendendo que oscilações fazem parte do caminho.",
    features: [
        {title: "Alta tolerância a riscos",
         text: "Você aceita grandes oscilações em busca de retornos potencialmente mais altos."
        },
        {title: "Foco em grandes oportunidades",
         text: "Você busca investimentos com alto potencial de crescimento, mesmo que mais voláteis."
        },
        {title: "Visão de longo prazo",
         text: "Você entende que grandes resultados exigem tempo e paciência para superar os desafios no caminho."
        },
        {title: "Diversificação estratégica",
         text: "Você busca diversificar em diferentes ativos e setores para potencializar seus resultados."
        },
        {title: "Mentalidade de crescimento",
         text: "Você está sempre em busca de aprender, evoluir e aproveitar novas tendências e mercados."
        }
    ]
}

const agressive = {
    agressive: "Agressivo",
    description: "Você tem máxima disposição para assumir riscos em busca de retornos muito acima da média. Está confortável com alta volatilidade e busca aproveitar ao máximo as oportunidades do mercado no longo prazo.",
    meaning: [
        "Tem alta tolerância a riscos e não se incomoda com grandes oscilações.",
        "Busca retornos muito superiores à média do mercado.",
        "Está disposto(a) a assumir riscos significativos para alcançar seus objetivos financeiros.",
        "Prioriza o crescimento acelerado do patrimônio no longo prazo.",
        "Acredita que oportunidades excepcionais exigem coragem para agir."
    ],
    behaviour: "Investidores agressivos têm foco total no crescimento máximo do patrimônio e aceitam grandes variações de curto prazo para alcançar resultados excepcionais. O objetivo é aproveitar ao máximo oportunidades de alto potencial, entendendo que riscos elevados fazem parte da estratégia.",
    features: [
        {title: "Máxima tolerância a riscos",
         text: "Você está confortável com grandes oscilações e perdas significativas em busca de retornos muito altos."
        },
        {title: "Foco em alto potencial",
         text: "Você prioriza investimentos com altíssimo potencial de crescimento, mesmo que mais voláteis."
        },
        {title: "Visão de longo prazo",
         text: "Você entende que grandes resultados vêm no longo prazo e tem paciência para atravessar momentos de alta volatilidade."
        },
        {title: "Diversificação ampla e estratégica",
         text: "Você busca diversificar em diferentes classes de ativos, mercados e setores para potencializar resultados."
        },
        {title: "Mentalidade de performance",
         text: "Você está sempre em busca de performance superior e disposto(a) a explorar estratégias mais arrojadas e inovadoras."
        }
    ]
}

export function suitabilityTest() {
    return(
        <div>
        </div>
    )
}