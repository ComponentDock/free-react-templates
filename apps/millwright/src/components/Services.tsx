import { Leaf, Lightbulb, Smile, TriangleAlert, type LucideIcon } from 'lucide-react'
import { services } from '../data'

const icons: Record<string, LucideIcon> = {
  leaf: Leaf,
  bulb: Lightbulb,
  alert: TriangleAlert,
  smile: Smile,
}

/** White services section (reference `.section`): centered heading "We Are
 *  Reliable Engineering In House", a tall feature image column on the left,
 *  and two columns of two icon+title+blurb items each. */
export function Services() {
  return (
    <section id="services" className="bg-white py-[7rem]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mx-auto max-w-2xl text-center font-heading text-3xl font-black text-black md:text-4xl">
          We Are Reliable Engineering In House
        </h2>

        <div className="mt-16 grid items-stretch gap-10 lg:grid-cols-[1fr_1fr_1fr]">
          <div className="order-2 lg:order-1">
            <img
              src="https://picsum.photos/id/1063/600/800"
              alt=""
              aria-hidden="true"
              className="h-full min-h-[400px] w-full object-cover"
            />
          </div>
          <div className="order-1 flex flex-col gap-10 lg:order-2">
            {services.slice(0, 2).map((service) => {
              const Icon = icons[service.icon]!
              return (
                <div key={service.title} className="flex gap-4">
                  <Icon className="h-10 w-10 shrink-0 text-primary-600" aria-hidden="true" />
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-black">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">{service.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="order-3 flex flex-col gap-10">
            {services.slice(2).map((service) => {
              const Icon = icons[service.icon]!
              return (
                <div key={service.title} className="flex gap-4">
                  <Icon className="h-10 w-10 shrink-0 text-primary-600" aria-hidden="true" />
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-black">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">{service.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
