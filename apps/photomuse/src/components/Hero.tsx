export function Hero() {
  return (
    <section id="home" className="flex min-h-screen bg-light max-lg:ml-0 max-lg:mt-16 lg:ml-64">
      {/* Left: Author image */}
      <div className="relative w-1/2 max-lg:hidden">
        <img
          src="https://picsum.photos/seed/photomuse-hero/800/1000"
          alt="Photographer portrait"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right: Author info */}
      <div className="flex w-1/2 items-center px-8 py-12 max-lg:w-full max-lg:px-4">
        <div className="relative mx-auto max-w-lg">
          {/* Big watermark letter */}
          <h1
            aria-hidden="true"
            className="pointer-events-none absolute -top-10 left-0 right-0 select-none text-[70px] font-black leading-none text-watermark max-md:text-[40px]"
          >
            Louie Smith
          </h1>

          <span className="mb-2 block text-2xl font-normal text-muted max-md:text-lg">
            Hello! I'm
          </span>

          <h2 className="mb-4 text-4xl font-black uppercase tracking-wider text-tan max-md:text-2xl">
            Louie Smith <span className="text-body">A Photographer.</span>{' '}
            <span className="text-body">I Capture Life</span>
          </h2>

          <p className="mb-6 text-base font-medium leading-relaxed text-muted max-md:text-sm">
            I am a Photographer from America. Far far away, behind the word mountains, far from the
            countries Vokalia and Consonantia, there live the blind texts. Separated they live in
            Bookmarksgrove right at the coast of the Semantics, a large language ocean.
          </p>

          <p className="font-signature text-4xl text-tan">Louie Smith</p>

          {/* Social icons */}
          <ul className="mt-4 flex gap-4">
            <li>
              <a
                href="#"
                aria-label="Twitter"
                className="text-muted transition-colors hover:text-brand-300"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.28-.03-.56-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="Facebook"
                className="text-muted transition-colors hover:text-brand-300"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="Instagram"
                className="text-muted transition-colors hover:text-brand-300"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
