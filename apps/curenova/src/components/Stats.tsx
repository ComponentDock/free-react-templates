import { SmilePlus, Building2, UserCheck, LayoutGrid } from 'lucide-react'

const stats = [
  { icon: SmilePlus, value: '3,297', label: 'Satisfied Customer' },
  { icon: Building2, value: '378', label: 'Hospitals' },
  { icon: UserCheck, value: '400', label: 'Qualified Doctor' },
  { icon: LayoutGrid, value: '30', label: 'Departments' },
] as const

export function Stats() {
  return (
    <section className="bg-dark py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 md:grid-cols-4 lg:px-8">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="text-center text-white">
            <Icon className="mx-auto mb-3 h-10 w-10 text-blue-400" aria-hidden="true" />
            <p className="text-3xl font-bold">{value}</p>
            <p className="mt-1 text-sm text-mute-500">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
