import { ButtonLink } from '@free-react-templates/ui'
import { quoteBand } from '../data'

export function QuoteBand() {
  return (
    <section id="about" className="flex flex-col bg-brand lg:flex-row">
      <div className="relative lg:w-1/2">
        <img
          src={quoteBand.image}
          alt={quoteBand.imageAlt}
          className="h-[420px] w-full object-cover sm:h-[560px] lg:h-[850px]"
        />
        <ButtonLink
          href="#contact"
          className="absolute right-0 bottom-0 inline-flex bg-accent px-[60px] py-[24px] text-xl text-white hover:bg-accent/90 sm:px-[90px] sm:py-[37px] sm:text-[30px]"
        >
          {quoteBand.ctaLabel}
        </ButtonLink>
      </div>
      <div className="flex items-center px-6 py-16 lg:w-1/2 lg:px-16 lg:py-0">
        <div>
          <blockquote>
            <h2 className="font-display text-3xl font-bold leading-tight text-ink sm:text-[38px]">
              {quoteBand.quote}
            </h2>
          </blockquote>
          <p className="mt-6 max-w-[540px] text-lg leading-relaxed text-ink/80">
            {quoteBand.paragraph}
          </p>
          <p className="mt-8 font-script text-5xl text-ink">{quoteBand.signature}</p>
        </div>
      </div>
    </section>
  )
}
