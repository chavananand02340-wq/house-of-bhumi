import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <main>
      <section className="bg-bark py-32 text-center text-cream">
        <Header />
        <p className="text-[10px] tracking-[0.3em] text-cream/60">
          THE HOUSE OF BHUMI
        </p>
        <h1 className="serif mt-5 text-6xl">Our Story</h1>
      </section>

      <section className="container-x max-w-3xl py-24">
        <p className="text-[10px] tracking-[0.25em] text-clay">
          ROOTED IN EARTH
        </p>

        <h2 className="serif mt-5 text-5xl leading-tight">
          A quieter way to live.
        </h2>

        <p className="mt-8 text-sm leading-8 text-bark/70">
          Bhumi means earth. House of Bhumi was born from a simple belief:
          beautiful homes do not need more things. They need better things.
        </p>

        <p className="mt-6 text-sm leading-8 text-bark/70">
          We look for honest materials, natural textures and timeless forms
          that become part of your everyday rituals.
        </p>

        <Link
          href="/shop"
          className="mt-10 inline-block border-b border-bark/30 pb-2 text-[10px] tracking-widest"
        >
          SHOP THE COLLECTION →
        </Link>
      </section>

      <Footer />
    </main>
  );
}
