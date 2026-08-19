"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const seriesData = [
  {
    title: "Organize, Economize e Conquiste!",
    description: "Aprenda a organizar suas receitas e despesas, construir seu fluxo financeiro e entender para onde o seu dinheiro está indo.",
    videos: 3,
    ytId: "_dSnOOcSTYY"
  },
  {
    title: "Reservas Financeiras",
    description: "Aprenda a construir sua reserva de emergência, preparar sua aposentadoria e planejar seus sonhos e projetos.",
    videos: 3,
    ytId: "k79-i-Uh8RE"
  },
  {
    title: "Economia em casa",
    description: "Descubra como reduzir os gastos com água, energia elétrica, gás de cozinha e supermercado, economizando mais todos os meses.",
    videos: 4,
    ytId: "0fFTFSsdBdI"
  },
  {
    title: "Reputação Financeira",
    description: "Descubra qual é o seu score, como aumentar sua pontuação e onde consultar seu currículo financeiro no Registrato.",
    videos: 3,
    ytId: "FSLg4lH_H3g"
  },
  {
    title: "Cartão de Crédito",
    description: "Saiba como funciona o cartão de crédito, entenda sua fatura, tarifas, juros e utilize o cartão como um aliado do seu planejamento financeiro.",
    videos: 9,
    ytId: "AW8bl6rjSAs"
  },
  {
    title: "Sucessão",
    description: "Aprenda a preparar sua sucessão em vida, entendendo testamento, inventário, herdeiros e os principais aspectos do planejamento sucessório.",
    videos: 15,
    ytId: "iH0dh6WC2y4"
  },
];

// Triplicamos os dados para criar o loop infinito visualmente (apenas para mobile)
const infiniteSeriesData = [...seriesData, ...seriesData, ...seriesData];

