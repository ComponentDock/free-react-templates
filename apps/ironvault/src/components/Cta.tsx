import { ButtonLink } from '@free-react-templates/ui'
import { CTA, STAT } from '../data'

/**
 * Cta — light #fafafa experience card: the giant "08 Years Expesience"
 * stat on the left, the "Want to start your next workout with me?"
 * question and a purple-gradient "hire me" button on the right.
 */
export function Cta() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="bg-card px-8 pb-10 pt-16 md:px-14">
          <div className="grid items-center gap-10 lg:grid-cols-3">
            <div className="text-center">
              <p className="font-display text-[100px] leading-none text-stat">{STAT.number}</p>
              <p className="mt-2 font-display text-sm uppercase tracking-wide text-ink">
                {STAT.label}
              </p>
              <p className="mt-3 text-sm font-light text-body">{STAT.text}</p>
            </div>
            <div className="flex flex-col items-start gap-8 lg:col-span-2 lg:flex-row lg:items-center lg:justify-between">
              <h2 className="text-2xl font-bold text-ink md:text-3xl">{CTA.heading}</h2>
              <ButtonLink
                href="#contact"
                className="rounded-none bg-gradient-to-r from-brand-light via-brand-dark to-brand-light bg-[length:200%_auto] px-12 py-4 text-sm font-medium uppercase tracking-[1.5px] text-white transition-all duration-500 hover:bg-right"
              >
                {CTA.cta}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
