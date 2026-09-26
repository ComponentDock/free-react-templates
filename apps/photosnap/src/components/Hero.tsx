import { SocialIcon } from './SocialIcon'

export function Hero() {
  return (
    <section role="banner" className="relative w-full min-h-[80vh] flex items-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/photosnap-hero/1920/1080)' }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 px-8 md:px-16 lg:ml-[22%] max-w-3xl">
        {/* Large watermark */}
        <h1
          className="absolute -top-8 left-0 text-[70px] leading-none text-watermark font-display font-bold select-none pointer-events-none"
          aria-hidden="true"
        >
          Photosnap
        </h1>

        <div className="relative">
          <span className="text-sm uppercase tracking-[3px] text-white/80">Hello! I'm</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-display mb-4">Photosnap</h2>
          <p className="text-lg text-white/90 mb-6 leading-relaxed">
            A Photographer. I Capture Life — Far far away, behind the word mountains, far from the
            countries Vokalia and Consonantia, there live the blind texts. Separated they live in
            Bookmarksgrove right at the coast of the Semantics, a large language ocean.
          </p>

          {/* Cursive signature */}
          <h3 className="text-5xl text-white/80 font-signature mb-4">Photosnap</h3>

          {/* Social icons */}
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Twitter"
              className="text-white/70 hover:text-white transition-colors"
            >
              <SocialIcon name="twitter" size={20} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-white/70 hover:text-white transition-colors"
            >
              <SocialIcon name="facebook" size={20} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-white/70 hover:text-white transition-colors"
            >
              <SocialIcon name="instagram" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
