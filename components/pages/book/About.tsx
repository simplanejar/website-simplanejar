'use client'

import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

interface DescriptionPart {
  text: string;
  highlight?: boolean;
  display ?: string;
}

interface AboutData {
    tag: string,
    title: {
        title: string,
        span: string
    },
    description: DescriptionPart[][],
    pitch: string,
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
    },
    showMore: {
        off: string,
        on: string
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
      { text: ". " },
      { text: "Você se tornará financeiramente inteligente de uma forma como nunca se sentiu antes.", display: "hidden md:inline" }
    ],
    // p2 no mobile
    [
      { text: "Você se tornará financeiramente inteligente de uma forma como nunca se sentiu antes.", display: "md:hidden" }
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
    ]
  ],
    pitch: "Dê o primeiro passo para sua transformação financeira!" ,
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
    },
    showMore: {
        off: "Ver mais",
        on: "Ver menos"
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
    
function renderBookImage(display: string): React.JSX.Element {
    return (
        <div className={`flex-col gap-[14px] w-fit h-fit items-center ${display}`}>
            <Image src={aboutMockData.bookImage.src} alt={aboutMockData.bookImage.alt} width={579} height={737} className='w-[222px] h-auto md:w-[579px] object-contain'/>
            <button className='flex content-center items-center gap-[10px] py-[2px] px-[10px] md:px-[20px] rounded-[10px] bg-[#FCFCFE] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] cursor-pointer'>
                <Image src={aboutMockData.availableButton.src} alt={aboutMockData.availableButton.alt} width={48} height={48} className='h-[37px] w-[37px] md:h-[48px] md:w-[48px]' />
                <span className='text-[14px] md:text-[16px]'>{aboutMockData.availableButton.text}</span>
            </button>
        </div>
    )
}

const renderParagraphs = (paragraphs: DescriptionPart[][]) => (
paragraphs.map((paragraph, i) => 
    <p key={i} className='my-[30px] text-[20px] font-semibold '>
        {paragraph.map((part, j) => 
            part.highlight ? 
                <span key={j} className= "text-[#7C4DFF] font-bold" >{part.text}</span>
            :
                <span key={j} className={part.display}>{part.text}</span>
        )}
    </p>)
)


export default function About(){
    const [isVisible, setIsVisible] = useState(false);

    function toggleView() {
        setIsVisible(!isVisible)
    }

    return(
        <section className="flex flex-nowrap items-center gap-[78px] px-[22px] md:px-[64px] w-full max-w-[1440px] m-auto mt-[56px] mb-[40px] md:mb-[60px]">
            {renderBookImage("hidden md:flex")}
            <div className='w-full md:w-[637px]'>
                <div>
                    <span className='text-[20px] md:text-[24px] mb-[14px] font-bold bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8] bg-clip-text text-transparent uppercase'>{aboutMockData.tag}</span>
                    <div className='w-[40px] h-[5px] rounded-[10px] mt-[11px] mb-[6px]  bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8]'></div>
                </div>
                <h1 className='text-[24px] md:text-[48px] font-extrabold leading-[30px] md:leading-[60px]'>
                    {aboutMockData.title.title} 
                    <span className='text-[#7C4DFF]'>{aboutMockData.title.span}</span>
                </h1>
                {renderBookImage("md:hidden flex m-auto my-[40px]")}
                {renderParagraphs(aboutMockData.description.slice(0,2))}
                <div className='hidden md:block'>
                    {renderParagraphs(aboutMockData.description.slice(2))}
                </div>
                <div className={`md:hidden ${isVisible ? '' : 'hidden'} `}>
                    {renderParagraphs(aboutMockData.description.slice(2))}
                </div>
                <button onClick={toggleView}
                        className='flex items-center text-[14px] bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8] bg-clip-text text-transparent underline font-semibold md:hidden'>
                    {isVisible ? aboutMockData.showMore.on : aboutMockData.showMore.off}
                    {/* Definição do Gradiente SVG */}
                    <svg width="0" height="0" className="absolute">
                        <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2ED8E8" />
                        <stop offset="100%" stopColor="#7C4DFF" />
                        </linearGradient>
                    </svg>

                    {/* Ícone utilizando a URL do Gradiente */}
                    <MdOutlineKeyboardArrowUp 
                        size={20}
                        style={{ fill: 'url(#icon-gradient)' }}
                        className={`transition-transform duration-200 ${isVisible ? '' : 'rotate-180'}`} 
                    />
                </button>
                <p className='text-[#7C4DFF] text-[18px] md:text-[22px] font-extrabold mt-[40px] text-center md:text-left'>{aboutMockData.pitch}</p>
                <a href={aboutMockData.buyButton.link} target="_blank">
                    <button className='flex items-center text-white content-center p-4 md:py-[18px] md:px-[24px] mt-[7px] md:mt-[40px] gap-[8px] rounded-[10px] bg-[#7C4DFF] font-bold shadow-[0_1px_4px_0_rgba(0,0,0,0.25)] cursor-pointer m-auto md:m-0'>
                    <MdOutlineShoppingCart className='w-[20px] h-[20px]' />
                    {aboutMockData.buyButton.text}
                    </button>
                </a>
                
            </div>
        </section>
    )
}