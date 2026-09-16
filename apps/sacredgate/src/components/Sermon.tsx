import { Play } from 'lucide-react'

const sermons = [
  {
    title: 'Walking in Grace',
    date: 'September 14, 2026',
    speaker: 'Pastor James',
    image: 'https://picsum.photos/seed/sacredgate-sermon1/400/250',
  },
  {
    title: 'The Power of Prayer',
    date: 'September 7, 2026',
    speaker: 'Pastor Sarah',
    image: 'https://picsum.photos/seed/sacredgate-sermon2/400/250',
  },
  {
    title: 'Faith Over Fear',
    date: 'August 31, 2026',
    speaker: 'Pastor James',
    image: 'https://picsum.photos/seed/sacredgate-sermon3/400/250',
  },
] as const

export function Sermon() {
  return (
    <section id="sermons" className="bg-sermon py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold text-ink sm:text-4xl">
          Today&apos;s Sermon
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sermons.map((sermon) => (
            <article key={sermon.title} className="group overflow-hidden bg-white shadow-sm">
              <div className="relative overflow-hidden">
                <img
                  src={sermon.image}
                  alt={sermon.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <button
                  type="button"
                  aria-label={`Play ${sermon.title}`}
                  className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-colors hover:bg-brand-dark"
                >
                  <Play className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-ink">{sermon.title}</h3>
                <p className="mt-1 text-sm text-mist">{sermon.speaker}</p>
                <p className="mt-1 text-xs text-gray-400">{sermon.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
