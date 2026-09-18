export function About() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-2xl font-bold uppercase text-heading">About Us</h2>
          <div className="mx-auto mt-2 h-1 w-16 bg-accent" />
          <p className="mt-6 text-sm text-body">
            Learn more about our construction company and our commitment to quality
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 font-heading text-xl font-bold uppercase text-heading">
              Who We Are
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-body">
              There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some form, by injected humour, or randomised words which don't
              look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there isn't anything embarrassing hidden in the middle of text.
            </p>
            <a
              href="#contact"
              className="inline-block bg-accent px-8 py-3 text-sm font-bold uppercase text-heading transition-colors hover:bg-accent-dark hover:text-white"
            >
              Contact Now
            </a>
          </div>
          <div>
            <img
              src="https://picsum.photos/seed/constructo-about/600/400"
              alt="About our construction company"
              className="w-full rounded object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
