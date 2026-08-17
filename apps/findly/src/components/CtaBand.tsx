import { CTA } from '../data'

/* Find-more CTA band — bordered box with a listing count and a blue pill
   button whose hover sweep floods navy from the left (span sits above the
   ::before layer). */
export function CtaBand() {
  return (
    <section className="bg-paper py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 rounded-[5px] border border-[#DEE0E5] px-10 py-9 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-navy">{CTA.heading}</h2>
            <p className="mt-1 text-lg font-light text-muted">{CTA.text}</p>
          </div>
          <a
            href="#listing"
            className="group relative inline-block overflow-hidden rounded-full bg-brand px-9 py-4 font-display text-base font-medium text-white"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 origin-left scale-x-0 bg-navy transition-transform duration-300 ease-out group-hover:scale-x-100"
            />
            <span className="relative z-10">{CTA.action}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
