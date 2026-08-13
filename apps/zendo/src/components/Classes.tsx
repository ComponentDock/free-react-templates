import { classes } from '../data'

/** "Our Classes": 6 cards in a 3-column grid (2 tablet, 1 mobile), each a
 *  full-width image, centered serif title and date/time line. */
export function Classes() {
  return (
    <section id="classes-section" aria-label="Our Classes" className="py-16 md:py-[7em]">
      <div className="mx-auto max-w-[1240px] px-4">
        <h2 className="section-title">Our Classes</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((item) => (
            <article key={item.title} className="group overflow-hidden bg-light">
              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="px-6 py-8 text-center">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-xs font-light text-muted">{item.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
