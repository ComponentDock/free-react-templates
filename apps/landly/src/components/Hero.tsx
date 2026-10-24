import { MapPin } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { heroContent, heroSpecs, image } from '../data'
import { specIcons } from '../icons'

/** Full-bleed photo hero with the featured listing. */
export function Hero() {
  return (
    <section
      id="top"
      aria-label="Featured property"
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${image('hero', 1600, 900)})` }}
    >
      <div aria-hidden="true" className="absolute inset-0 bg-black/60" />
      <div className="relative mx-auto flex min-h-[600px] max-w-[1140px] flex-col items-center justify-center px-4 pb-28 pt-32 text-center lg:min-h-[677px]">
        <span className="mb-4 block text-2xl text-brand">{heroContent.price}</span>
        <h1 className="mb-2 text-[2rem] leading-none text-white lg:text-[3rem]">
          {heroContent.headline}
        </h1>
        <p className="mb-8 flex flex-wrap items-center justify-center gap-3 text-[18px] text-white">
          <MapPin className="h-4 w-4 text-brand" aria-hidden="true" />
          <span>{heroContent.address}</span>
        </p>
        <div className="mb-9 flex w-full max-w-[460px] items-center justify-around">
          {heroSpecs.map((spec) => {
            const Icon = specIcons[spec.icon]
            return (
              <span key={spec.icon} className="flex items-center gap-1.5 text-[13px] text-white">
                <Icon className="h-4 w-4 text-brand" aria-hidden="true" />
                {spec.value}
              </span>
            )
          })}
        </div>
        <ButtonLink
          href="#properties"
          className="h-[55px] rounded-[4px] bg-brand px-6 text-white hover:bg-brand-deep"
        >
          {heroContent.cta}
        </ButtonLink>
      </div>
    </section>
  )
}
