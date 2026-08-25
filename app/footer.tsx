import React from 'react';

export default function Footer() {
  return (
    <footer 
      className="w-full bg-[#071F6B] pt-16 pb-6 antialiased"
    >
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Coluna 1: Logo e Texto */}
        <div className="md:col-span-5 flex flex-col space-y-6">
          
          <div className="flex flex-col items-center">
            <img 
              src="/logo_branco.svg" 
              alt="Logo Sim Planejar" 
              className="w-auto h-[277px] object-contain" 
            />
          </div>

          <div className="text-sm text-center text-white -mt-21 md:-mt-21">
            <p>Voce no controle da <span className="text-[#814CFF] font-semibold border-[#814CFF]">sua vida financeira.</span></p>
          </div>

          <p className="text-base leading-relaxed text-center text-white -mt-2 max-w-[430px] mx-auto">
            <strong className="text-white">Transforme objetivos em conquistas!</strong><br />
            Organize suas finanças e faça escolhas conscientes para
            assumir o controle da sua vida financeira,
            tornando-se protagonista da sua própria história.
          </p>
        </div>

        {/* Coluna 2: Navegue (ATUALIZADA) */}
        <div className="md:col-span-2 flex flex-col items-center md:items-start w-full">
          <h3 className="text-white font-bold text-xl mb-6 text-center md:text-left">Navegue</h3>
          
          <ul className="grid grid-cols-2 gap-y-4 gap-x-4 w-full max-w-[280px] text-center text-white text-lg font-normal md:max-w-none md:flex md:flex-col md:items-start md:text-left md:w-auto md:gap-6">
            <li><a href="#">Home</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Livro</a></li>
            <li><a href="#">Simuladores</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>

        {/* Coluna 3: Informações */}
        <div className="md:col-span-2 flex flex-col items-center md:items-start">
          <h3 className="text-white font-bold text-lg mb-6">Informações</h3>
          <ul className="space-y-6 text-white text-lg font-normal flex flex-col items-center md:items-start">
            <li><a href="#">Política de Privacidade</a></li>
            <li><a href="#">Termos de Uso</a></li>
          </ul>
        </div>

        {/* Coluna 4: Redes Sociais */}
        <div className="md:col-span-2 flex flex-col items-center">
          <h3 className="text-white font-bold text-lg mb-3">Siga o Sim Planejar</h3>
          
          <div className="flex gap-4 mb-3">
            {/* Instagram */}
            <a 
              href="https://www.instagram.com/simplanejar/" 
              target="_blank" 
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:opacity-80 transition-opacity w-10 h-10 flex items-center justify-center"
            >
              <img 
                src="/instagram.svg" 
                alt="Instagram" 
                className="w-full h-full object-contain" 
              />
            </a>

            {/* YouTube */}
            <a 
              href="https://www.youtube.com/channel/UCR5jivIv9WuMdR2Ss8QJ0Rg" 
              target="_blank" 
              rel="noreferrer"
              aria-label="YouTube"
              className="hover:opacity-80 transition-opacity w-10 h-10 flex items-center justify-center"
            >
              <img 
                src="/youtube.svg" 
                alt="YouTube" 
                className="w-full h-full object-contain" 
              />
            </a>
          </div>

          <div className="text-center text-sm font-semibold">
            <p className="text-white mb-2">Seja protagonista de sua<br /> vida financeira</p>
            <a href="mailto:contato@simplanejar.com" className="text-white font-normal">
              contato@simplanejar.com
            </a>
          </div>
        </div>

      </div>

      {/* Linha de Créditos */}
      <div className="max-w-7xl mx-auto pt-6 flex justify-center md:justify-end">
        <p className="text-sm text-white text-medium">
          Desenvolvido por Pixel - Soluções Digitais
        </p>
      </div>
    </footer>
  );
}