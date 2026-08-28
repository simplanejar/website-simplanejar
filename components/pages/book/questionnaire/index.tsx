"use client";

import { enviarEmail } from "@/src/lib/email";
import { useState } from "react";
import { IntroCard } from "./IntroCard";
import { QuestionnaireCard } from "./QuestionnaireCard";
import { SuccessCard } from "./SuccessCard";
import { steps } from "./data";
import { buildSubmission } from "./submission";
import type { Answers, SubmissionEntry } from "./types";

type View = "intro" | "success" | number;


function handleSubmit(submission: SubmissionEntry[]) {
    enviarEmail({
        tipo: "feedbackLivro",
        subject: "Novo feedback sobre o livro",
        dados: { respostas: submission },
        mensagens: {
            success: "Feedback enviado com sucesso!",
            error: "Algo deu errado ao enviar seu feedback.",
        },
    });
}

export default function BookQuestionnaire() {
    const [view, setView] = useState<View>("intro");
    const [answers, setAnswers] = useState<Answers>({});

    const totalSteps = steps.length;

    function handleAnswer(questionId: string, value: Answers[string]) {
        setAnswers((prev) => ({ ...prev, [questionId]: value }));
    }

    function handleNext() {
        if (view === "intro") {
            setView(1);
            return;
        }

        if (typeof view === "number") {
            if (view >= totalSteps) {
                handleSubmit(buildSubmission(steps, answers));
                setView("success");
            } else {
                setView(view + 1);
            }
        }
    }

    function handleBack() {
        if (typeof view === "number") {
            setView(view <= 1 ? "intro" : view - 1);
        }
    }

    return (
        <section className="w-full bg-background px-4 py-10 sm:px-6 lg:px-10 lg:py-16">
            {view === "intro" && <IntroCard onStart={handleNext} />}

            {typeof view === "number" && (
                <QuestionnaireCard
                    step={steps[view - 1]}
                    stepNumber={view}
                    totalSteps={totalSteps}
                    answers={answers}
                    onAnswer={handleAnswer}
                    onBack={handleBack}
                    onNext={handleNext}
                />
            )}

            {view === "success" && <SuccessCard />}
        </section>
    );
}
