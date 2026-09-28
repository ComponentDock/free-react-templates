import { ArrowRight } from 'lucide-react'

export function FeatureStory() {
  return (
    <section id="pages" className="bg-paper py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-8">
        {/* Image */}
        <div className="overflow-hidden rounded-lg">
          <img
            src="https://picsum.photos/seed/crustly-feature/700/500"
            alt="Honey Chocolate Pie"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="mb-6 font-display text-4xl font-bold text-ink">Honey Chocolate Pie</h2>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand">
            Our Signature Dessert
          </p>
          <p className="mb-6 leading-relaxed text-mist">
            Indulge in our most beloved creation — a velvety chocolate filling topped with a
            generous drizzle of golden honey, all nestled in a buttery, flaky crust. Each slice is a
            perfect balance of rich and sweet, crafted to satisfy the most discerning palates.
          </p>
          <p className="mb-8 leading-relaxed text-mist">
            Made with premium Belgian chocolate and locally sourced honey, this pie has become a
            staple at our table and a favorite among our loyal customers.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-[3px] bg-brand px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
          >
            Order Now
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
