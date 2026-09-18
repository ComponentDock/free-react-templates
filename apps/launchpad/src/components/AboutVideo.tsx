import { Play } from 'lucide-react'

export function AboutVideo() {
  return (
    <section id="about" className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              Tutorial for beginner
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Watch tutorial video of SaaS to start
            </h2>
            <p className="mt-2 text-sm font-medium text-gray-400">
              We are here to listen from you deliver excellence
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              Getting started with our platform is simple. This step-by-step walkthrough covers
              everything from account setup to deploying your first project in under ten minutes.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/seed/launchpad-video/800/450"
              alt="Tutorial video preview"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <button
                type="button"
                aria-label="Play tutorial video"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-brand-600 shadow-lg transition hover:bg-white"
              >
                <Play className="ml-1 h-7 w-7" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
