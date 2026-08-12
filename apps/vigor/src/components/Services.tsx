import { Apple, Bike, Dumbbell, Flower2, HeartPulse, Waves, type LucideIcon } from 'lucide-react'

interface Service {
  title: string
  icon: LucideIcon
  description: string
}

/* Six services mirroring the source's card list — circular line icon chip
   (77px, green border), 20px title, description, and an "Enroll Now" link.
   The source section has no section heading — cards start directly. */
const SERVICES: Service[] = [
  {
    title: 'Business School',
    icon: Dumbbell,
    description:
      'Learn the strength training fundamentals with coached barbell, machine, and mobility work.',
  },
  {
    title: 'Fitness Pro',
    icon: HeartPulse,
    description:
      'Heart-rate-conditioned circuits that build endurance, power, and a leaner physique.',
  },
  {
    title: 'Yoga Courses',
    icon: Flower2,
    description:
      'Group yoga sessions that improve flexibility, balance, and recovery between lifts.',
  },
  {
    title: 'Diet Specialists',
    icon: Apple,
    description: 'Personalized nutrition plans built around your training goals and daily routine.',
  },
  {
    title: 'Swimming Pool',
    icon: Waves,
    description: 'Low-impact swim workouts and coached laps for cardio and recovery days.',
  },
  {
    title: 'Spinning Class',
    icon: Bike,
    description: 'High-energy indoor cycling with tempo coaching and playlist-driven rides.',
  },
]

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 pt-25 lg:px-8">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <div key={service.title} className="mb-25 flex items-start gap-6">
            <span className="flex h-[77px] w-[77px] shrink-0 items-center justify-center rounded-full border-[3px] border-brand">
              <service.icon className="h-8 w-8 text-brand" aria-hidden="true" />
            </span>
            <div>
              <h4 className="text-xl font-semibold text-ink">{service.title}</h4>
              <p className="mt-4 text-sm">{service.description}</p>
              <a
                href="#pricing"
                className="mt-4 inline-block text-sm font-bold uppercase tracking-wide text-brand transition-colors hover:text-ink"
              >
                Enroll Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
