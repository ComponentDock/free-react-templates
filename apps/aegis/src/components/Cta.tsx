export function Cta() {
  return (
    <section
      aria-label="Get started"
      className="bg-gradient-to-br from-primary-600 to-primary-800 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to Secure Your Organization?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100">
          Join thousands of security teams who trust Aegis to protect their most critical assets.
          Start your free trial today.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-base font-medium text-primary-700 shadow-lg transition-colors hover:bg-gray-100"
          >
            Start Free Trial
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/40 px-6 text-base font-medium text-white transition-colors hover:bg-white/10"
          >
            Talk to Expert
          </a>
        </div>
      </div>
    </section>
  )
}
