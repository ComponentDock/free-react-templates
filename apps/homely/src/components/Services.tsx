import { ButtonLink } from '@free-react-templates/ui'
import { Building2, Car, Home } from 'lucide-react'
import { SERVICES_1 } from '../data'
import { SectionTitle } from './SectionTitle'

const ICONS = [Home, Car, Building2]

/* First services band: three labeled loan cards with outline icons and the
   signature centered green-underlined heading. */
export function Services() {
  return (
    <section id="services" aria-label="Services" className="bg-white py-[110px]">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle title={SERVICES_1.title} subtitle={SERVICES_1.subtitle} />
        <div className="grid gap-8 md:grid-cols-3">
          {SERVICES_1.items.map((item, index) => {
            const Icon = ICONS[index]!
            return (
              <article key={item.title}>
                <Icon aria-hidden="true" strokeWidth={1.5} className="mb-6 size-12 text-brand" />
                <span className="mb-5 block text-sm text-brand-label">{item.label}</span>
                <h3 className="mb-2 text-2xl font-bold leading-[1.4]">{item.title}</h3>
                <p className="mb-6 leading-[1.6] text-body">{item.body}</p>
                <ButtonLink
                  href="#services"
                  className="rounded-none border-2 border-brand bg-transparent px-8 py-3 text-sm font-semibold uppercase tracking-wide text-brand hover:bg-brand hover:text-white"
                >
                  {item.learnMore}
                </ButtonLink>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
