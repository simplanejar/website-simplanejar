import Link from "next/link";
import Alvo from "@/assets/alvo.png";
import Board from "@/assets/board.png";
import Checklist from "@/assets/checklist.png";
import Livro from "@/assets/livro.png";
import Pessoa from "@/assets/pessoa.png";
import Seta from "@/assets/seta.png";
import Livro_Gigante from "@/assets/livro gigante.png";
import Divisor_titulo from "@/assets/divisor-titulo.png";
import Divisor_beneficios from "@/assets/divisor-beneficios.png";

export function Book(){
    return(<section className=" m-[20px_25px] flex">
      <div className="ml-[40px] z-10">
        <p
          className="font-extrabold text-[var(--COR_LETRAS)] rounded-[20px]
                      bg-[#7C4DFF]/20 w-fit p-[10px_25px] 
                      mt-[75px] text-[16px]"
        >
          QUER MUDAR ESSA REALIDADE?
        </p>

        {/* Título */}
        <h1 className="mb-[40px] p-[0] text-[50px] font-extrabold">
          Quer mudar <br /> essa{" "}
          <span
            className="bg-[linear-gradient(90deg,_#7C4DFF,_#2ED8E8)] bg-clip-text
                      text-transparent"
          >
            realidade?
          </span>
        </h1>

        <img
          src={Divisor_titulo.src}
          alt="Divisor do título para o texto"
          className="mb-[40px]"
        />

        {/* Textinho */}
        <p className=" mb-[70px] font-semibold text-[20px] leading-[2]">
          Conhecer a situação financeira é importante, mas <br />a transformação
          começa quando você{" "}
          <span className="text-[var(--COR_LETRAS)]">decide agir.</span> <br />
          Conheça o livro{" "}
          <span className="text-[var(--COR_LETRAS)]">
            Planejamento Financeiro.
          </span>{" "}
          <br />
          O melhor momento para começar não é quando <br />
          tudo estiver perfeito,{" "}
          <span className="text-[var(--COR_LETRAS)]">é agora.</span> <br />
          Transforme conhecimento em{" "}
          <span className="text-[var(--COR_LETRAS)]">ação.</span>
        </p>

        <div
          className="flex bg-[var(--COR_BACKGROUND)] w-[105vh] h-[280px] rounded-[10px] mb-[140px]
                     justify-around items-center"
        >
          {/* Benefícios */}
          <div className="flex flex-col p-[25px] items-center">
            <img
              src={Board.src}
              alt="Vetor prancheta"
              width="91px"
              height="91px"
            />
            <p
              className="text-center mt-[20px] font-bold text-[var(--COR_LETRAS_BENEFICIOS)]
                          text-[20px] leading-[1]"
            >
              Conhecimento <br /> para colocar <br /> em ação
            </p>
          </div>
          <img
            src={Divisor_beneficios.src}
            alt="Divisor do benefício para o outro"
            className="mt-[20px]"
            width="2px"
            height="194px"
          />

          <div className="flex flex-col p-[25px] items-center -translate-y-[10px]">
            <img
              src={Checklist.src}
              alt="Vetor checklist"
              width="91px"
              height="91px"
            />
            <p
              className="text-center mt-[20px] font-bold text-[var(--COR_LETRAS_BENEFICIOS)]
                          text-[20px] leading-[1]"
            >
              Da reflexão à <br /> prática
            </p>
          </div>
          <img
            src={Divisor_beneficios.src}
            alt="Divisor do benefício para o outro"
            className="mt-[20px]"
            width="2px"
            height="194px"
          />
          <div className="flex flex-col p-[25px] items-center">
            <img src={Alvo.src} alt="Vetor alvo" width="91px" height="91px" />
            <p
              className="text-center mt-[20px] font-bold text-[var(--COR_LETRAS_BENEFICIOS)]
                          text-[20px] leading-[1]"
            >
              Planejamento <br /> para seus <br /> objetivos
            </p>
          </div>
          <img
            src={Divisor_beneficios.src}
            alt="Divisor do benefício para o outro"
            className="mt-[20px]"
            width="2px"
            height="194px"
          />
          <div className="flex flex-col p-[25px] items-center">
            <img
              src={Pessoa.src}
              alt="Vetor pessoa"
              width="91px"
              height="91px"
            />
            <p
              className="text-center mt-[20px] font-bold text-[var(--COR_LETRAS_BENEFICIOS)]
                          text-[20px] leading-[1]"
            >
              Você no controle <br /> da sua vida <br /> financeira
            </p>
          </div>
        </div>

        <Link
          href="/book"
          className="bg-[var(--COR_LETRAS)] w-fit flex gap-[40px] items-center p-[15px_30px] rounded-[10px]"
        >
          {/* Botão Livro */}
          <img src={Livro.src} alt="Vetor livro" width="44px" height="32px" />
          <p className="text-[#FFFFFF] font-bold text-[20px]">Conhecer o livro</p>
          <img src={Seta.src} alt="Vetor seta" width="32px" height="32px" />
        </Link>
      </div>

      {/* Imagem Livro */}
      <div className="ml-[-53px] mt-[70px] z-0">
        <img
          src={Livro_Gigante.src}
          alt="Livro de Simone Costa: Planejamento Financeiro"
          className="scale-[1.3]"
        />
      </div>
    </section>);
}