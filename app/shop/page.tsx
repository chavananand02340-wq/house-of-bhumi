import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function Shop() {
  return (
    <main>
      <section className="bg-sand pb-16 pt-32">
        <Header />

        <div className="container-x">
          <p className="text-[9px] tracking-[0.3em] text-clay">
            HOUSE OF BHOOMI
          </p>

          <h1 className="serif mt-4 text-5xl leading-tight md:text-7xl">
            Find a gift
            <br />
            <i>worth giving.</i>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-bark/55">
            Personalized gifts, corporate gifting and thoughtful products for
            every occasion.
          </p>
        </div>
      </section>

      <section className="container-x py-14 md:py-20">
        <div className="flex gap-2 overflow-x-auto pb-3">
          {[
            "ALL GIFTS",
            "PERSONALIZED",
            "CORPORATE",
            "EVENT GIFTING",
            "BULK ORDERS"
          ].map((item, index) => (
            <button
              key={item}
              className={`whitespace-nowrap rounded-full border px-5 py-3 text-[8px] tracking-[0.15em] transition ${
                index === 0
                  ? "border-bark bg-bark text-cream"
                  : "border-bark/15 hover:border-bark"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-x-5 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} p={product} />
          ))}
        </div>

        <div className="mt-20 rounded-2xl bg-sand p-8 text-center md:p-12">
          <p className="text-[9px] tracking-[0.25em] text-clay">
            NEED MORE?
          </p>

          <h2 className="serif mt-3 text-3xl md:text-4xl">
            Looking for bulk or custom gifting?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-bark/55">
            Special discounts are available on bulk orders. Resellers are
            welcome too.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
