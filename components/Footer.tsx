import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bark text-cream">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✦</span>
              <h2 className="serif text-3xl">House of Bhoomi</h2>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-cream/60">
              Your Gifting Partner for Every Occasion. Personalized gifts,
              corporate gifting and thoughtful products made to make every
              occasion memorable.
            </p>

            <p className="mt-5 text-[10px] tracking-[0.2em] text-cream/40">
              ™ TRADEMARK COMPANY
            </p>
          </div>

          <div>
            <p className="text-[9px] tracking-[0.22em] text-cream/40">
              EXPLORE
            </p>

            <div className="mt-5 space-y-4 text-sm text-cream/70">
              <Link className="block hover:text-cream" href="/">
                Home
              </Link>
              <Link className="block hover:text-cream" href="/shop">
                Shop
              </Link>
              <Link className="block hover:text-cream" href="/about">
                Corporate Gifting
              </Link>
            </div>
          </div>

          <div>
            <p className="text-[9px] tracking-[0.22em] text-cream/40">
              SERVICES
            </p>

            <div className="mt-5 space-y-4 text-sm text-cream/70">
              <p>Personalized Gifts</p>
              <p>Bulk Orders</p>
              <p>Reseller Orders</p>
              <p>PAN India Delivery</p>
              <p>Same-Day Delhi Delivery</p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-5 border-t border-cream/10 pt-8 text-[10px] tracking-widest text-cream/45 md:grid-cols-3">
          <p>NO COD</p>
          <p className="md:text-center">PAN INDIA DELIVERY</p>
          <p className="md:text-right">BULK ORDERS WELCOME</p>
        </div>
      </div>

      <div className="border-t border-cream/10 py-5 text-center text-[9px] tracking-widest text-cream/35">
        © 2026 HOUSE OF BHOOMI · YOUR GIFTING PARTNER
      </div>
    </footer>
  );
}
