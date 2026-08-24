import React from 'react';
import { IoMdStar, IoMdArrowForward } from "react-icons/io";
import { FiBookOpen, FiTarget, FiUser, FiTrendingUp, FiShield, FiPieChart } from "react-icons/fi";
import { FaPiggyBank } from "react-icons/fa";
import Image from 'next/image';

const bookImage = "/book/book-investor.png"

export default function Book() {
    return (
        <section className='w-full min-h-screen flex flex-col items-center px-4 py-8 bg-[#F8F9FF]'>
            <header className="text-center max-w-3xl mb-12 flex flex-col items-center">
                
                <div className='flex items-center gap-3 text-[#7C4DFF] border rounded-full border-[#F2F0FD] mb-5 pr-5 shadow-sm font-semibold text-sm'>
                    <div className="bg-[#F2F0FD] rounded-full p-2">
                        <IoMdStar color="#7C4DFF" size="32px"/>
                    </div>
                    
                    <span className="flex-1 text-center font-bold text-[14px]">QUER IR ALÉM?</span>
                </div>
                
                <h1 className='text-xl md:text-[38px] font-extrabold text-slate-900 text-[#000416] leading-tight mb-4'>Antes de investir, construa uma <span className='text-[#7C4DFF]'>base financeira sólida.</span></h1>
                <p className='text-[#000416] font-light text-[16px]'>Conheça o livro que já ajudou mihares de pessoas a organizar suas finanças, definir objetivos e assumir o controle da própria vida financeira.</p>
            </header>

            
            <div className='w-full flex flex-col lg:flex-row items-center gap-8 mb-12 justify-center'>
                
                <div className='w-full lg:w-1/2 flex justify-center items-center'>
                    <Image src={bookImage} alt="Capa do Livro Planejamento Financeiro" width={450} height={450}/>    
                </div>   

                <div className='w-full lg:w-1/2 bg-[#FCFCFE] rounded-3xl shadow-xl p-6 lg:p-8 flex flex-col justify-center lg:mr-16'>

                    <div className="flex flex-col items-start gap-1 mb-4">
                        <h2 className="text-[#4F20CD] font-bold text-xl tracking-widest uppercase">LIVRO</h2>
                        <div className="h-0.5 w-16 bg-[#4F20CD]"></div>
                    </div>

                    <h2 className='text-[#000416] text-3xl font-extrabold mb-4 leading-tight'>Planejamento Financeiro: <br/> <span className='text-[#7C4DFF]'>Você no Controle!</span></h2>
                    <p className='text-[#000416] mb-12 leading-relaxed text-sm'>Simone Costa, por meio de textos objetivos, exemplos e exercícios práticos, convida você a ser o protagonista da sua vida financeira, obtendo o controle do seu dinheiro em prol da concretização de matas a curto, médio e longo prazo.</p>


                    <div className='grid grid-cols-4 gap-2 lg:flex lg:flex-row lg:gap-4 mb-8 lg:mr-24'>
                         <div className='flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-start'>
                            <div className="bg-[#F2F0FD] p-2 lg:p-3 rounded-full mb-2 lg:mb-0 lg:mr-3 shrink-0">
                                <FiBookOpen color='#7C4DFF' size={24} />
                            </div>
                            <div className='flex flex-col'>
                                <h3 className="font-bold text-[10px] md:text-[16px] text-[#000416] mb-1 leading-tight">Conteúdo prático</h3>
                                <p className="text-[8px] md:text-[14px] lg:text-xs text-[#000416] leading-tight">Conhecimento para colocar em ação.</p>
                            </div>   
                        </div>

                        <div className='flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-start'>
                            <div className="bg-[#F2F0FD] p-2 lg:p-3 rounded-full mb-2 lg:mb-0 lg:mr-3 shrink-0">
                                <FiTarget color='#01AEAA' size={24} />
                            </div>
                            <div className='flex flex-col'>
                                <h3 className="font-bold text-[10px] md:text-[16px] text-[#000416] mb-1 leading-tight">Exercícios</h3>
                                <p className="text-[8px] md:text-[14px] lg:text-xs text-[#000416] leading-tight">Da reflexão à prática.</p>
                            </div>   
                        </div>

                        <div className='flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-start'>
                            <div className="bg-[#F2F0FD] p-2 lg:p-3 rounded-full mb-2 lg:mb-0 lg:mr-3 shrink-0">
                                <FiUser color='#071F6B' size={24} />
                            </div>
                            <div className='flex flex-col'>
                                <h3 className="font-bold text-[10px] md:text-[16px] text-[#000416] mb-1 leading-tight">Para todos</h3>
                               <p className="text-[8px] md:text-[14px] lg:text-xs text-[#000416] leading-tight">Linguagem simples e acessível.</p>
                            </div>   
                        </div>

                        <div className='flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-start'>
                            <div className="bg-[#F2F0FD] p-2 lg:p-3 rounded-full mb-2 lg:mb-0 lg:mr-3 shrink-0">
                                <FiTrendingUp color='#7C4DFF' size={24} />
                            </div>
                            <div className='flex flex-col'>
                                <h3 className="font-bold text-[10px] md:text-[16px] text-[#000416] mb-1 leading-tight">Transformação</h3>
                                <p className="text-[8px] md:text-[14px] lg:text-xs text-[#000416] leading-tight">Ferramentas para mudas sua realidade.</p>
                            </div>   
                        </div>



                    </div>

                    <button className='w-full lg:w-2/5 bg-[#7C4DFF] hover:bg-[#A280FF] transition-colors text-white font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-3'>
                        <FiBookOpen size={20} /> Conhecer o livro <IoMdArrowForward size={20}/>
                    </button>
                </div>
            </div>



            <div className="w-full mx-auto bg-[#FCFCFE] rounded-3xl p-6 flex flex-col lg:flex-row items-center shadow-sm">
                
                <div className="flex flex-row items-center text-left gap-4 w-full lg:w-[45%] border-b lg:border-b-0 lg:border-r border-[#DCD7F5] pb-6 mb-6 lg:pb-0 lg:mb-0 lg:pr-6">
                    <div className="bg-[#F2F0FD] p-3 lg:p-4 rounded-full shadow-sm shrink-0 flex items-center justify-center">
                        <FiShield color="#7C4DFF" size={28} />
                    </div>
                    <div className="flex flex-col">
                        <h3 className="font-bold text-[#071F6B] text-[20px] mb-1">Transforme conhecimento em ação</h3>
                        <p className="text-[#071F6B] text-[16px]">Dê o próximo passo da sua jornada financeira e construa um futuro com mais tranquilidade e liberdade.</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:flex lg:flex-row items-center justify-between w-full lg:w-[55%]">
                    <div className="flex items-center gap-2 lg:gap-3 lg:w-1/4 border-r border-b lg:border-b-0 border-[#DCD7F5] pb-5 lg:pb-0 pr-3 lg:pr-4 lg:pl-4">
                        <div className="bg-[#F2F0FD] p-2.5 lg:p-3 rounded-full shrink-0">
                            <FaPiggyBank color='#7C4DFF' size={18} />
                        </div>
                        <span className="text-[12px] lg:text-[13px] font-bold text-[#000416] leading-tight">Organize<br/> suas finanças</span>
                    </div>

                    <div className="flex items-center gap-2 lg:gap-3 lg:w-1/4 border-b lg:border-b-0 lg:border-r border-[#DCD7F5] pb-5 lg:pb-0 pl-3 lg:px-4">
                        <div className="bg-[#F2F0FD] p-2.5 lg:p-3 rounded-full shrink-0">
                            <FiPieChart color='#7C4DFF' size={18} />
                        </div>
                        <span className="text-[12px] lg:text-[13px] font-bold text-[#000416] leading-tight">Construa reservas<br/> e segurança</span>
                    </div>
                    
                    <div className="flex items-center gap-2 lg:gap-3 lg:w-1/4 border-r border-[#DCD7F5] pt-5 lg:pt-0 pr-3 lg:px-4">
                        <div className="bg-[#F2F0FD] p-2.5 lg:p-3 rounded-full shrink-0">
                            <FiTarget color='#7C4DFF' size={18} />
                        </div>
                        <span className="text-[12px] lg:text-[13px] font-bold text-[#000416] leading-tight">Defina objetivos<br/> e conquistas</span>
                    </div>
                    
                    <div className="flex items-center gap-2 lg:gap-3 lg:w-1/4 pt-5 lg:pt-0 pl-3 lg:pl-4">
                        <div className="bg-[#F2F0FD] p-2.5 lg:p-3 rounded-full shrink-0">
                            <FiUser color='#7C4DFF' size={18} />
                        </div>
                        <span className="text-[12px] lg:text-[13px] font-bold text-[#000416] leading-tight">Assuma o controle<br/> da sua vida</span>
                    </div>
                    
                </div>
            </div>

            
        </section>
        
    );
};