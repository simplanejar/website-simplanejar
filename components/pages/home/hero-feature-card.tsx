import Link from "next/link";

import {
  BookIcon,
  CalculatorIcon,
  CardArrowIcon,
} from "@/components/icons";

import type { HeroFeatureCard } from "./types";

const categoryColorStyles = {
  purple: "text-brand-purple",
  teal: "text-brand-teal",
} as const;

const iconMap = {
  book: BookIcon,
  calculator: CalculatorIcon,
} as const;

type HeroFeatureCardProps = {
  card: HeroFeatureCard;
  className?: string;
};

export function HeroFeatureCardItem({ card, className = "" }: HeroFeatureCardProps) {
  const Icon = iconMap[card.icon];

  return (
    <Link
      href={card.href}
      className={`flex min-h-[95px] items-center gap-4 rounded-[10px] bg-white px-4 py-4 shadow-[0_1px_4px_rgba(0,0,0,0.25)] transition-shadow hover:shadow-md sm:px-5 ${className}`}
    >
      <Icon />
      <div className="min-w-0 flex-1">
        <p
          className={`text-lg font-semibold leading-[22px] ${categoryColorStyles[card.categoryColor]}`}
        >
          {card.category}
        </p>
        <p className="whitespace-pre-line text-base font-semibold leading-5 text-brand-dark-blue">
          {card.title}
        </p>
      </div>
      <CardArrowIcon className="shrink-0 text-brand-purple" />
    </Link>
  );
}
