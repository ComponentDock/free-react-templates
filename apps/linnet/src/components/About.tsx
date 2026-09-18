export function About() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="max-w-md">
            <h2 className="font-heading text-3xl font-bold text-navy-500 sm:text-4xl">
              We Offer Quick &amp; Powerful Business Solution
            </h2>
            <p className="mt-5 text-gray-500">
              We help businesses grow with innovative strategies, professional consulting, and
              tailored solutions designed to maximize your potential and drive results.
            </p>
            <a
              href="#services"
              className="mt-8 inline-block rounded bg-primary-400 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-500"
            >
              Learn More
            </a>
          </div>
          <div className="flex-1">
            <img
              src="https://picsum.photos/seed/linnet-about/600/400"
              alt="About our business"
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
