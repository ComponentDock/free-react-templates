/** About section: photo on one side, caption whose heading sits on a mint
 *  background block, with a supporting paragraph and a Learn More link. */
export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-16">
        <div className="order-2 lg:order-1">
          <img
            src="https://picsum.photos/seed/adviso-about/800/600"
            alt="Consultants collaborating in a modern office"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="order-1 lg:order-2">
          <div className="bg-brand px-10 py-8 lg:px-15 lg:py-12">
            <h2
              id="about-heading"
              className="font-display text-3xl font-medium leading-tight text-ink lg:text-4xl"
            >
              For local heroes with big hearts and growing champions
            </h2>
          </div>
          <p className="mt-8 max-w-lg text-base leading-relaxed">
            From family-run businesses to scaling challenger brands, we bring the same rigour and
            care to every engagement — so growth never outruns the foundations underneath it.
          </p>
          <div className="mt-8">
            <a href="#case-study" className="link-underline">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
