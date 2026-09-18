export function AboutSupport() {
  return (
    <section className="bg-gray-900 py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/seed/launchpad-support/800/500"
              alt="24/7 support team"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-400">
              24/7 Support system
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white">
              A handy support system for the software
            </h2>
            <p className="mt-2 text-sm font-medium text-gray-400">
              We are here to listen from you deliver excellence
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Our support team works around the clock to ensure your business never skips a beat.
              From onboarding to advanced troubleshooting, we have you covered every step of the
              way.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
