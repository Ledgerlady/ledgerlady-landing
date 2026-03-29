import Image from "next/image";
import Link from "next/link";

import { programs } from "@/content/site";
import Reveal from "@/components/shared/Reveal";

const Courses = () => {
  return (
    <section id="programs" className="py-24 font-DM sm:py-28">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">Programs</p>
          <h2 className="mt-4 section-title">
            Learning experiences that move members from interest to implementation.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl section-copy">
            Our learning experiences are designed to move members from interest
            to implementation, and from implementation to stronger technical
            judgment.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {programs.map((program, index) => (
            <Reveal key={program.slug} delay={index * 100}>
              <Link
                href={`/course/${program.slug}`}
                className="group block h-full"
              >
                <article className="surface-card card-grid-glow h-full overflow-hidden p-4">
                  <div className="relative h-64 overflow-hidden rounded-[22px]">
                    <Image
                      src={program.image}
                      alt={program.title}
                      width={1200}
                      height={900}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-white/10" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-deepBlue">
                      {program.eyebrow}
                    </span>
                  </div>
                  <div className="px-2 pb-3 pt-6">
                    <h3 className="text-2xl font-semibold text-black">
                      {program.title}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-[#596780]">
                      {program.description}
                    </p>
                    <span className="mt-6 inline-flex items-center text-sm font-semibold text-deepBlue transition group-hover:translate-x-1">
                      Learn more →
                    </span>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
