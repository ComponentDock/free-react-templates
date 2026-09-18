export function About() {
  return (
    <section id="about" className="py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col-reverse gap-12 lg:flex-row lg:items-center">
          {/* Image */}
          <div className="lg:w-1/2">
            <figure className="relative">
              <img
                src="https://picsum.photos/seed/impulse-about-1/600/400"
                alt="Our creative workspace"
                className="w-full object-cover"
                loading="lazy"
              />
            </figure>
          </div>
          {/* Text */}
          <div className="lg:w-1/2 lg:pl-8">
            <span className="mb-2 block text-xs uppercase tracking-wider text-brand">About Us</span>
            <h2 className="mb-4 font-display text-3xl text-heading">Creative We Grow</h2>
            <p className="mb-4 text-sm leading-relaxed text-body-text">
              We are a passionate team of designers and strategists dedicated to helping brands tell
              their stories through exceptional visual experiences. Our approach combines creativity
              with data-driven insights to deliver results that matter.
            </p>
            <p className="mb-6 text-sm leading-relaxed text-body-text">
              From brand identity to digital campaigns, we craft solutions that resonate with your
              audience and drive growth.
            </p>
            <a
              href="#"
              className="inline-block border-2 border-heading px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-heading transition-colors hover:bg-heading hover:text-white"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
