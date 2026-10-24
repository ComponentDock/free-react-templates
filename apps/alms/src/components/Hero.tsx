import { Play } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[70vh] items-center justify-center bg-cover bg-center bg-no-repeat text-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/alms-hand/1600/900')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative mx-auto max-w-3xl px-4 py-28">
        <h1 className="font-heading text-4xl font-light leading-tight text-white md:text-6xl">
          Every Gift Grows Into Hope
        </h1>
        <a
          href="#fundraisers"
          className="mt-10 inline-flex items-center gap-4 text-sm uppercase tracking-[0.2em] text-brand transition-colors hover:text-white"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/80">
            <Play aria-hidden="true" className="h-4 w-4 fill-current" />
          </span>
          Watch Video
        </a>
      </div>
    </section>
  )
}
