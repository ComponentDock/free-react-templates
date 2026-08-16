import { whyChoose } from '../data'

/** Cream "Why Choose Us?" block: label + headline, an office photo beside a
 *  three-item feature list. */
export function WhyChoose() {
  return (
    <section className="bg-cream py-[100px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img
            src="https://picsum.photos/seed/statecraft-choose/640/560"
            alt="Consulting team collaborating in the office"
            className="h-[420px] w-full object-cover"
          />
          <div>
            <span className="font-serif text-base uppercase tracking-wide text-olive">
              Why Choose Us?
            </span>
            <h2 className="mt-5 text-4xl font-bold leading-[1.2] text-ink lg:text-[46px]">
              We increase our clients&apos; topline by optimizing their growth strategies
            </h2>
            <ul className="mt-10 space-y-8">
              {whyChoose.map((item) => (
                <li
                  key={item.title}
                  className="border-b border-ink/10 pb-8 last:border-b-0 last:pb-0"
                >
                  <h3 className="text-2xl font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-olive">{item.blurb}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
