import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative flex min-h-[500px] items-center justify-center overflow-hidden bg-dark-bg">
      <img
        src="https://picsum.photos/seed/bytepress-hero/1600/600"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="relative z-10 px-4 text-center text-white">
        <a
          href="#"
          className="mb-4 inline-block rounded bg-cat-tech px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white"
        >
          technology
        </a>
        <h1 className="mb-4 text-5xl font-extrabold leading-tight md:text-6xl">
          Building the Future
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white/80">
          Explore the latest in innovation, cutting-edge technology, and the ideas shaping tomorrow.
          Stay ahead with in-depth analysis and expert insights.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-accent-hover"
        >
          read more
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  )
}
