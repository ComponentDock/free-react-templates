import { Apple, Smartphone } from 'lucide-react'

export function AppDownload() {
  return (
    <section className="bg-ink py-20 text-white transition-colors dark:bg-ink-dark">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold tracking-wide sm:text-4xl">
          Download Our App for All Platforms
        </h2>
        <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-gray-300">
          Read your favorite books on the go. Our app brings the entire library to your fingertips
          with offline reading, bookmarks, and a beautiful reading experience.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <a
            href="#"
            className="flex items-center gap-3 rounded-lg border border-gray-600 px-6 py-3 transition-colors hover:border-brand hover:bg-brand hover:text-white"
          >
            <Apple className="h-6 w-6" aria-hidden="true" />
            <div className="text-left">
              <p className="text-xs text-gray-400">Available on</p>
              <p className="text-sm font-bold">App Store</p>
            </div>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 rounded-lg border border-gray-600 px-6 py-3 transition-colors hover:border-brand hover:bg-brand hover:text-white"
          >
            <Smartphone className="h-6 w-6" aria-hidden="true" />
            <div className="text-left">
              <p className="text-xs text-gray-400">Available on</p>
              <p className="text-sm font-bold">Play Store</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
