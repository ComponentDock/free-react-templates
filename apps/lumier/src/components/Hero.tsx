import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="section-home"
      className="relative h-screen min-h-[500px] flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://picsum.photos/seed/lumier-hero/1920/1080')",
      }}
    >
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <h1 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-wide mb-6 font-heading">
          Welcome
        </h1>
        <p className="text-white text-lg mb-8 leading-relaxed">
          Capturing moments that last forever. A curated collection of photography showcasing the
          beauty in everyday life, from landscapes to portraits.
        </p>
        <a
          href="#section-contact"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById('section-contact')?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="inline-flex items-center gap-2 bg-brand text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-brand/80 transition-colors"
        >
          Contact Me
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  )
}
