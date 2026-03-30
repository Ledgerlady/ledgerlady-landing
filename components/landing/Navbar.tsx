"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

import { linktreeUrl } from "@/content/site";
import { LedgerLadyLogo } from "@/constants/img";

const links = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/programs" },
  { name: "Events", href: "/events" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

const MenuIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-8 w-8 text-black"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
  >
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </svg>
);

const CloseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-8 w-8 text-[#8d8d8d]"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
  >
    <path d="M6 6l12 12" />
    <path d="M18 6L6 18" />
  </svg>
);

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#edf4ff] bg-white/80 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between font-DM">
        <Link href="/" className="flex w-auto items-center">
          <Image src={LedgerLadyLogo} alt="Ledger Lady logo" className="h-10 w-auto" />
        </Link>

        <button
          type="button"
          className="block md:hidden"
          onClick={() => setShowMenu(true)}
          aria-label="Open navigation menu"
        >
          <MenuIcon />
        </button>

        <div
          className={`fixed inset-0 z-50 bg-white px-6 py-6 transition duration-300 md:hidden ${
            showMenu ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-6 opacity-0"
          }`}
        >
          <div className="flex items-center justify-between">
            <Image
              src={LedgerLadyLogo}
              alt="Ledger Lady logo"
              className="h-10 w-auto"
            />
            <button
              type="button"
              onClick={() => setShowMenu(false)}
              aria-label="Close navigation menu"
            >
              <CloseIcon />
            </button>
          </div>

          <ul className="mt-12 flex flex-col gap-5 text-lg text-black">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setShowMenu(false)}
                  className="transition hover:text-deepBlue"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href={linktreeUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setShowMenu(false)}
            className="mt-10 inline-flex rounded-full border border-black bg-black px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-deepBlue"
          >
            Join the Community
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-base text-[#596780]">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="transition hover:text-deepBlue hover:underline"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex">
          <a
            href={linktreeUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-black bg-black px-6 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-deepBlue"
          >
            Join the Community
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
