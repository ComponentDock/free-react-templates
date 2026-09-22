import { Users, Clock, MapPin, Award } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface Stat {
  value: string
  label: string
  icon: typeof Users
}

const stats: Stat[] = [
  { value: '2146', label: 'Students', icon: Users },
  { value: '15', label: 'Years', icon: Clock },
  { value: '48', label: 'Branches', icon: MapPin },
  { value: '234', label: 'Expert Staff', icon: Award },
]

interface ChooseUsProps {
  className?: string
}

export function ChooseUs({ className }: ChooseUsProps) {
  return (
    <section id="chooseus" className={cn('bg-white py-20', className)}>
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest text-brand">Why Choose Us</p>
          <h2 className="mt-3 text-3xl font-bold text-heading">
            We Have Highly Qualified Yoga Trainers
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-text">
            Our team of internationally certified instructors brings decades of combined experience
            in Hatha, Vinyasa, and Ashtanga yoga traditions. We are committed to providing
            personalized guidance for every student.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-light-bg">
                    <Icon className="h-6 w-6 text-brand" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-heading">{stat.value}</p>
                    <p className="text-xs text-text">{stat.label}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src="https://picsum.photos/seed/yoga-choose/600/500"
            alt="Yoga instructor guiding a class"
            className="rounded-lg object-cover shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
