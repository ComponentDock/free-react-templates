import { Play } from 'lucide-react'
import { parallaxIntro } from '../data'

/** Parallax background section with dark overlay, heading, description,
 *  and a "Watch Video" outline CTA button. */
export function ParallaxIntro() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-fixed py-[120px]"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/flavor-parallax/1600/900)',
      }}
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center text-white">
        <h1 className="text-4xl font-bold">{parallaxIntro.heading}</h1>
        <p className="mx-auto mt-6 max-w-[555px] font-light leading-relaxed text-white/90">
          {parallaxIntro.body}
        </p>
        <a
          href="#home"
          className="mt-8 inline-flex items-center gap-2 rounded-[3px] border-2 border-white px-8 py-3 text-sm font-medium text-white uppercase transition-colors duration-300 hover:bg-white hover:text-ink"
        >
          <Play className="h-4 w-4" aria-hidden="true" />
          {parallaxIntro.cta}
        </a>
      </div>
    </section>
  )
}
