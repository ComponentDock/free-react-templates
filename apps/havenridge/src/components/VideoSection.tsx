import { Play } from 'lucide-react'

export function VideoSection() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <img
            src="https://picsum.photos/seed/havenridge-about-1/600/400"
            alt="Modern house exterior"
            className="w-full rounded-lg object-cover shadow-md"
          />
        </div>

        <div className="text-center lg:text-left">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary-500">
            Watch Video
          </p>
          <h2 className="mb-4 text-3xl font-extrabold text-ink">Modern House Video</h2>
          <p className="mb-8 text-smoke">
            Take a virtual tour of our properties and experience the beauty and elegance of modern
            living spaces designed for comfort and style.
          </p>
          <button
            type="button"
            aria-label="Play video"
            className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary-500 text-white shadow-lg transition-colors hover:bg-primary-600"
          >
            <Play className="h-7 w-7 ml-1" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
