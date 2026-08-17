import Alvo from "../assets/alvo.png";
import Board from "../assets/board.png";
import Checklist from "../assets/checklist.png";
import Livro from "../assets/livro.png";
import Pessoa from "../assets/pessoa.png";
import Seta from "../assets/seta.png";
import Livro_Gigante from "../assets/livro gigante.png";
import Divisor_titulo from "../assets/divisor-titulo.png";
import Divisor_beneficios from "../assets/divisor-beneficios.png";

export default function Home() {
  return (
    <>
      <div className="lado_direito">
        <p className="titulo__pequeno">QUER MUDAR ESSA REALIDADE?</p>

        {/* Título */}
        <h1>
          Quer mudar <br /> essa <span className="gradiente">realidade?</span>
        </h1>

        <img
          src={Divisor_titulo.src}
          alt="Divisor do título para o texto"
          className="titulo__divisor"
        />

        {/* Textinho */}
        <p className="texto">
          Conhecer a situação financeira é importante, mas <br />a transformação
          começa quando você{" "}
          <span className="letra-colorida">decide agir.</span> <br />
          Conheça o livro{" "}
          <span className="letra-colorida">Planejamento Financeiro.</span>{" "}
          <br />
          O melhor momento para começar não é quando <br />
          tudo estiver perfeito,{" "}
          <span className="letra-colorida">é agora.</span> <br />
          Transforme conhecimento em{" "}
          <span className="letra-colorida">ação.</span>
        </p>

        <div className="beneficios">
          {/* Benefícios */}
          <div className="beneficios__beneficio">
            <img
              src={Board.src}
              alt="Vetor prancheta"
              width="91px"
              height="91px"
            />
            <p>
              Conhecimento <br /> para colocar <br /> em ação
            </p>
          </div>
          <img
            src={Divisor_beneficios.src}
            alt="Divisor do benefício para o outro"
            className="beneficios__divisor"
            width="2px"
            height="194px"
          />
          <div className="beneficios__beneficio icone_checklist">
            <img
              src={Checklist.src}
              alt="Vetor checklist"
              width="91px"
              height="91px"
            />
            <p>
              Da reflexão à <br /> prática 
            </p>
          </div>
          <img
            src={Divisor_beneficios.src}
            alt="Divisor do benefício para o outro"
            className="beneficios__divisor"
            width="2px"
            height="194px"
          />
          <div className="beneficios__beneficio">
            <img src={Alvo.src} alt="Vetor alvo" width="91px" height="91px" />
            <p>
              Planejamento <br /> para seus <br /> objetivos
            </p>
          </div>
          <img
            src={Divisor_beneficios.src}
            alt="Divisor do benefício para o outro"
            className="beneficios__divisor"
            width="2px"
            height="194px"
          />
          <div className="beneficios__beneficio">
            <img
              src={Pessoa.src}
              alt="Vetor pessoa"
              width="91px"
              height="91px"
            />
            <p>
              Você no controle <br /> da sua vida <br /> financeira
            </p>
          </div>
        </div>
        

        <div className="botão-livro">
          {/* Botão Livro */}
          <img src={Livro.src} alt="Vetor livro" width="44px" height="32px" />
          <p>Conhecer o livro</p>
          <img src={Seta.src} alt="Vetor seta" width="32px" height="32px" />
        </div>
      </div>

      {/* Imagem Livro */}
      <div className="lado_esquerdo">
        <img
          src={Livro_Gigante.src}
          alt="Livro de Simone Costa: Planejamento Financeiro"
          className="livro"
        />
      </div>
    </>
  );
}
