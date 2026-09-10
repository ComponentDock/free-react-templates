import { ArrowRight } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="relative z-10 -mt-40 bg-white pb-24 pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="flex-1">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">
              About Us
            </p>
            <h2 className="font-display text-4xl font-bold text-ink md:text-5xl">
              Delicious food provider since 1990
            </h2>
            <p className="mt-6 leading-relaxed text-mist">
              Good lights it very to above. Days image to sea. Over there seasons and spirit beast
              in. Greater bearing creepeth very behold fourth night morning seed moved.
            </p>
            <p className="mt-4 leading-relaxed text-mist">
              Good lights it very to above. Days image to sea. Over seasons and spirit beast in over
              greater bearing creepeth.
            </p>
            <a
              href="#menu"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-brand transition-colors hover:text-brand-dark"
            >
              Learn More
              <ArrowRight size={16} />
            </a>
          </div>
          <div className="flex-1">
            <img
              src="https://picsum.photos/seed/ravida-about/600/400"
              alt="Restaurant interior"
              className="w-full rounded object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
