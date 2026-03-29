import Image from "next/image";

import { testimonials } from "@/content/site";
import Reveal from "@/components/shared/Reveal";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 font-DM sm:py-28">
      <div className="section-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="section-kicker">What People Say</p>
          <h2 className="mt-4 section-title">
            A community remembered for clarity, care, and technical seriousness.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 90}>
              <figure className="surface-card h-full p-8 text-sm leading-7">
                <blockquote className="text-[17px] text-black">
                  <p>{`“${testimonial.body}”`}</p>
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-x-4">
                  <Image
                    className="h-12 w-12 rounded-full object-cover"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div>
                    <div className="font-semibold text-black">
                      {testimonial.name}
                    </div>
                    <div className="text-[#596780]">
                      {testimonial.handle} · {testimonial.role}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
