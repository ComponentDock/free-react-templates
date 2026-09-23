import { cn } from '@free-react-templates/ui'
import { SERVICES } from '../data'

export function ServicesGrid() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <h2 className="mb-4 text-2xl font-bold text-black md:text-3xl">
            Welcome To Our Legal Office
          </h2>
          <p className="mb-4 text-[#828282]">
            With decades of legal expertise, our office delivers trusted counsel across a wide range
            of practice areas. We are committed to protecting your rights and achieving the best
            outcomes for every client.
          </p>
          <a href="#services" className="font-semibold text-[#2f89fc] hover:underline">
            Learn More
          </a>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group rounded-lg border border-gray-100 p-6 transition-shadow hover:shadow-lg"
              >
                <Icon className="mb-4 h-10 w-10 text-[#2f89fc] transition-colors group-hover:text-[#3f52e3]" />
                <h3 className="mb-2 text-lg font-semibold text-black">{service.title}</h3>
                <p className="text-sm leading-relaxed text-[#828282]">{service.description}</p>
              </div>
            )
          })}
        </div>

        {/* View More */}
        <div className="mt-10 text-center">
          <a
            href="#services"
            className={cn(
              'inline-block rounded bg-[#3f52e3] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#2f89fc]',
            )}
          >
            View More
          </a>
        </div>
      </div>
    </section>
  )
}
