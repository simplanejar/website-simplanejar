"use client";

import { ParagraphRender } from "../../utils/paragraphRender";
import { CardIdealizadora } from "../../utils/cardIdealizadora";

import { MdOutlinePerson, MdOutlineSchool, MdOutlineStarBorder } from "react-icons/md";
import { FaLinkedinIn, FaRegCompass, FaRegHeart } from "react-icons/fa";
import { PiHandHeartLight } from "react-icons/pi";
import { BsGraphUpArrow } from "react-icons/bs";
import { TbTargetArrow } from "react-icons/tb";
import { HiOutlineBookOpen, HiOutlineExternalLink } from "react-icons/hi";

import Image from "next/image";
import simone from "@/assets/simone.png";

const titles = {
  prev: "SOBRE A IDEALIZADORA",
  main: {
    t1: "Conhecimento que se",
    t2: "transforma em propósito.",
  },
  name: "Simone Costa",
  subname: "IDEALIZADORA DO SIMPLANEJAR",
};

const cardText = {
  fromWhere: {
    title: "De onde veio o propósito",
    text: {
      t1: "Com",
      t2: "origem simples,",
      t3: "Simone Costa acredita que a",
      t4: "educação e a educação financeira",
      t5: "tiveram papel fundamental na",
      t6: "transformação de sua própria história.",
      t7: "Ao longo da vida, experimentou na prática como o",
      t8: "conhecimento, o planejamento e as escolhas conscientes",
      t9: "podem",
      t10: "ampliar oportunidades, proporcionar mais segurança e construir novos caminhos.",
    },
  },
  experience: {
    title: "A experiência construída ao longo da carreira",
    text: {
      t1: "Executiva do mercado financeiro com",
      t2: "mais de 15 anos de experiência",
      t3: "em",
      t4: "investimentos, estratégia de negócios, desenvolvimento organizacional e transformação corporativa,",
      t5: "liderou projetos de",
      t6: "crescimento, governança, performance comercial, analytics, experiência do cliente",
      t7: "e",
      t8: "gestão de pessoas",
      t9: "em instituições financeiras e empresas de investimentos.",
    },
  },
  graduation: {
    title: "A formação que sustenta essa atuação",
    text: {
      t1: "Possui sólida",
      t2: "formação acadêmica nacional e internacional,",
      t3: "incluindo",
      t4: "Doutorado Internacional, Mestrado Internacional e MBA em Economia pela USP,",
      t5: "além de certificações financeiras globais como",
      t6: "CFP®, CAMS®, SIE® e MiFID II.",
      t7: "Sua atuação combina",
      t8: "visão estratégica, conhecimento técnico",
      t9: "e o compromisso de tornar a",
      t10: "educação financeira mais acessível e transformadora",
      t11: "para a sociedade.",
    },
  },
  motivation: {
    title: "Por que nasceu o SIM PLANEJAR",
    text: {
      t1: "Idealizadora do",
      t2: "SIM PLANEJAR",
      t3: "e autora do livro",
      t4: "“Planejamento Financeiro: Você no Controle!”,",
      t5: "Simone Costa acredita que a educação financeira é uma",
      t6: "ferramenta de transformação social",
      t7: "capaz de ampliar a",
      t8: "consciência financeira,",
      t9: "fortalecer o",
      t10: "protagonismo individual",
      t11: "e ajudar as pessoas a",
      t12: "realizarem seus sonhos,",
      t13: "conquistarem",
      t14: "objetivos",
      t15: "e construírem um futuro com mais",
      t16: "liberdade, segurança e possibilidades.",
    },
  },
  conviction: {
    title: "A convicção que permanece",
    text: {
      t1: "Sua própria trajetória é um",
      t2: "reflexo daquilo que acredita",
      t3: "e procura compartilhar por meio do",
      t4: "SIM PLANEJAR.",
      t5: "A educação e a educação financeira tiveram papel importante na",
      t6: "transformação de sua história",
      t7: "e reforçam a convicção de que",
      t8: "conhecimento, planejamento e escolhas conscientes",
      t9: "podem",
      t10: "ampliar oportunidades",
      t11: "e construir um futuro com mais",
      t12: "liberdade, segurança e possibilidades.",
    },
  },
  global: {
    p1: {
      t1: "Simone Costa acredita que a",
      t2: "educação financeira",
      t3: "é um dos",
      t4: "principais motores",
      t5: "da",
      t6: "transformação social.",
    },
    star: {
      t1: "Acredita que a",
      t2: "educação financeira transforma vidas.",
    },
    compass: {
      t1: "Seu propósito é inspirar e apoiar mais pessoas a serem",
      t2: "protagonistas",
      t3: "das suas escolhas e construírem um futuro com mais",
      t4: "tranquilidade",
      t5: "e",
      t6: "liberdade.",
    },
    button: "Acessar meu LinkedIn",
  },
  values: ["Propósito", "Educação", "Transformação", "Direção", "Protagonismo"],
};

