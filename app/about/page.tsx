import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <main>
      <section className="bg-sand pb-20 pt-32">
        <Header />

        <div className="container-x">
          <p className="text-[9px] tracking-[0.3em] text-clay">
            HOUSE OF BHOOMI
          </p>

          <h1 className="serif mt-5 max-w-4xl text-5xl leading-tight md:text-7xl">
            Your gifting partner
            <br />
            <i>for every occasion.</i>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-bark/55">
            Personalized products, corporate gifting, event gifting and bulk
            orders — thoughtfully created for people and businesses that want
            their gifts to feel special.
          </p>
        </div>
      </section>

      <section className="container-x grid gap-12 py-20 md:grid-cols-2 md:py-28">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
          <Image
            src="https://images.unsplash.com/photo-1513883049090-d0b7439799bf?auto=format&fit=crop&w=1200&q=85"
            alt="Gifting"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-[9px] tracking-[0.25em] text-clay">
            OUR STORY
          </p>

          <h2 className="serif mt-4 text-4xl leading-tight md:text-5xl">
            A gift is small.
            <br />
            <i>The feeling isn&apos;t.</i>
          </h2>

          <p className="mt-7 text-sm leading-8 text-bark/60">
            House of Bhoomi was built around a simple idea — gifting should
            feel personal. Whether it&apos;s a customized gift for someone you
            love or a corporate gift for hundreds of people, every detail
            matters.
          </p>

          <p className="mt-5 text-sm leading-8 text-bark/60">
            We help individuals, companies, event organizers and resellers
            discover gifting solutions that are thoughtful, useful and
            memorable.
          </p>
        </div>
      </section>

      <section className="bg-bark text-cream">
        <div className="container-x py-20 md:py-28">
          <div className="text-center">
            <p className="text-[9px] tracking-[0.3em] text-cream/40">
              FOR BUSINESSES
            </p>

            <h2 className="serif mt-5 text-4xl md:text-6xl">
              Corporate gifting,
              <br />
              <i>done beautifully.</i>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-cream/55">
              Employee gifting, client gifts, festive gifting, conferences,
              launches and custom corporate events.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              ["01", "Custom Branding", "Create gifting that represents your brand."],
              ["02", "Bulk Discounts", "Special pricing for larger quantities."],
              ["03", "Reseller Friendly", "Flexible products for reseller businesses."]
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-2xl border border-cream/10 p-7"
              >
                <p className="text-[9px] tracking-widest text-clay">{number}</p>
                <h3 className="serif mt-4 text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-cream/45">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/shop"
              className="inline-block rounded-full bg-cream px-8 py-4 text-[9px] tracking-[0.2em] text-bark"
            >
              EXPLORE GIFTING
            </Link>
          </div>
        </div>
      </section>

      <section className="container-x py-20 text-center md:py-28">
        <p className="text-[9px] tracking-[0.25em] text-clay">
          SIMPLE. THOUGHTFUL. PERSONAL.
        </p>

        <h2 className="serif mx-auto mt-5 max-w-3xl text-4xl leading-tight md:text-6xl">
          From one gift to a thousand,
          <br />
          <i>we&apos;ve got you.</i>
        </h2>

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2 md:grid-cols-4">
          {[
            "Customized Gifts",
            "Corporate Events",
            "Bulk Orders",
            "PAN India Delivery"
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-bark/10 p-5 text-[9px] tracking-[0.12em]"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
