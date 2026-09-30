import { MonitorCheck, ShoppingCart, Smartphone, type LucideIcon } from 'lucide-react'

interface Service {
  icon: LucideIcon
  title: string
  blurb: string
  items: readonly string[]
}

const services: readonly Service[] = [
  {
    icon: Smartphone,
    title: 'Mobile Application',
    blurb: 'Cross-platform apps that feel native on every device.',
    items: ['Android Development', 'iOS Development', 'React Native'],
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    blurb: 'Storefronts built to convert, from catalog to checkout.',
    items: ['WooCommerce', 'Shopify Integration', 'BigCommerce'],
  },
  {
    icon: MonitorCheck,
    title: 'Web Application',
    blurb: 'Fast, accessible web apps with maintainable front-ends.',
    items: ['React Web App', 'Vue JS Web App', 'Angular Web App'],
  },
]

/** Services: three centered columns — 60px indigo line icon, Oswald
 *  title, muted blurb and a centered black capability list. */
export function Services() {
  return (
    <section id="services" className="bg-white py-[3em]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, blurb, items }) => (
            <div key={title} className="p-5 text-center">
              <Icon className="mx-auto h-[60px] w-[60px] text-accent" aria-hidden="true" />
              <h3 className="mb-2.5 mt-[30px] font-heading text-[20px] text-black">{title}</h3>
              <p className="text-muted">{blurb}</p>
              <ul className="mt-4 space-y-1">
                {items.map((item) => (
                  <li key={item} className="text-black">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
