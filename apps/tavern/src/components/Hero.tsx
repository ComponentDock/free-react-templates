import { ArrowRight } from 'lucide-react'

const slide = {
  title: 'Expert Chefs',
  subtitle: 'Crafting exceptional dishes with passion and precision',
  cta: 'Get Started',
}

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[600px] items-center bg-gray-900">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/tavern-hero/1920/1080)' }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-24 text-center text-white">
        <h1 className="mb-4 text-5xl font-bold md:text-6xl">{slide.title}</h1>
        <p className="mx-auto mb-8 max-w-xl text-lg text-gray-200">{slide.subtitle}</p>
        <a
          href="#menu"
          className="inline-flex items-center gap-2 bg-flame-600 px-8 py-3 text-sm font-semibold uppercase text-white transition hover:bg-flame-700"
        >
          {slide.cta}
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
