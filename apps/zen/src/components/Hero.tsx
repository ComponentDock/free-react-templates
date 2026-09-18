import { Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center bg-cover bg-center bg-no-repeat pt-20"
      style={{ backgroundImage: "url('https://picsum.photos/seed/zen-hero/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-zen-purple/40" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
        <Sparkles className="mx-auto mb-6 h-12 w-12 text-zen-yellow" aria-hidden="true" />
        <h1 className="mb-6 text-5xl font-bold uppercase leading-tight tracking-wider text-white md:text-7xl">
          Find your inner{' '}
          <span className="text-zen-yellow">CHI</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/90">
          Discover the ancient art of yoga and meditation. Our classes blend
          traditional techniques with modern wellness practices to help you
          find balance, strength, and inner peace.
        </p>
        <a
          href="#classes"
          className="inline-block rounded-[9px] bg-zen-yellow px-10 py-5 text-sm font-bold uppercase tracking-[2px] text-zen-purple transition-shadow hover:shadow-lg"
        >
          Discover
        </a>
      </div>
    </section>
  )
}
