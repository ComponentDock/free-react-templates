import { Star } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[70vh] items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://picsum.photos/seed/workhive-hero/1600/900')" }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h1 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl font-display">
            Amazing workspace you will love
          </h1>
          <p className="mb-8 text-lg text-gray-200">
            Discover our spaces that define a new dimension of luxury.
          </p>
          <a
            href="#spaces"
            className="inline-block rounded bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Explore Our Spaces
          </a>
        </div>

        <div className="absolute bottom-8 right-8 flex items-center gap-3 rounded-lg bg-white/90 px-4 py-3 shadow-lg">
          <span className="text-2xl font-bold text-ink">4.8</span>
          <div>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-xs text-body">Rating based on 500+</span>
          </div>
        </div>
      </div>
    </section>
  )
}
