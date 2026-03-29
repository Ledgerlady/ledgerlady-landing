import { HeroSectionImage } from "@/constants/svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { linktreeUrl } from "@/content/site";
import Reveal from "@/components/shared/Reveal";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pb-16 pt-8 font-DM sm:pb-20 sm:pt-12">
      <div className="hero-orb left-[-120px] top-10 h-64 w-64 bg-lightBlue" />
      <div className="hero-orb right-[-100px] top-24 h-72 w-72 bg-deepBlue" />

      <div className="section-shell flex flex-col items-center text-center">
        <Reveal className="max-w-4xl">
          <p className="section-kicker">Women-led. Builder-first. Ecosystem-connected.</p>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] text-black md:text-[54px] lg:text-[68px]">
            Beyond Access. Toward{" "}
            <span className="gradient-word">Technical</span>{" "}
            <span className="gradient-word">Excellence.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base font-medium leading-8 text-[#596780] sm:text-lg">
            Ledger Lady is a women-led blockchain community for people who want
            more than entry points. We create the space, structure, and
            technical depth that help members learn seriously, build
            confidently, and contribute meaningfully across the ecosystem.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/programs"
              className="rounded-full bg-black px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-deepBlue"
            >
              Explore Programs
            </Link>
            <a
              href={linktreeUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#d8e6ff] bg-white px-7 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:border-deepBlue hover:text-deepBlue"
            >
              Join the Community
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-12 w-full max-w-5xl">
          <div className="gradient-ring">
            <div className="surface-card overflow-hidden bg-white/95 p-3 sm:p-5">
              <Image
                src={HeroSectionImage}
                alt="Illustration representing the Ledger Lady community"
                className="h-auto w-full rounded-[24px]"
                priority
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default HeroSection;
