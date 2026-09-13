import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[650px] items-center bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/pipeflow-hero/1920/1080)',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy-900/80" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:text-6xl">
          We're your plumber
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
          We are a family-owned business specializing in residential and commercial plumbing. From
          simple repairs to complete installations, we've got you covered.
        </p>
        <a
          href="#services"
          className="inline-flex items-center gap-2 rounded-full bg-brand-400 px-8 py-3 font-semibold text-white transition-colors hover:bg-brand-500"
        >
          Get Started
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>
    </section>
  )
}
