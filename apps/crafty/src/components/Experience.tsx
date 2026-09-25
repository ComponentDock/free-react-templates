import { ArrowRight } from 'lucide-react'

export function Experience() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="grid grid-cols-2 gap-4 md:w-5/12">
            <img
              src="https://picsum.photos/seed/crafty-1/400/500"
              alt="Crafting workshop"
              className="h-48 w-full rounded object-cover md:h-64"
              loading="lazy"
            />
            <img
              src="https://picsum.photos/seed/crafty-2/400/500"
              alt="Art materials"
              className="mt-8 h-48 w-full rounded object-cover md:mt-12 md:h-64"
              loading="lazy"
            />
          </div>
          <div className="md:w-7/12">
            <h2 className="font-display text-2xl font-bold leading-snug text-ink sm:text-3xl">
              From the root of experience <br className="hidden sm:block" />
              We dig out the best talent
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-smoke">
              Our approach to art and crafting is rooted in decades of experience. We nurture raw
              talent and transform it into exceptional creative work. Every piece we create tells a
              story of dedication, skill, and artistic vision.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-smoke">
              From traditional techniques to modern innovations, we bridge the gap between classic
              craftsmanship and contemporary design. Our workshops and studios are where passion
              meets precision.
            </p>
            <a
              href="#services"
              className="mt-8 inline-flex items-center gap-2 rounded bg-primary-400 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-primary-400 hover:ring-2 hover:ring-primary-400"
            >
              View Details
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
