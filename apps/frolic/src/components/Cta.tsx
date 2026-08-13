import { cta } from '../data'

/** Call-to-action band (reference `.site-section.py-5.bg-warning`): amber
 *  band with the white headline on the left and a large red GET STARTED
 *  button on the right. */
export function Cta() {
  return (
    <section aria-label="Call to action" className="bg-amber py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 text-center lg:flex-row lg:px-8 lg:text-left">
        <h2 className="text-4xl font-bold text-white">{cta.headline}</h2>
        <a
          href="#pricing"
          className="inline-block rounded-[30px] bg-cherry px-10 py-4 text-sm tracking-[0.2rem] text-white uppercase transition-colors hover:bg-red-700"
        >
          {cta.button}
        </a>
      </div>
    </section>
  )
}
