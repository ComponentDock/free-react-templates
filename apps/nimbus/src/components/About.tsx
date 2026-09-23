export function About() {
  return (
    <section className="bg-mist py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-semibold text-ink">Powerful User Interface Design</h2>
          <p className="text-smoke">A beautifully designed platform built for modern teams.</p>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-normal uppercase tracking-wider text-primary-400">
              Brand new app to blow your mind
            </p>
            <h3 className="mb-4 text-3xl font-semibold leading-snug text-ink">
              We've made a life
              <br />
              that will change you
            </h3>
            <p className="mb-4 font-medium text-ink">
              We are here to listen from you deliver excellence
            </p>
            <p className="mb-8 leading-relaxed text-smoke">
              Our platform brings together the best tools for project management, team
              collaboration, and analytics in one seamless experience. Start building better
              products today.
            </p>
            <a
              href="#pricing"
              className="inline-block rounded-full bg-primary-400 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-500"
            >
              Get Started now
            </a>
          </div>
          <div>
            <img
              src="https://picsum.photos/seed/nimbus-about/600/400"
              alt="Platform overview"
              className="w-full rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
