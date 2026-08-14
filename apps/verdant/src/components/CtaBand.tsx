/** Full-width green CTA band with the white uppercase heading and an
 *  outline Contact Us button that inverts on hover. */
export function CtaBand() {
  return (
    <section aria-label="Call to action" className="bg-primary py-14 lg:py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-6 px-4 text-center lg:px-8">
        <h2 className="font-heading text-3xl font-semibold uppercase text-white lg:text-4xl">
          Try For Your Next Project
        </h2>
        <a
          href="#contact"
          className="border-2 border-white px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-primary"
        >
          Contact Us
        </a>
      </div>
    </section>
  )
}
