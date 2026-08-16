
import Image from "next/image";
import type { IconType } from "react-icons";
import { MdEditNote, MdOutlinePerson, MdOutlineMail } from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";
import { IoMdSend, IoMdArrowForward } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { FiBookOpen } from "react-icons/fi";

interface Image {
    src: string;
    alt: string;
}

interface FormField {
    text: string;
    icon: IconType;
    placeholder: string;
}

interface Channel {
    title: string;
    description: string;
    button: string;
    link: string;
    image: Image;
    arrow: IconType;
}

interface StyledText {
    text: string;
    highlighted ?: boolean;
}

interface ContactBodyData {
    form: {
        title: {
            text: string;
            icon: IconType;
        },
        name: FormField;
        email: FormField;
        message: FormField;
        send: {
            text: string;
            icon: IconType;
        }
    },
    contact: {
        title: string;
        contact: {
            text: string;
            link: string;
        }
        description: StyledText[];
        emailIcon: IconType;
        heartIcon: IconType;
        image: Image;
    },
    keepUp: {
        title: string;
        youtube: Channel;
        instagram: Channel;
    },
    card: {
        text: {
                p1: string;
                p2: string;
            }
        icon: IconType;
        stars: Image;
        button: {
            text: string;
            link: string;
            icon: IconType;
            arrow: IconType;
        }
    }
}

const contactBodyMockData: ContactBodyData = {
    form: {
        title: {
            text: "Envie sua mensagem",
            icon: MdEditNote
        },
        name: {
            text: "Nome",
            icon: MdOutlinePerson,
            placeholder: "Seu nome"
        },
        email: {
            text: "E-mail",
            icon: MdOutlineMail,
            placeholder: "Seu e-mail"
        },
        message: {
            text: "Mensagem",
            icon: BiSolidEditAlt,
            placeholder: "Escreva sua mensagem..."
        },
        send: {
            text: "Enviar mensagem",
            icon: IoMdSend
        }
    },
    contact: {
        title: "Fale com o Sim Planejar",
        contact: {
            text: "contato@simplanejar.com",
            link: "mailto:contato@simplanejar.com"
        },
        description: [
            {text: "Estamos aqui para ajudar você a ser "},
            {text: "protagonista ", highlighted: true},
            {text: "da sua vida financeira."}
        ],
        emailIcon: MdOutlineMail,
        heartIcon: FaRegHeart,
        image: {
            src: "/contact/paperplane.svg",
            alt: "Desenho de um avião de papel voando com traçado roxo."
        }
    },
    keepUp: {
        title: "Acompanhe o Sim Planejar",
        youtube: {
            title: "YouTube",
            description: "Conheça nosso canal",
            button: "Visitar Canal",
            link: "https://www.youtube.com/channel/UCR5jivIv9WuMdR2Ss8QJ0Rg",
            image: {
                src: "/contact/youtube.png",
                alt: "Logo do YouTube."
            },
            arrow: IoMdArrowForward
        },
        instagram: {
            title: "Instagram",
            description: "Siga nosso perfil",
            button: "Seguir no Instagram",
            link: "https://www.instagram.com/simplanejar/",
            image: {
                src: "/contact/instagram.png",
                alt: "Logo do Instagram"
            },
            arrow: IoMdArrowForward
        }
    },
    card: {
        text: {
            p1: "Seja protagonista da sua vida financeira. ",
            p2: "Você no controle do seu presente e do seu futuro!"
        },
        icon: FaStar,
        stars: {
            src: "/contact/stars.svg",
            alt: "Três estrelas amarelas, como o emoji de brilho."
        },
        button: {
            text: "Conheça o livro",
            link: "AINDA NÃO TEM",
            icon: FiBookOpen,
            arrow: IoMdArrowForward
        }
    }
}

function FormInput({ field, isTextarea = false }: { field: FormField; isTextarea?: boolean }) {
    const Icon = field.icon;
 
    return (
        <div className="flex flex-col gap-1">
            <label className="font-bold text-[#000416]">{field.text}</label>
            {isTextarea ? (
                <div className="flex items-start gap-5 rounded-[10px] border border-[#D9D9D9] px-3 py-3 focus-within:border-[#7C4DFF]">
                    <Icon className="mt-0.5 shrink-0 text-[#7C4DFF]" size={20} />
                    <textarea
                        placeholder={field.placeholder}
                        rows={4}
                        className="w-full resize-none bg-transparent text-gray-700 placeholder:text-[rgba(7,31,107,0.60)] outline-none placeholder:font-bold"
                    />
                </div>
            ) : (
                <div className="flex items-center gap-5 rounded-[10px] border border-[#D9D9D9] px-3 py-3 focus-within:border-[#7C4DFF]">
                    <Icon className="shrink-0 text-[#7C4DFF]" size={20} />
                    <input
                        type={field.text === "E-mail" ? 'email' : 'text' }
                        placeholder={field.placeholder}
                        className="w-full bg-transparent text-gray-700 placeholder:text-[rgba(7,31,107,0.60)] outline-none placeholder:font-bold"
                    />
                </div>
            )}
        </div>
    );
}
 
