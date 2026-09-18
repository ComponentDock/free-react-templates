import { ArrowRight } from 'lucide-react'

export function Banner() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/pyxis-hero/1920/1080)' }}
    >
      <div className="absolute inset-0 bg-overlay" />
      <div className="relative z-10 px-4 text-center">
        <h1 className="mb-6 text-3xl font-bold uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
          Effective Sleek and Clean Design
          <br />
          for User Interface
        </h1>
        <a
          href="#about"
          className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-brand-dark"
        >
          Get Started
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  )
}
