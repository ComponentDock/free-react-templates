import { ButtonLink } from '@free-react-templates/ui'
import { Reveal } from './Reveal'
import { useParallax } from '../lib/use-parallax'

/**
 * The mid-page rating band: a second 600px photo band (with the same 40% wash)
 * whose content sits on the left — an 80px/300 white headline, a 24px rating
 * line and a lime action. A solid dark fill sits under the photo so the white
 * type keeps its contrast even if the image never loads.
 */
export function RatingBand() {
  const drift = useParallax(0.15)

  return (
    <section
      id="rating"
      aria-label="Customer rating"
      className="relative flex min-h-[600px] items-center bg-ink scroll-mt-[148px] max-[992px]:scroll-mt-[75px]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-top"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/rackline-band/1920/1080)',
          backgroundPosition: `center ${drift}px`,
        }}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/40" />

      <div className="relative mx-auto w-full max-w-[1140px] px-5">
        <Reveal className="max-w-[620px]">
          <h2 className="text-[48px] leading-[1.2] font-light text-white min-[768px]:text-[80px]">
            Racks our clients keep renewing
          </h2>
          <p className="mt-2 mb-12 text-[24px] leading-[1.5] text-white">
            Rated 4.9 / 5 across 3 218 verified reviews
          </p>
          <ButtonLink
            href="#contact"
            className="rounded-none h-[58px] px-12 text-[16px] font-normal"
          >
            Register Now
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  )
}
