export function Stats() {
  return (
    <section className="bg-light-lavender py-20">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left: chart placeholder */}
          <div>
            <img
              src="https://picsum.photos/seed/coinwave-stats/600/350"
              alt="Bitcoin price chart"
              className="w-full rounded-sm"
            />
          </div>

          {/* Right: content */}
          <div>
            <h2 className="mb-6 text-[30px] font-semibold leading-tight text-dark-bg">
              Ups and Downs of Bitcoin (Realtime)
            </h2>
            <p className="mb-8 text-[15px] font-light leading-7 text-text-muted">
              Track real-time Bitcoin price movements with our comprehensive analytics dashboard.
              Stay informed about market trends and make data-driven investment decisions.
            </p>
            <a
              href="#pricing"
              className="inline-block rounded-sm border border-dark-bg px-8 py-3 text-sm font-medium text-dark-bg transition-colors hover:border-orange-brand hover:text-orange-brand"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
