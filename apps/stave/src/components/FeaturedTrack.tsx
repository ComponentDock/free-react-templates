import { Play } from 'lucide-react'

export function FeaturedTrack() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-4 sm:flex-row sm:px-6">
        <img
          src="https://picsum.photos/seed/stave-featured/300/300"
          alt="Frando Kally"
          className="h-48 w-48 rounded-full object-cover shadow-lg"
        />
        <div className="text-center sm:text-left">
          <h2 className="font-heading text-2xl font-bold text-heading">Frando Kally</h2>
          <p className="mt-1 font-body text-sm text-body">January 20, 2024</p>
          <div className="mt-4 flex items-center gap-4">
            <button
              type="button"
              aria-label="Play featured track"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-dark"
            >
              <Play className="h-5 w-5" fill="currentColor" />
            </button>
            <div className="h-2 flex-1 rounded-full bg-gray-200">
              <div className="h-2 w-1/3 rounded-full bg-brand" />
            </div>
          </div>
          <button
            type="button"
            className="mt-4 rounded border border-brand px-6 py-2 font-heading text-sm font-semibold uppercase tracking-wide text-brand transition-colors hover:bg-brand hover:text-white"
          >
            Buy Album
          </button>
        </div>
      </div>
    </section>
  )
}
