import Image from "next/image";

import { Button } from "@/components/button";
import { SparkleIcon, UserIcon } from "@/components/icons";

import { heroContent } from "./data";
import { HeroFeatureCardItem } from "./hero-feature-card";
import { HeroTrustBarSection } from "./hero-trust-bar";
import { HighlightedText } from "./highlighted-text";
import type { HeroContent } from "./types";

const buttonIconMap = {
  sparkle: SparkleIcon,
  user: UserIcon,
} as const;

type HeroProps = {
  content?: HeroContent;
};

export function Hero({ content = heroContent }: HeroProps) {
  return (
    <section className="relative w-full overflow-hidden px-3 py-11 sm:px-4 lg:px-5">
      <div className="mx-auto flex w-full max-w-[1398px] flex-col">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(460px,760px)] lg:gap-10">
          <div>
            <p className="text-gradiente-ofc text-2xl font-bold leading-5">
              {content.eyebrow}
            </p>

            <h1 className="mt-3 max-w-[549px] whitespace-pre-line text-[clamp(2.25rem,5vw,3.125rem)] font-extrabold leading-[1.2] text-brand-dark-blue">
              <HighlightedText segments={content.headline} />
            </h1>

            <p className="mt-8 max-w-[589px] text-[clamp(1.5rem,3vw,1.875rem)] font-bold leading-[1.17] text-brand-dark-blue">
              <HighlightedText segments={content.subheadline} />
            </p>

            <p className="mt-6 max-w-[499px] text-xl font-semibold leading-[1.5] text-brand-dark-blue">
              <HighlightedText segments={content.description} />
            </p>

            <div className="mt-12 flex flex-row flex-wrap items-center gap-5">
              {content.buttons.map((button, index) => {
                const Icon = button.icon ? buttonIconMap[button.icon] : null;

                return (
                  <Button
                    key={button.label}
                    label={button.label}
                    href={button.href}
                    variant={button.variant}
                    icon={Icon ? <Icon /> : undefined}
                    className={
                      index === 0
                        ? "w-[235px] shrink-0 justify-center px-4"
                        : "w-[300px] shrink-0 justify-center px-4"
                    }
                  />
                );
              })}
            </div>

            <div className="mt-7 flex flex-row items-stretch gap-5">
              {content.featureCards.map((card, index) => (
                <HeroFeatureCardItem
                  key={card.category}
                  card={card}
                  className={
                    index === 0 ? "w-[320px] shrink-0" : "w-[241px] shrink-0"
                  }
                />
              ))}
            </div>
          </div>

          <div className="relative w-full self-start overflow-hidden lg:max-h-[700px]">
            <Image
              src={content.image.src}
              alt={content.image.alt}
              width={823}
              height={781}
              priority
              sizes="(max-width: 1024px) 100vw, 760px"
              className="h-auto max-h-[700px] w-full object-contain object-top"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-4 w-full max-w-[1398px]">
        <HeroTrustBarSection trustBar={content.trustBar} />
      </div>
    </section>
  );
}
