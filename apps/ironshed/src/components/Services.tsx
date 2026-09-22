import { Dumbbell, HeartPulse, Apple, PersonStanding } from 'lucide-react'

const services = [
  {
    icon: Dumbbell,
    title: 'Weight Lifting',
    description:
      'We have a wide choice of classes that are a great complement to any training programme.',
  },
  {
    icon: HeartPulse,
    title: 'Body Building',
    description:
      'We have a wide choice of classes that are a great complement to any training programme.',
  },
  {
    icon: Apple,
    title: 'Healthy',
    description:
      'We have a wide choice of classes that are a great complement to any training programme.',
  },
  {
    icon: PersonStanding,
    title: 'Yoga',
    description:
      'We have a wide choice of classes that are a great complement to any training programme.',
  },
] as const

export function Services() {
  return (
    <section id="about" aria-label="Services" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="relative mb-10 pl-6">
              <span className="absolute left-0 top-1 h-[29px] w-[3px] bg-brand" />
              <h2 className="font-heading text-3xl font-semibold text-section-title sm:text-4xl">
                Our Program
              </h2>
              <p className="mt-3 max-w-md text-body-text">
                Our fitness experts can help you discover new training techniques and exercises that
                offer a dynamic and efficient full-body workout.
              </p>
            </div>

            <div className="space-y-6">
              {services.map((service) => (
                <div key={service.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-brand/10">
                    <service.icon className="h-6 w-6 text-brand" aria-hidden="true" />
                  </div>
                  <div>
                    <h5 className="font-heading text-base font-medium text-heading">
                      {service.title}
                    </h5>
                    <p className="mt-1 text-sm text-description">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-sm lg:h-[420px]">
            <img
              src="https://picsum.photos/seed/ironshed-video/800/420"
              alt="Gym training session"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <button
                type="button"
                aria-label="Play video"
                className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-transform hover:scale-110"
              >
                <svg className="ml-1 h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
