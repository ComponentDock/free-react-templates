import { Users, Building2, FolderCheck, Trophy } from 'lucide-react'

const stats = [
  { icon: Users, value: '1,200', label: 'Happy Clients' },
  { icon: Building2, value: '45', label: 'Business Partners' },
  { icon: FolderCheck, value: '500', label: 'Done Projects' },
  { icon: Trophy, value: '15', label: 'Awards Won' },
]

export function Counter() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <Icon className="mx-auto mb-3 text-gold-400" size={36} />
              <p className="text-3xl font-bold text-gray-900">{value}</p>
              <p className="mt-1 text-sm text-gray-500">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
