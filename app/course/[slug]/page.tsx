import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Footer from "@/components/landing/Footer";
import MarketingSection from "@/components/landing/MarketingSection";
import Navbar from "@/components/landing/Navbar";
import { programs, socialLinks } from "@/content/site";

const CourseStructure = ({ params }: { params: { slug: string } }) => {
  const program = programs.find((entry) => entry.slug === params.slug);

  if (!program) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <section className="py-16 font-DM sm:py-20">
        <div className="section-shell">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/programs"
              className="text-sm font-semibold uppercase tracking-[0.2em] text-deepBlue"
            >
              Back to programs
            </Link>
            <div className="mt-6">
              <span className="rounded-full bg-[#eef6ff] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-deepBlue">
                {program.eyebrow}
              </span>
            </div>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-black sm:text-5xl">
              {program.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#596780]">
              {program.detailIntro}
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-[32px]">
            <Image
              src={program.image}
              alt={program.title}
              width={1600}
              height={1000}
              className="h-[260px] w-full object-cover sm:h-[460px]"
            />
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-10 lg:grid-cols-[1fr_320px]">
            <article className="surface-card p-8 sm:p-10">
              {program.stats && program.stats.length > 0 && (
                <div className="mb-12">
                  <p className="section-kicker">Cohort Snapshot</p>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {program.stats.map((stat) => (
                      <div
                        key={stat}
                        className="rounded-[24px] border border-[#E8EEF7] bg-[#f8fbff] px-5 py-5 text-sm font-semibold leading-6 text-[#0f172a]"
                      >
                        {stat}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {program.sections.map((section) => (
                <div key={section.title} className="mb-10 last:mb-0">
                  <h2 className="text-2xl font-bold text-black">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4 text-base leading-8 text-[#596780]">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </article>

            <aside className="surface-card h-fit p-8">
              <h2 className="text-lg font-semibold text-black">What members gain</h2>
              <ul className="mt-5 space-y-4 text-sm leading-6 text-[#596780]">
                {program.outcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-lightBlue to-deepBlue" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-[#e8eef7] pt-8">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-black">
                  Connect
                </h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {socialLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-[#d8e6ff] px-4 py-2 text-sm font-semibold text-black transition hover:border-deepBlue hover:text-deepBlue"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          {program.gallery && program.gallery.length > 0 && (
            <div className="mx-auto mt-16 max-w-6xl">
              <div className="max-w-3xl">
                <p className="section-kicker">Gallery</p>
                <h2 className="mt-4 text-3xl font-bold text-black sm:text-4xl">
                  {program.galleryTitle ?? "Gallery highlights"}
                </h2>
                <p className="mt-4 text-base leading-7 text-[#596780]">
                  {program.galleryDescription ??
                    "A visual archive of the program, its moments, and the community around it."}
                </p>
              </div>
              <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {program.gallery.map((image, index) => (
                  <div
                    key={`${image.alt}-${index}`}
                    className={`overflow-hidden rounded-[28px] border border-[#E8EEF7] bg-white shadow-[0_18px_60px_rgba(13,37,62,0.08)] ${
                      index === 0 ? "sm:col-span-2 xl:col-span-2" : ""
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1400}
                      height={1000}
                      className={`w-full object-cover ${
                        index === 0 ? "h-[360px]" : "h-[280px]"
                      }`}
                    />
                    {image.caption && (
                      <div className="border-t border-[#E8EEF7] px-5 py-4 text-sm font-medium text-[#596780]">
                        {image.caption}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      <MarketingSection />
      <Footer />
    </>
  );
};

export default CourseStructure;
