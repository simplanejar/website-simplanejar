import { ParagraphRender } from "../../utils/paragraphRender";
import { CardIdealizadora } from "../../utils/cardIdealizadora";

import { MdOutlinePerson, MdOutlineSchool, MdOutlineStarBorder } from "react-icons/md";
import { FaLinkedinIn, FaRegCompass, FaRegHeart } from "react-icons/fa";
import { PiHandHeartLight } from "react-icons/pi";
import { BsGraphUpArrow } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import { HiOutlineBookOpen, HiOutlineExternalLink } from "react-icons/hi";

import Image from "next/image";
import simone from "@/assets/simone.png"

const titles = {
    prev: "SOBRE A IDEALIZADORA",
    main: {
        t1: "Conhecimento que se",
        t2: "transforma em propósito."
    },
    name: "Simone Costa",
    subname: "IDEALIZADORA DO SIMPLANEJAR"
}

const cardText = {
    fromWhere: {
        title: "De onde veio o propósito",
        text: {
            t1: "Com",
            t2: "origem simples,", //grifado
            t3: "Simone Costa acredita que a",
            t4: "educação e a educação financeira", //grifado
            t5: "tiveram papel fundamental na",
            t6: "transformação de sua própria história.", //grifado
            t7: "Ao longo da vida, experimentou na prática como o",
            t8: "conhecimento, o planejamento e as escolhas conscientes", //grifado
            t9: "podem",
            t10: "ampliar oportunidades, proporcionar mais segurança e construir novos caminhos." //grifado
        }
    },
    experience: {
        title: "A experiência construída ao longo da carreira",
        text: {
            t1: "Executiva do mercado financeiro com",
            t2: "mais de 15 anos de experiência", //grifado
            t3: "em",
            t4: "investimentos, estratégia de negócios, desenvolvimento organizacional e transformação corporativa,", //grifado
            t5: "liderou projetos de",
            t6: "crescimento, governança, performance comercial, analytics, experiência do cliente", //grifado
            t7: "e",
            t8: "gestão de pessoas", //grifado
            t9: "em instituições financeiras e empresas de investimentos."
        }
    },
    graduation: {
        title: "A formação que sustenta essa atuação",
        text: {
            t1:"Possui sólida",
            t2: "formação acadêmica nacional e internacional,",//grifado
            t3: "incluindo",
            t4: "Doutorado Internacional, Mestrado Internacional e MBA em Economia pela USP,",//grifado
            t5: "além de certificações financeiras globais como",
            t6: "CFP®, CAMS®, SIE® e MiFID II.",//grifado
            t7: "Sua atuação combina",    
            t8: "visão estratégica, conhecimento técnico",//grifado
            t9: "e o compromisso de tornar a",
            t10: "educação financeira mais acessível e transformadora",//grifado
            t11: "para a sociedade."
        }
    },
    motivation: {
        title: "Por que nasceu o SIM PLANEJAR",
        text: {
            t1: "Idealizadora do",
            t2: "SIM PLANEJAR",//grifado
            t3: "e autora do livro",
            t4: "“Planejamento Financeiro: Você no Controle!”,",//grifado
            t5: "Simone Costa acredita que a educação financeira é uma",
            t6: "ferramenta de transformação social",//grifado
            t7: "capaz de ampliar a",
            t8: "consciência financeira,",//grifado
            t9: "fortalecer o",
            t10: "protagonismo individual",//grifado
            t11: "e ajudar as pessoas a",
            t12: "realizarem seus sonhos,",//grifado
            t13: "conquistarem",
            t14: "objetivos",//grifado
            t15: "e construírem um futuro com mais",
            t16: "liberdade, segurança e possibilidades."//grifado
        }
    },
    conviction: {
        title: "A convicção que permanece",
        text: {
            t1: "Sua própria trajetória é um",
            t2: "reflexo daquilo que acredita",//grifado
            t3: "e procura compartilhar por meio do",
            t4: "SIM PLANEJAR.",//grifado
            t5: "A educação e a educação financeira tiveram papel importante na",
            t6: "transformação de sua história",//grifado
            t7: "e reforçam a convicção de que",
            t8: "conhecimento, planejamento e escolhas conscientes",//grifado
            t9: "podem",
            t10: "ampliar oportunidades",//grifado
            t11: "e construir um futuro com mais",
            t12: "liberdade, segurança e possibilidades."//grifado
        }
    },
    global: {
        p1: {
            t1: "Simone Costa acredita que a",
            t2: "educação financeira",//grifado
            t3: "é um dos",
            t4: "principais motores",//grifado
            t5: "da",
            t6: "transformação social."  //grifado  
        },
        star: {
            t1: "Acredita que a",
            t2: "educação financeira transforma vidas."//grifado
        },
        compass: {
            t1: "Seu propósito é inspirar e apoiar mais pessoas a serem",
            t2: "protagonistas",//grifado
            t3: "das suas escolhas e construírem um futuro com mais",
            t4: "tranquilidade",//grifado
            t5: "e",
            t6: "liberdade."//grifado
        },
        button: "Acessar meu LinkedIn"
    },
    values: ["Propósito", "Educação", "Transformação", "Direção", "Protagonismo"]
}