function FormCard({ data }: { data: ContactBodyData["form"] }) {
    const TitleIcon = data.title.icon;
    const SendIcon = data.send.icon;
 
    return (
        <div className="rounded-[10px] bg-[#FCFCFE] pl-[35px] pr-[45px] pt-3 pb-8 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
            <div className="mb-2 flex items-center gap-3">
                <span className="flex h-15 w-15 shrink-0 items-center justify-center rounded-full bg-[#7C4DFF] text-white">
                    <TitleIcon size={30} />
                </span>
                <h2 className="text-[20px] text-[#071F6B] font-extrabold">{data.title.text}</h2>
            </div>
 
            <form className="flex flex-col gap-2">
                <FormInput field={data.name} />
                <FormInput field={data.email} />
                <FormInput field={data.message} isTextarea />
 
                <button
                    type="submit"
                    className="mt-3 flex items-center justify-center gap-6 rounded-[10px] bg-[#7C4DFF] py-3 text-[20px] font-bold text-white cursor-pointer"
                >
                    <SendIcon size={18} />
                    {data.send.text}
                </button>
            </form>
        </div>
    );
}
 
function ContactCard({ data }: { data: ContactBodyData["contact"] }) {
    const EmailIcon = data.emailIcon;
    const HeartIcon = data.heartIcon;
 
    return (
        <div className="relative overflow-hidden rounded-[10px] bg-[#F2F0FD] py-6 px-9">
            <div className="pointer-events-none absolute right-[10px] top-3">
                <Image src={data.image.src} alt={data.image.alt} width={146} height={58} />
            </div>
 
            <div className="flex items-start gap-8">
                <span className="flex h-15 w-15 shrink-0 items-center justify-center rounded-full bg-[#7C4DFF] text-white">
                    <EmailIcon size={30} />
                </span>
                <div className="flex flex-col">
                    <h2 className="text-[20px] text-[#071F6B] font-bold">{data.title}</h2>
                    <span className="mt-2 h-1 w-[50px] rounded-[10px] bg-[#7C4DFF]" />
                    <a
                        href={data.contact.link}
                        className="mt-[10px] text-[20px] font-bold text-[#7C4DFF] hover:underline cursor-pointer"
                    >
                        {data.contact.text}
                    </a>
                </div>
            </div>
 
            <hr className="my-4 border-[#E2DDFF]" />
 
            <div className="flex items-start gap-8">
                <span className="flex h-15 w-15 shrink-0 items-center justify-center rounded-full bg-[#E2DDFF] text-[#7C4DFF]">
                    <HeartIcon size={30} />
                </span>
                <p className="leading-relaxed font-semibold max-w-[261px]">
                    {data.description.map((part, i) => (
                        <span
                            key={i}
                            className={part.highlighted ? "font-bold text-[#7C4DFF]" : undefined}
                        >
                            {part.text}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    );
}
 
function ChannelCard({ data }: { data: Channel }) {
    const ArrowIcon = data.arrow;
 
    return (
        <div className="flex flex-col gap-2 rounded-[10px] bg-[#FCFCFE] px-6 py-4">
            <div className="flex items-center gap-3">
                <Image
                    src={data.image.src}
                    alt={data.image.alt}
                    width={60}
                    height={42}
                    className="shrink-0"
                />
                <div className="flex flex-col">
                    <span className="text-[20px] text-[#071F6B] font-bold">{data.title}</span>
                    <span className="font-semibold">{data.description}</span>
                </div>
            </div>
            <a
                href={data.link}
                className="flex items-center justify-center gap-2 rounded-[10px] border border-[#7C4DFF] py-2 text-[20px] font-bold text-[#7C4DFF] cursor-pointer"
                target="_blank"
            >
                {data.button}
                <ArrowIcon size={20} />
            </a>
        </div>
    );
}
 
function KeepUpCard({ data }: { data: ContactBodyData["keepUp"] }) {
    return (
        <div className="rounded-[10px] bg-[#F2F0FD] px-9 py-4">
            <h2 className="text-[20px] font-bold text-[#071F6B]">{data.title}</h2>
            <span className="mt-[1px] mb-3 block h-1 w-[50px] rounded-[10px] bg-[#7C4DFF]" />
 
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <ChannelCard data={data.youtube} />
                <ChannelCard data={data.instagram} />
            </div>
        </div>
    );
}
 
function BookCard({ data }: { data: ContactBodyData["card"] }) {
    const StarIcon = data.icon;
    const ButtonIcon = data.button.icon;
    const ArrowIcon = data.button.arrow;
 
    return (
        <div className="mt-11 mx-[50px] flex flex-col items-start justify-between gap-4 rounded-[10px] bg-[#F2F0FD] py-5 px-11 sm:flex-row sm:items-center">
            <div className="flex items-center">
                <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#7C4DFF] text-white">
                    <StarIcon size={50} />
                </span>
                    <Image
                        src={data.stars.src}
                        alt={data.stars.alt}
                        width={61}
                        height={78}
                    />
                <div>
                    <p className="ml-4 text-[20px] font-extrabold text-[#071F6B] sm:text-base">
                        {data.text.p1}
                    </p>
                    <p className="ml-4 text-[20px] font-extrabold text-[#071F6B] sm:text-base">
                        {data.text.p2}
                    </p>
                </div>
            </div>
 
            <a
                href={data.button.link}
                className="flex w-full items-center justify-center gap-[30px] rounded-[10px] bg-[#7C4DFF] px-6 py-5 text-[20px] font-bold text-white sm:w-auto cursor-pointer"
            >
                <ButtonIcon size={30} />
                {data.button.text}
                <ArrowIcon size={20} />
            </a>
        </div>
    );
}
 

export default function ContactBody() {
    return (
         <section className="w-full">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mx-8">
                <FormCard data={contactBodyMockData.form} />
                <div className="flex flex-col gap-6">
                    <ContactCard data={contactBodyMockData.contact} />
                    <KeepUpCard data={contactBodyMockData.keepUp} />
                </div>
            </div>
 
            <BookCard data={contactBodyMockData.card} />
        </section>
    )
}