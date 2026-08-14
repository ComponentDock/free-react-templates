import { ButtonLink } from '@free-react-templates/ui'
import { approach } from '../data'

/* Approach: an intro row with a "Learn More" action plus three numbered
 * steps (01. Creative / 02. Strategy / 03. Production). */
export function Approach() {
  return (
    <section data-testid="approach" className="py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-4">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-black leading-tight text-brand md:text-[40px]">
              {approach.introTitle}
            </h2>
            <p className="mt-4 text-lg font-light text-smoke">{approach.introText}</p>
          </div>
          <div className="lg:justify-self-end">
            <ButtonLink
              href={approach.learnMoreHref}
              className="rounded-full border border-ink px-8 py-3 text-ink transition-colors hover:bg-ink hover:text-white"
            >
              {approach.learnMoreLabel}
            </ButtonLink>
          </div>
        </div>

        <h3 className="mt-16 text-[28px] font-black text-ink">{approach.title}</h3>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {approach.steps.map((step) => (
            <div key={step.number}>
              <h4 className="text-2xl font-black text-ink">
                <span className="text-brand">{step.number}.</span> {step.title}
              </h4>
              <p className="mt-3 leading-relaxed text-smoke">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
