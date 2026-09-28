import { Mail, Phone, Globe } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/idcraft-hero/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-overlay-dark" />
      <div className="relative z-10 container mx-auto px-6 py-32">
        <h5 className="text-white text-lg italic mb-2">Hello I'm</h5>
        <h2 className="text-amber-brand text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-2">
          Maria Smith
        </h2>
        <h3 className="text-white text-xl md:text-2xl font-medium mb-8">
          Digital Designer &amp; Illustrator
        </h3>

        <div className="flex flex-col gap-3 mb-6 text-white/90 text-sm">
          <a
            href="mailto:contactme@example.com"
            className="flex items-center gap-3 hover:text-amber-brand transition-colors"
          >
            <Mail size={18} /> contactme@example.com
          </a>
          <a
            href="tel:+766524567862"
            className="flex items-center gap-3 hover:text-amber-brand transition-colors"
          >
            <Phone size={18} /> +76 6524 567862 763
          </a>
          <a
            href="https://example.com"
            className="flex items-center gap-3 hover:text-amber-brand transition-colors"
          >
            <Globe size={18} /> www.example.com
          </a>
        </div>

        <div className="flex gap-4">
          {['Facebook', 'Twitter', 'Pinterest', 'LinkedIn'].map((platform) => (
            <a
              key={platform}
              href="#"
              aria-label={platform}
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-amber-brand transition-colors text-xs font-bold"
            >
              {platform[0]}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