const altImg = "Simone Costa"
const linkedInLink = "https://www.linkedin.com/in/simone-costa-cfp/"

export default function Founder() {
    return (
        <section className="flex flex-col p-[50px] max-w-[1440px] items-center self-center">
            <div className="flex gap-[30px]">
                <div>
                    <h2 className=" inline bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8] bg-clip-text text-transparent text-[24px] font-bold ">{titles.prev}</h2>
                    <div className="bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8] h-[5px] w-[40px] rounded-[10px] mt-[17px] mb-[37px]"> </div>
                    <Image src={simone} alt={altImg} width={383} className="rounded-[40px]"/>
                    <div className="bg-[#F2F0FD] rounded-[10px] w-[383px] mt-[24px] pb-[27px] flex flex-col items-center">
                        <div className="px-[20px] py-[25px]">
                            <ParagraphRender text={cardText.global.p1} cor="roxo" tamanho={18}/>
                            <div className="flex gap-[20px] mt-[24px]">
                                <div className="bg-white rounded-full size-fit p-[8px]"><MdOutlineStarBorder className="text-[#7C4DFF] text-[28px]"/></div>
                                <ParagraphRender text={cardText.global.star} cor="roxo" tamanho={20}/>
                            </div>
                            <div className="flex gap-[20px] mt-[36px]">
                                <div className="bg-white rounded-full size-fit p-[12px]"><FaRegCompass className="text-[#7C4DFF] text-[20px]"/></div>
                                <ParagraphRender text={cardText.global.compass} cor="roxo" tamanho={20}/>
                            </div>
                        </div>
                        <a href={linkedInLink} target="_blank">
                            <button className="flex gap-[12px] bg-[#0A66C2] rounded-[10px] px-[20px] py-[15px] text-white font-bold text-[20px] items-center hover:cursor-pointer hover:bg-white hover:text-[#0A66C2] transition duration-2s00 ease-in-out">
                                <FaLinkedinIn/>
                                {cardText.global.button}
                                <HiOutlineExternalLink/>
                            </button>
                        </a>
                    </div>
                </div>       
                <div>
                    <h1 className="font-extrabold text-[44px] max-w-[550px]">{titles.main.t1} <span className="text-[#7C4DFF]">{titles.main.t2}</span> </h1>
                    <h2 className="font-extrabold text-[40px] text-[#7C4DFF] mt-[22px] leading-[110%]">{titles.name}</h2>
                    <h3 className="font-bold text-[24px] mb-[10px]" >{titles.subname}</h3>
                    <CardIdealizadora cor="roxo" icon={PiHandHeartLight} title={cardText.fromWhere.title} text={cardText.fromWhere.text}/>
                    <CardIdealizadora cor="verde" icon={BsGraphUpArrow} title={cardText.experience.title} text={cardText.experience.text}/>
                    <CardIdealizadora cor="roxo" icon={MdOutlineSchool} title={cardText.graduation.title} text={cardText.graduation.text}/>
                    <CardIdealizadora cor="verde" icon={PiHandHeartLight} title={cardText.motivation.title} text={cardText.motivation.text}/>
                    <CardIdealizadora cor="roxo" icon={FaRegCompass} title={cardText.conviction.title} text={cardText.conviction.text}/>
                </div>
            </div>
            <div className="flex gap-[60px] bg-[#FCFCFE] p-[40px] shadow-[0_8px_4px_0_#F2F0FD] rounded-[10px] my-[74px]">
                <div className="flex flex-col items-center text-[#7C4DFF]">
                    <TbTargetArrow className="text-[80px]"/>
                    <p className="text-[22px] font-bold">{cardText.values[0]}</p>
                </div>
                <div className="flex flex-col items-center text-[#7C4DFF]">
                    <HiOutlineBookOpen className="text-[80px]"/>
                    <p className="text-[22px] font-bold">{cardText.values[1]}</p>
                </div>
                <div className="flex flex-col items-center text-[#7C4DFF]">
                    <FaRegHeart className="text-[80px]"/>
                    <p className="text-[22px] font-bold">{cardText.values[2]}</p>
                </div>
                <div className="flex flex-col items-center text-[#01AEAA]">
                    <FaRegCompass className="text-[80px]"/>
                    <p className="text-[22px] font-bold">{cardText.values[3]}</p>
                </div>
                <div className="flex flex-col items-center text-[#01AEAA]">
                    <MdOutlinePerson className="text-[80px]"/>
                    <p className="text-[22px] font-bold">{cardText.values[4]}</p>
                </div>
            </div>
        </section>
    );
}