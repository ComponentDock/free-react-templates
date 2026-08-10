import { heroBio, heroHeadline, heroIntro, heroName, imgUrl } from '../data'

/** White hero: a giant 16vw wordmark with a hollow mid-word span, a light
    intro headline + paragraph on the left and a small author card on the
    right (reference: .hero-wrap .slider-text). */
export function Hero() {
  return (
    <section aria-label="Intro" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-8 lg:px-6 lg:pt-16">
        <h1 className="text-center text-[16vw] font-black leading-none text-ink">
          A<span className="text-stroke-ink">nt</span>ler
        </h1>

        <div className="mx-auto mt-10 grid max-w-6xl gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-light leading-snug text-ink lg:text-4xl">
              {heroHeadline}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[#212529]">{heroIntro}</p>
          </div>

          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <img
                src={imgUrl('antler-hero-avatar', 70, 70)}
                alt={heroName}
                className="h-[70px] w-[70px] rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-bold text-ink">{heroName}</h3>
                <p className="text-base leading-snug text-[#212529]">{heroBio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
