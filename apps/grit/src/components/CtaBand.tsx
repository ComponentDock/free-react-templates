import { ButtonLink } from '@free-react-templates/ui'
import type { CtaBandContent } from '../data'

interface CtaBandProps {
  band: CtaBandContent
}

export function CtaBand({ band }: CtaBandProps) {
  return (
    <section
      aria-label={band.heading}
      className="relative flex min-h-[380px] w-full items-center justify-center overflow-hidden"
    >
      <img src={band.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div aria-hidden="true" className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-3xl px-4 py-16 text-center text-white">
        <h2 className="text-3xl font-black uppercase md:text-[2.6rem]">{band.heading}</h2>
        {band.inlineLink ? (
          <p className="mx-auto mt-5 max-w-[620px] text-lg leading-relaxed text-white/90">
            {band.lead}{' '}
            <a
              href={band.ctaHref}
              className="font-bold text-white underline decoration-white/60 underline-offset-4 transition-colors hover:text-accent"
            >
              {band.ctaLabel}
            </a>
          </p>
        ) : (
          <>
            <p className="mx-auto mt-5 max-w-[620px] text-lg leading-relaxed text-white/90">
              {band.lead}
            </p>
            <ButtonLink
              href={band.ctaHref}
              className="mt-8 rounded-none bg-brand px-5 py-3 text-xs font-black uppercase tracking-wider text-white transition-colors hover:bg-brand-2"
            >
              {band.ctaLabel}
            </ButtonLink>
          </>
        )}
      </div>
    </section>
  )
}
