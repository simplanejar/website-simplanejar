import { IconType } from "react-icons";
import { ParagraphRender } from "./paragraphRender";

type Cor = "roxo" | "verde";

interface CorEstilo {
    fundo: string;
    fonte: string;
}

const CORES: Record<Cor, CorEstilo> = {
  roxo: {
    fundo: "bg-[#F2F0FD]",
    fonte: "text-[#7C4DFF]"
},
  verde: {
    fundo: "bg-[#D7ECF1]",
    fonte: "text-[#01AEAA]"
},
};

interface CardIdealizadoraProps{
    title: string;
    text: Record<string, string>;
    cor: Cor;
    icon: IconType;
}

export function CardIdealizadora({ title, text, cor, icon: Icon }: CardIdealizadoraProps) {
    return (
        <div className={`${CORES[cor].fundo} flex gap-[20px] rounded-[10px] py-[11px] px-[20px] mt-[25px] items-center`}>
            <div className="rounded-full bg-white size-fit p-[12px]">
                <Icon className={`${CORES[cor].fonte} text-[28px]`} />
            </div>
            <h3 className={`${CORES[cor].fonte} w-[110px] text-[18px] font-bold`}> {title} </h3>
            <ParagraphRender text={text} cor={cor} tamanho={20}/>
        </div>
    );
}