import { ABOUT } from '../data'

/* About — two-column layout: image with play button left, welcome text right. */
export function About() {
  return (
    <section id="about-section" className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-dark/10">
            <img
              src="https://picsum.photos/seed/maxim-about/800/600"
              alt="About Maxim law firm"
              className="h-full w-full object-cover"
            />
            <button
              type="button"
              aria-label="Play video"
              className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand/90 text-white transition-colors hover:bg-brand"
            >
              <svg className="ml-1 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">
              {ABOUT.kicker}
            </span>
            <h2 className="mt-2 text-3xl font-bold text-ink md:text-4xl">{ABOUT.heading}</h2>
            {ABOUT.paragraphs.map((p) => (
              <p key={p.slice(0, 20)} className="mt-4 leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
