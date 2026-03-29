import Image from "next/image";

import { teamMembers } from "@/content/site";
import Reveal from "@/components/shared/Reveal";

const Team = () => {
  return (
    <section id="team" className="py-24 font-DM sm:py-28">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">Meet the Team</p>
          <h2 className="mt-4 section-title">
            Women building Ledger Lady with technical range and clear intent.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl section-copy">
            Ledger Lady is shaped by women working across blockchain
            development, cryptography, law, and hardware. The team reflects the
            kind of depth the community is growing toward.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <Reveal key={member.name} delay={index * 90}>
              <article className="surface-card h-full overflow-hidden p-5">
                <div className="relative overflow-hidden rounded-[24px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={800}
                    height={1000}
                    className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="px-2 pb-2 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-deepBlue">
                    {member.role}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-black">
                    {member.name}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-[#596780]">
                    {member.specialty}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
