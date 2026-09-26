export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center bg-gray-900 pt-20">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 lg:grid-cols-2 lg:px-8">
        {/* Text content */}
        <div className="z-10 py-12 lg:py-0">
          <h1 className="font-[var(--font-heading)] text-5xl font-semibold leading-tight text-white md:text-6xl lg:text-7xl">
            Images
            <br />
            matter
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-gray-300">
            Manner before lively wholly am mr indeed expect one every merry his yet has her. You
            mistress get dashwood children off manner to other.
          </p>
          <a
            href="#work"
            className="mt-8 inline-flex h-12 min-w-[160px] items-center justify-center rounded-full border-2 border-coral-400 px-8 text-sm font-medium text-white transition-colors hover:bg-coral-400"
          >
            Explore More
          </a>
        </div>

        {/* Hero image */}
        <div className="relative hidden lg:block">
          <img
            src="https://picsum.photos/seed/lenscraft-hero/800/900"
            alt="Photography hero"
            className="h-[600px] w-full rounded-lg object-cover"
            loading="eager"
          />
        </div>
      </div>

      {/* Social sidebar */}
      <div className="absolute bottom-8 left-4 z-10 hidden flex-col gap-4 lg:flex">
        <a
          href="#"
          aria-label="Facebook"
          className="text-white/70 transition-colors hover:text-coral-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>
        <a
          href="#"
          aria-label="Twitter"
          className="text-white/70 transition-colors hover:text-coral-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
        </a>
        <a
          href="#"
          aria-label="Instagram"
          className="text-white/70 transition-colors hover:text-coral-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>
      </div>
    </section>
  )
}