const altImg = "Simone Costa";
const linkedInLink = "https://www.linkedin.com/in/simone-costa-cfp/";

const valuesData = [
  { icon: TbTargetArrow, label: cardText.values[0], text: "text-[#7C4DFF]" },
  { icon: HiOutlineBookOpen, label: cardText.values[1], text: "text-[#7C4DFF]" },
  { icon: FaRegHeart, label: cardText.values[2], text: "text-[#7C4DFF]" },
  { icon: FaRegCompass, label: cardText.values[3], text: "text-[#01AEAA]"},
  { icon: MdOutlinePerson, label: cardText.values[4], text: "text-[#01AEAA]" },
];

export default function Founder() {
  return (
    <section className="flex flex-col p-[20px] md:p-[50px] max-w-[1440px] w-full items-center self-center mx-auto">
      {/* ---------- MOBILE (< md) ---------- */}
      <div className="flex flex-col items-center w-full md:hidden">
        <h2 className="self-start bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8] bg-clip-text text-transparent text-[20px] font-bold">
          {titles.prev}
        </h2>
        <div className="self-start bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8] h-[5px] w-[40px] rounded-[10px] my-[8px]" />

        <h1 className="self-start font-extrabold text-[24px] leading-[120%]">
          {titles.main.t1} <span className="text-[#7C4DFF]">{titles.main.t2}</span>
        </h1>
        <h2 className="self-start font-extrabold text-[22px] text-[#7C4DFF] mt-[8px] leading-[110%]">
          {titles.name}
        </h2>
        <h3 className="self-start font-bold text-[18px] mb-[14px]">{titles.subname}</h3>

        <div className="self-start">
          <ParagraphRender text={cardText.global.p1} cor="roxo" tamanho={16} />
        </div>

        <Image
          src={simone}
          alt={altImg}
          className="rounded-[24px] w-full max-w-[280px] h-auto mt-[20px]"
        />

        <div className="bg-[#F2F0FD] rounded-[20px] w-full mt-[20px] p-[20px] flex flex-col gap-[20px]">
          <div className="flex gap-[12px] items-start">
            <div className="bg-white rounded-full size-fit p-[10px] shrink-0">
              <MdOutlineStarBorder className="text-[#7C4DFF] text-[24px]" />
            </div>
            <ParagraphRender text={cardText.global.star} cor="roxo" tamanho={16} />
          </div>
          <div className="flex gap-[12px] items-start">
            <div className="bg-white rounded-full size-fit p-[10px] shrink-0">
              <FaRegCompass className="text-[#7C4DFF] text-[24px]" />
            </div>
            <ParagraphRender text={cardText.global.compass} cor="roxo" tamanho={16} />
          </div>

          <a href={linkedInLink} target="_blank" className="w-full">
            <button className="w-full flex gap-[10px] bg-[#0A66C2] rounded-[10px] px-[16px] py-[12px] text-white font-bold text-[16px] items-center justify-center hover:cursor-pointer hover:bg-white hover:text-[#0A66C2] transition duration-200 ease-in-out">
              <FaLinkedinIn />
              {cardText.global.button}
              <HiOutlineExternalLink />
            </button>
          </a>
        </div>

        <div className="flex flex-col gap-[16px] w-full mt-[24px]">
          <CardIdealizadora cor="roxo" icon={PiHandHeartLight} title={cardText.fromWhere.title} text={cardText.fromWhere.text} />
          <CardIdealizadora cor="verde" icon={BsGraphUpArrow} title={cardText.experience.title} text={cardText.experience.text} />
          <CardIdealizadora cor="roxo" icon={MdOutlineSchool} title={cardText.graduation.title} text={cardText.graduation.text} />
          <CardIdealizadora cor="verde" icon={PiHandHeartLight} title={cardText.motivation.title} text={cardText.motivation.text} />
          <CardIdealizadora cor="roxo" icon={FaRegCompass} title={cardText.conviction.title} text={cardText.conviction.text} />
        </div>
      </div>

      {/* ---------- DESKTOP (>= md) ---------- */}
      <div className="hidden md:flex gap-[30px]">
        <div>
          <h2 className="inline bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8] bg-clip-text text-transparent text-[24px] font-bold">
            {titles.prev}
          </h2>
          <div className="bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8] h-[5px] w-[40px] rounded-[10px] mt-[17px] mb-[37px]" />
          <Image src={simone} alt={altImg} className="rounded-[40px] w-full max-w-[383px]" />
          <div className="bg-[#F2F0FD] rounded-[10px] w-full mt-[24px] pb-[27px] flex flex-col items-center">
            <div className="px-[20px] py-[25px]">
              <ParagraphRender text={cardText.global.p1} cor="roxo" tamanho={18} />
              <div className="flex gap-[20px] mt-[24px]">
                <div className="bg-white rounded-full size-fit p-[8px]">
                  <MdOutlineStarBorder className="text-[#7C4DFF] text-[28px]" />
                </div>
                <ParagraphRender text={cardText.global.star} cor="roxo" tamanho={20} />
              </div>
              <div className="flex gap-[20px] mt-[36px]">
                <div className="bg-white rounded-full size-fit p-[12px]">
                  <FaRegCompass className="text-[#7C4DFF] text-[20px]" />
                </div>
                <ParagraphRender text={cardText.global.compass} cor="roxo" tamanho={20} />
              </div>
            </div>
            <a href={linkedInLink} target="_blank">
              <button className="flex gap-[12px] bg-[#0A66C2] rounded-[10px] px-[20px] py-[15px] text-white font-bold text-[20px] items-center hover:cursor-pointer hover:bg-white hover:text-[#0A66C2] transition duration-200 ease-in-out">
                <FaLinkedinIn />
                {cardText.global.button}
                <HiOutlineExternalLink />
              </button>
            </a>
          </div>
        </div>
        <div>
          <h1 className="font-extrabold text-[44px] max-w-[550px]">
            {titles.main.t1} <span className="text-[#7C4DFF]">{titles.main.t2}</span>
          </h1>
          <h2 className="font-extrabold text-[40px] text-[#7C4DFF] mt-[22px] leading-[110%]">{titles.name}</h2>
          <h3 className="font-bold text-[24px] mb-[10px]">{titles.subname}</h3>
          <CardIdealizadora cor="roxo" icon={PiHandHeartLight} title={cardText.fromWhere.title} text={cardText.fromWhere.text} />
          <CardIdealizadora cor="verde" icon={BsGraphUpArrow} title={cardText.experience.title} text={cardText.experience.text} />
          <CardIdealizadora cor="roxo" icon={MdOutlineSchool} title={cardText.graduation.title} text={cardText.graduation.text} />
          <CardIdealizadora cor="verde" icon={PiHandHeartLight} title={cardText.motivation.title} text={cardText.motivation.text} />
          <CardIdealizadora cor="roxo" icon={FaRegCompass} title={cardText.conviction.title} text={cardText.conviction.text} />
        </div>
      </div>

      {/* ---------- VALORES (compartilhado) ---------- */}
      <div className="flex flex-wrap justify-center gap-x-[20px] gap-y-[20px] md:gap-[60px] bg-[#FCFCFE] p-[24px] md:p-[40px] shadow-[0_8px_4px_0_#F2F0FD] rounded-[10px] my-[40px] md:my-[74px] w-full md:w-fit">
        {valuesData.map(({ icon: Icon, label, text }, i) => (
          <div key={i} className={`flex flex-col items-center gap-[8px] md:gap-0 w-[88px] md:w-auto ${text}`}>
            <div className={`flex items-center justify-center rounded-full size-[56px] md:size-auto`}>
              <Icon className="text-[30px] md:text-[80px]" />
            </div>
            <p className="text-[14px] md:text-[22px] font-bold text-center leading-tight">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}