import { Headphones } from 'lucide-react'

export function Hero() {
  return (
    <section
      className="relative flex min-h-[70vh] items-center justify-center bg-cover bg-center bg-no-repeat text-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(https://picsum.photos/seed/podwave-hero/1920/1080)',
      }}
    >
      <div className="mx-auto max-w-3xl px-4 py-24">
        <h2 className="mb-4 text-4xl font-light text-white md:text-5xl">
          Episode 09: How To Build a Podcast Platform from Scratch
        </h2>
        <p className="mb-6 text-sm text-white/70">
          By Sarah Mitchell | 16 September 2024 | 1:30:20
        </p>
        <a
          href="#"
          className="mb-8 inline-block bg-brand-red px-6 py-3 text-sm font-light uppercase tracking-[0.2em] text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
        >
          Read The Transcript
        </a>
        <div className="flex items-center justify-center gap-3 rounded-lg bg-white/10 px-6 py-4 backdrop-blur-sm">
          <Headphones className="text-white" size={20} />
          <span className="text-sm text-white/80">Listen to this episode</span>
          <div className="h-1 flex-1 rounded-full bg-white/20">
            <div className="h-1 w-1/3 rounded-full bg-brand-red" />
          </div>
          <span className="text-xs text-white/60">0:00 / 1:30:20</span>
        </div>
      </div>
    </section>
  )
}
