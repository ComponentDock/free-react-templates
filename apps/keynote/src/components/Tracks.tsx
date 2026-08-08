import { FlaskConical, HardHat, Presentation } from 'lucide-react'

const tracks = [
  {
    title: 'Research',
    blurb:
      'Frontier science from the labs defining the field — from emergent reasoning to efficient training at scale.',
    icon: FlaskConical,
  },
  {
    title: 'Industry',
    blurb:
      'Production war stories: shipping LLMs, RAG systems, and agent platforms to millions of users.',
    icon: Presentation,
  },
  {
    title: 'Hands-on Labs',
    blurb: 'Bring your laptop. Build, fine-tune, and deploy with the engineers behind the tools.',
    icon: HardHat,
  },
]

export function Tracks() {
  return (
    <section id="tracks" className="bg-gray-50 py-20 dark:bg-gray-900 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Three Distinct Paths
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Follow the track that matches how you build — or mix all three.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tracks.map((track) => {
            const Icon = track.icon
            return (
              <div
                key={track.title}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-800"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-gray-900 dark:text-white">
                  {track.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {track.blurb}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
