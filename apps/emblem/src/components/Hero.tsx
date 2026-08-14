import { ButtonLink } from '@free-react-templates/ui'
import { heroCopy, heroImage, heroLaptopImage } from '../data'

/** Emblem hero: full-width photo cover with a dark overlay, left text column
 *  (H1 + paragraph + red pill CTA) and right laptop photo framed by a
 *  decorative white-dots pattern (CSS radial-gradient, not a copied PNG). */
export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-36 lg:grid-cols-2 lg:px-10 lg:py-40">
        <div>
          <h1 className="max-w-xl text-4xl font-bold leading-none text-white sm:text-5xl lg:text-[3rem]">
            {heroCopy.heading}
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/90">
            {heroCopy.paragraph}
          </p>
          <ButtonLink
            href="#about"
            className="mt-8 rounded-full px-6 py-3 text-xs font-bold uppercase tracking-[0.2rem]"
          >
            About Us
          </ButtonLink>
        </div>
        <div className="relative ml-auto hidden w-full max-w-md lg:block">
          <div
            aria-hidden="true"
            className="absolute -left-[50px] -top-[50px] h-full w-full"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(255,255,255,0.85) 2px, transparent 2.5px)',
              backgroundSize: '20px 20px',
            }}
          />
          <img
            src={heroLaptopImage}
            alt="A laptop displaying design work on a desk"
            className="relative w-full rounded-sm object-cover"
            width={800}
            height={600}
          />
        </div>
      </div>
    </section>
  )
}
