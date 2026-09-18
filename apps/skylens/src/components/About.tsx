export function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="mb-2 block font-body text-xs font-semibold uppercase tracking-widest text-section-label">
              About Us
            </span>
            <h2 className="mb-6 font-sans text-4xl font-bold uppercase text-heading">
              Hassle-Free Drone Photography
            </h2>
            <p className="mb-4 text-base leading-relaxed">
              We provide professional aerial photography and videography services using
              state-of-the-art drone technology. Our team of certified pilots delivers stunning
              visual content for a variety of industries.
            </p>
            <p className="mb-8 text-base leading-relaxed">
              From real estate listings to construction site monitoring, we capture perspectives
              that tell your story from above.
            </p>
            <a
              href="#services"
              className="inline-block bg-black px-8 py-4 font-sans text-sm font-medium uppercase tracking-widest text-white transition-opacity hover:opacity-80"
            >
              Explore Services
            </a>
          </div>
          <div className="relative">
            <img
              src="https://picsum.photos/seed/skylens-about/600/450"
              alt="Drone photography in action"
              className="w-full rounded object-cover"
            />
            <div className="absolute -bottom-6 -left-6 flex h-24 w-24 flex-col items-center justify-center rounded bg-brand text-center text-white shadow-lg">
              <span className="font-sans text-3xl font-bold">20</span>
              <span className="font-body text-xs font-semibold uppercase leading-tight">
                Years of Experience
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
