import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bark text-cream">
      <div className="container-x grid gap-12 py-16 md:grid-cols-3">
        <div>
          <h2 className="serif text-3xl">House of Bhumi</h2>
          <p className="mt-4 max-w-sm text-sm leading-7 text-cream/60">
            Thoughtfully made objects for slower, warmer and more intentional
            living.
          </p>
        </div>

        <div>
          <p className="text-[10px] tracking-[0.2em] text-cream/50">EXPLORE</p>
          <div className="mt-5 space-y-3 text-sm">
            <Link className="block" href="/shop">
              Shop
            </Link>
            <Link className="block" href="/about">
              Our Story
            </Link>
          </div>
        </div>

        <div>
          <p className="text-[10px] tracking-[0.2em] text-cream/50">
            NEWSLETTER
          </p>
          <div className="mt-5 flex border-b border-cream/30 pb-3">
            <input
              placeholder="Your email"
              className="w-full bg-transparent text-sm outline-none placeholder:text-cream/30"
            />
            <button className="text-[10px] tracking-widest">JOIN</button>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10 py-6 text-center text-[9px] tracking-widest text-cream/40">
        © 2026 HOUSE OF BHUMI
      </div>
    </footer>
  );
}
