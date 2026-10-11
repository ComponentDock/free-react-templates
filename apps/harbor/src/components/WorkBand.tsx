import { LayoutTemplate, ShoppingCart } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { SectionTitle } from './SectionTitle'

const ITEMS = [
  {
    icon: LayoutTemplate,
    eyebrow: 'Create your own website with our',
    title: 'Web site builder',
    blurb:
      'Pick a design, drag in your text and photos, and publish. The builder ships with every hosting plan, works on phones too, and needs no code.',
  },
  {
    icon: ShoppingCart,
    eyebrow: 'Easy create, manage & sell',
    title: 'Online store',
    blurb:
      'Add products, take card payments and track orders from one dashboard. Secure checkout, SSL and daily backups come with the Business plan and above.',
  },
]

/**
 * "How to build your website" band. It is pulled up over the achievement band
 * (negative top margin) so the two dark compositions interlock.
 */
export function WorkBand() {
  return (
    <section
      id="work"
      className="relative z-[9] -mt-[405px] border-t border-steel bg-navy pt-24 lg:pb-0"
    >
      <div className="mx-auto max-w-6xl px-4 pb-24">
        <SectionTitle tone="light">How to build your website online today?</SectionTitle>

        <div className="grid gap-12 lg:grid-cols-2">
          {ITEMS.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="text-center">
                <Icon className="mx-auto h-[53px] w-[53px] text-brand" aria-hidden="true" />
                <p className="mt-5 text-sm font-medium text-brand">{item.eyebrow}</p>
                <h3 className="mt-2 text-2xl font-bold uppercase text-white">{item.title}</h3>
                <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted">
                  {item.blurb}
                </p>
                <ButtonLink
                  href="#choose-plan"
                  className="mt-7 rounded-full bg-brand px-7 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-brand-dark"
                >
                  Read More
                </ButtonLink>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
