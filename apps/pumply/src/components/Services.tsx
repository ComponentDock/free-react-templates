import { useEffect, useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { services } from '../data'

export function Services() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % services.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="services-section" className="py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-black text-primary">Our Featured Services</h2>
          <p className="mt-4 text-gray-400">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>
        <div className="mt-12 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out sm:[--slide-step:50%]"
            style={{ transform: `translateX(calc(-${index} * var(--slide-step, 100%)))` }}
          >
            {services.map((service) => (
              <div key={service.title} className="w-full shrink-0 px-2 sm:w-1/2">
                <div className="bg-primary p-8 text-center md:p-16">
                  <service.icon className="mx-auto mb-4 h-16 w-16 text-white" aria-hidden="true" />
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  <p className="mt-3 text-white/80">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-3">
          {services.map((service, i) => (
            <button
              key={`${service.title}-dot-${i}`}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index ? 'true' : undefined}
              onClick={() => setIndex(i)}
              className={cn(
                'h-2.5 w-2.5 rounded-full transition-colors',
                i === index ? 'bg-primary' : 'bg-[#e6e6e6]',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
