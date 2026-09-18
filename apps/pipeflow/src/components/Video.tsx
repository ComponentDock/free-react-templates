import { Play } from 'lucide-react'

export function Video() {
  return (
    <section className="bg-navy-900 py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
          Explore ourselves in a new way
        </h2>
        <p className="mb-8 text-gray-400">
          Watch our latest video to see how we deliver top-notch plumbing services to homes and
          businesses across the region.
        </p>
        <a
          href="#video"
          className="inline-flex items-center gap-3 font-semibold text-brand-400 transition-colors hover:text-brand-300"
        >
          <Play className="h-6 w-6" fill="currentColor" />
          Watch Video
        </a>
      </div>
    </section>
  )
}
