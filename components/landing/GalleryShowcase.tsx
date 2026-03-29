import Image from "next/image";

import { galleryImages } from "@/content/site";
import Reveal from "@/components/shared/Reveal";

const GalleryShowcase = () => {
  return (
    <section id="gallery" className="py-24 font-DM sm:py-28">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">Gallery</p>
          <h2 className="mt-4 section-title">
            Beautiful moments from the women who make Ledger Lady feel alive.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl section-copy">
            A visual record of the community at gatherings, ecosystem moments,
            and shared spaces where people show up with presence, clarity, and
            ambition.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          {galleryImages.map((image, index) => {
            const spanClass =
              index === 0
                ? "lg:col-span-7 lg:row-span-2"
                : index === 1
                  ? "lg:col-span-5"
                  : index === 2
                    ? "lg:col-span-5"
                    : index === 3
                      ? "lg:col-span-4"
                      : index === 4
                        ? "lg:col-span-4"
                        : "lg:col-span-4";

            const heightClass =
              index === 0 ? "h-[520px]" : index <= 2 ? "h-[250px]" : "h-[280px]";

            return (
              <Reveal key={image.title} delay={index * 70} className={spanClass}>
                <article className="surface-card group h-full overflow-hidden p-3">
                  <div className={`relative overflow-hidden rounded-[24px] ${heightClass}`}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1400}
                      height={1200}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                      <h3 className="text-xl font-semibold sm:text-2xl">
                        {image.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm leading-6 text-white/85">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GalleryShowcase;
