import { ButtonLink } from '@free-react-templates/ui'
import { cn } from '@free-react-templates/ui'

interface CtaBandProps {
  backdrop: string
  lead?: string
  heading: string
  cta?: { label: string; href: string }
}

/** Emblem photo-backdrop CTA band: cover image + dark overlay + centered
 *  white heading (optional lead + pill button). Reused for both the "Get
 *  ready to start" band and the "Quality Services" band. */
export function CtaBand({ backdrop, lead, heading, cta }: CtaBandProps) {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${backdrop})` }}
      aria-label={heading}
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center lg:px-10">
        {lead && <p className="text-lg text-white/90">{lead}</p>}
        <h2 className="mt-3 text-3xl font-light text-white lg:text-[2.5rem]">{heading}</h2>
        {cta && (
          <ButtonLink
            href={cta.href}
            className={cn(
              'mt-8 rounded-full px-6 py-3 text-xs font-bold uppercase tracking-[0.2rem]',
            )}
          >
            {cta.label}
          </ButtonLink>
        )}
      </div>
    </section>
  )
}
