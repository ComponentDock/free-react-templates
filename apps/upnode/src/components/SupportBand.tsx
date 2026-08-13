import { supportSection } from '../data'

/* Blue support band with the 24/7 phone number and a Live Chat button
   (reference: .hami-support-area with the pattern background). */
export function SupportBand() {
  return (
    <section aria-label="Support" className="bg-primary py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center lg:flex-row lg:text-left">
        <h2 className="max-w-2xl text-2xl font-bold text-white lg:text-[32px]">
          {supportSection.title} <span className="whitespace-nowrap">{supportSection.phone}</span>
        </h2>
        <a
          href="#contact"
          className="flex h-[50px] min-w-[150px] shrink-0 items-center justify-center rounded-full border border-white px-10 font-semibold text-white transition-colors hover:bg-white hover:text-primary"
        >
          {supportSection.chat}
        </a>
      </div>
    </section>
  )
}
