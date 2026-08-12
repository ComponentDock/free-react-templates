import { SOLUTIONS } from '../data'

/* "Our Solutions" — heading sits on a cream band covering the left half
   (`:before` in the original), followed by a 6-card grid (the original owl
   carousel reused three images twice). */
export function Solutions() {
  return (
    <section className="relative bg-white py-28 dark:bg-ink">
      <div aria-hidden="true" className="absolute inset-y-0 left-0 w-1/2 bg-cream" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-black text-brand">Our Solutions</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.map((solution, index) => (
            <a
              key={`${solution.title}-${index}`}
              href="#services-section"
              className="group block bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                src={solution.image}
                alt=""
                loading="lazy"
                className="h-56 w-full object-cover"
              />
              <h3 className="p-4 text-lg font-black text-ink transition-colors group-hover:underline group-hover:decoration-brand group-hover:underline-offset-4 dark:text-white">
                {solution.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
