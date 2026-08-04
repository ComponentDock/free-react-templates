import {
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  Wind,
  type LucideIcon,
} from 'lucide-react'

const services: { title: string; blurb: string; Icon: LucideIcon }[] = [
  {
    title: 'Dog Checkup',
    blurb: 'Regular wellness exams keep your dog healthy and catch small problems early.',
    Icon: Stethoscope,
  },
  {
    title: 'Dog Dermatology',
    blurb: 'Expert care for itchy skin, allergies, and everything in between.',
    Icon: Sparkles,
  },
  {
    title: 'For Strong Teeth',
    blurb: 'Dental cleaning and checkups for a bright, healthy smile.',
    Icon: ShieldCheck,
  },
  {
    title: 'Dog First Aid',
    blurb: 'Quick, gentle treatment for cuts, scrapes, and minor injuries.',
    Icon: HeartPulse,
  },
  {
    title: 'Dog Dryer',
    blurb: 'Calm, low-noise drying that leaves coats fluffy and clean.',
    Icon: Wind,
  },
  {
    title: 'Expert Veterinarian',
    blurb: 'Compassionate vets you can trust with your best friend health.',
    Icon: Syringe,
  },
]

export function Services() {
  return (
    <section id="services" className="bg-paper py-14 dark:bg-gray-900 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold text-black dark:text-white">
          Our Services
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm font-light leading-relaxed text-gray-500 dark:text-gray-400">
          Everything your dog needs, from routine checkups to specialist care.
        </p>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, blurb, Icon }) => (
            <article
              key={title}
              className="flex flex-col items-center rounded-lg bg-white p-10 text-center shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-brand/15 text-brand">
                <Icon className="h-9 w-9" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-xl font-bold text-black dark:text-white">{title}</h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-gray-500 dark:text-gray-400">
                {blurb}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
