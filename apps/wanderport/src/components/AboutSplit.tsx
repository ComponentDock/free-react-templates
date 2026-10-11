import { Button, cn } from '@free-react-templates/ui'
import { PILL_BLACK } from '../lib/buttonStyles'

/* Split block: gradient-clipped headline and a black pill on the left, a
   full-bleed photograph on the right. */
export function AboutSplit() {
  return (
    <section aria-label="Build your own package">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid items-center lg:grid-cols-2">
          <div className="px-[5%] lg:pr-[5%] lg:pl-[20%]">
            <h1 className="gradient-text mb-[25px] text-[25px]">
              Did not find your Package?
              <br /> Feel free to ask us.
              <br /> We&rsquo;ll make it for you
            </h1>
            <p className="leading-[1.7]">
              Give us your dates, your budget and the kind of place you want to wake up in. Our team
              builds the route from scratch — flights, stays, transfers and the days that hold them
              together.
            </p>
            <p className="mt-[15px] leading-[1.7]">
              Nothing on this page is fixed. Send over the outline of a trip and it comes back as a
              priced itinerary within a day.
            </p>
            <Button type="button" className={cn(PILL_BLACK, 'mt-[30px]')}>
              Make Package of your own
            </Button>
          </div>

          <div className="lg:col-span-1">
            <img
              src="https://picsum.photos/seed/wanderport-about/960/760"
              alt=""
              loading="lazy"
              className="block h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
