import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default async function ProductPage({
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
      <div className="bg-bark py-32 text-center text-cream">
        <Header />
        <Link href="/shop" className="text-[10px] tracking-widest text-cream/60">
          ← BACK TO SHOP
        </Link>
      </div>

      <section className="container-x grid gap-12 py-20 md:grid-cols-2 md:py-28">
        <div className="relative aspect-[4/5] overflow-hidden bg-sand">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-[10px] tracking-[0.25em] text-clay">
            {product.category.toUpperCase()}
          </p>

          <h1 className="serif mt-4 text-5xl md:text-6xl">{product.name}</h1>

          <p className="mt-6 text-xl">
            ₹{product.price.toLocaleString("en-IN")}
          </p>

          <p className="mt-7 max-w-lg text-sm leading-8 text-bark/65">
            {product.description}
          </p>

          <div className="mt-8">
            <p className="text-[10px] tracking-widest">QUANTITY</p>

            <div className="mt-3 flex w-32 justify-between border border-bark/20 px-4 py-3">
              <button>−</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>

          <button className="mt-8 w-full bg-bark px-8 py-5 text-[10px] tracking-[0.2em] text-cream transition hover:bg-clay">
            ADD TO CART — COMING SOON
          </button>

          <div className="mt-8 border-t border-bark/10 pt-6 text-sm leading-7 text-bark/60">
            Carefully selected materials.
            <br />
            Thoughtful design.
            <br />
            Made for slow living.
          </div>
        </div>
      </section>

      <section className="container-x pb-24">
        <h2 className="serif text-3xl">You may also like</h2>

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
