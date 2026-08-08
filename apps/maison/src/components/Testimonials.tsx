export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20 dark:bg-gray-950 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-brand-dark">
          We are Maison
        </p>
        <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-5xl">
          What Our Priority Client's Say
        </h2>

        <figure className="mx-auto mt-12 max-w-3xl border border-black/10 bg-paper p-8 text-center dark:border-white/10 dark:bg-gray-900 sm:p-12">
          <blockquote className="text-lg leading-relaxed text-ink dark:text-white">
            “Maison translated our brief into a home that feels beautifully balanced — light, calm,
            and entirely ours. Every room works as hard as it looks.”
          </blockquote>
          <figcaption className="mt-6 text-sm font-bold uppercase tracking-wide text-brand-dark">
            Olivia Carter — Homeowner
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
