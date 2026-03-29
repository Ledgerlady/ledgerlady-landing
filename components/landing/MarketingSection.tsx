import { contactEmail } from "@/content/site";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/shared/Reveal";

const ArrowIcon = () => (
  <svg
    viewBox="0 0 20 20"
    aria-hidden="true"
    className="h-5 w-5 text-gray-400"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 10h11" />
    <path d="M11 5l5 5-5 5" />
  </svg>
);

export default function MarketingSection() {
  return (
    <section id="work-with-us" className="pb-24 pt-10 font-DM sm:pb-28">
      <div className="section-shell">
        <Reveal className="relative isolate overflow-hidden rounded-[32px] bg-gradient-to-br from-[#f4fbff] via-white to-[#eef3ff] shadow-[0_24px_80px_rgba(13,37,62,0.08)]">
          <div className="grid gap-x-8 pb-10 pt-10 lg:grid-cols-2 lg:py-16">
            <div className="px-6 lg:px-12 lg:pt-4">
              <div className="mx-auto max-w-2xl">
                <div className="max-w-lg">
                  <div className="mt-8 lg:mt-2">
                    <span className="inline-flex space-x-6 rounded-full bg-deepBlue/10 px-3 py-1 text-sm font-semibold leading-6 text-deepBlue ring-1 ring-inset ring-deepBlue/10">
                      Work With Us
                    </span>
                  </div>
                  <h2 className="mt-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Bring Ledger Lady into your ecosystem.
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    We collaborate with ecosystems, communities, and
                    organizations through technical sessions, workshops,
                    programs, and community activations. If you want to build
                    something thoughtful, we&apos;d love to explore it with you.
                  </p>
                  <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                    <a
                      href={`mailto:${contactEmail}?subject=Work%20With%20Ledger%20Lady`}
                      className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-deepBlue"
                    >
                      Partner With Ledger Lady
                    </a>
                    <Link
                      href="/events"
                      className="inline-flex items-center gap-2 text-sm font-semibold leading-6 text-gray-900"
                    >
                      Explore Events
                      <ArrowIcon />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 px-6 sm:mt-14 lg:mt-0 lg:px-10">
              <div className="overflow-hidden rounded-[28px]">
                <Image
                  src="/images/gallery/ledgerladyatethiopia.jpeg"
                  alt="Ledger Lady in Ethiopia"
                  width={1400}
                  height={1000}
                  className="h-full min-h-[320px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
