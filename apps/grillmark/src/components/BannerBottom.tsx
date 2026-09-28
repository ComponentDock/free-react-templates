import { Play } from 'lucide-react'

export function BannerBottom() {
  return (
    <section className="relative -mt-20 z-10 mx-auto max-w-5xl px-4 sm:px-6">
      <div className="flex flex-col items-center gap-6 rounded bg-white px-8 py-12 shadow-xl sm:flex-row sm:justify-between dark:bg-gray-900">
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Play video"
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-transform hover:scale-110"
          >
            <Play className="h-6 w-6 ml-1" aria-hidden="true" />
          </button>
          <div>
            <h2 className="font-display text-2xl text-heading dark:text-white">
              Premium cuts, expertly crafted
            </h2>
            <p className="mt-1 text-sm text-body dark:text-gray-400">
              Watch our story of passion and quality
            </p>
          </div>
        </div>
        <a
          href="#gallery"
          className="shrink-0 rounded-[2px] border-2 border-brand bg-transparent px-8 py-3 text-sm font-medium uppercase tracking-[2px] text-brand transition-all hover:bg-brand hover:text-white"
        >
          Explore Menu
        </a>
      </div>
    </section>
  )
}
