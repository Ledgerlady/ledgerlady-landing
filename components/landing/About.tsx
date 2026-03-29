import { aboutSource } from "@/helpers/aboutSource";
import Image from "next/image";
import React from "react";
import Reveal from "@/components/shared/Reveal";

const About = () => {
  return (
    <section id="what-we-do" className="py-24 font-DM sm:py-28">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">What We Do</p>
          <h2 className="mt-4 section-title">A community built for depth, momentum, and real technical growth.</h2>
          <p className="mx-auto mt-5 max-w-2xl section-copy">
            Ledger Lady exists to help more women move from curiosity to
            capability, and from capability to real contribution. Our work is
            no longer just about access. It is about helping members build
            depth, confidence, and technical excellence over time.
          </p>
        </Reveal>

        <article className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {aboutSource.map((element, index) => {
            return (
              <Reveal key={element.title} delay={index * 90}>
                <div className="surface-card card-grid-glow flex h-full flex-col items-start p-8 text-left">
                  <div className="rounded-2xl bg-[#f3fbff] p-4">
                    <Image src={element.icon} alt="" className="my-1" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-black">
                    {element.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[#596780]">
                    {element.subtitle}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default About;
