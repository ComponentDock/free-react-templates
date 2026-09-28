export function About() {
  return (
    <section id="about" className="bg-bg-light py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
        <img
          src="https://picsum.photos/seed/expo-about/600/500"
          alt="About us"
          className="w-full rounded-lg"
        />
        <div>
          <h2 className="mb-4 text-3xl font-bold text-text-dark font-heading md:text-4xl">
            We take a steps to build a successful business
          </h2>
          <p className="mb-6 text-text-gray-dark">
            Our team of experts works closely with clients to develop customized marketing
            strategies that deliver measurable results. We believe in transparency, creativity, and
            data-driven decision making to help your brand stand out in the digital landscape.
          </p>
          <a
            href="#services"
            className="inline-block rounded bg-primary px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Explore Us
          </a>
        </div>
      </div>
    </section>
  )
}
