import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <img
        src="https://picsum.photos/seed/lawguard-hero/1920/1080"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
          Meet all your investigative and litigation needs
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim pariatur similique
          debitis vel nisi qui reprehenderit totam? Quod maiores.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Our services <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Contact us <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
