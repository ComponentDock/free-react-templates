import { Camera, Mail } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative bg-gray-900 min-h-[600px] flex items-center overflow-hidden"
    >
      {/* Background image */}
      <img
        src="https://picsum.photos/seed/optic-hero/1600/900"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        loading="eager"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">I'm Alex Morgan</h1>
          <p className="text-gold-400 text-lg font-semibold mb-4">
            Photographer <span className="mx-3">|</span> Speaker
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Capturing moments that tell stories. Specializing in weddings, events, and portrait
            photography with a creative eye and professional touch.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded font-semibold hover:bg-gray-800 transition-colors"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </a>
        </div>
      </div>

      {/* Decorative icon */}
      <div className="absolute bottom-8 right-8 text-gold-400/30">
        <Camera className="w-24 h-24" />
      </div>
    </section>
  )
}
