import { ButtonLink } from '@free-react-templates/ui'

const stats = [
  { value: '1800', label: 'Projects Completed' },
  { value: '1200', label: 'Happy Clients' },
  { value: '150', label: 'Branch Offices' },
] as const

export function About() {
  return (
    <section id="about" className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://picsum.photos/seed/graincraft-about-1/400/500"
            alt="Woodworker crafting a custom cabinet"
            className="w-full rounded-2xl object-cover shadow-xl"
          />
          <div className="flex flex-col gap-4">
            <img
              src="https://picsum.photos/seed/graincraft-about-2/400/240"
              alt="Finished hardwood flooring installation"
              className="w-full rounded-2xl object-cover shadow-xl"
            />
            <img
              src="https://picsum.photos/seed/graincraft-about-3/400/240"
              alt="Hand-carved wooden trim detail"
              className="w-full rounded-2xl object-cover shadow-xl"
            />
          </div>
        </div>
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            About Woodworking
          </span>
          <h2 className="mt-4 text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            30 Years of Woodworking Experience
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-mist dark:text-gray-400">
            Graincraft has been delivering exceptional woodworking and construction services for
            over three decades. Our team of skilled craftsmen combines traditional techniques with
            modern precision to create stunning results for residential and commercial projects
            alike.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-mist dark:text-gray-400">
            From custom cabinetry and fine trim work to large-scale commercial builds, we bring
            expertise, quality materials, and a commitment to excellence to every project we
            undertake.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="font-display text-3xl font-bold text-brand">{stat.value}+</span>
                <p className="mt-1 text-xs uppercase tracking-wide text-mist dark:text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <ButtonLink
              href="#contact"
              className="rounded bg-brand px-10 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-brand-dark"
            >
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
