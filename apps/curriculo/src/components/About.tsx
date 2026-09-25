export function About() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <img
              src="https://picsum.photos/seed/curriculo-about/800/600"
              alt="About me"
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>
          <div className="lg:col-span-2">
            <h2 className="mb-4 text-2xl font-extralight text-gray-800">
              About <strong className="font-bold">Me</strong>
            </h2>
            <p className="mb-4 text-lg font-light leading-relaxed text-gray-600">
              A passionate product designer with 7+ years of experience crafting user-centered
              digital experiences for startups and enterprise teams.
            </p>
            <p className="mb-6 text-gray-500">
              I blend research-driven design with clean front-end implementation to build products
              that are both beautiful and functional. Currently leading design at a Series B SaaS
              company in San Francisco.
            </p>
            <div className="flex gap-3">
              <a
                href="#contact"
                className="rounded bg-brand-primary px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
              >
                Hire Me
              </a>
              <a
                href="#"
                className="rounded border border-gray-300 px-5 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-400"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
