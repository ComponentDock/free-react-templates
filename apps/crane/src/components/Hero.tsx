import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center justify-center bg-cover bg-center py-24"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/crane-hero/1600/900)',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy/60" />

      <div className="relative z-10 text-center">
        <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
          We Build Your Home
          <br />
          Secure and Safe
        </h1>
        <p className="mb-8 text-lg text-gray-200">
          Build Your Home Secure and Safe with Professional Touch
        </p>
        <a
          href="#services"
          className="inline-flex items-center gap-2 rounded bg-primary-400 px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-500"
        >
          Our Services
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  )
}
