import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function Shop() {
  return (
    <main>
      <div className="bg-bark py-32 text-center text-cream">
        <Header />
        <p className="text-[10px] tracking-[0.3em] text-cream/60">
          HOUSE OF BHUMI
        </p>
        <h1 className="serif mt-5 text-6xl md:text-7xl">The Collection</h1>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-cream/60">
          Objects made to bring warmth, texture and intention into everyday
          spaces.
        </p>
      </div>

      <section className="container-x py-20">
        <div className="mb-10 flex gap-3 overflow-x-auto">
          {["ALL", "DECOR", "TEXTILES", "KITCHEN", "RITUALS"].map((item) => (
            <button
              key={item}
              className="whitespace-nowrap border border-bark/20 px-5 py-3 text-[9px] tracking-widest transition hover:bg-bark hover:text-cream"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
