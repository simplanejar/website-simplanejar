import Image from 'next/image';
import { MdOutlineShoppingCart } from "react-icons/md";

interface DescriptionPart {
  text: string;
  highlight?: boolean;
}

interface AboutData {
    tag: string,
    title: {
        title: string,
        span: string
    },
    description: DescriptionPart[][],
    bookImage: {
        src: string,
        alt: string
    },
    buyButton: {
        text: string,
        link: string
    },
    availableButton: {
        text: string,
        src: string,
        alt: string
    }
}

const aboutMockData: AboutData = {
    tag: 'Livro',
    title: {
        title: "Planejamento Financeiro: ",
        span: "Você no Controle!"
    },
    description: [
    // parágrafo 1
    [
      { text: "Um poderoso método de " },
      { text: "planejamento financeiro", highlight: true },
      { text: " para fazer qualquer pessoa promover a sua " },
      { text: "transformação financeira", highlight: true },
      { text: ". Você se tornará financeiramente inteligente de uma forma como nunca se sentiu antes." },
    ],
    // parágrafo 2
    [
      { text: "São " },
      { text: "ideias inovadoras", highlight: true },
      { text: " e energéticas, reveladoras, " },
      { text: "práticas", highlight: true },
      { text: " e que começam a funcionar de imediato na sua mente, levando você a ações precisas para mudanças irreversíveis, duradouras e necessárias em sua vida financeira. Você jamais será o mesmo depois de colocar essas ideias em " },
      { text: "prática", highlight: true },
      { text: "!" },
    ],
    // parágrafo 3
    [
      { text: "Ao longo de uma " },
      { text: "jornada em cinco etapas", highlight: true },
      { text: ", você será convidado a assumir o " },
      { text: "protagonismo", highlight: true },
      { text: " da sua vida financeira, transformando conhecimento em ação e sonhos em conquistas." },
    ],
    // parágrafo 4
    [
      { text: "Dê o primeiro passo para sua transformação financeira!", highlight: true },
    ],
  ],
    bookImage:{
        src: "/book/book-about.png",
        alt: "Livro Planejamento Financeiro: Você no Controle, da autora Simone Costa."
    },
    buyButton: {
        text: "Comprar agora na Amazon  >",
        link: "https://www.amazon.com.br/Planejamento-Financeiro-Voc%C3%AA-no-controle/dp/6550471559/ref=asc_df_6550471559?mcid=6fc688970b95384795e11ebdbce99e58&tag=googleshopp00-20&linkCode=df0&hvadid=709856848245&hvpos=&hvnetw=g&hvrand=15531010741051199456&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9102216&hvtargid=pla-1661282036085&psc=1&hvocijid=15531010741051199456-6550471559-&hvexpln=0&language=pt_BR"
    },
    availableButton: {
        text: "Disponível na Amazon",
        src: "/book/amazon-logo.svg",
        alt: "Logo da amazon."
    }
}

interface CardData {
    title: string,
    description: string
    
}

const cardsMockData: CardData[] = [
    {title: "Conteúdo prático", description: "Conhecimento para colocar em ação."},
    {title: "Exercícios práticos", description: "Da reflexão à prática."},
    {title: "Aplicação para a vida real", description: "Planejamento para objetivos reais."},
    {title: "Protagonismo financeiro", description: "Você no controle da sua vida financeira."}
]
    


export default function About(){
    return(
        <section className="flex flex-nowrap items-center gap-[78px] px-[64px] w-full max-w-[1440px] m-auto mt-[56px]">
            <div>
                <Image src={aboutMockData.bookImage.src} alt={aboutMockData.bookImage.alt} width={579} height={737}/>
                <button className='flex content-center items-center gap-[10px] py-[2px] px-[20px] rounded-[10px] bg-[#FCFCFE] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] m-auto mt-[14px] cursor-pointer'>
                    <Image src={aboutMockData.availableButton.src} alt={aboutMockData.availableButton.alt} width={48} height={48} />
                    <span>{aboutMockData.availableButton.text}</span>
                </button>
            </div>
            <div className='w-[637px]'>
                <div>
                    <span className='text-[24px] mb-[14px] font-bold bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8] bg-clip-text text-transparent'>{aboutMockData.tag}</span>
                    <div className='w-[40px] h-[5px] rounded-[10px] my-[12px]  bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8]'></div>
                </div>
                <h1 className='text-[48px] font-extrabold leading-[60px]'>
                    {aboutMockData.title.title} 
                    <span className='text-[#7C4DFF]'>{aboutMockData.title.span}</span>
                </h1>
                {aboutMockData.description.map((paragraph, i) => 
                    <p key={i} className='my-[30px] text-[20px] font-semibold '>
                        {paragraph.map((part, j) => 
                            part.highlight ? 
                                <span key={j} className='text-[#7C4DFF] font-bold'>{part.text}</span>
                            :
                                part.text
                        )}
                    </p>
                )}
                <a href={aboutMockData.buyButton.link}>
                    <button className='flex items-center text-white content-center py-[18px] px-[24px] mt-[40px] gap-[8px] rounded-[10px] bg-[#7C4DFF] font-bold shadow-[0_1px_4px_0_rgba(0,0,0,0.25)] cursor-pointer'>
                    <MdOutlineShoppingCart className='w-[20px] h-[20px]' />
                    {aboutMockData.buyButton.text}
                    </button>
                </a>
                
            </div>
        </section>
    )
}