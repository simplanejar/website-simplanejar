// src/lib/email.ts
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { toast, Zoom } from "react-toastify";

const toastOptions = {
  position: "bottom-right" as const,
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: false,
  pauseOnHover: false,
  draggable: false,
  theme: "light" as const,
  transition: Zoom,
};

// 1. Um builder por formulário 
const builders = {
  contato: (dados: FormData) => `
    <h2>Novo contato</h2>
    <p><strong>Nome:</strong> ${dados.get("name")}</p>
    <p><strong>Email:</strong> ${dados.get("email")}</p>
    <p><strong>Mensagem:</strong> ${dados.get("message")}</p>
  `,
  feedbackLivro: (dados: FormData) => `
    <h2>Pedido de orçamento</h2>
    <p><strong>Empresa:</strong> ${dados.get("empresa")}</p>
    <p><strong>Escopo:</strong> ${dados.get("escopo")}</p>
    <p><strong>Email:</strong> ${dados.get("email")}</p>
  `,
  simuladorSonhos: (dados: FormData) => `
    <h2>Trabalhe conosco</h2>
    <p><strong>Nome:</strong> ${dados.get("name")}</p>
    <p><strong>Área de interesse:</strong> ${dados.get("area")}</p>
  `,
  simuladorAposentadoria: (dados: FormData) => `
    <h2>Trabalhe conosco</h2>
    <p><strong>Nome:</strong> ${dados.get("name")}</p>
    <p><strong>Área de interesse:</strong> ${dados.get("area")}</p>
  `,
} satisfies Record<string, (dados: FormData) => string>;

type FormType = keyof typeof builders;

// 2. Uma única função de envio, usada por todos
interface EnviarEmailParams {
  tipo: FormType;
  subject: string;
  form: HTMLFormElement;
  mensagens: { success: string; error: string };
}

export function enviarEmail({ tipo, subject, form, mensagens }: EnviarEmailParams) {
  const dados = new FormData(form);
  const corpoHtml = builders[tipo](dados);

  return emailjs
    .send(
      process.env.NEXT_PUBLIC_SERVICE_ID!,
      process.env.NEXT_PUBLIC_TEMPLATE_ID!,
      { corpo_html: corpoHtml, subject, toEmail: "izabellysouza576@gmail.com" },
      { publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY! }
    )
    .then(
      () => {
        form.reset();
        toast.success(mensagens.success, toastOptions);
      },
      (error: EmailJSResponseStatus) => {
        console.error("FAILED...", error.text);
        toast.error(mensagens.error, toastOptions);
      }
    );
}