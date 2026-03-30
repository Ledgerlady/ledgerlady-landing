import Image from "next/image";

import Reveal from "@/components/shared/Reveal";
import { communityPartners } from "@/content/site";

const CommunityPartners = () => {
  return (
    <section id="communities" className="py-10 font-DM sm:py-14">
      <div className="section-shell">
        <Reveal className="gradient-ring">
          <div className="overflow-hidden rounded-[28px] bg-gradient-to-r from-[#f6fdff] via-white to-[#f7f9ff] px-6 py-8 shadow-[0_20px_60px_rgba(8,28,58,0.06)] sm:px-10">
            <div className="flex flex-col gap-8">
              <div className="max-w-2xl">
                <p className="section-kicker">Communities We&apos;ve Worked With</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {communityPartners.map((community) => (
                  <div
                    key={community.name}
                    className="inline-flex min-h-[96px] items-center justify-center rounded-[24px] border border-[#d9e8ff] bg-white px-6 py-5 text-center shadow-[0_10px_30px_rgba(8,28,58,0.06)]"
                  >
                    {community.logo ? (
                      <Image
                        src={community.logo}
                        alt={`${community.name} logo`}
                        width={180}
                        height={60}
                        className="h-10 w-auto object-contain"
                      />
                    ) : (
                      <span className="text-base font-semibold text-[#10233d] sm:text-lg">
                        {community.name}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CommunityPartners;
