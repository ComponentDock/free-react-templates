import { ArrowRight } from 'lucide-react'

export function AboutStory() {
  return (
    <section id="about" className="bg-paper py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-8">
        {/* Text */}
        <div>
          <h2 className="mb-6 font-display text-4xl font-bold text-ink">About Our Story</h2>
          <p className="mb-6 leading-relaxed text-mist">
            At Crustly, we believe that great food starts with the finest ingredients and a whole
            lot of love. Our journey began in a small kitchen with a big dream — to bring the warmth
            of freshly baked goods and the richness of artisan cuisine to every table.
          </p>
          <p className="mb-8 leading-relaxed text-mist">
            From our handcrafted breads to our signature desserts, every item is made with care and
            attention to detail. We source locally and bake fresh daily, ensuring that every bite is
            a moment of pure delight.
          </p>
          <a
            href="#menu"
            className="inline-flex items-center gap-2 rounded-[3px] bg-brand px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
          >
            View Full Menu
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* Image */}
        <div className="overflow-hidden rounded-lg">
          <img
            src="https://picsum.photos/seed/crustly-story/600/400"
            alt="Our bakery story"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
