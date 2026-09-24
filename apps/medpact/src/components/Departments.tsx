import { HeartPulse, Stethoscope, Brain, Bone, Eye, Baby, type LucideIcon } from 'lucide-react'
import { departmentsTitle, departments, type Department } from '../data'

const iconMap: Record<Department['icon'], LucideIcon> = {
  'heart-pulse': HeartPulse,
  stethoscope: Stethoscope,
  brain: Brain,
  bone: Bone,
  eye: Eye,
  baby: Baby,
}

export function Departments() {
  return (
    <section id="departments" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <h2 className="text-center font-heading text-3xl font-bold text-heading sm:text-4xl">
          {departmentsTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[15px] text-muted">
          Our specialized departments ensure you receive expert care for every condition.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept) => {
            const Icon = iconMap[dept.icon]
            return (
              <div
                key={dept.title}
                className="flex items-center gap-4 rounded-lg border border-card-border bg-white p-6 transition-shadow hover:shadow-lg"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <Icon aria-hidden="true" className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-heading">{dept.title}</h3>
                  <p className="mt-1 text-sm text-muted">{dept.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
