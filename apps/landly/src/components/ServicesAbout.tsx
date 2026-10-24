import { Bath, Calculator, Eye, Home, Target, Wind } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { about, serviceSubtitle, services } from '../data'

const serviceIcons = { insurance: Home, bathtub: Bath, air: Wind, calculator: Calculator } as const
const aboutIcons = { mission: Target, vission: Eye } as const

/** Black services grid beside the About column (Mission / Vission rows). */
export function ServicesAbout() {
  return (
    <section id="about" className="py-12 lg:py-28">
      <div className="mx-auto max-w-[1140px] px-4">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch">
          <div className="bg-black p-8 lg:col-span-6 lg:col-start-1">
            <div className="grid h-full grid-cols-2 content-center gap-8 text-center">
              {services.map((service) => {
                const Icon = serviceIcons[service.icon]
                return (
                  <div key={service.title}>
                    <Icon className="mx-auto mb-3 h-10 w-10 text-brand" aria-hidden="true" />
                    <h3 className="text-[15px] uppercase text-white">{service.title}</h3>
                    <p className="text-[14px] text-white">{serviceSubtitle}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <SectionHeading>{about.heading}</SectionHeading>
            <p className="mt-5 mb-8 text-body">{about.intro}</p>

            {about.rows.map((row) => {
              const Icon = aboutIcons[row.icon]
              return (
                <div key={row.title} className="mb-8 flex items-start gap-5">
                  <Icon className="mt-1 h-9 w-9 shrink-0 text-brand" aria-hidden="true" />
                  <div>
                    <h3 className="text-[20px] text-black">{row.title}</h3>
                    <p className="text-body">{row.body}</p>
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
