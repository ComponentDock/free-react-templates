import { Ambulance, Hospital, Syringe, UserRound } from 'lucide-react'
import { departments, departmentsHeading, type Department } from '../data'

const icons: Record<Department['icon'], typeof Hospital> = {
  hospital: Hospital,
  syringe: Syringe,
  ambulance: Ambulance,
  user: UserRound,
}

export function Departments() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl font-bold text-heading sm:text-5xl">
            {departmentsHeading}
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {departments.map((department) => {
            const Icon = icons[department.icon]
            return (
              <article
                key={department.icon}
                className="border border-card-border px-4 pb-8 pt-14 text-center transition-colors hover:border-brand"
              >
                <span className="mx-auto flex h-[50px] w-[50px] items-center justify-center rounded-full bg-icon-circle-2 text-heading">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </span>
                <h4 className="mt-6 text-[22px] font-medium leading-[17px] text-heading">
                  {department.title}
                </h4>
                <p className="mt-5 text-sm leading-6 text-muted">{department.blurb}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
