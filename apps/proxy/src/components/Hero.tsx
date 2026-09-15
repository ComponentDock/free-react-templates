import { ArrowRight, Download } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center bg-sky-900 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,39,102,0.7),rgba(0,39,102,0.7)), url('https://picsum.photos/seed/proxy-hero/1600/900')",
      }}
    >
      <div className="mx-auto max-w-[1600px] px-6 py-32">
        <div className="max-w-xl">
          <h1 className="mb-6 font-serif text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            I'm Your Realtor, Get Your Key
          </h1>
          <p className="mb-8 text-lg text-white/80">
            Discover our world-class properties across the city. Expert guidance from search to keys
            in hand.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#footer"
              className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-sky-600"
            >
              Get In Touch
              <ArrowRight size={16} />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white hover:bg-white/10"
            >
              <Download size={16} />
              Download
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
