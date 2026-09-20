import { Play } from 'lucide-react'

const stats = [
  { number: '50M+', label: 'Students Learning' },
  { number: '30K+', label: 'Active Courses' },
  { number: '340M+', label: 'Instructors Online' },
  { number: '20+', label: 'Countries Reached' },
]

export function About() {
  return (
    <section className="bg-bg-light py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        {/* Left: text + stats */}
        <div>
          <h2 className="mb-4 text-2xl font-bold text-text">About LearnPath</h2>
          <p className="mb-8 leading-relaxed text-text-muted">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-bold text-brand">{s.number}</p>
                <p className="text-sm text-text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: video placeholder */}
        <div className="relative">
          <img
            src="https://picsum.photos/seed/learnpath-about/600/400"
            alt="About LearnPath video"
            className="w-full object-cover"
            loading="lazy"
          />
          <button
            aria-label="Play video"
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white shadow-lg transition hover:bg-brand-hover"
          >
            <Play className="h-6 w-6 fill-white" />
          </button>
        </div>
      </div>
    </section>
  )
}
