import Image from "next/image";

import { ecosystems } from "@/content/site";
import Reveal from "@/components/shared/Reveal";

const Ecosystems = () => {
  const marqueeItems = [...ecosystems, ...ecosystems];

  return (
    <section id="ecosystems" className="py-10 font-DM sm:py-14">
      <div className="section-shell">
        <Reveal className="gradient-ring">
          <div className="overflow-hidden rounded-[28px] bg-gradient-to-r from-[#f6fdff] via-white to-[#f7f9ff] px-6 py-8 shadow-[0_20px_60px_rgba(8,28,58,0.06)] sm:px-10">
            <div className="flex flex-col gap-8">
              <div className="max-w-2xl">
                <p className="section-kicker">Trusted By</p>
              </div>

              <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
                <div className="marquee-track flex min-w-max items-center gap-6 py-2">
                  {marqueeItems.map((ecosystem, index) => (
                    <div
                      key={`${ecosystem.name}-${index}`}
                      className="inline-flex h-20 min-w-[180px] items-center justify-center rounded-full border border-[#d9e8ff] bg-white px-7 shadow-[0_10px_30px_rgba(8,28,58,0.06)] sm:min-w-[220px]"
                    >
                      <Image
                        src={ecosystem.logo}
                        alt={`${ecosystem.name} logo`}
                        width={160}
                        height={52}
                        className="h-10 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Ecosystems;
