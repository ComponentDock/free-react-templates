import { Users, Globe, FolderOpen, CheckCircle } from 'lucide-react'

const stats = [
  { icon: Users, value: '60', label: 'Satisfied Client' },
  { icon: Globe, value: '10', label: 'Worldwide Branches' },
  { icon: FolderOpen, value: '80', label: 'Total Projects' },
  { icon: CheckCircle, value: '24', label: 'Work Finished' },
] as const

export function Stats() {
  return (
    <section className="bg-heading py-16 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="text-center">
            <Icon className="mx-auto h-10 w-10 text-brand" aria-hidden="true" />
            <p className="mt-3 text-3xl font-bold">{value}</p>
            <p className="mt-1 text-sm text-gray-300">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
