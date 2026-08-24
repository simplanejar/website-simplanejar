import Image from "next/image";

export function Book() {
  return (
    <div className="flex flex-col p-[2%] items-center">
      <div className="flex flex-col w-full p-4 md:p-15">
        <h1 className="font-nunito text-lg md:text-2xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          LIVRO
        </h1>

        <div className="mt-4 flex flex-col gap-6 md:mt-8 md:flex-row md:items-start md:justify-between">
          <div className="flex justify-center shrink-0 md:justify-start">
            <Image
              src="/book/book-home.png"
              alt="Livro Planejamento Financeiro: Você no Controle, da autora Simone Costa."
              width={411}
              height={643}
              className="w-[220px] md:w-[340px] h-auto object-contain"
            />
          </div>

          <div className="flex flex-col md:max-w-[420px]">
            <h2 className="text-dark-blue font-nunito text-2xl md:text-[38px] font-extrabold mb-2.5">
              Planejamento Financeiro:{" "}
              <span className="text-primary">Você no Controle!</span>
            </h2>

            <div className="w-[50px] h-[5px] rounded-[10px] bg-gradient-to-r from-primary to-secondary" />

            <p className="text-foreground font-nunito text-sm md:text-base font-semibold my-5">
              Já parou para refletir se você tem trabalhado para o dinheiro ou
              se é ele que trabalha para você? Melhor: o dinheiro tem
              contribuído para que você alcance aquilo que tanto almeja?
            </p>

            <p className="text-foreground font-nunito text-sm md:text-base font-semibold">
              Simone Costa, por meio de textos objetivos, exemplos e
              exercícios práticos, convida você a ser protagonista da sua
              vida financeira, assumindo o controle do seu dinheiro para
              transformar objetivos em conquistas.
            </p>
          </div>

          <div className="w-full md:w-[280px] md:shrink-0">
            <div className="w-full h-full min-h-[300px] rounded-[10px] bg-card-bg shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]" />
          </div>
        </div>
      </div>
    </div>
  );
}