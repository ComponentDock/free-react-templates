import { ButtonLink } from '@free-react-templates/ui'
import { ABOUT_PHOTOS } from '../data'

/* About — the "Customers love our facilities" block: a quote heading,
   copy and peach CTA on the left, and a 2×2 photo grid on the right. */
export function About() {
  return (
    <section aria-label="About" className="py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-[36px] font-semibold leading-[56px] text-ink md:text-[44px]">
            “Customers love our facilities”
          </h2>
          <p className="mt-6 max-w-xl text-sm font-medium leading-[28px] text-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
            Risus commodo viverra maecenas.
          </p>
          <ButtonLink
            href="#reservation"
            className="mt-8 h-auto rounded-none bg-brand px-[38px] py-[18px] text-base font-normal text-white hover:opacity-90"
          >
            Make a Reservation
          </ButtonLink>
        </div>
        <div className="grid grid-cols-2 gap-[30px]">
          {ABOUT_PHOTOS.map((photo, index) => (
            <img
              key={photo}
              src={photo}
              alt={`Riviera about photo ${index + 1}`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
