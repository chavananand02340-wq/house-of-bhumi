"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute left-0 right-0 top-0 z-20 text-white">
      <div className="container-x flex h-24 items-center justify-between">
        <Link href="/" className="serif text-2xl">
          House of Bhumi
        </Link>

        <nav className="hidden gap-8 text-[10px] tracking-[0.2em] md:flex">
          <Link href="/">HOME</Link>
          <Link href="/shop">SHOP</Link>
          <Link href="/about">ABOUT</Link>
        </nav>

        <Link
          href="/shop"
          className="border border-white/60 px-4 py-2 text-[9px] tracking-[0.18em]"
        >
          SHOP
        </Link>
      </div>
    </header>
  );
}
