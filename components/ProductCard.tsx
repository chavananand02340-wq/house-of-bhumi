import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

export default function ProductCard({ p }: { p: Product }) {
  return (
    <Link href={`/product/${p.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-sand">
        <Image
          src={p.image}
          alt={p.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />

        {p.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-2 text-[8px] tracking-[0.16em] text-bark">
            {p.badge}
          </span>
        )}
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="serif text-xl">{p.name}</p>

          <p className="mt-1 text-[9px] uppercase tracking-[0.16em] text-bark/45">
            {p.category}
          </p>
        </div>

        <p className="text-sm font-medium">
          ₹{p.price.toLocaleString("en-IN")}
        </p>
      </div>

      <div className="mt-3 text-[9px] tracking-[0.16em] text-clay opacity-0 transition group-hover:opacity-100">
        VIEW PRODUCT →
      </div>
    </Link>
  );
}
