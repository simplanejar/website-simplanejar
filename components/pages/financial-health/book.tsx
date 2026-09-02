import Link from "next/link";
import Image from "next/image";
import Alvo from "@/assets/alvo.png";
import Board from "@/assets/board.png";
import Checklist from "@/assets/checklist.png";
import Livro from "@/assets/livro.png";
import Pessoa from "@/assets/pessoa.png";
import Seta from "@/assets/seta.png";
import Livro_Gigante from "@/assets/livro gigante.png";
import Divisor_titulo from "@/assets/divisor-titulo.png";

export function Book() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 my-8 lg:my-16 font-sans overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        
        {/* Coluna da Esquerda: Textos, Benefícios e Botão */}
        <div className="w-full lg:w-[60%] flex flex-col items-start z-10">
          <span className="font-extrabold text-[#7C4DFF] rounded-full bg-[#7C4DFF]/10 px-6 py-2.5 text-sm sm:text-base mb-6">
            QUER MUDAR ESSA REALIDADE?
          </span>

          {/* Título */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#000416] leading-tight mb-6">
            Quer mudar <br className="hidden sm:block" /> essa{" "}
            <span className="bg-gradient-to-r from-[#7C4DFF] to-[#2ED8E8] bg-clip-text text-transparent">
              realidade?
            </span>
          </h1>

          <div className="gradient-background h-[5px] w-[40px] rounded-[10px] mb-6" />

          {/* Textinho */}
          <p className="font-semibold text-base sm:text-lg lg:text-xl text-[#000416] leading-relaxed mb-8">
            Conhecer a situação financeira é importante, mas a transformação começa quando você{" "}
            <span className="text-[#7C4DFF]">decide agir.</span> <br className="hidden sm:block" />
            Conheça o livro{" "}
            <span className="text-[#7C4DFF]">
              Planejamento Financeiro.
            </span>{" "}
            <br className="hidden sm:block" />
            O melhor momento para começar não é quando tudo estiver perfeito,{" "}
            <span className="text-[#7C4DFF]">é agora.</span> <br className="hidden sm:block" />
            Transforme conhecimento em{" "}
            <span className="text-[#7C4DFF]">ação.</span>
          </p>

          {/* Benefícios */}
          <div className="w-full bg-[#FCFCFE] rounded-2xl p-6 lg:p-8 shadow-sm border border-[#F2F0FD] grid grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-items-center mb-10">
            <div className="flex flex-col items-center text-center">
              <Image src={Board} alt="Vetor prancheta" width={72} height={72} className="w-14 h-14 lg:w-18 lg:h-18 object-contain" />
              <p className="mt-4 font-bold text-[#071F6B] text-sm lg:text-base leading-tight">
                Conhecimento <br /> para colocar <br /> em ação
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Image src={Checklist} alt="Vetor checklist" width={72} height={72} className="w-14 h-14 lg:w-18 lg:h-18 object-contain" />
              <p className="mt-4 font-bold text-[#071F6B] text-sm lg:text-base leading-tight">
                Da reflexão à <br /> prática
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Image src={Alvo} alt="Vetor alvo" width={72} height={72} className="w-14 h-14 lg:w-18 lg:h-18 object-contain" />
              <p className="mt-4 font-bold text-[#071F6B] text-sm lg:text-base leading-tight">
                Planejamento <br /> para seus <br /> objetivos
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <Image src={Pessoa} alt="Vetor pessoa" width={72} height={72} className="w-14 h-14 lg:w-18 lg:h-18 object-contain" />
              <p className="mt-4 font-bold text-[#071F6B] text-sm lg:text-base leading-tight">
                Você no controle <br /> da sua vida <br /> financeira
              </p>
            </div>
          </div>

          {/* Botão Livro */}
          <Link
            href="/o-livro"
            className="w-full sm:w-auto bg-[#7C4DFF] hover:bg-[#6939E8] transition-all duration-200 text-white font-bold text-lg px-8 py-4 rounded-xl flex items-center justify-center gap-6 shadow-md"
          >
            <Image src={Livro} alt="Vetor livro" width={32} height={24} className="w-8 h-auto object-contain" />
            <span>Conhecer o livro</span>
            <Image src={Seta} alt="Vetor seta" width={24} height={24} className="w-6 h-6 object-contain" />
          </Link>
        </div>

        {/* Coluna da Direita: Imagem do Livro */}
        <div className="w-full lg:w-[40%] flex justify-center items-center shrink-0">
          <Image
            src={Livro_Gigante}
            alt="Livro de Simone Costa: Planejamento Financeiro"
            className="w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[500px] h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
}