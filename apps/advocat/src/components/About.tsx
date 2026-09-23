import { brand } from '../data'

/** About section with heading and descriptive text on light background. */
export function About() {
  return (
    <section id="about" className="bg-mist py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand">
            About Us
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-ink md:text-4xl">
            80 Years Of Experience In Legal Solution
          </h2>
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <p className="text-base leading-relaxed text-slate-body">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean. A small river named Duden flows by their place
            and supplies it with the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-lg bg-ink">
            <img
              src="https://picsum.photos/seed/advocat-about/800/450"
              alt={`${brand.name} team at work`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <a
                href="#about"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand/80"
                aria-label="Play introduction video"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
