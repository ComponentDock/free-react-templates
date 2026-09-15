import { DollarSign, FolderOpen, Users } from 'lucide-react'

const stats = [
  { icon: DollarSign, value: '$2.5M', label: 'Total Donation' },
  { icon: FolderOpen, value: '1,465', label: 'Total Projects' },
  { icon: Users, value: '3,965', label: 'Total Volunteers' },
] as const

export function Welcome() {
  return (
    <section className="bg-bg-alt py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-medium text-text-primary md:text-3xl">
            Welcome to Warmheart
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-text-muted">
            We are dedicated to bringing hope and relief to communities affected by disasters.
            Through collective effort and generous donations, we strive to rebuild lives and create
            lasting positive change.
          </p>
        </div>

        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="border border-border bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <Icon className="mx-auto mb-3 h-8 w-8 text-brand" aria-hidden="true" />
              <h3 className="mb-1 text-2xl font-bold text-text-primary">{value}</h3>
              <p className="text-sm text-text-muted">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
