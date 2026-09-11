import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { categories, products } from "@/lib/products";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[88vh] bg-sand">
        <Image
          src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=2200&q=90"
          alt="Beautiful gift boxes"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-bark/65 via-bark/25 to-transparent" />

        <Header />

        <div className="container-x relative z-10 flex min-h-[88vh] items-end pb-14 pt-28 md:pb-24">
          <div className="max-w-xl text-white">
            <div className="mb-5 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-2 backdrop-blur">
              <span className="text-[8px] tracking-[0.22em]">
                PERSONALIZED · CORPORATE · EVENTS
              </span>
            </div>

            <h1 className="serif text-5xl leading-[0.95] sm:text-6xl md:text-8xl">
              House of
              <br />
              <i>Bhoomi.</i>
            </h1>

            <p className="mt-6 max-w-md text-base leading-7 text-white/80 md:text-lg">
              Your Gifting Partner for Every Occasion.
            </p>

            <p className="mt-3 max-w-md text-sm leading-6 text-white/65">
              Thoughtful personalized gifts, corporate gifting and beautiful
              products made to make every moment memorable.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/shop"
                className="rounded-full bg-cream px-7 py-4 text-center text-[9px] tracking-[0.2em] text-bark transition hover:bg-white"
              >
                SHOP GIFTS
              </Link>

              <Link
                href="/about"
                className="rounded-full border border-white/50 bg-white/5 px-7 py-4 text-center text-[9px] tracking-[0.2em] backdrop-blur transition hover:bg-white hover:text-bark"
              >
                CORPORATE GIFTING
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-bark/10 bg-cream">
        <div className="container-x grid grid-cols-2 divide-x divide-bark/10 md:grid-cols-4">
          {[
            ["✦", "CUSTOMISED GIFTS", "Made especially for you"],
            ["◇", "CORPORATE GIFTING", "For teams & clients"],
            ["∞", "BULK ORDERS", "Special discounts"],
            ["→", "PAN INDIA", "Same-day Delhi available"]
          ].map(([icon, title, text]) => (
            <div key={title} className="px-4 py-7 text-center md:px-6">
              <div className="text-xl text-clay">{icon}</div>
              <p className="mt-2 text-[8px] font-semibold tracking-[0.13em]">
                {title}
              </p>
              <p className="mt-1 text-[10px] text-bark/45">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="container-x py-20 text-center md:py-28">
        <p className="text-[9px] tracking-[0.28em] text-clay">
          GIFTS THAT FEEL PERSONAL
        </p>

        <h2 className="serif mx-auto mt-5 max-w-3xl text-4xl leading-tight md:text-6xl">
          Because the best gifts say,
          <br />
          <i>&quot;I thought of you.&quot;</i>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-bark/55">
          From a name-printed pouch for someone special to thoughtfully
          curated corporate gifts for your entire team — we help you gift
          better.
        </p>
      </section>

      {/* CATEGORIES */}
      <section className="container-x pb-20 md:pb-28">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[9px] tracking-[0.25em] text-clay">
              EXPLORE
            </p>
            <h2 className="serif mt-3 text-4xl md:text-5xl">
              Gift by occasion
            </h2>
          </div>

          <Link
            href="/shop"
            className="hidden border-b border-bark/20 pb-2 text-[9px] tracking-widest sm:block"
          >
            VIEW ALL →
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              href="/shop"
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-bark/70 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-[8px] tracking-[0.2em] text-white/60">
                  HOUSE OF BHOOMI
                </p>
                <h3 className="serif mt-2 text-3xl">{category.name}</h3>
                <p className="mt-1 text-xs text-white/65">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-sand/60 py-20 md:py-28">
        <div className="container-x">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[9px] tracking-[0.25em] text-clay">
                CUSTOMER FAVOURITES
              </p>
              <h2 className="serif mt-3 text-4xl md:text-5xl">
                Popular gifts
              </h2>
            </div>

            <Link
              href="/shop"
              className="hidden border-b border-bark/20 pb-2 text-[9px] tracking-widest sm:block"
            >
              SHOP ALL →
            </Link>
          </div>

          <div className="mt-10 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((product) => (
              <ProductCard key={product.slug} p={product} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY BHOOMI */}
      <section className="container-x py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-sand">
            <Image
              src="https://images.unsplash.com/photo-1513883049090-d0b7439799bf?auto=format&fit=crop&w=1200&q=85"
              alt="Thoughtful gifting"
              fill
              className="object-cover"
            />

            <div className="absolute bottom-5 left-5 rounded-xl bg-cream/90 px-5 py-4 backdrop-blur">
              <p className="text-[8px] tracking-[0.2em] text-clay">
                HOUSE OF BHOOMI
              </p>
              <p className="serif mt-1 text-xl">Made with thought.</p>
            </div>
          </div>

          <div>
            <p className="text-[9px] tracking-[0.25em] text-clay">
              WHY HOUSE OF BHOOMI
            </p>

            <h2 className="serif mt-4 text-4xl leading-tight md:text-6xl">
              More than a gift.
              <br />
              <i>A feeling.</i>
            </h2>

            <div className="mt-9 space-y-7">
              {[
                [
                  "01",
                  "Made personal",
                  "Names, messages and thoughtful details that make your gift truly theirs."
                ],
                [
                  "02",
                  "Built for businesses",
                  "Professional corporate and event gifting for teams, clients and celebrations."
                ],
                [
                  "03",
                  "Made for every scale",
                  "From one special gift to large bulk and reseller orders."
                ]
              ].map(([number, title, text]) => (
                <div key={number} className="flex gap-5">
                  <span className="text-[9px] tracking-widest text-clay">
                    {number}
                  </span>

                  <div>
                    <h3 className="serif text-2xl">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-bark/55">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CORPORATE CTA */}
      <section className="bg-rose/20 bg-[#b77968] text-cream">
        <div className="container-x py-20 text-center md:py-28">
          <p className="text-[9px] tracking-[0.3em] text-cream/60">
            CORPORATE · EVENTS · BULK
          </p>

          <h2 className="serif mx-auto mt-5 max-w-3xl text-4xl md:text-6xl">
            Gifting for 10 or
            <br />
            <i>gifting for 1,000.</i>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-cream/70">
            Special discounts on bulk orders. Resellers are welcome. Tell us
            what you need and let&apos;s create something memorable.
          </p>

          <Link
            href="/about"
            className="mt-8 inline-block rounded-full bg-cream px-8 py-4 text-[9px] tracking-[0.2em] text-bark transition hover:bg-white"
          >
            ENQUIRE FOR BULK / CORPORATE
          </Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-x py-20 md:py-28">
        <div className="text-center">
          <p className="text-[9px] tracking-[0.28em] text-clay">
            CUSTOMER LOVE
          </p>

          <h2 className="serif mt-4 text-4xl md:text-5xl">
            Gifts worth remembering.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            {
              text: "The personalization made the gift feel so much more special. Beautifully done!",
              name: "Happy Customer"
            },
            {
              text: "We ordered gifts in bulk for our corporate event and the experience was smooth from start to finish.",
              name: "Corporate Client"
            },
            {
              text: "Loved the quality and the attention to detail. Definitely ordering again.",
              name: "Bhoomi Customer"
            }
          ].map((review) => (
            <div
              key={review.name}
              className="rounded-2xl border border-bark/10 bg-cream p-7"
            >
              <div className="text-clay">★★★★★</div>

              <p className="serif mt-5 text-xl leading-8">
                &quot;{review.text}&quot;
              </p>

              <p className="mt-6 text-[9px] tracking-[0.18em] text-bark/40">
                — {review.name.toUpperCase()}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="border-t border-bark/10 bg-cream">
        <div className="container-x py-16 text-center md:py-20">
          <p className="text-[9px] tracking-[0.28em] text-clay">
            STAY IN THE LOOP
          </p>

          <h2 className="serif mt-4 text-4xl">Gift better, always.</h2>

          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-bark/50">
            New arrivals, gifting ideas and special offers from House of
            Bhoomi.
          </p>

          <div className="mx-auto mt-8 flex max-w-md border-b border-bark/25 pb-3">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full bg-transparent text-sm outline-none placeholder:text-bark/30"
            />

            <button className="text-[9px] tracking-[0.18em]">
              JOIN
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
      }
