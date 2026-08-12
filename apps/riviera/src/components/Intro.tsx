import { ButtonLink } from '@free-react-templates/ui'

/* Intro — the two-column welcome block: an eyebrow + 48px heading + copy
   on the left, a copy paragraph + peach CTA on the right (the live preview
   has no orange border around this section — none is added). */
export function Intro() {
  return (
    <section aria-label="Intro" className="py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
        <div>
          <span className="block text-xs font-semibold uppercase tracking-[4px] text-eyebrow">
            a memorable holliday
          </span>
          <h2 className="mt-4 text-[40px] font-semibold leading-[48px] text-heading md:text-[48px]">
            A great stay in a lovely hotel.
          </h2>
          <p className="mt-6 max-w-xl text-sm font-medium leading-[28px] text-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
            Risus commodo viverra maecenas. Donec in sodales dui, a blandit nunc.
          </p>
        </div>
        <div className="lg:pt-[168px]">
          <p className="max-w-xl text-sm font-medium leading-[28px] text-body">
            Pellentesque id eros venenatis, sollicitudin mauris non, rutrum velit. Aenean congue,
            lorem id porta eleifend, nisl nibh feugiat nibh, vitae luctus justo ligula sed sapien.
          </p>
          <ButtonLink
            href="#reservation"
            className="mt-8 h-auto rounded-none bg-brand px-[38px] py-[18px] text-base font-normal text-white hover:opacity-90"
          >
            Make a Reservation
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
