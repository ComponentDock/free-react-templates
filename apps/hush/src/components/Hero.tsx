import { ArrowRight, ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <img
        src="https://picsum.photos/seed/hush-hero/1920/1080"
        alt="Misty mountains at dusk"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-32 text-center lg:px-8">
        <p className="font-heading text-sm tracking-[0.3em] text-stone-200 uppercase sm:text-base">
          &ldquo;Be still, and know that I am God.&rdquo;
        </p>
        <p className="mt-2 text-xs tracking-widest text-stone-300 uppercase">— Psalm 46:10</p>
        <h1 className="font-heading mt-6 text-4xl font-light leading-tight text-white sm:text-6xl lg:text-7xl">
          Find Rest for Your Soul
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-200">
          Step away from the noise. Enter into silence. Discover the quiet place where God meets
          you.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#retreats"
            className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-7 py-3.5 text-sm font-medium text-white shadow-soft transition-colors hover:bg-primary-700"
          >
            Explore Retreats
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#directors"
            className="inline-flex items-center rounded-full border-2 border-white/40 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10"
          >
            Begin Spiritual Direction
          </a>
        </div>
      </div>

      <a
        href="#rhythm"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium tracking-[0.3em] text-stone-200 transition-colors hover:text-white"
      >
        Enter the Stillness
        <ChevronDown className="h-5 w-5 animate-bounce" aria-hidden="true" />
      </a>
    </section>
  )
}
