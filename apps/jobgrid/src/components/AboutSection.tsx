import { ArrowRight } from 'lucide-react'

export function AboutSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Stats card */}
          <div className="relative mx-auto w-full max-w-md">
            <img
              src="https://picsum.photos/seed/jobgrid-about/600/400"
              alt="Talented professionals"
              className="rounded-2xl object-cover shadow-lg"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-4 rounded-xl bg-brand px-8 py-6 text-center text-white shadow-xl sm:right-0">
              <div className="text-3xl font-extrabold">89027+</div>
              <div className="mt-1 text-sm font-medium text-white/90">
                Talented waiting for hire
              </div>
            </div>
          </div>

          {/* Text content */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
              Want to hire perfect person?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-text-muted">
              We connect employers with the most qualified candidates across hundreds of industries.
              Whether you need a designer, developer, marketer, or executive, JobGrid has the talent
              pool to match your needs quickly and effectively.
            </p>
            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue"
            >
              Browse Job
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
