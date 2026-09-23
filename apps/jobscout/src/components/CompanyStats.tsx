export function CompanyStats() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-brand">
              What we are doing
            </span>
            <h2 className="mb-8 text-4xl font-bold text-navy md:text-5xl">
              24k Talented people are getting Jobs
            </h2>
            <p className="mb-4 text-lg font-bold text-heading">
              Mollit anim laborum duis au dolor in voluptate velit ess cillum dolore eu lore dsu
              quality mollit anim laborumuis au dolor in voluptate velit cillum.
            </p>
            <p className="mb-8 text-gray-500">
              Mollit anim laborum. Duis aute irufg in re voluptate velit esscillumlore eu quife
              nrulla parihatur. Excghcepteur signjnt occa cupidatat non inulpadeserunt mollit aboru.
              temnthp incididbnt ut labore mollit anim laborum suis aute.
            </p>
            <a
              href="#"
              className="inline-block rounded-md bg-brand px-10 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
            >
              Post a Job
            </a>
          </div>

          <div className="relative">
            <img
              src="https://picsum.photos/seed/jobscout-stats/600/400"
              alt="Company stats"
              className="w-full rounded object-cover"
              loading="lazy"
            />
            <div className="absolute -left-8 bottom-0 rounded-md bg-navy px-8 py-6 text-center">
              <p className="text-sm text-white/70">Since</p>
              <p
                className="text-4xl font-bold text-white"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                1994
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
