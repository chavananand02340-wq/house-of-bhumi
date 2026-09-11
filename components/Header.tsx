"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="absolute left-0 right-0 top-0 z-50">
        <div className="container-x flex h-20 items-center justify-between">
          <Link href="/" className="group">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✦</span>
              <div>
                <div className="serif text-xl leading-none text-bark">
                  House of Bhoomi
                </div>
                <div className="mt-1 text-[7px] tracking-[0.25em] text-bark/50">
                  GIFTING WITH HEART
                </div>
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-[10px] tracking-[0.18em] text-bark/70 transition hover:text-clay"
            >
              HOME
            </Link>

            <Link
              href="/shop"
              className="text-[10px] tracking-[0.18em] text-bark/70 transition hover:text-clay"
            >
              SHOP
            </Link>

            <Link
              href="/about"
              className="text-[10px] tracking-[0.18em] text-bark/70 transition hover:text-clay"
            >
              CORPORATE GIFTING
            </Link>

            <Link
              href="/shop"
              className="rounded-full bg-bark px-5 py-3 text-[9px] tracking-[0.18em] text-cream transition hover:bg-clay"
            >
              EXPLORE GIFTS
            </Link>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-bark/15 bg-white/60 md:hidden"
            aria-label="Open menu"
          >
            <span className="text-lg">{open ? "×" : "☰"}</span>
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 bg-cream px-6 pt-28 md:hidden">
          <div className="space-y-2">
            {[
              ["HOME", "/"],
              ["SHOP ALL GIFTS", "/shop"],
              ["CORPORATE GIFTING", "/about"]
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block border-b border-bark/10 py-5 text-sm tracking-[0.16em]"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-sand p-6">
            <p className="text-[9px] tracking-[0.2em] text-clay">
              NEED BULK GIFTS?
            </p>

            <p className="serif mt-3 text-2xl">
              Let&apos;s create something special.
            </p>

            <p className="mt-3 text-sm leading-6 text-bark/60">
              Corporate events, weddings, celebrations and reseller orders.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
