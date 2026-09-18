import {
  Users,
  Briefcase,
  Shield,
  Gavel,
  Home,
  UserCheck,
  Flame,
  DollarSign,
  Pill,
  AlertTriangle,
} from 'lucide-react'

const areas = [
  { icon: Users, title: 'Family Law' },
  { icon: Briefcase, title: 'Business Law' },
  { icon: Shield, title: 'Insurance Law' },
  { icon: Gavel, title: 'Criminal Law' },
  { icon: Home, title: 'Property Law' },
  { icon: UserCheck, title: 'Employment Law' },
  { icon: Flame, title: 'Fire Accident' },
  { icon: DollarSign, title: 'Financial Law' },
  { icon: Pill, title: 'Drug Offenses' },
  { icon: AlertTriangle, title: 'Sexual Offenses' },
] as const

export function PracticeAreas() {
  return (
    <section id="practice-areas" aria-label="Practice Areas" className="bg-[#f7f7f7] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold text-[#1d2124]">Practice Areas</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {areas.map((area) => (
            <div
              key={area.title}
              className="flex flex-col items-center rounded-md bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-500">
                <area.icon className="h-7 w-7 text-white" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-sm font-semibold text-[#1d2124]">
                {area.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
