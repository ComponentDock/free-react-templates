export function Testimonials() {
  return (
    <section aria-label="Testimonials" className="bg-paper py-20 dark:bg-gray-900 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <figure className="mx-auto max-w-2xl">
          <img
            src="https://picsum.photos/seed/chisel-client/96/96"
            alt="James Anderson"
            className="mx-auto h-16 w-16 rounded-full object-cover"
          />
          <blockquote className="mt-6 font-display text-xl font-medium leading-relaxed text-ink dark:text-white lg:text-2xl">
            “Separated they live in. Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean.”
          </blockquote>
          <figcaption className="mt-6 text-sm font-bold uppercase tracking-[2px] text-mist dark:text-white/60">
            James Anderson
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
