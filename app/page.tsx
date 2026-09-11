import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <main>
      <section className="relative min-h-[92vh] overflow-hidden bg-bark text-white">
        <Image
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2200&q=90"
          alt="Warm earthy home interior"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />
        <Header />

        <div className="container-x relative z-10 flex min-h-[92vh] items-end pb-20">
          <div className="max-w-2xl">
            <p className="text-[10px] tracking-[0.3em]">
              CONSCIOUS OBJECTS · SLOW LIVING
            </p>

            <h1 className="serif mt-5 text-6xl leading-[0.9] md:text-8xl">
              Objects with
              <br />
              <i>a soul.</i>
            </h1>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/75">
              Thoughtfully made pieces that bring warmth, texture and quiet
              beauty into everyday rituals.
            </p>

            <Link
              href="/shop"
              className="mt-9 inline-block border border-white px-7 py-4 text-[10px] tracking-[0.2em] transition hover:bg-white hover:text-bark"
            >
              SHOP THE COLLECTION
            </Link>
          </div>
        </div>
      </section>

      <section className="container-x py-24 md:py-32">
        <p className="text-[10px] tracking-[0.25em] text-clay">THE EDIT</p>

        <div className="flex items-end justify-between gap-6">
          <h2 className="serif mt-3 text-4xl md:text-5xl">
            Made for the everyday.
          </h2>

          <Link
            href="/shop"
            className="hidden border-b border-bark/30 pb-2 text-[10px] tracking-widest sm:block"
          >
            VIEW ALL →
          </Link>
        </div>

        <div className="mt-12 grid gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
        </div>
      </section>

      <section className="bg-sand/60">
        <div className="container-x grid items-center gap-12 py-24 md:grid-cols-2 md:py-32">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85"
              alt="Natural interior"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-[10px] tracking-[0.25em] text-olive">
              OUR PHILOSOPHY
            </p>

            <h2 className="serif mt-5 text-5xl leading-tight">
              Less, but better.
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-8 text-bark/70">
              Bhumi means earth. It is the starting point for everything we
              make: honest materials, considered forms and respect for the
              hands behind each piece.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-block border-b border-bark/30 pb-2 text-[10px] tracking-widest"
            >
              DISCOVER OUR STORY →
            </Link>
          </div>
        </div>
      </section>

      <section className="container-x py-24 md:py-32">
        <p className="text-[10px] tracking-[0.25em] text-clay">
          SHOP BY MOOD
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              name: "Quiet Corners",
              tag: "DECOR",
              image:
                "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85"
            },
            {
              name: "Soft Layers",
              tag: "TEXTILES",
              image:
                "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=85"
            },
            {
              name: "Daily Rituals",
              tag: "KITCHEN",
              image:
                "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1000&q=85"
            }
          ].map((item) => (
            <Link
              href="/shop"
              key={item.name}
              className="group relative aspect-[4/5] overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20" />

              <div className="absolute bottom-7 left-7 text-white">
                <p className="text-[9px] tracking-[0.22em]">{item.tag}</p>
                <p className="serif mt-2 text-3xl">{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-olive text-cream">
        <div className="container-x py-20 text-center md:py-28">
          <p className="serif text-4xl md:text-5xl">
            Beautiful things should
            <br />
            feel lived with.
          </p>
          <p className="mt-6 text-[10px] tracking-widest text-cream/50">
            — THE BHUMI JOURNAL
          </p>
        </div>
      </section>

      <section className="container-x py-24 text-center md:py-28">
        <p className="text-[10px] tracking-[0.25em] text-clay">
          A NOTE FROM BHUMI
        </p>

        <h2 className="serif mt-4 text-4xl">Stay awhile.</h2>

        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-bark/60">
          Seasonal edits, studio stories and small rituals for making home
          feel more like you.
        </p>

        <div className="mx-auto mt-8 flex max-w-md border-b border-bark/30 pb-3">
          <input
            placeholder="Your email address"
            className="w-full bg-transparent text-sm outline-none placeholder:text-bark/35"
          />
          <button className="text-[10px] tracking-widest">SUBSCRIBE</button>
        </div>
      </section>

      <Footer />
    </main>
  );
          }
