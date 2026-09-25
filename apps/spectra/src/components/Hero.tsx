import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center bg-dark">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/spectra-hero/1920/1080"
          alt=""
          className="h-full w-full object-cover opacity-30"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-32">
        <div className="max-w-xl">
          <span className="mb-4 block text-sm font-medium uppercase tracking-[3px] text-white/60">
            Hello
          </span>
          <h1 className="mb-4 text-5xl font-bold text-white md:text-6xl">
            I&apos;m <span className="text-brand">Alex Morgan</span>
          </h1>
          <h2 className="mb-8 text-2xl font-light text-white/80">A Freelance Web Developer</h2>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-dark hover:shadow-lg"
          >
            Hire me <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
