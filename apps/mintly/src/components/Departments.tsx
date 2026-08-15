import { Card } from '@free-react-templates/ui'
import { departments } from '../data'

export function Departments() {
  return (
    <section id="departments" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Our Departments
          </h2>
          <p className="mt-4 text-lg text-charcoal/70">
            Complete dental care for every member of the family, under one roof.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((department) => (
            <Card key={department.title} className="p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-mint/15 text-mint">
                <department.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-charcoal">{department.title}</h3>
              <p className="mt-2 text-sm text-charcoal/70">{department.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
