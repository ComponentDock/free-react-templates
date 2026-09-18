import { about } from '../data'

export function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="relative">
          <img src={about.image} alt={about.imageAlt} className="w-full rounded object-cover" />
          <button
            type="button"
            aria-label="Play video"
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <svg className="ml-1 h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-ink lg:text-4xl">{about.heading}</h2>
          {about.paragraphs.map((p) => (
            <p key={p} className="mt-6 text-body">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
