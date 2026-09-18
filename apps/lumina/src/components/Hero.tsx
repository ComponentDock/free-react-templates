import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/lumina-hero/1920/1080')" }}
    >
      {/* Purple overlay */}
      <div className="absolute inset-0 bg-brand/80" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h1 className="mb-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
          No Need to Find, <br />
          This Is the Place on Web
        </h1>
        <p className="mb-8 text-lg text-white/90">
          Living in today's metropolitan world of cellular phones, mobile computers and other
          high-tech gadgets is not just hectic but very impersonal.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-white px-8 py-3 text-sm font-medium uppercase text-white transition hover:bg-white hover:text-brand"
        >
          Get Started
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
