import { cta } from '../data'

/** CTA band (reference `.cta_area`): a red #e72727 band with the 12px
 *  uppercase kicker, the 42px uppercase headline, and a white "Explore
 *  More" button with dark text (red on hover). */
export function Cta() {
  return (
    <section aria-label="Call to action" className="pb-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 bg-brand px-4 py-[54px] text-center shadow-[0px_40px_91px_-37px_rgba(231,39,39,0.5)] md:flex-row md:px-[68px] md:text-left">
          <div>
            <p className="text-xs font-normal tracking-[1px] text-white uppercase">{cta.kicker}</p>
            <h2 className="mt-2 font-heading text-[30px] leading-tight font-normal text-white uppercase lg:text-[42px]">
              {cta.heading}
            </h2>
          </div>
          <a
            href="#quote"
            className="btn-main shrink-0 bg-white text-navy hover:bg-brand hover:text-white"
          >
            {cta.button}
          </a>
        </div>
      </div>
    </section>
  )
}