export default function Videos() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Calcula a largura do item no mobile: 200px (width) + 16px (gap-4) = 216px
  const ITEM_WIDTH = 216; 

  // Inicia o carrossel no bloco central para permitir scroll para trás
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = seriesData.length * ITEM_WIDTH;
    }
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    
    // Atualiza a bolinha de paginação (modulo pelo tamanho original)
    const currentIndex = Math.round(scrollLeft / ITEM_WIDTH);
    setActiveIndex(currentIndex % seriesData.length);

    // Lógica do loop infinito: reseta a posição de forma invisível
    if (scrollLeft === 0) {
      scrollRef.current.scrollLeft = seriesData.length * ITEM_WIDTH;
    } else if (scrollLeft + clientWidth >= scrollWidth - 10) {
      scrollRef.current.scrollLeft = scrollLeft - (seriesData.length * ITEM_WIDTH);
    }
  };

  return (
    <section className="w-full bg-[#FCFCFE] py-12 lg:py-20 font-['Nunito',sans-serif] overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 justify-between">
          
          {/* ================= COLUNA ESQUERDA ================= */}
          <div className="w-full lg:w-[400px] flex flex-col shrink-0">
            {/* Título com Gradiente */}
            <div className="mb-6 lg:mb-8">
              <h3 className="font-extrabold text-[20px] lg:text-[24px] leading-[27px] lg:leading-[33px] uppercase bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8] bg-clip-text text-transparent">
                Acompanhe o Sim Planejar
              </h3>
              <div className="w-[40px] h-[5px] bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8] lg:from-[#7C4DFF] lg:to-[#7C4DFF] rounded-[10px] mt-2"></div>
            </div>
            
            <h2 className="font-extrabold text-[24px] leading-[33px] lg:text-[48px] lg:leading-[65px] text-[#000416] mb-6">
              Transforme <br className="hidden lg:block"/>
              conhecimento <br className="hidden lg:block"/>
              em ação
            </h2>
            
            <p className="font-bold lg:font-bold text-[16px] leading-[25px] text-[#000416] mb-8 lg:mb-10">
              Acompanhe o SIM PLANEJAR no <span className="text-[#FF3838]">YouTube</span> e no <span className="text-[#7C4DFF]">Instagram</span> e tenha acesso a conteúdos, reflexões e dicas práticas para organizar suas finanças e assumir o controle da sua vida financeira.
            </p>

            {/* Redes Sociais - Versão MOBILE */}
            <div className="flex lg:hidden gap-3 mb-8 w-full justify-between">
              <Link 
                href="https://www.instagram.com/simplanejar" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-[160px] h-[50px] bg-[#FCFCFE] border border-[#7C4DFF] shadow-[0px_4px_4px_#F2F0FD] rounded-[10px] flex items-center justify-center gap-2"
              >
                <img src="/instagram.svg" alt="Instagram" className="w-[20px] h-[20px] shrink-0" />
                <div className="flex flex-col text-left">
                  <span className="font-semibold text-[14px] leading-[15px] text-[#7C4DFF]">Instagram</span>
                  <span className="font-semibold text-[14px] leading-[15px] text-[#7C4DFF]">@simplanejar</span>
                </div>
              </Link>

              <Link 
                href="https://www.youtube.com/@simplanejar" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-[160px] h-[50px] bg-[#FCFCFE] border border-[#FF3838] shadow-[0px_4px_4px_#F2F0FD] rounded-[10px] flex items-center justify-center gap-2"
              >
                <img src="/youtube.svg" alt="YouTube" className="w-[24px] h-[19px] shrink-0" />
                <div className="flex flex-col text-left">
                  <span className="font-semibold text-[14px] leading-[15px] text-[#FF3838]">YouTube</span>
                  <span className="font-semibold text-[14px] leading-[15px] text-[#FF3838]">SIM PLANEJAR</span>
                </div>
              </Link>
            </div>

            {/* Redes Sociais - Versão DESKTOP */}
            <div className="hidden lg:block">
              
              {/* Card Instagram */}
              <div className="w-[400px] h-[223px] bg-[#FCFCFE] shadow-[0px_4px_4px_#F2F0FD] rounded-[10px] py-[26px] mb-6 flex flex-col items-center justify-between">
                
                {/* Área Superior: Ícone + Textos */}
                <div className="flex items-start gap-5 w-[355px]">
                  
                  <div className="w-[100px] h-[100px] rounded-full bg-[#FCFCFE] border border-[#F2F0FD] shadow-[0px_4px_4px_#F2F0FD] flex items-center justify-center shrink-0">
                    <img src="/instagram.svg" alt="Instagram Logo" className="w-[50px] h-[50px] shrink-0" />
                  </div>
                  
                  <div className="w-[235px] flex flex-col">
                    <p className="font-bold text-[18px] leading-[25px] text-[#000416]">
                      <span className="text-[#7C4DFF]">Instagram</span> <br/> @simplanejar
                    </p>
                    <p className="font-Normal text-[16px] leading-[25px] text-[#000416] mt-1">
                      Conteúdos rápidos, reflexões e dicas práticas para o dia a dia.
                    </p>
                  </div>
                  
                </div>

                {/* Botão Inferior */}
                <Link 
                  href="https://www.instagram.com/simplanejar" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-[355px] h-[50px] bg-[#FCFCFE] border border-[#7C4DFF] shadow-[0px_1px_4px_#F2F0FD] rounded-[10px] flex items-center justify-center gap-2 text-[#7C4DFF] font-bold text-[16px] hover:bg-[#F2F0FD] transition-colors"
                >
                  Acompanhar no instagram
                  <img src="/seta-clean.svg" alt="Seta" className="w-[20px] h-[20px]" />
                </Link>

              </div>

              {/* Card YouTube */}
              <div className="w-[400px] h-[223px] bg-[#FCFCFE] shadow-[0px_4px_4px_#F2F0FD] rounded-[10px] p-6 mb-6 flex flex-col justify-between">
                <div className="flex items-start gap-4">
                  <div className="w-[100px] h-[100px] rounded-[100px] bg-[#FCFCFE] border border-[#F2F0FD] shadow-[0px_4px_4px_#F2F0FD] flex items-center justify-center shrink-0">
                    <img src="/youtube.svg" alt="YouTube Logo" className="w-[49px] h-[38px] shrink-0" />
                  </div>
                  <div>
                    <p className="font-bold text-[18px] leading-[25px] text-[#FF3838]">YouTube <br/> <span className="text-[#000416]">SIM PLANEJAR</span></p>
                    <p className="font-Normal text-[16px] leading-[25px] text-[#000416] mt-1">
                      Séries organizadas para aprofundar seu conhecimento em planejamento financeiro.
                    </p>
                  </div>
                </div>
                  <Link 
                    href="https://www.youtube.com/@simplanejar" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full h-[50px] border border-[#FF3838] shadow-[0px_1px_4px_#F2F0FD] rounded-[10px] flex items-center justify-center gap-2 text-[#FF3838] font-bold text-[16px] hover:bg-red-50 transition-colors"
                  >
                    Conhecer o canal no YouTube
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.0312 11.0416H0V8.95844H16.0312L8.53125 1.45844L10 0L20 10L10 20L8.53125 18.5416L16.0312 11.0416Z" fill="#FF3838"/>
                    </svg>

                  </Link>
              </div>

              {/* Banner Inferior Esquerdo (Desktop) */}
              <div className="w-[400px] h-[40px] bg-[#F2F0FD] shadow-[0px_4px_4px_#F2F0FD] rounded-[10px] flex items-center justify-center gap-3">
                <img src="/gift.svg" alt="Ícone de Presente" className="w-[20px] h-[21px] shrink-0" />
                <p className="font-Normal text-[16px] leading-[25px] text-[#000416]">
                  Conteúdo <span className="text-[#7C4DFF]">gratuito</span> organizado por séries.
                </p>
              </div>

            </div>
          </div>

          {/* ================= COLUNA DIREITA ================= */}
          <div className="w-full lg:w-[850px] flex flex-col min-w-0">
            
            <div className="flex items-center gap-3 mb-6">
              <img src="/youtube.svg" alt="YouTube Icon" className="w-[46px] h-[35px] ml-8 shrink-0" />
              <h3 className="font-extra-bold lg:font-extrabold text-[16px] text-[#000416] uppercase">
                Séries disponíveis no YouTube
              </h3>
            </div>

            {/* Carrossel Horizontal (Mobile) / Grade (Desktop) */}
            <div 
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto snap-x snap-mandatory gap-4 lg:gap-[40px] pb-6 lg:pb-0 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden w-screen -mx-4 px-4 lg:w-auto lg:mx-0 lg:px-0 lg:flex-col lg:overflow-visible"
            >
              {infiniteSeriesData.map((serie, index) => {
                // Variável para identificar se é o card clonado, escondendo-o na versão Desktop
                const isClone = index >= seriesData.length;

                return (
                  <Link 
                    key={index} 
                    href={`https://www.youtube.com/watch?v=${serie.ytId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-[200px] lg:w-[850px] lg:h-[150px] shrink-0 snap-center lg:bg-[#FCFCFE] lg:shadow-[0px_4px_4px_#F2F0FD] rounded-[10px] lg:p-6 flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6 group ${isClone ? 'lg:hidden' : ''}`}
                  >
                    
                    {/* Thumbnail do YouTube */}
                    <div className="relative w-[200px] h-[120px] lg:w-[180px] lg:h-[100px] bg-[#D9D9D9] rounded-[10px] flex-shrink-0 flex items-center justify-center overflow-hidden">
                      <img 
                        src={`https://img.youtube.com/vi/${serie.ytId}/hqdefault.jpg`} 
                        alt={serie.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <img src="/youtube-play-video.svg" alt="Play Video" className="absolute w-[60px] h-[60px] group-hover:scale-105 transition-transform shadow-sm" />
                    </div>

                    <div className="hidden lg:flex flex-col flex-1 w-full justify-center">
                      {/* Título + descrição */}
                      <h4 className="font-bold text-[18px] leading-[25px] text-[#000416] group-hover:text-[#7C4DFF] transition-colors">
                        {serie.title} {serie.description}
                      </h4>

                      {/* Qtd Vídeos + Ícone YouTube */}
                      <div className="flex items-center gap-2 font-medium text-[16px] leading-[25px] text-[#000416] mt-2">
                        <img
                          src="/youtube-pequeno-preto.svg"
                          alt="YouTube Icon"
                          className="w-[21px] h-[17px] shrink-0"
                        />
                        {serie.videos} vídeos
                      </div>
                    </div>

                    {/* SVG Seta Fundo Roxo */}
                    <img src="/seta-fundo-roxo.svg" alt="Seta Roxa" className="hidden lg:block w-[50px] h-[50px] flex-shrink-0 group-hover:translate-x-1 transition-transform ml-4" />
                  </Link>
                );
              })}
            </div>

            {/* Indicadores de Paginação (Apenas Mobile) */}
            <div className="flex lg:hidden justify-center items-center gap-[9px] mt-4 mb-8">
              {seriesData.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-[10px] h-[10px] rounded-full transition-colors ${activeIndex === i ? 'bg-[#7C4DFF]' : 'bg-[#D9D9D9]'}`}
                ></div>
              ))}
            </div>

            {/* Banner Inferior Direito (E tem muito mais!) */}
            <div className="bg-[#F2F0FD] shadow-[0px_4px_4px_#F2F0FD] rounded-[10px] h-auto lg:h-[80px] p-6 lg:py-0 lg:pl-[24px] lg:pr-[15px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-0 mt-2 lg:mt-8 w-[330px] lg:w-[848px] mx-auto lg:mx-0">
              
              {/* Lado Esquerdo: Ícone + Textos */}
              <div className="flex items-start lg:items-center gap-4 lg:gap-[20px]">
                
                <svg width="25" height="19" viewBox="0 0 49 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 mt-1 lg:mt-0">
                  <path d="M24.25 1.25C47.25 1.25 47.25 1.25 47.25 18.75C47.25 36.25 47.25 36.25 24.25 36.25C1.25 36.25 1.25 36.25 1.25 18.75C1.25 1.25 1.25 1.25 24.25 1.25Z" pathLength="1" stroke="#7C4DFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="1 1"/>
                  <path d="M19.1389 10L34.4722 18.75L19.1389 27.5V10Z" fill="#7C4DFF"/>
                </svg>

                <div className="flex flex-col lg:w-[484px]">
                  <h4 className="font-bold text-[16px] lg:hidden text-[#000416] mb-1">E tem muito mais!</h4>
                  <p className="font-bold text-[16px] lg:text-[18px] leading-[25px] text-[#000416]">
                    <span className="hidden lg:inline font-bold">E tem muito mais! </span>
                    Acesse o canal e descubra todas as séries e conteúdos disponíveis
                  </p>
                </div>
                
              </div>

              {/* Lado Direito: Botão */}
              <Link 
                href="https://www.youtube.com/@simplanejar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full lg:w-[235px] h-[45px] lg:h-[58px] bg-[#7C4DFF] rounded-[10px] flex items-center justify-center gap-2 lg:gap-[12px] hover:bg-[#6539d9] transition-colors shrink-0"
              >
                <span className="w-auto lg:w-[143px] font-semibold text-[16px] leading-[22px] text-[#FFFFFF] text-center lg:text-left">
                  Ver todas as séries no YouTube
                </span>
                <img src="/icone-ver-todas-as-series-no-yt.svg" alt="Ícone Ver Séries" className="w-[18px] h-[18px] shrink-0" />
              </Link>
              
            </div>

          </div>
        </div>
      </div>
    </section>
  );
} 