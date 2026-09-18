import { Flower2 } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[520px] items-center overflow-hidden bg-gray-100"
    >
      <img
        src="https://picsum.photos/seed/petal-hero/1400/600"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-lg">
          <span className="mb-3 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-rose-300">
            <Flower2 className="h-4 w-4" />
            Fresh Flower &amp; Gift Shop
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl">
            Making beautiful flowers a part of your life.
          </h1>
          <a
            href="#shop"
            className="inline-block bg-rose-400 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-rose-500"
          >
            Shop now
          </a>
        </div>
      </div>
    </section>
  )
}
