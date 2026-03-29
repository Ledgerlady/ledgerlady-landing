import Link from "next/link";

import { socialLinks } from "@/content/site";

const exploreLinks = [
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Events", href: "/events" },
  { name: "Blog", href: "/blog" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#e8eef7] bg-[#f9fcff] font-DM" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="section-shell pb-8 pt-20 sm:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-xl">
            <p className="section-kicker">Ledger Lady</p>
            <h3 className="mt-4 text-3xl font-bold text-black">
              A women-led blockchain community moving from access to excellence.
            </h3>
            <p className="mt-5 text-base leading-7 text-[#596780]">
              We create the space, structure, and technical momentum that help
              members learn seriously, build confidently, and contribute
              meaningfully.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-black">
              Explore
            </h3>
            <ul role="list" className="mt-6 space-y-4">
              {exploreLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm leading-6 text-[#596780] transition hover:text-deepBlue"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-black">
              Connect
            </h3>
            <ul role="list" className="mt-6 space-y-4">
              {socialLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm leading-6 text-[#596780] transition hover:text-deepBlue"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-[#e8eef7] pt-8 md:flex md:items-center md:justify-between">
          <p className="text-sm leading-6 text-[#596780]">
            © 2026 Ledger Lady. All rights reserved.
          </p>
          <div className="mt-4 flex gap-6 md:mt-0">
            <Link href="/about" className="text-sm leading-6 text-[#596780] transition hover:text-deepBlue">
              About
            </Link>
            <Link href="/programs" className="text-sm leading-6 text-[#596780] transition hover:text-deepBlue">
              Programs
            </Link>
            <Link href="/events" className="text-sm leading-6 text-[#596780] transition hover:text-deepBlue">
              Events
            </Link>
            <Link href="/blog" className="text-sm leading-6 text-[#596780] transition hover:text-deepBlue">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
