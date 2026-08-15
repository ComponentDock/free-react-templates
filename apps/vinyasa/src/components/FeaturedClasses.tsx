import { featuredClasses } from '../data'

export function FeaturedClasses() {
  return (
    <section id="classes" aria-label="Featured classes" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-thin text-ink md:text-5xl">Our Featured Classes</h1>
          <p className="mt-5 leading-relaxed text-muted">
            Four signature sessions, taught daily — drop in or book your spot.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {featuredClasses.map((item, index) => (
            <article
              key={item.image}
              className="group relative overflow-hidden bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="flex min-h-72 flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-8">
                <h2 className="text-2xl font-medium text-white">{item.title}</h2>
                <a
                  href="#schedule"
                  aria-label={`Book an appointment for class ${index + 1}`}
                  className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-medium uppercase tracking-wider text-brand transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  Book an appointment
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
