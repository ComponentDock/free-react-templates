import { Sparkles, SmilePlus, Paintbrush, Stethoscope, AlertCircle, HeartPulse } from 'lucide-react'

const services = [
  { icon: Sparkles, name: 'Teeth Whitening' },
  { icon: SmilePlus, name: 'Missing Teeth' },
  { icon: Paintbrush, name: 'Cosmetic Dentistry' },
  { icon: Stethoscope, name: 'Examination' },
  { icon: AlertCircle, name: 'Teeth Pain' },
  { icon: HeartPulse, name: 'Root Canal' },
] as const

export function Services() {
  return (
    <section
      id="services"
      className="relative bg-cover bg-center bg-no-repeat py-16"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://picsum.photos/seed/dentalyn-services/1600/900)',
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-2 text-2xl font-bold text-white">Our Services</h2>
            <div className="mb-8 h-1 w-12 bg-primary-400" />
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <div key={service.name} className="text-center">
                    <Icon
                      className="mx-auto mb-3 h-10 w-10 text-white transition-colors hover:text-primary-400"
                      aria-hidden="true"
                    />
                    <h6 className="text-sm font-normal text-white">{service.name}</h6>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://picsum.photos/seed/dentalyn-video/600/400"
              alt="Dental services video preview"
              className="w-full rounded-lg"
              loading="lazy"
            />
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              aria-label="Play video"
              className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary-400 text-white transition-colors hover:bg-black hover:text-white"
            >
              <span className="ml-1 text-2xl">▶</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
