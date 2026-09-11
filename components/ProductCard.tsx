import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

export default function ProductCard({ p }: { p: Product }) {
  return (
    <Link href={`/product/${p.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-sand">
        <Image
          src={p.image}
          alt={p.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="mt-4 flex justify-between gap-4">
        <div>
          <p className="serif text-xl">{p.name}</p>
          <p className="mt-1 text-[10px] uppercase tracking-widest text-bark/50">
            {p.category}
          </p>
        </div>

        <p className="text-sm">₹{p.price.toLocaleString("en-IN")}</p>
      </div>
    </Link>
  );
}
