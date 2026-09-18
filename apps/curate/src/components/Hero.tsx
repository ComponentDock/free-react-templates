import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center pt-20"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/curate-hero/1600/800)',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[rgba(4,9,30,0.5)]" />

      <div className="relative z-10 px-6 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-white/80">
          Now you can watch the Talent
        </p>
        <h1 className="mb-8 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          Let&apos;s Explore Idea!
        </h1>
        <a
          href="#portfolio"
          className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3 text-sm font-medium uppercase text-white transition-colors hover:bg-brand-dark"
        >
          Explore Now
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  )
}
