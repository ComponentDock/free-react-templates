import { BookOpen, Compass } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center bg-ink bg-cover bg-center bg-no-repeat py-20 md:min-h-[600px]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://picsum.photos/seed/pressline-hero/1600/900')",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Good books don&apos;t give up all their secrets at once
          </h1>
          <p className="mt-6 max-w-lg text-lg text-gray-200">
            A curated collection of stories, ideas, and words that inspire. Discover your next
            favorite read with Pressline.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#books"
              className="inline-flex items-center gap-2 rounded bg-primary-300 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-400"
            >
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              View All Books
            </a>
            <a
              href="#categories"
              className="inline-flex items-center gap-2 rounded border border-primary-300 px-6 py-3 text-sm font-semibold text-primary-300 transition-colors hover:bg-primary-300 hover:text-white"
            >
              <Compass className="h-4 w-4" aria-hidden="true" />
              Explore Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
