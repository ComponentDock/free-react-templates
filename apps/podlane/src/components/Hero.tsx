import { Play } from 'lucide-react'

const TAGS = ['lifestyle', 'interview', 'last episode']
const TRACK_INFO = [
  { label: 'September 24, 2024', href: '#' },
  { label: 'Music', href: '#' },
  { label: '56:40', href: undefined },
  { label: '0 Comments', href: '#' },
]

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/podlane-hero/1920/1080)' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-overlay" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1140px] px-4 pt-24">
        {/* Tags */}
        <ul className="mb-4 flex flex-wrap gap-2">
          {TAGS.map((tag) => (
            <li key={tag}>
              <a
                href="#"
                className="rounded-full border border-white/40 px-4 py-1 text-xs text-heading transition-colors hover:border-white hover:text-brand"
              >
                {tag}
              </a>
            </li>
          ))}
        </ul>

        {/* Heading */}
        <h1 className="mb-3 text-4xl font-bold leading-tight text-heading md:text-5xl lg:text-6xl">
          Season 4 Episode 48 available.
        </h1>

        {/* Subtitle */}
        <p className="mb-6 max-w-xl text-sm text-body">
          Check out my latest podcast — a massive interview with John Doe
        </p>

        {/* Track info */}
        <ul className="mb-6 flex flex-wrap gap-4 text-xs text-muted">
          {TRACK_INFO.map((item, i) => (
            <li key={i}>
              {item.href ? (
                <a href={item.href} className="transition-colors hover:text-brand">
                  {item.label}
                </a>
              ) : (
                item.label
              )}
            </li>
          ))}
        </ul>

        {/* Audio player placeholder */}
        <div className="mb-6 flex items-center gap-3 rounded-lg bg-white/10 p-4">
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white"
            aria-label="Play episode"
          >
            <Play className="h-5 w-5 fill-white" />
          </button>
          <div className="flex-1">
            <div className="mb-1 h-1.5 w-full rounded-full bg-white/20">
              <div className="h-1.5 w-1/3 rounded-full bg-brand" />
            </div>
            <div className="flex justify-between text-xs text-body">
              <span>18:45</span>
              <span>56:40</span>
            </div>
          </div>
        </div>

        {/* More Info button */}
        <a
          href="#"
          className="inline-block rounded-full border border-white px-8 py-3 text-sm font-medium text-heading transition-colors hover:bg-white hover:text-brand"
        >
          More Info
        </a>
      </div>
    </section>
  )
}
