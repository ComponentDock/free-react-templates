import { Play } from 'lucide-react'

export function Welcome() {
  return (
    <section className="py-20" aria-label="Welcome">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: text */}
          <div>
            <h2 className="mb-6 font-heading text-3xl font-medium text-gray-900 md:text-4xl">
              Welcome To Fellowship
            </h2>
            <p className="mb-6 leading-relaxed text-text-muted">
              Welcome to our church community. We are a family of believers dedicated to spreading
              the love of God and building a stronger community through faith, fellowship, and
              service. Whether you are seeking spiritual guidance or a place to belong, you will
              find a warm welcome here.
            </p>
            <p className="font-heading text-sm font-medium uppercase tracking-wider text-brand">
              Church Pastor Gregg Smith
            </p>
          </div>

          {/* Right: image with play button */}
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/seed/fellowship-welcome/800/600"
              alt="Church welcome"
              className="h-auto w-full object-cover"
            />
            <a
              href="#"
              aria-label="Play welcome video"
              className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-colors hover:bg-brand-dark"
            >
              <Play className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
