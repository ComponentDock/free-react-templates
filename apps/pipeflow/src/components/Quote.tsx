export function Quote() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Heading */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              <span className="text-brand-400">Plumbing</span> Services We Provide To Our{' '}
              <span className="text-brand-400">Nowhere</span>
            </h2>
          </div>

          {/* Description */}
          <div className="w-full lg:w-1/2">
            <p className="mb-4 text-gray-600">
              It won't be more complicated to find our services on the web. We are one of the most
              trusted plumbing service providers in the area. Our team of professionals ensures
              top-quality workmanship for every project.
            </p>
            <p className="text-gray-600">
              Whether it's a small leak or a major renovation, we deliver reliable solutions that
              stand the test of time. Contact us today for a free consultation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
