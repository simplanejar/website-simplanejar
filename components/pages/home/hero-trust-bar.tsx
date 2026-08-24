import {
  CalendarIcon,
  ShieldIcon,
  StarIcon,
  WalletIcon,
} from "@/components/icons";

import type { HeroTrustBar } from "./types";

const trustIconMap = {
  wallet: WalletIcon,
  star: StarIcon,
  calendar: CalendarIcon,
  shield: ShieldIcon,
} as const;

function TrustDivider() {
  return (
    <span
      aria-hidden="true"
      className="mx-1.5 h-6 w-px shrink-0 bg-brand-purple sm:mx-2 lg:mx-3"
    />
  );
}

type HeroTrustBarProps = {
  trustBar: HeroTrustBar;
};

export function HeroTrustBarSection({ trustBar }: HeroTrustBarProps) {
  const Shield = trustIconMap.shield;

  return (
    <div className="w-full rounded-[10px] bg-white px-2 sm:px-3 lg:px-4">
      <div className="flex min-h-[72px] w-full items-center">
        <div className="flex shrink-0 items-center">
          {trustBar.items.map((item, index) => {
            const Icon = trustIconMap[item.icon];

            return (
              <div key={item.title} className="flex items-center">
                {index > 0 ? <TrustDivider /> : null}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="shrink-0 scale-90 sm:scale-100">
                    <Icon />
                  </span>
                  <p className="text-[10px] leading-4 text-brand-dark-blue sm:text-xs lg:text-base lg:leading-5">
                    <span className="block font-bold">{item.title}</span>
                    <span className="font-semibold">{item.subtitle}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <TrustDivider />

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <span className="shrink-0 scale-90 sm:scale-100">
            <Shield />
          </span>
          <p className="max-w-[9rem] text-[10px] font-bold leading-4 text-brand-dark-blue sm:max-w-none sm:text-xs lg:text-lg lg:leading-5">
            {trustBar.headline}
          </p>
        </div>

        <TrustDivider />

        <p className="min-w-0 flex-1 text-[10px] font-semibold leading-4 text-brand-dark-blue sm:text-xs lg:text-lg lg:leading-5">
          {trustBar.description}
        </p>
      </div>
    </div>
  );
}
