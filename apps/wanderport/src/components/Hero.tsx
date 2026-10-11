import { ArrowRight } from 'lucide-react'
import { ButtonLink, cn } from '@free-react-templates/ui'
import { PILL_ARROW, PILL_BASE, PILL_PRIMARY } from '../lib/buttonStyles'

/* 700px photographic hero under a heavy dark wash: oversized white headline,
   a supporting line, and the signature gradient pill. */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[700px] items-center bg-cover bg-center"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/wanderport-hero/1920/1080)' }}
    >
      <div className="hero-wash absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-[1170px] px-4">
        <div className="mt-[100px] max-w-full md:max-w-[75%]">
          <h1 className="text-[36px] leading-[1.15] font-bold text-white md:text-[45px] lg:text-[72px]">
            Wherever you go
            <br className="hidden md:block" /> it&rsquo;ll inside the World
          </h1>
          <p className="mt-[20px] mb-[60px] max-w-[730px] text-[14px] font-extralight text-white">
            Flights, hotels and the days in between, arranged as one itinerary. Tell us where you
            are headed and we will shape the rest of the journey around it.
          </p>
          <ButtonLink href="#booking" className={cn(PILL_BASE, PILL_PRIMARY)}>
            See Details
            <ArrowRight className={PILL_ARROW} aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
