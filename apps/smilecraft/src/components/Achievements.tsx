import { Award, Clock, Users, Heart } from 'lucide-react'

const stats = [
  { value: '1500+', label: 'Happy Patients', icon: Heart },
  { value: '50+', label: 'Expert Doctors', icon: Users },
  { value: '30+', label: 'Awards', icon: Award },
  { value: '24/7', label: 'Emergency Care', icon: Clock },
] as const

export function Achievements() {
  return (
    <section
      aria-label="Clinic achievements"
      className="bg-gradient-to-r from-price-blue to-price-teal py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="mx-auto h-10 w-10 text-white/80" aria-hidden="true" />
              <p className="mt-2 text-3xl font-bold text-white">{stat.value}</p>
              <p className="mt-1 text-sm text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
