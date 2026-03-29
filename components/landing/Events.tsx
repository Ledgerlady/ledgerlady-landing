import Image from "next/image";
import Link from "next/link";
import React from "react";

import { communityHighlights } from "@/content/site";
import Reveal from "@/components/shared/Reveal";

const Events = () => {
  const featuredEvent = communityHighlights[0];
  const supportingEvents = communityHighlights.slice(1);

  return (
    <section id="community-highlights" className="py-24 font-DM sm:py-28">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">Community Highlights</p>
          <h2 className="mt-4 section-title">
            A growing body of work across events, series, and community milestones.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl section-copy">
            From launch moments to workshops, recurring technical series, and
            community milestones, Ledger Lady has built a body of work worth
            documenting.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
          <Reveal>
            <Link href={featuredEvent.href} className="group block h-full">
              <article className="surface-card grid h-full overflow-hidden p-0 lg:grid-cols-[minmax(280px,380px)_1fr]">
                <div className="relative aspect-square overflow-hidden bg-[#09111f]">
                  <Image
                    src={featuredEvent.image}
                    alt={featuredEvent.title}
                    width={1080}
                    height={1080}
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-end bg-gradient-to-br from-[#0b1220] via-[#0f172a] to-[#13203f] p-7 sm:p-9">
                  <span className="inline-flex w-fit rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-deepBlue">
                    {featuredEvent.label}
                  </span>
                  <h3 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">
                    {featuredEvent.title}
                  </h3>
                  <p className="mt-5 max-w-2xl text-base leading-7 text-white/85">
                    {featuredEvent.description}
                  </p>
                </div>
              </article>
            </Link>
          </Reveal>

          <div className="grid gap-6">
            {supportingEvents.map((event, index) => (
              <Reveal key={event.title} delay={index * 100}>
                <Link href={event.href} className="group block h-full">
                  <article className="surface-card flex h-full flex-col overflow-hidden p-4">
                    <div className="relative h-52 overflow-hidden rounded-[22px]">
                      <Image
                        src={event.image}
                        alt={event.title}
                        width={1200}
                        height={900}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-white/10" />
                    </div>
                    <div className="px-2 pb-2 pt-6">
                      <span className="inline-flex rounded-full bg-[#eef6ff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-deepBlue">
                        {event.label}
                      </span>
                      <h3 className="mt-4 text-2xl font-semibold text-black">
                        {event.title}
                      </h3>
                      <p className="mt-4 text-base leading-7 text-[#596780]">
                        {event.description}
                      </p>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
