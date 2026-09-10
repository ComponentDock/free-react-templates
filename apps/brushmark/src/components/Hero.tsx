const socials = [
  {
    label: 'Facebook',
    href: '#',
    path: 'M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07Z',
  },
  {
    label: 'Twitter',
    href: '#',
    path: 'M23.954 4.57c-.885.39-1.83.65-2.825.77 1.014-.61 1.795-1.57 2.16-2.72-.95.56-2.005.97-3.127 1.19-.9-.96-2.18-1.56-3.59-1.56-2.72 0-4.92 2.2-4.92 4.92 0 .39.04.76.13 1.12-4.09-.2-7.72-2.17-10.15-5.15-.42.73-.66 1.57-.66 2.48 0 1.71.87 3.21 2.19 4.1-.8-.03-1.56-.25-2.22-.61v.06c0 2.38 1.7 4.37 3.95 4.83-.41.11-.85.17-1.3.17-.32 0-.63-.03-.93-.09.63 1.96 2.45 3.39 4.61 3.43-1.69 1.32-3.82 2.11-6.13 2.11-.4 0-.79-.02-1.18-.07 2.18 1.4 4.76 2.21 7.54 2.21 9.05 0 14-7.5 14-14 0-.21 0-.43-.02-.64.96-.69 1.79-1.55 2.45-2.53l-.05-.03Z',
  },
  {
    label: 'Skype',
    href: '#',
    path: 'M12.069 18.87c-4.017 0-7.069-2.386-7.069-5.569 0-1.74.868-3.448 2.424-4.772 2.075-1.766 4.543-2.352 5.154-2.563.405-.139.652.294.398.709-.565.924-1.702 2.842-1.702 3.589 0 .372.27.361.459.154.539-.586 1.478-1.433 2.836-1.433 2.228 0 3.619 1.479 3.619 3.701 0 1.781-1.063 3.184-3.119 3.184-1.403 0-2.206-.576-2.593-1.002-.097-.106-.223-.157-.357-.157-.181 0-.331.149-.331.331 0 .453.312 1.329 1.308 1.329Z',
  },
  {
    label: 'Instagram',
    href: '#',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
  },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(2,16,23,0.7), rgba(2,16,23,0.7)), url(https://picsum.photos/seed/brushmark-hero/1920/1080)',
      }}
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 py-32 lg:grid-cols-2 lg:px-8">
        {/* Text */}
        <div className="text-white">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-brand-pink">
            Hey There!
          </p>
          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            I Am Jo
            <span className="block bg-gradient-to-r from-brand-blue to-brand-pink bg-clip-text text-transparent">
              Breed
            </span>
          </h1>
          <p className="mb-6 max-w-md text-lg text-gray-300">
            Creative Art Director &amp; Designer crafting memorable visual experiences for brands
            worldwide.
          </p>

          {/* Social icons */}
          <div className="mb-8 flex gap-3">
            {socials.map(({ label, href, path }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-all hover:bg-gradient-to-r hover:from-brand-blue hover:to-brand-pink hover:border-transparent"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>

          <a
            href="#portfolio"
            className="inline-block rounded-[5px] bg-gradient-to-r from-brand-blue to-brand-pink px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            See My Work
          </a>
        </div>

        {/* Hero image — hidden on mobile */}
        <div className="hidden lg:block">
          <img
            src="https://picsum.photos/seed/brushmark-portrait/600/700"
            alt="Creative Art Director portrait"
            className="mx-auto rounded-lg object-cover shadow-2xl"
            width={600}
            height={700}
          />
        </div>
      </div>
    </section>
  )
}
