import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-[600px] items-center justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(https://picsum.photos/seed/pieslice-hero/1920/1080)',
      }}
    >
      {/* Triangle divider at bottom */}
      <div className="absolute bottom-0 left-0 h-0 w-0 border-l-[100vw] border-l-transparent border-b-[60px] border-b-white" />

      <div className="px-4 text-center">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em]">Best in Town</p>
        <h1 className="mb-6 text-5xl font-bold md:text-7xl">Pizza & Pasta</h1>
        <a
          href="#menu"
          className="inline-flex items-center gap-2 rounded bg-brand px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
        >
          See Today's Menu
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
