export function About() {
  return (
    <section className="bg-magnolia py-16 sm:py-20 lg:py-28" data-testid="about">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Copy */}
          <div>
            <h2 className="font-display text-3xl font-bold text-heading sm:text-4xl">
              Leading the Digital Entertainment Revolution
            </h2>
            <p className="mt-5 text-base text-body">
              We build tools that transform how teams create, manage, and deliver digital
              experiences. Our platform combines powerful analytics with an effortless interface so
              you can focus on what matters — your users.
            </p>
            <a
              href="#features"
              className="mt-8 inline-block rounded-full border-2 border-primary px-8 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              Know More
            </a>
          </div>

          {/* Illustration */}
          <div className="flex justify-center">
            <img
              src="https://picsum.photos/seed/indigo-about/520/360"
              alt="Digital entertainment platform"
              className="w-full max-w-md rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
