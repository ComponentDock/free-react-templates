import { ArrowRight } from 'lucide-react'

export function About() {
  return (
    <section
      id="about"
      className="relative bg-surface py-20"
      style={{
        backgroundImage:
          'linear-gradient(rgba(247,247,247,0.85), rgba(247,247,247,0.85)), url(https://picsum.photos/seed/medwell-about-bg/1920/600)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-12 md:flex-row md:justify-end">
          <div className="max-w-md">
            <h2 className="font-heading text-3xl font-bold leading-snug text-heading md:text-4xl">
              Second Abundantly Move That Cattle Perform Appen Land
            </h2>
            <h3 className="mt-4 font-heading text-sm font-semibold uppercase tracking-wide text-brand-500">
              Give their their without moving were stars called so divide in female be moving night
              may fish him
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-body">
              Give their their without moving were stars called so divide female be moving night may
              fish him own male created great opportunity deal. Stars called so divide female moving
              night may fish him own male created great.
            </p>
            <a
              href="#contact"
              className="group mt-6 inline-flex items-center gap-2 font-heading text-sm font-semibold uppercase tracking-widest text-brand-500 transition-colors hover:text-brand-600"
            >
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
