/** About section inside a 2px red-bordered box: photo left, "Unique
 *  Apartment Formats" heading + paragraph + solid red Learn More right. */
export function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-16">
        <div className="flex flex-col border-2 border-brand p-5 lg:flex-row lg:items-center">
          <div className="lg:w-1/2">
            <img
              src="https://picsum.photos/seed/stalwart-about/800/520"
              alt="Modern apartment building under construction"
              className="h-72 w-full object-cover lg:h-[380px]"
            />
          </div>
          <div className="py-8 lg:w-1/2 lg:px-12">
            <h2 className="mb-5 font-display text-3xl font-semibold uppercase text-ink">
              Unique Apartment Formats
            </h2>
            <p className="mb-8 text-base leading-relaxed text-body">
              From compact studios to full-floor penthouses, every layout is planned around natural
              light, flexible space and long-term value — with finishes you can touch and
              maintenance you can forget.
            </p>
            <a href="#contact" className="btn-red-square">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
