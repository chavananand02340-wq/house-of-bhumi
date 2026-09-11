import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function ProductPage({
  params
}: {
  params: { slug: string };
}) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <section className="bg-sand pb-8 pt-28">
        <Header />

        <div className="container-x">
          <Link
            href="/shop"
            className="text-[9px] tracking-[0.18em] text-bark/50"
          >
            ← BACK TO GIFTS
          </Link>
        </div>
      </section>

      <section className="container-x grid gap-10 py-12 md:grid-cols-2 md:gap-16 md:py-20">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-sand">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            className="object-cover"
          />

          {product.badge && (
            <span className="absolute left-5 top-5 rounded-full bg-cream/90 px-4 py-2 text-[8px] tracking-[0.15em]">
              {product.badge}
            </span>
          )}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-[9px] tracking-[0.25em] text-clay">
            {product.category.toUpperCase()}
          </p>

          <h1 className="serif mt-4 text-5xl leading-tight md:text-6xl">
            {product.name}
          </h1>

          <p className="mt-5 text-2xl">
            ₹{product.price.toLocaleString("en-IN")}
          </p>

          <p className="mt-7 text-sm leading-8 text-bark/60">
            {product.description}
          </p>

          <div className="mt-8 rounded-2xl bg-sand p-5">
            <p className="text-[9px] font-semibold tracking-[0.16em]">
              WANT IT PERSONALIZED?
            </p>

            <p className="mt-2 text-sm leading-6 text-bark/55">
              Add names, custom details or bulk requirements. Contact us for
              personalization and large orders.
            </p>
          </div>

          <button className="mt-6 w-full rounded-full bg-bark px-8 py-5 text-[9px] tracking-[0.2em] text-cream transition hover:bg-clay">
            ADD TO CART — COMING SOON
          </button>

          <div className="mt-7 grid grid-cols-3 border-y border-bark/10 py-5 text-center">
            <div>
              <p className="text-lg">✦</p>
              <p className="mt-1 text-[7px] tracking-widest">PERSONALIZED</p>
            </div>

            <div>
              <p className="text-lg">→</p>
              <p className="mt-1 text-[7px] tracking-widest">PAN INDIA</p>
            </div>

            <div>
              <p className="text-lg">∞</p>
              <p className="mt-1 text-[7px] tracking-widest">BULK ORDERS</p>
            </div>
          </div>

          <p className="mt-5 text-center text-[9px] tracking-widest text-bark/40">
            NO COD · SAME-DAY DELIVERY AVAILABLE IN DELHI
          </p>
        </div>
      </section>

      <section className="container-x pb-20 md:pb-28">
        <h2 className="serif text-3xl md:text-4xl">You may also like</h2>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products
            .filter((item) => item.slug !== product.slug)
            .slice(0, 3)
            .map((item) => (
              <ProductCard key={item.slug} p={item} />
            ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
