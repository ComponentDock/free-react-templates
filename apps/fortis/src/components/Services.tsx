import { AppWindow, Monitor, Palette, ShoppingCart, type LucideIcon } from 'lucide-react'
import { services } from '../data'

/** One distinct icon per service (the source repeats a single glyph for all
 *  four cards — a documented improvement). */
const serviceIcons: LucideIcon[] = [Monitor, Palette, AppWindow, ShoppingCart]

/** Services on the custom light #f6f5f5 background: centered double-underline
 *  heading + four white icon cards gaining a soft shadow on hover. */
export function Services() {
  return (
    <section className="bg-light py-10 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <h2 className="section-heading text-black">Our Services</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = serviceIcons[index]!
            return (
              <div
                key={service.title}
                className="bg-white p-5 text-center transition-shadow duration-300 hover:shadow-[0_4px_30px_-5px_rgba(0,0,0,0.2)]"
              >
                <span className="mb-8 flex justify-center text-brand">
                  <Icon className="h-[30px] w-[30px]" aria-hidden="true" />
                </span>
                <h3 className="mb-5 text-lg font-medium text-black">{service.title}</h3>
                <p className="text-muted">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
